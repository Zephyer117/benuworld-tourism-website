'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import CtaBanner from '@/components/public/CtaBanner';
import MediaBlock from '@/components/public/MediaBlock';
import { useLiveCms } from '@/lib/cms-client';
import {
  findRouteByPath,
  findRouteForMedia,
  routeHref,
  routesForSection,
  servicePathFromSection,
} from '@/lib/cms-helpers';
import { DEFAULT_INBOUND_ROUTES, type InboundRoute, type MediaItem } from '@/lib/types';

export default function DestinationPage({
  params,
}: {
  params: Promise<{ service: string; slug: string }>;
}) {
  const { service, slug } = use(params);
  const { data: routes, loading } = useLiveCms<InboundRoute[]>('routes', DEFAULT_INBOUND_ROUTES);
  const { data: media } = useLiveCms<MediaItem[]>('media', []);
  const route = findRouteByPath(routes, service, slug);
  const serviceHref = `/services/${servicePathFromSection(route?.section || service)}`;
  const relatedMedia = media.filter((item) => item.type !== 'document' && findRouteForMedia(item, routes)?.id === route?.id);
  const extraPhotos = Array.from(
    new Set([...(route?.gallery || []), ...(relatedMedia.map((item) => item.url) || [])].filter((url) => url && url !== route?.image)),
  );
  const others = route ? routesForSection(routes, route.section).filter((item) => item.id !== route.id).slice(0, 3) : [];

  if (loading && !route) {
    return (
      <main className="flex-1 flex items-center justify-center min-h-[50vh] text-gray-500">
        Loading…
      </main>
    );
  }

  if (!route) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-gray-600">This destination was not found.</p>
        <Link href={`/services/${service}`} className="text-primary-teal font-semibold">
          Back to this practice
        </Link>
      </main>
    );
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          {route.image ? (
            <img src={route.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 hero-mesh" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal via-bg-dark-teal/50 to-transparent" />
          <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <Link href={serviceHref} className="hover:text-white">{route.section}</Link>
              <span>/</span>
              <span className="text-white">{route.name}</span>
            </nav>
            {route.tag ? (
              <p className="uppercase tracking-[0.2em] text-xs text-secondary-sand mb-3">{route.tag}</p>
            ) : null}
            <h1 className="text-4xl md:text-6xl font-bold font-display max-w-3xl mb-4">{route.name}</h1>
            {route.days ? <p className="text-white/80 uppercase tracking-wider text-sm">{route.days}</p> : null}
          </div>
        </section>

        <section className="py-16 bg-bg-warm-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={serviceHref} className="inline-flex items-center text-sm text-primary-teal font-semibold mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {route.section}
            </Link>
            <p className="text-lg text-gray-700 leading-relaxed">{route.summary}</p>
            {route.body ? (
              <div className="mt-8 text-gray-600 leading-relaxed whitespace-pre-wrap">{route.body}</div>
            ) : null}
            <div className="mt-10">
              <Link href={`/contact?topic=${encodeURIComponent(route.name)}`}>
                <Button variant="primary">Inquire about {route.name}</Button>
              </Link>
            </div>
          </div>
        </section>

        {(extraPhotos.length > 0 || relatedMedia.length > 0) && (
          <section className="py-16 bg-bg-soft-tint">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-display font-bold mb-8">Photos & video</h2>
              {extraPhotos.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {extraPhotos.map((url) => (
                    <div key={url} className="aspect-video rounded-2xl overflow-hidden bg-black shadow-card">
                      <img src={url} alt={route.name} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
              {relatedMedia.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedMedia.filter((item) => !extraPhotos.includes(item.url) && item.url !== route.image).map((item) => (
                    <div key={item.id} className="rounded-2xl overflow-hidden bg-white shadow-card">
                      <div className="aspect-video bg-black">
                        <MediaBlock
                          src={item.url}
                          video={item.type === 'video' ? item.embedUrl || item.url : undefined}
                          alt={item.alt || item.name}
                          className="h-full min-h-[180px]"
                        />
                      </div>
                      <p className="p-4 text-sm font-medium">{item.caption || item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {others.length > 0 && (
          <section className="py-16 bg-bg-warm-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-display font-bold mb-8">More in {route.section}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {others.map((item) => (
                  <Link key={item.id} href={routeHref(item)} className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-card hover:shadow-brand transition-shadow">
                    {item.image ? (
                      <img src={item.image} alt="" className="h-36 w-full object-cover" />
                    ) : (
                      <div className="h-24 hero-mesh" />
                    )}
                    <div className="p-5">
                      <h3 className="font-display font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.summary}</p>
                      <span className="inline-flex items-center text-sm text-primary-teal font-semibold mt-3">
                        Open <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBanner
          title={`Plan ${route.name} with the ${route.section} desk`}
          text="Send dates, group size, and language. We reply with a scoped outline."
        />
      </main>
    </div>
  );
}
