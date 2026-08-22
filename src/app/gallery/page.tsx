'use client';

import CtaBanner from '@/components/public/CtaBanner';
import MediaBlock from '@/components/public/MediaBlock';
import { useLiveCms } from '@/lib/cms-client';
import { mediaHref } from '@/lib/cms-helpers';
import { DEFAULT_INBOUND_ROUTES, GALLERY_SECTIONS, type InboundRoute, type MediaItem } from '@/lib/types';
import Link from 'next/link';
import Skeleton from '@/components/ui/Skeleton';

export default function GalleryPage() {
  const { data: media, loading } = useLiveCms<MediaItem[]>('media', []);
  const { data: routes } = useLiveCms<InboundRoute[]>('routes', DEFAULT_INBOUND_ROUTES);
  const items = media.filter((item) => item.type !== 'document' && item.featured);
  const sections = GALLERY_SECTIONS.map((section) => ({
    section,
    items: items.filter((item) => item.section === section),
  })).filter((group) => group.items.length > 0);
  const unassigned = items.filter((item) => !item.section);

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative min-h-[50vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent" />
          <div className="relative max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4">Media</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Images & video</h1>
            <p className="text-xl text-white/85 max-w-2xl">
              Explore our collection of images and videos showcasing the beauty and culture of Bangladesh.
            </p>
          </div>
        </section>

        {sections.length > 0 && (
          <section className="py-6 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
              {sections.map((group) => (
                <a
                  key={group.section}
                  href={`#${group.section.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-primary-teal hover:text-white transition-colors"
                >
                  {group.section}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="py-16 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="aspect-video rounded-2xl" />
                ))}
              </div>
            ) : sections.length === 0 && unassigned.length === 0 ? (
              <div className="rounded-2xl bg-white p-12 text-center border border-dashed border-primary-teal/30">
                <p className="text-gray-600 mb-4">No public media yet. Upload in Admin → Media, choose a service section, and mark as featured.</p>
                <Link href="/contact" className="text-primary-teal font-semibold">Ask for a briefing instead</Link>
              </div>
            ) : (
              <>
                {sections.map((group) => (
              <div key={group.section} id={group.section.toLowerCase().replace(/\s+/g, '-')}>
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-teal mb-2">Service</p>
                  <h2 className="text-3xl font-bold font-display text-text-ink">{group.section}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item) => (
                    <GalleryCard key={item.id} item={item} href={mediaHref(item, routes)} />
                  ))}
                </div>
              </div>
            ))}

            {unassigned.length > 0 && (
              <div id="other">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-teal mb-2">Unassigned</p>
                  <h2 className="text-3xl font-bold font-display text-text-ink">Other files</h2>
                  <p className="text-sm text-gray-500 mt-2">Assign a service in Admin → Media to move these into a section. Only featured images are shown.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {unassigned.map((item) => (
                    <GalleryCard key={item.id} item={item} href={mediaHref(item, routes)} />
                  ))}
                </div>
              </div>
            )}
              </>
            )}
          </div>
        </section>
        <CtaBanner title="Use these in a trip brief" text="Tell us which destinations or sectors you need photographed or filmed next." />
      </main>
    </div>
  );
}

function GalleryCard({ item, href }: { item: MediaItem; href?: string }) {
  const card = (
    <div className={`rounded-2xl overflow-hidden bg-white shadow-card ${href ? 'hover:shadow-brand transition-shadow' : ''}`}>
      <div className="aspect-video bg-black">
        <MediaBlock
          src={item.url}
          video={item.type === 'video' ? item.embedUrl || item.url : undefined}
          alt={item.alt || item.name}
          className="h-full min-h-[180px]"
        />
      </div>
      <div className="p-4">
        <p className="font-medium text-sm">{item.caption || item.name}</p>
        <p className="text-xs text-gray-500 capitalize mt-1">{item.type}{href ? ' · Open destination' : ''}</p>
      </div>
    </div>
  );
  if (!href) return card;
  return (
    <Link href={href} className="block">
      {card}
    </Link>
  );
}
