import { client, readClient, writeClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  POSTS_QUERY,
  TEAM_MEMBERS_QUERY,
  SLIDES_QUERY,
  CONTACT_INFO_QUERY,
} from "@/sanity/lib/queries";
import type {
  ActivityLog,
  ContactInfo,
  Lead,
  Post,
  SiteSettings,
  Slide,
  TeamMember,
  Testimonial,
  MediaItem,
  Inquiry,
  ServiceMedia,
  InboundRoute,
} from "./types";
import { DEFAULT_INBOUND_ROUTES, DEFAULT_SERVICES } from "./types";
import { generateId } from "./utils";

// Sanity-backed functions
function resolveCmsImage(source: {
  imageUrl?: string;
  imageSrc?: string;
  image?: unknown;
}): string {
  if (typeof source.imageUrl === "string" && source.imageUrl) return source.imageUrl;
  if (typeof source.imageSrc === "string" && source.imageSrc) return source.imageSrc;
  if (typeof source.image === "string" && source.image) return source.image;
  if (source.image && typeof source.image === "object" && "asset" in (source.image as object)) {
    try {
      return urlFor(source.image as Parameters<typeof urlFor>[0]).width(1600).fit("crop").url() || "";
    } catch {
      return "";
    }
  }
  return "";
}

function blocksToText(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((block) => {
      if (!block || typeof block !== "object") return "";
      const item = block as { _type?: string; children?: { text?: string }[] };
      if (item._type !== "block") return "";
      return (item.children || []).map((child) => child.text || "").join("");
    })
    .filter(Boolean)
    .join("\n\n");
}

function textToBlocks(text: string) {
  const paragraphs = text.split(/\n+/).map((part) => part.trim()).filter(Boolean);
  if (!paragraphs.length) return [];
  return paragraphs.map((paragraph, index) => ({
    _type: "block",
    _key: `block${index}`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `span${index}`,
        text: paragraph,
        marks: [],
      },
    ],
  }));
}

function toPortableText(content: unknown) {
  if (!content) return [];
  if (Array.isArray(content)) return content;
  if (typeof content === "string") {
    const trimmed = content.trim();
    if (!trimmed) return [];
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      /* plain text from the admin editor */
    }
    return textToBlocks(trimmed);
  }
  return [];
}

async function syncSanityDocuments(type: string, docs: Array<Record<string, unknown> & { _id: string; _type: string }>) {
  try {
    const existingIds: string[] = await readClient.fetch(
      `*[_type == $type && !(_id in path("drafts.**"))]._id`,
      { type },
    );
    const keepIds = new Set(docs.map((doc) => String(doc._id)));
    
    // Batch delete operations FIRST (to avoid conflicts)
    const idsToDelete = existingIds.filter(id => !keepIds.has(id));
    if (idsToDelete.length > 0) {
      const deleteTransaction = writeClient.transaction();
      for (const id of idsToDelete) {
        deleteTransaction.delete(id);
      }
      await deleteTransaction.commit();
    }
    
    // Batch create/replace operations using transactions
    const transaction = writeClient.transaction();
    for (const doc of docs) {
      transaction.createOrReplace(doc);
    }
    await transaction.commit();
  } catch (error) {
    console.error(`Error syncing ${type} documents to Sanity:`, error);
    throw error;
  }
}

export async function getPosts(): Promise<Post[]> {
  const sanityPosts = await readClient.fetch(POSTS_QUERY);
  return sanityPosts.map((sp: any) => {
    const image = resolveCmsImage(sp);
    const content = sp.body || blocksToText(sp.content) || "";
    return {
      id: sp._id,
      title: sp.title,
      slug: sp.slug?.current || "",
      excerpt: sp.excerpt || "",
      content,
      section: sp.section,
      status: sp.status || "draft",
      image,
      coverImage: image,
      video: sp.video || "",
      gallery: Array.isArray(sp.gallery) ? sp.gallery.filter(Boolean) : [],
      author: sp.author || "",
      views: sp.views || 0,
      publishedAt: sp.publishedAt,
      date: sp.publishedAt?.slice(0, 10) || sp._createdAt?.slice(0, 10) || "",
      createdAt: sp._createdAt,
      updatedAt: sp._updatedAt,
    };
  });
}

export async function savePosts(posts: Post[]): Promise<Post[]> {
  const docs: Array<Record<string, unknown> & { _id: string; _type: string }> = [];
  for (const post of posts) {
    const existing = await readClient.getDocument(post.id).catch(() => null);
    const imageUrl = post.image || post.coverImage || "";
    const body = typeof post.content === "string" ? post.content : "";
    const doc: Record<string, unknown> & { _id: string; _type: string } = {
      _type: "post",
      _id: post.id,
      title: post.title,
      slug: { _type: "slug", current: post.slug || post.title.toLowerCase().replace(/\s+/g, "-") },
      excerpt: post.excerpt || "",
      content: toPortableText(post.content),
      body,
      section: post.section,
      status: post.status || "draft",
      imageUrl,
      video: post.video || "",
      gallery: (post.gallery || []).filter(Boolean),
      author: post.author || "",
      views: post.views || 0,
      publishedAt: post.publishedAt || post.date || new Date().toISOString(),
    };
    if (existing?.image) doc.image = existing.image;
    docs.push(doc);
  }
  await syncSanityDocuments("post", docs);
  return posts;
}

export async function getTeam(): Promise<TeamMember[]> {
  const sanityTeam = await readClient.fetch(TEAM_MEMBERS_QUERY);
  return sanityTeam.map((st: any) => {
    const image = resolveCmsImage(st);
    return {
      id: st._id,
      name: st.name,
      role: st.role,
      title: st.role,
      email: st.email,
      bio: st.bio || "",
      photo: image,
      image,
      featured: st.featured || false,
      order: st.order || 0,
    };
  });
}

export async function saveTeam(team: TeamMember[]): Promise<TeamMember[]> {
  const normalized = team.map((member, index) => {
    const image = member.image || member.photo || "";
    return {
      ...member,
      image,
      photo: image,
      role: member.role || member.title || "",
      order: member.order || index + 1,
    };
  });
  const docs: Array<Record<string, unknown> & { _id: string; _type: string }> = [];
  for (const member of normalized) {
    const existing = await readClient.getDocument(member.id).catch(() => null);
    const doc: Record<string, unknown> & { _id: string; _type: string } = {
      _type: "teamMember",
      _id: member.id,
      name: member.name,
      role: member.role || member.title || "",
      email: member.email || "",
      phone: "",
      bio: member.bio || "",
      imageUrl: member.image || member.photo || "",
      featured: member.featured || false,
      status: "active",
      order: member.order,
    };
    if (existing?.image) doc.image = existing.image;
    docs.push(doc);
  }
  await syncSanityDocuments("teamMember", docs);
  return normalized;
}

function resolveSlideImage(ss: {
  imageUrl?: string;
  imageSrc?: string;
  image?: unknown;
}): string {
  if (ss.imageUrl) return ss.imageUrl;
  if (ss.imageSrc) return ss.imageSrc;
  if (ss.image && typeof ss.image === "object" && "asset" in (ss.image as object)) {
    try {
      return urlFor(ss.image as Parameters<typeof urlFor>[0]).width(1920).fit("crop").url() || "";
    } catch {
      return "";
    }
  }
  return "";
}

export async function getSlides(): Promise<Slide[]> {
  const sanitySlides = await readClient.fetch(SLIDES_QUERY);
  return sanitySlides.map((ss: any) => {
    const image = resolveSlideImage(ss);
    return {
      id: ss._id,
      image,
      imageUrl: image,
      video: ss.video || "",
      title: ss.title,
      subtitle: ss.subtitle,
      ctaText: ss.ctaText,
      ctaLink: ss.ctaLink,
      active: ss.active !== false,
      order: ss.order || 0,
    };
  });
}

export async function saveSlides(slides: Slide[]): Promise<Slide[]> {
  try {
    const existingIds: string[] = await readClient.fetch(`*[_type == "slide" && !(_id in path("drafts.**"))]._id`);
    const keepIds = new Set(slides.map((slide) => slide.id));

    // Batch create/replace operations
    const transaction = writeClient.transaction();
    for (const slide of slides) {
      const existing = await readClient.getDocument(slide.id).catch(() => null);
      const imageUrl = slide.image || slide.imageUrl || "";
      const sanityDoc: Record<string, unknown> & { _id: string; _type: string } = {
        _type: "slide",
        _id: slide.id,
        title: slide.title,
        subtitle: slide.subtitle,
        description: "",
        imageUrl,
        video: slide.video || "",
        ctaText: slide.ctaText,
        ctaLink: slide.ctaLink,
        active: slide.active !== false,
        order: slide.order,
      };
      if (existing?.image) {
        sanityDoc.image = existing.image;
      }
      transaction.createOrReplace(sanityDoc);
    }
    await transaction.commit();

    // Batch delete operations using transaction
    const idsToDelete = existingIds.filter(id => !keepIds.has(id));
    if (idsToDelete.length > 0) {
      const deleteTransaction = writeClient.transaction();
      for (const id of idsToDelete) {
        deleteTransaction.delete(id);
      }
      await deleteTransaction.commit();
    }

    return slides;
  } catch (error) {
    console.error("Failed to save slides to Sanity:", error);
    throw error;
  }
}

export async function getContact(): Promise<ContactInfo> {
  const sanityContact = await readClient.fetch(CONTACT_INFO_QUERY);
  const contactMap = new Map(sanityContact.map((c: any) => [c.type, c.value] as [string, string]));
  
  return {
    address: (contactMap.get('address') as string) || 'Jurain, Dhaka, Bangladesh',
    phone: (contactMap.get('phone') as string) || '+880 1234-567890',
    email: (contactMap.get('email') as string) || 'info@benuworld.com',
    qq: (contactMap.get('qq') as string) || '',
    wechat: (contactMap.get('wechat') as string) || '',
    skype: (contactMap.get('skype') as string) || '',
    whatsapp: (contactMap.get('whatsapp') as string) || '',
    facebook: (contactMap.get('facebook') as string) || '',
    businessHours: [
      { day: "Mon – Fri", open: "9:00 AM", close: "6:00 PM" },
      { day: "Saturday", open: "10:00 AM", close: "4:00 PM" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0!2d90.426!3d23.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzM2LjAiTiA5MMKwMjUnMzMuNiJF!5e0!3m2!1sen!2sbd!4v1",
    mapLat: 23.71,
    mapLng: 90.426,
  };
}

export async function saveContact(contact: ContactInfo): Promise<ContactInfo> {
  try {
    // Convert contact info to Sanity contactInfo documents
    const contactTypes = [
      { type: 'phone', value: contact.phone, label: 'Phone' },
      { type: 'email', value: contact.email, label: 'Email' },
      { type: 'wechat', value: contact.wechat, label: 'WeChat' },
      { type: 'qq', value: contact.qq, label: 'QQ' },
      { type: 'whatsapp', value: contact.whatsapp, label: 'WhatsApp' },
      { type: 'address', value: contact.address, label: 'Address' },
    ];

    // Batch create/replace operations
    const transaction = writeClient.transaction();
    for (const ct of contactTypes) {
      const sanityDoc: Record<string, unknown> & { _id: string; _type: string } = {
        _type: 'contactInfo',
        _id: `contact-${ct.type}`,
        type: ct.type,
        label: ct.label,
        value: ct.value,
        active: true,
        order: 0,
      };
      transaction.createOrReplace(sanityDoc);
    }
    await transaction.commit();
    return contact;
  } catch (error) {
    console.error('Failed to save contact to Sanity:', error);
    throw error;
  }
}

// Sanity-only functions for other collections
export async function getLeads(): Promise<Lead[]> {
  const leads = await readClient.fetch(`*[_type == "lead" && !(_id in path("drafts.**"))] | order(_createdAt desc)`);
  return leads.map((lead: any) => ({
    id: lead._id,
    name: lead.name || "",
    email: lead.email || "",
    phone: lead.phone || "",
    company: lead.company || "",
    message: lead.message || "",
    status: lead.status || "new",
    createdAt: lead._createdAt,
    updatedAt: lead._updatedAt,
  }));
}

export async function saveLeads(leads: Lead[]): Promise<Lead[]> {
  try {
    const existingIds: string[] = await readClient.fetch(`*[_type == "lead" && !(_id in path("drafts.**"))]._id`);
    const keepIds = new Set(leads.map((lead) => lead.id));

    // Batch create/replace operations
    const transaction = writeClient.transaction();
    for (const lead of leads) {
      const doc: Record<string, unknown> & { _id: string; _type: string } = {
        _type: "lead",
        _id: lead.id,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        message: lead.message,
        status: lead.status || "new",
      };
      transaction.createOrReplace(doc);
    }
    await transaction.commit();

    // Batch delete operations using transaction
    const idsToDelete = existingIds.filter(id => !keepIds.has(id));
    if (idsToDelete.length > 0) {
      const deleteTransaction = writeClient.transaction();
      for (const id of idsToDelete) {
        deleteTransaction.delete(id);
      }
      await deleteTransaction.commit();
    }

    return leads;
  } catch (error) {
    console.error("Failed to save leads to Sanity:", error);
    throw error;
  }
}

export async function getSettings(): Promise<SiteSettings> {
  const settings = await readClient.fetch(`*[_type == "siteSettings"][0]`);
  if (settings) {
    return {
      siteTitle: settings.siteTitle || "BenuWorld",
      tagline: settings.tagline || "Your Trusted Partner for Global Opportunities",
      footerText: settings.footerText || "© 2026 BenuWorld. All rights reserved.",
      primaryColor: settings.primaryColor || "#0F766E",
      languages: settings.languages || ["en", "bn", "zh"],
      defaultLanguage: settings.defaultLanguage || "en",
      inquiryEmail: settings.inquiryEmail || "info@benuworld.com",
      notificationEmail: settings.notificationEmail || "admin@benuworld.com",
    };
  }
  return {
    siteTitle: "BenuWorld",
    tagline: "Your Trusted Partner for Global Opportunities",
    footerText: "© 2026 BenuWorld. All rights reserved.",
    primaryColor: "#0F766E",
    languages: ["en", "bn", "zh"],
    defaultLanguage: "en",
    inquiryEmail: "info@benuworld.com",
    notificationEmail: "admin@benuworld.com",
  };
}

export async function saveSettings(settings: SiteSettings): Promise<SiteSettings> {
  const doc: Record<string, unknown> & { _id: string; _type: string } = {
    _type: "siteSettings",
    _id: "siteSettings",
    siteTitle: settings.siteTitle,
    tagline: settings.tagline,
    footerText: settings.footerText,
    primaryColor: settings.primaryColor,
    languages: settings.languages,
    defaultLanguage: settings.defaultLanguage,
    inquiryEmail: settings.inquiryEmail,
    notificationEmail: settings.notificationEmail,
  };
  await writeClient.createOrReplace(doc);
  return settings;
}

export async function getActivity(): Promise<ActivityLog[]> {
  const activity = await readClient.fetch(`*[_type == "activityLog" && !(_id in path("drafts.**"))] | order(_createdAt desc)`);
  return activity.map((log: any) => ({
    id: log._id,
    action: log.action,
    entity: log.entity,
    entityId: log.entityId,
    createdAt: log._createdAt,
  }));
}

export async function logActivity(
  action: string,
  entity: string,
  entityId?: string,
): Promise<void> {
  const doc: Record<string, unknown> & { _id: string; _type: string } = {
    _type: "activityLog",
    _id: `activity-${Date.now()}`,
    action,
    entity,
    entityId,
  };
  await writeClient.create(doc);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonials = await readClient.fetch(`*[_type == "testimonial" && !(_id in path("drafts.**"))]`);
  return testimonials.map((t: any) => ({
    id: t._id,
    name: t.name,
    role: t.role,
    company: t.company,
    content: t.content,
    rating: t.rating || 5,
    featured: t.featured || false,
    image: resolveCmsImage(t),
  }));
}

export async function getMedia(): Promise<MediaItem[]> {
  const media = await readClient.fetch(`*[_type == "mediaItem" && !(_id in path("drafts.**"))]`);
  return media.map((m: any) => ({
    id: m._id,
    name: m.name,
    url: m.url,
    type: m.type,
    size: m.size,
    alt: m.alt,
    caption: m.caption,
    section: m.section,
    routeId: m.routeId,
    featured: m.featured || false,
    embedUrl: m.embedUrl,
    sanityAssetId: m.sanityAssetId,
    sanityAssetRef: m.sanityAssetRef,
    uploadedAt: m.uploadedAt || m._createdAt,
    createdAt: m._createdAt,
  }));
}

export async function saveMedia(items: MediaItem[]): Promise<MediaItem[]> {
  try {
    const existingIds: string[] = await readClient.fetch(`*[_type == "mediaItem" && !(_id in path("drafts.**"))]._id`);
    const keepIds = new Set(items.map((item) => item.id));

    // Batch create/replace operations
    const transaction = writeClient.transaction();
    for (const item of items) {
      const doc: Record<string, unknown> & { _id: string; _type: string } = {
        _type: "mediaItem",
        _id: item.id,
        name: item.name,
        url: item.url,
        type: item.type,
        size: item.size,
        alt: item.alt,
        caption: item.caption,
        section: item.section,
        routeId: item.routeId,
        featured: item.featured || false,
        embedUrl: item.embedUrl,
        sanityAssetId: item.sanityAssetId,
        sanityAssetRef: item.sanityAssetRef,
        uploadedAt: item.uploadedAt,
      };
      transaction.createOrReplace(doc);
    }
    await transaction.commit();

    // Batch delete operations using transaction
    const idsToDelete = existingIds.filter(id => !keepIds.has(id));
    if (idsToDelete.length > 0) {
      const deleteTransaction = writeClient.transaction();
      for (const id of idsToDelete) {
        deleteTransaction.delete(id);
      }
      await deleteTransaction.commit();
    }

    return items;
  } catch (error) {
    console.error("Failed to save media to Sanity:", error);
    throw error;
  }
}

export async function getInquiries(): Promise<Inquiry[]> {
  const inquiries = await readClient.fetch(`*[_type == "inquiry" && !(_id in path("drafts.**"))] | order(_createdAt desc)`);
  return inquiries.map((inq: any) => ({
    id: inq._id,
    name: inq.name,
    email: inq.email,
    phone: inq.phone,
    company: inq.company,
    topic: inq.topic,
    message: inq.message,
    status: inq.status || "new",
    createdAt: inq._createdAt,
    updatedAt: inq._updatedAt,
  }));
}

export async function saveInquiries(items: Inquiry[]): Promise<Inquiry[]> {
  try {
    const existingIds: string[] = await readClient.fetch(`*[_type == "inquiry" && !(_id in path("drafts.**"))]._id`);
    const keepIds = new Set(items.map((item) => item.id));

    // Batch create/replace operations
    const transaction = writeClient.transaction();
    for (const item of items) {
      const doc: Record<string, unknown> & { _id: string; _type: string } = {
        _type: "inquiry",
        _id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        company: item.company,
        topic: item.topic,
        message: item.message,
        status: item.status || "new",
      };
      transaction.createOrReplace(doc);
    }
    await transaction.commit();

    // Batch delete operations using transaction
    const idsToDelete = existingIds.filter(id => !keepIds.has(id));
    if (idsToDelete.length > 0) {
      const deleteTransaction = writeClient.transaction();
      for (const id of idsToDelete) {
        deleteTransaction.delete(id);
      }
      await deleteTransaction.commit();
    }

    return items;
  } catch (error) {
    console.error("Failed to save inquiries to Sanity:", error);
    throw error;
  }
}

export async function getServices(): Promise<ServiceMedia[]> {
  const services = await readClient.fetch(`*[_type == "service" && !(_id in path("drafts.**"))] | order(order asc)`);
  if (services.length > 0) {
    return services.map((s: any) => ({
      id: s._id,
      title: s.title,
      description: s.description,
      section: s.section,
      image: resolveCmsImage(s),
      gallery: Array.isArray(s.gallery) ? s.gallery.map(resolveCmsImage).filter(Boolean) : [],
      order: s.order || 0,
    }));
  }
  return DEFAULT_SERVICES;
}

export async function saveServices(items: ServiceMedia[]): Promise<ServiceMedia[]> {
  try {
    const existingIds: string[] = await readClient.fetch(`*[_type == "service" && !(_id in path("drafts.**"))]._id`);
    const keepIds = new Set(items.map((item) => item.id));

    // Batch create/replace operations
    const transaction = writeClient.transaction();
    for (const item of items) {
      const existing = await readClient.getDocument(item.id).catch(() => null);
      const doc: Record<string, unknown> & { _id: string; _type: string } = {
        _type: "service",
        _id: item.id,
        title: item.title,
        description: item.description,
        section: item.section,
        imageUrl: item.image,
        gallery: item.gallery || [],
        order: item.order || 0,
      };
      if (existing?.image) doc.image = existing.image;
      transaction.createOrReplace(doc);
    }
    await transaction.commit();

    // Batch delete operations using transaction
    const idsToDelete = existingIds.filter(id => !keepIds.has(id));
    if (idsToDelete.length > 0) {
      const deleteTransaction = writeClient.transaction();
      for (const id of idsToDelete) {
        deleteTransaction.delete(id);
      }
      await deleteTransaction.commit();
    }

    return items;
  } catch (error) {
    console.error("Failed to save services to Sanity:", error);
    throw error;
  }
}

export async function getInboundRoutes(): Promise<InboundRoute[]> {
  const routes = await readClient.fetch(`*[_type == "inboundRoute" && !(_id in path("drafts.**"))] | order(order asc)`);
  if (routes.length > 0) {
    return routes.map((r: any) => ({
      id: r._id,
      name: r.name,
      slug: r.slug?.current || r.name.toLowerCase().replace(/\s+/g, "-"),
      tag: r.tag,
      days: r.days,
      summary: r.summary,
      description: r.description,
      body: r.body || "",
      section: r.section || "Inbound Tourism",
      image: resolveCmsImage(r),
      gallery: Array.isArray(r.gallery) ? r.gallery.map(resolveCmsImage).filter(Boolean) : [],
      active: r.active !== false,
      order: r.order || 0,
    }));
  }
  return DEFAULT_INBOUND_ROUTES;
}

export async function saveInboundRoutes(items: InboundRoute[]): Promise<InboundRoute[]> {
  try {
    const existingIds: string[] = await readClient.fetch(`*[_type == "inboundRoute" && !(_id in path("drafts.**"))]._id`);
    const keepIds = new Set(items.map((item) => item.id));

    // Batch create/replace operations using transactions
    const transaction = writeClient.transaction();
    for (const item of items) {
      const doc: Record<string, unknown> & { _id: string; _type: string } = {
        _type: "inboundRoute",
        _id: item.id,
        name: item.name,
        slug: { _type: "slug", current: item.slug },
        tag: item.tag,
        days: item.days,
        summary: item.summary,
        description: item.description,
        body: item.body || "",
        section: item.section || "Inbound Tourism",
        imageUrl: item.image,
        gallery: item.gallery || [],
        active: item.active !== false,
        order: item.order || 0,
      };
      transaction.createOrReplace(doc);
    }
    await transaction.commit();

    // Batch delete operations using transaction
    const idsToDelete = existingIds.filter(id => !keepIds.has(id));
    if (idsToDelete.length > 0) {
      const deleteTransaction = writeClient.transaction();
      for (const id of idsToDelete) {
        deleteTransaction.delete(id);
      }
      await deleteTransaction.commit();
    }

    return items;
  } catch (error) {
    console.error("Failed to save inbound routes to Sanity:", error);
    throw error;
  }
}
