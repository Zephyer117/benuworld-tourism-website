import {
  getContact,
  getInquiries,
  getMedia,
  getPosts,
  getServices,
  getSettings,
  getSlides,
  getTeam,
  getInboundRoutes,
  saveContact,
  saveInquiries,
  saveMedia,
  savePosts,
  saveServices,
  saveSettings,
  saveSlides,
  saveTeam,
  saveInboundRoutes,
} from "@/lib/data";
import { notifyLive } from "@/lib/live-bus";

export const COLLECTIONS = [
  "posts",
  "team",
  "slideshow",
  "media",
  "contact",
  "inquiries",
  "settings",
  "services",
  "routes",
] as const;

export type Collection = (typeof COLLECTIONS)[number];

export function isCollection(value: string): value is Collection {
  return (COLLECTIONS as readonly string[]).includes(value);
}

export async function readCollection(collection: Collection) {
  switch (collection) {
    case "posts":
      return getPosts();
    case "team":
      return getTeam();
    case "slideshow":
      return getSlides();
    case "media":
      return getMedia();
    case "contact":
      return getContact();
    case "inquiries":
      return getInquiries();
    case "settings":
      return getSettings();
    case "services":
      return getServices();
    case "routes":
      return getInboundRoutes();
  }
}

export async function writeCollection(collection: Collection, data: unknown) {
  switch (collection) {
    case "posts":
      await savePosts(data as Awaited<ReturnType<typeof getPosts>>);
      break;
    case "team":
      await saveTeam(data as Awaited<ReturnType<typeof getTeam>>);
      break;
    case "slideshow":
      await saveSlides(data as Awaited<ReturnType<typeof getSlides>>);
      break;
    case "media":
      await saveMedia(data as Awaited<ReturnType<typeof getMedia>>);
      break;
    case "contact":
      await saveContact(data as Awaited<ReturnType<typeof getContact>>);
      break;
    case "inquiries":
      await saveInquiries(data as Awaited<ReturnType<typeof getInquiries>>);
      break;
    case "settings":
      await saveSettings(data as Awaited<ReturnType<typeof getSettings>>);
      break;
    case "services":
      await saveServices(data as Awaited<ReturnType<typeof getServices>>);
      break;
    case "routes":
      await saveInboundRoutes(data as Awaited<ReturnType<typeof getInboundRoutes>>);
      break;
  }
  notifyLive(collection);
}
