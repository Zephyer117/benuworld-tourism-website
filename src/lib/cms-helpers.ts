import type { ContactInfo, InboundRoute, MediaItem, Post, ServiceMedia } from "@/lib/types";
import { DEFAULT_INBOUND_ROUTES, DEFAULT_SERVICES } from "@/lib/types";
import { siteContact } from "@/lib/site-content";

export function isPublished(post: Post) {
  return post.status === "published";
}

export function publishedPosts(posts: Post[], section?: string) {
  const wanted = normalizeSection(section);
  return posts.filter((post) => {
    if (!isPublished(post)) return false;
    if (!wanted) return true;
    return normalizeSection(post.section) === wanted;
  });
}

export function normalizeSection(value?: string) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function slugify(value?: string) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function routeSlug(route: Pick<InboundRoute, "slug" | "name">) {
  return slugify(route.slug) || slugify(route.name);
}

export function servicePathFromSection(section?: string) {
  return normalizeSection(section) || "inbound-tourism";
}

export function routeHref(route: InboundRoute) {
  return `/services/${servicePathFromSection(route.section)}/${routeSlug(route)}`;
}

export function findRouteByPath(routes: InboundRoute[] | undefined, service: string, slug: string) {
  const source = routes?.length ? routes : DEFAULT_INBOUND_ROUTES;
  const wantedService = normalizeSection(service);
  const wantedSlug = slugify(slug);
  return (
    source.find(
      (route) =>
        servicePathFromSection(route.section) === wantedService && routeSlug(route) === wantedSlug,
    ) || null
  );
}

export function findRouteForMedia(
  item: Pick<MediaItem, "routeId" | "url" | "name" | "caption" | "alt" | "section">,
  routes: InboundRoute[] | undefined,
) {
  const source = routes?.length ? routes : DEFAULT_INBOUND_ROUTES;
  if (item.routeId) {
    const byId = source.find((route) => route.id === item.routeId);
    if (byId) return byId;
  }
  if (item.url) {
    const byImage = source.find((route) => route.image && (route.image === item.url || item.url.includes(route.image) || route.image.includes(item.url)));
    if (byImage) return byImage;
  }
  const haystack = `${item.name || ""} ${item.caption || ""} ${item.alt || ""} ${item.url || ""}`.toLowerCase();
  const ranked = source
    .map((route) => {
      const slug = routeSlug(route);
      const name = route.name.toLowerCase();
      const compact = name.replace(/['’]/g, "");
      let score = 0;
      if (haystack.includes(slug) || haystack.includes(slug.replace(/-/g, " "))) score += 4;
      if (haystack.includes(name) || haystack.includes(compact)) score += 3;
      if (item.section && normalizeSection(item.section) === normalizeSection(route.section)) score += 1;
      return { route, score };
    })
    .filter((row) => row.score >= 3)
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.route || null;
}

export function mediaHref(
  item: Pick<MediaItem, "routeId" | "url" | "name" | "caption" | "alt" | "section">,
  routes: InboundRoute[] | undefined,
) {
  const route = findRouteForMedia(item, routes);
  if (route) return routeHref(route);
  if (item.section) return `/services/${servicePathFromSection(item.section)}`;
  return "";
}

export function postHref(post: { id?: string; slug?: string }) {
  return `/news/${post.slug || post.id || ""}`;
}

export function postDate(post: Post) {
  return post.date || post.publishedAt || post.createdAt || "";
}

export function mergeServices(saved?: ServiceMedia[] | null): ServiceMedia[] {
  const byId = new Map((saved || []).map((item) => [item.id, item]));
  return DEFAULT_SERVICES.map((fallback) => ({
    ...fallback,
    ...byId.get(fallback.id),
    id: fallback.id,
    title: fallback.title,
    section: fallback.section,
    gallery: byId.get(fallback.id)?.gallery || fallback.gallery || [],
  }));
}

export function serviceById(services: ServiceMedia[] | undefined, id: string) {
  return mergeServices(services).find((item) => item.id === id) || DEFAULT_SERVICES.find((item) => item.id === id)!;
}

export function routesForSection(routes: InboundRoute[] | undefined, section: string) {
  const source = routes?.length ? routes : DEFAULT_INBOUND_ROUTES;
  const wanted = normalizeSection(section);
  return source
    .filter((route) => route.active !== false)
    .filter((route) => normalizeSection(route.section || "Inbound Tourism") === wanted)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function phoneHref(phone?: string) {
  const value = phone || siteContact.phone;
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(contact?: ContactInfo | null) {
  if (contact?.whatsapp?.startsWith("http")) return contact.whatsapp;
  const digits = (contact?.whatsapp || contact?.phone || siteContact.phone).replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export function contactHoursLabel(contact?: ContactInfo | null) {
  const firstOpen = contact?.businessHours?.find((row) => !row.closed);
  if (!firstOpen) return siteContact.hours;
  const range = firstOpen.hours || `${firstOpen.open || ""} – ${firstOpen.close || ""}`.trim();
  return `${firstOpen.day} · ${range}`;
}
