"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { prefetchCms } from "@/lib/cms-client";

const CHROMELESS = ["/admin", "/studio"];
const WARM_COLLECTIONS = ["posts", "services", "routes", "contact", "team", "media", "slideshow"];

function isChromeless(pathname: string) {
  return CHROMELESS.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setActive(false);
    setProgress(0);
  }, [pathname]);

  useEffect(() => {
    // Disable on home page to prevent blocking
    if (pathname === '/') return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      try {
        const url = new URL(anchor.href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (`${url.pathname}${url.search}` === `${window.location.pathname}${window.location.search}`) return;

        setActive(true);
        setProgress(0);

        // Simulate progress
        const progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) return prev;
            return prev + Math.random() * 15;
          });
        }, 100);

        // Complete after a short time
        setTimeout(() => {
          clearInterval(progressInterval);
          setProgress(100);
          setTimeout(() => setActive(false), 200);
        }, 600);
      } catch {
        /* ignore invalid href */
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  if (!active || pathname === '/') return null;

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[70] h-1 overflow-hidden bg-primary-teal/15">
      <div 
        className="h-full bg-primary-teal transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function SiteFrame({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = isChromeless(pathname);

  useEffect(() => {
    // Disable prefetch on home page to prevent blocking
    if (hideChrome || pathname === '/') return;
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 400));
    const cancel = window.cancelIdleCallback ?? ((id: number) => window.clearTimeout(id));
    const id = idle(() => prefetchCms(WARM_COLLECTIONS));
    return () => cancel(id as number);
  }, [hideChrome, pathname]);

  if (hideChrome) {
    return (
      <>
        <NavigationProgress />
        {children}
      </>
    );
  }

  return (
    <div className="min-h-full flex flex-col">
      <NavigationProgress />
      {header}
      <div className="flex-1 flex flex-col">{children}</div>
      {footer}
    </div>
  );
}
