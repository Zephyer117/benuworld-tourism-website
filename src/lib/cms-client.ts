"use client";

import { useCallback, useEffect, useState } from "react";

const cache = new Map<string, unknown>();
const inflight = new Map<string, Promise<unknown>>();
const cacheListeners = new Set<(collection: string) => void>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const cacheTimestamps = new Map<string, number>();

function notifyCache(collection: string) {
  cacheListeners.forEach((listener) => listener(collection));
}

function writeCache<T>(collection: string, data: T) {
  cache.set(collection, data);
  cacheTimestamps.set(collection, Date.now());
  notifyCache(collection);
}

export function peekCmsCache<T>(collection: string): T | undefined {
  const timestamp = cacheTimestamps.get(collection);
  if (timestamp && Date.now() - timestamp > CACHE_TTL) {
    cache.delete(collection);
    cacheTimestamps.delete(collection);
    return undefined;
  }
  return cache.get(collection) as T | undefined;
}

export async function cmsGet<T>(collection: string, options?: { force?: boolean }): Promise<T> {
  const cached = peekCmsCache<T>(collection);
  if (!options?.force && cached !== undefined) {
    return cached;
  }

  const pending = inflight.get(collection);
  if (pending) return pending as Promise<T>;

  const request = fetch(`/api/cms/${collection}`, { cache: "no-store" })
    .then(async (res) => {
      if (!res.ok) throw new Error(`Failed to load ${collection}`);
      const data = (await res.json()) as T;
      writeCache(collection, data);
      return data;
    })
    .finally(() => {
      inflight.delete(collection);
    });

  inflight.set(collection, request);
  return request;
}

export function prefetchCms(collections: string[]) {
  collections.forEach((collection) => {
    void cmsGet(collection).catch(() => undefined);
  });
}

export async function cmsPut<T>(collection: string, data: T): Promise<T> {
  const res = await fetch(`/api/cms/${collection}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Failed to save ${collection}`);
  const next = (await res.json()) as T;
  // Invalidate cache to force fresh fetch
  cache.delete(collection);
  cacheTimestamps.delete(collection);
  writeCache(collection, next);
  // Notify all listeners that this collection was updated
  notifyCache(collection);
  return next;
}

export async function cmsPost<T>(collection: string, item: T): Promise<T & { emailed?: boolean; emailError?: string; inbox?: string }> {
  const res = await fetch(`/api/cms/${collection}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error(`Failed to add to ${collection}`);
  const body = (await res.json()) as T & { emailed?: boolean; emailError?: string; inbox?: string };
  const { emailed: _e, emailError: _err, inbox: _box, ...created } = body as T & {
    emailed?: boolean;
    emailError?: string;
    inbox?: string;
  };
  const current = cache.get(collection);
  if (Array.isArray(current)) {
    writeCache(collection, [created, ...current]);
  } else {
    cache.delete(collection);
  }
  return body;
}

type LiveHandler = (collection: string) => void;

const liveHandlers = new Set<LiveHandler>();
let liveSource: EventSource | null = null;

function ensureLiveStream() {
  if (typeof window === "undefined" || liveSource) return;
  liveSource = new EventSource("/api/live");
  liveSource.onmessage = (event) => {
    try {
      const payload = JSON.parse(event.data) as { collection?: string };
      const collection = payload.collection || "";
      liveHandlers.forEach((handler) => handler(collection));
    } catch {
      /* ignore */
    }
  };
}

export function subscribeCmsLive(handler: LiveHandler) {
  ensureLiveStream();
  liveHandlers.add(handler);
  return () => {
    liveHandlers.delete(handler);
    if (liveHandlers.size === 0 && liveSource) {
      liveSource.close();
      liveSource = null;
    }
  };
}

export function useLiveCms<T>(collection: string, fallback: T, alsoWatch: string[] = []) {
  const [data, setData] = useState<T>(() => peekCmsCache<T>(collection) ?? fallback);
  const [loading, setLoading] = useState(() => !cache.has(collection));

  const reload = useCallback(
    async (force = true) => {
      try {
        const next = await cmsGet<T>(collection, { force });
        setData(next);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [collection],
  );

  useEffect(() => {
    const cached = peekCmsCache<T>(collection);
    if (cached !== undefined) {
      setData(cached);
      setLoading(false);
      void reload(true);
    } else {
      setLoading(true);
      void reload(false);
    }

    const onCache = (updated: string) => {
      if (updated !== collection) return;
      const next = peekCmsCache<T>(collection);
      if (next !== undefined) {
        setData(next);
        setLoading(false);
      }
    };
    cacheListeners.add(onCache);

    // Re-enable live updates with debounce to prevent navigation blocking
    const watched = new Set([collection, ...alsoWatch]);
    let reloadTimeout: NodeJS.Timeout | null = null;
    const unsubscribeLive = subscribeCmsLive((updated) => {
      if (updated === "hello" || watched.has(updated)) {
        // Debounce reload to prevent rapid successive updates
        if (reloadTimeout) clearTimeout(reloadTimeout);
        reloadTimeout = setTimeout(() => void reload(true), 50);
      }
    });

    return () => {
      cacheListeners.delete(onCache);
      unsubscribeLive();
      if (reloadTimeout) clearTimeout(reloadTimeout);
    };
  }, [collection, reload, alsoWatch.join("|")]);

  const save = useCallback(
    async (next: T) => {
      setData(next);
      await cmsPut(collection, next);
      // Force reload to ensure fresh data from server
      void reload(true);
    },
    [collection, reload],
  );

  return { data, setData, loading, reload: () => reload(true), save };
}
