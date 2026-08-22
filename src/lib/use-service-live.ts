"use client";

import { useLiveCms } from "@/lib/cms-client";
import { mediaHref, postDate, publishedPosts, routeHref, routesForSection, serviceById } from "@/lib/cms-helpers";
import { siteContact } from "@/lib/site-content";
import { DEFAULT_INBOUND_ROUTES, type ContactInfo, type InboundRoute, type MediaItem, type Post, type ServiceMedia } from "@/lib/types";

export function useServiceLive(serviceId: string, section: string) {
  const { data: posts } = useLiveCms<Post[]>("posts", []);
  const { data: services } = useLiveCms<ServiceMedia[]>("services", []);
  const { data: routes } = useLiveCms<InboundRoute[]>("routes", DEFAULT_INBOUND_ROUTES);
  const { data: mediaItems } = useLiveCms<MediaItem[]>("media", []);
  const { data: contact } = useLiveCms<ContactInfo>("contact", {
    address: siteContact.address,
    phone: siteContact.phone,
    email: siteContact.email,
    businessHours: [],
  });
  const media = serviceById(services, serviceId);
  const gallery = media.gallery || [];
  const livePosts = publishedPosts(posts, section).map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image || post.coverImage,
    video: post.video,
    date: postDate(post),
  }));

  const galleryHrefs: Record<string, string> = {};
  for (const url of [...gallery, media.heroImage || ""].filter(Boolean)) {
    const item = mediaItems.find((entry) => entry.url === url) || { url, name: "", section };
    galleryHrefs[url] = mediaHref(item, routes);
  }

  return {
    heroImage: media.heroImage || "",
    heroVideo: media.heroVideo || "",
    gallery,
    galleryHrefs,
    contactNumber: contact.phone || siteContact.phone,
    posts: livePosts,
    highlights: routesForSection(routes, section).map((route) => ({
      ...route,
      href: routeHref(route),
    })),
  };
}
