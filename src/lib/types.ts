export type PostStatus = "published" | "draft" | "scheduled";

export type PostSection =
  | "inbound-tourism"
  | "outbound-tourism"
  | "foreign-investment"
  | "teaching-curriculum"
  | "news";

export interface Post {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  section: string;
  status: PostStatus;
  coverImage?: string;
  image?: string;
  video?: string;
  gallery?: string[];
  author?: string;
  views?: number;
  date?: string;
  authorId?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
  scheduledFor?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title?: string;
  bio: string;
  photo?: string;
  image?: string;
  role?: string;
  expertise?: string[];
  email?: string;
  linkedin?: string;
  featured: boolean;
  order: number;
}

export interface Slide {
  id: string;
  image: string;
  imageUrl?: string;
  video?: string;
  title?: string;
  subtitle?: string;
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaLink?: string;
  active?: boolean;
  order: number;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  hours?: string;
  closed?: boolean;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  qq?: string;
  wechat?: string;
  skype?: string;
  whatsapp?: string;
  facebook?: string;
  businessHours: BusinessHours[];
  mapEmbedUrl?: string;
  mapLat?: number | string;
  mapLng?: number | string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  source: string;
  status: "new" | "in-progress" | "closed";
  createdAt: string;
}

export interface SiteSettings {
  siteTitle: string;
  tagline: string;
  footerText: string;
  primaryColor: string;
  logoUrl?: string;
  faviconUrl?: string;
  defaultShareImage?: string;
  languages: string[];
  defaultLanguage: string;
  inquiryEmail?: string;
  notificationEmail?: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  entity: string;
  entityId?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export type MediaKind = "image" | "video" | "document";

export interface MediaItem {
  id: string;
  name: string;
  type: MediaKind;
  url: string;
  embedUrl?: string;
  alt?: string;
  size: string;
  uploadedAt: string;
  featured: boolean;
  caption?: string;
  section?: string;
  routeId?: string;
  sanityAssetId?: string;
  sanityAssetRef?: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  topic?: string;
  message: string;
  status: "new" | "in-progress" | "completed";
  createdAt: string;
  date?: string;
  priority?: "high" | "medium" | "low";
  assignedTo?: string | null;
}

export const SECTION_LABELS: Record<PostSection, string> = {
  "inbound-tourism": "Inbound Tourism",
  "outbound-tourism": "Outbound Tourism",
  "foreign-investment": "Foreign Investment",
  "teaching-curriculum": "Teaching Curriculum",
  news: "News & Insights",
};

export const SERVICE_SECTIONS: PostSection[] = [
  "inbound-tourism",
  "outbound-tourism",
  "foreign-investment",
  "teaching-curriculum",
];

export interface ServiceMedia {
  id: string;
  title: string;
  section: string;
  description?: string;
  image?: string;
  heroImage?: string;
  heroVideo?: string;
  gallery?: string[];
  order?: number;
}

export const DEFAULT_SERVICES: ServiceMedia[] = [
  { id: "inbound-tourism", title: "Inbound Tourism", section: "Inbound Tourism", heroImage: "", heroVideo: "", gallery: [], order: 1 },
  { id: "outbound-tourism", title: "Outbound Tourism", section: "Outbound Tourism", heroImage: "", heroVideo: "", gallery: [], order: 2 },
  { id: "foreign-investment", title: "Foreign Investment", section: "Foreign Investment", heroImage: "", heroVideo: "", gallery: [], order: 3 },
  { id: "teaching-curriculum", title: "Teaching Curriculum", section: "Teaching Curriculum", heroImage: "", heroVideo: "", gallery: [], order: 4 },
  { id: "company-news", title: "Company News", section: "Company News", heroImage: "", heroVideo: "", gallery: [], order: 5 },
];

export const GALLERY_SECTIONS = DEFAULT_SERVICES.map((service) => service.section);

export interface InboundRoute {
  id: string;
  name: string;
  slug?: string;
  tag: string;
  days: string;
  summary: string;
  description?: string;
  body?: string;
  image?: string;
  gallery?: string[];
  section: string;
  active?: boolean;
  order: number;
}

export const DEFAULT_INBOUND_ROUTES: InboundRoute[] = [
  { id: "route-coxs-bazar", name: "Cox's Bazar", slug: "coxs-bazar", tag: "Coast", days: "3–5 days", summary: "The world's longest natural sea beach, fishing villages, and sunset walks.", image: "", section: "Inbound Tourism", active: true, order: 1 },
  { id: "route-sundarbans", name: "Sundarbans", slug: "sundarbans", tag: "Wildlife", days: "3–4 days", summary: "UNESCO mangrove forest, river cruises, and Royal Bengal Tiger habitat.", image: "", section: "Inbound Tourism", active: true, order: 2 },
  { id: "route-sylhet", name: "Sylhet", slug: "sylhet", tag: "Tea & Hills", days: "2–4 days", summary: "Tea estates, waterfalls, and shrine trails in the northeast.", image: "", section: "Inbound Tourism", active: true, order: 3 },
  { id: "route-dhaka", name: "Dhaka Heritage", slug: "dhaka-heritage", tag: "City", days: "1–2 days", summary: "Old Dhaka, Lalbagh Fort, riverfront life, and craft markets.", image: "", section: "Inbound Tourism", active: true, order: 4 },
  { id: "route-cht", name: "Chittagong Hill Tracts", slug: "chittagong-hill-tracts", tag: "Culture", days: "4–6 days", summary: "Indigenous communities, lakes, and hill-road landscapes.", image: "", section: "Inbound Tourism", active: true, order: 5 },
  { id: "route-rajshahi", name: "Rajshahi & Paharpur", slug: "rajshahi-and-paharpur", tag: "History", days: "2–3 days", summary: "Buddhist ruins, silk weaving, and mango-country heritage.", image: "", section: "Inbound Tourism", active: true, order: 6 },
  { id: "route-china", name: "China & East Asia", slug: "china-and-east-asia", tag: "Visa", days: "Full visa file support", summary: "Business, study, and family visits.", image: "", section: "Outbound Tourism", active: true, order: 1 },
  { id: "route-sea", name: "Southeast Asia", slug: "southeast-asia", tag: "Leisure", days: "E-visa / on-arrival guidance", summary: "Leisure and group tours.", image: "", section: "Outbound Tourism", active: true, order: 2 },
  { id: "route-me", name: "Middle East", slug: "middle-east", tag: "Umrah", days: "Embassy coordination", summary: "Umrah, work, and family travel.", image: "", section: "Outbound Tourism", active: true, order: 3 },
  { id: "route-europe", name: "Europe", slug: "europe", tag: "Schengen", days: "Appointment & documentation", summary: "Study, tourism, and Schengen files.", image: "", section: "Outbound Tourism", active: true, order: 4 },
  { id: "route-rmg", name: "RMG & Textiles", slug: "rmg-and-textiles", tag: "Sector", days: "", summary: "Joint ventures, sourcing, factory visits.", image: "", section: "Foreign Investment", active: true, order: 1 },
  { id: "route-infra", name: "Infrastructure", slug: "infrastructure", tag: "Sector", days: "", summary: "Logistics, energy, and BRI-linked projects.", image: "", section: "Foreign Investment", active: true, order: 2 },
  { id: "route-agri", name: "Agribusiness", slug: "agribusiness", tag: "Sector", days: "", summary: "Processing, cold chain, export partnerships.", image: "", section: "Foreign Investment", active: true, order: 3 },
  { id: "route-ict", name: "ICT & Services", slug: "ict-and-services", tag: "Sector", days: "", summary: "Outsourcing, education tech, market entry.", image: "", section: "Foreign Investment", active: true, order: 4 },
  { id: "route-en", name: "Business English", slug: "business-english", tag: "A2–C1", days: "8–16 weeks", summary: "In-person and online business English.", image: "", section: "Teaching Curriculum", active: true, order: 1 },
  { id: "route-mandarin", name: "Mandarin for Business", slug: "mandarin-for-business", tag: "HSK 1–4", days: "12 weeks", summary: "Small-group Mandarin for meetings and travel.", image: "", section: "Teaching Curriculum", active: true, order: 2 },
  { id: "route-tourism-cn", name: "Tourism Chinese", slug: "tourism-chinese", tag: "Beginner+", days: "6 weeks", summary: "Workshops for hosts and guides.", image: "", section: "Teaching Curriculum", active: true, order: 3 },
  { id: "route-corp", name: "Corporate Communication", slug: "corporate-communication", tag: "Custom", days: "Flexible", summary: "On-site workshops for company teams.", image: "", section: "Teaching Curriculum", active: true, order: 4 },
  { id: "route-notes", name: "Practice notes", slug: "practice-notes", tag: "News", days: "", summary: "Travel, investment, and training updates worth sending to clients.", image: "", section: "Company News", active: true, order: 1 },
  { id: "route-partners", name: "Partnerships", slug: "partnerships", tag: "News", days: "", summary: "Operator and institutional collaborations as they are signed.", image: "", section: "Company News", active: true, order: 2 },
  { id: "route-office", name: "Office notices", slug: "office-notices", tag: "News", days: "", summary: "Hours, new desks, and how to reach a named coordinator.", image: "", section: "Company News", active: true, order: 3 },
];
