'use client';

import Link from 'next/link';
import Hero from '@/components/public/Hero';
import FAQ from '@/components/public/FAQ';
import CtaBanner from '@/components/public/CtaBanner';
import { motion } from 'framer-motion';
import {
  Plane,
  Building2,
  GraduationCap,
  Globe,
  Award,
  MapPin,
  ArrowRight,
  Languages,
  ShieldCheck,
  Quote,
} from 'lucide-react';
import Card from '@/components/ui/Card';
import MediaBlock from '@/components/public/MediaBlock';
import PostCard from '@/components/public/PostCard';
import { faqs } from '@/lib/site-content';
import { useLiveCms } from '@/lib/cms-client';
import { mediaHref, postDate, publishedPosts, routeHref, routesForSection } from '@/lib/cms-helpers';
import { DEFAULT_INBOUND_ROUTES, type InboundRoute, type MediaItem, type Post } from '@/lib/types';

export default function Home() {
  const { data: media } = useLiveCms<MediaItem[]>('media', []);
  const { data: posts } = useLiveCms<Post[]>('posts', []);
  const { data: routes } = useLiveCms<InboundRoute[]>('routes', DEFAULT_INBOUND_ROUTES);
  const inboundRoutes = routesForSection(routes, 'Inbound Tourism');
  const featuredMedia = media.filter((item) => item.featured && item.type !== 'document').slice(0, 6);
  const services = [
    {
      icon: Plane,
      title: 'Inbound Tourism',
      description: 'Host guests in Bangladesh with bilingual guides, visas, and day-by-day itineraries.',
      link: '/services/inbound-tourism',
      section: 'Inbound Tourism',
    },
    {
      icon: Globe,
      title: 'Outbound Tourism',
      description: 'Flights, hotels, insurance, and embassy files for Asia, the Middle East, and Europe.',
      link: '/services/outbound-tourism',
      section: 'Outbound Tourism',
    },
    {
      icon: Building2,
      title: 'Foreign Investment',
      description: 'Sector briefs, partner introductions, and visit programs for Bangladesh market entry.',
      link: '/services/foreign-investment',
      section: 'Foreign Investment',
    },
    {
      icon: GraduationCap,
      title: 'Teaching Curriculum',
      description: 'Business English, Mandarin, and corporate workshops designed around real meetings.',
      link: '/services/teaching-curriculum',
      section: 'Teaching Curriculum',
    },
  ];

  const whyChooseUs = [
    {
      icon: Languages,
      title: 'Three-language desk',
      description: 'English, Bangla, and Mandarin in the same conversation not a translation afterthought.',
    },
    {
      icon: ShieldCheck,
      title: 'Scoped proposals',
      description: 'You receive itineraries, sector briefs, or course outlines before you commit.',
    },
    {
      icon: MapPin,
      title: 'Dhaka-rooted',
      description: 'Local operators, hotels, and introductions we actually use not generic packages.',
    },
    {
      icon: Award,
      title: 'Four practices, one office',
      description: 'Travel, capital, and training can sit in one project when a client visit needs all three.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Market-entry advisor',
      content: 'Factory visits, interpreters, and a realistic regulatory brief in one week. That is rare in Dhaka.',
    },
    {
      name: 'Michael Rahman',
      role: 'Inbound tour host',
      content: 'They built a Sundarbans-plus-Old-Dhaka itinerary that felt local, not a brochure copy.',
    },
    {
      name: 'Li Wei',
      role: 'Language student',
      content: 'Business English tied to actual emails and calls. I used it the same week in client meetings.',
    },
  ];

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Hero />

        <section className="border-y border-black/5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ['2025', 'Established'],
              ['3', 'Working languages'],
              ['4', 'Practices'],
              ['Dhaka', 'Home office'],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-teal">{stat}</div>
                <div className="text-xs uppercase tracking-[0.16em] text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-primary-teal font-semibold uppercase tracking-wider text-sm">The firm</span>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-text-ink mt-4 mb-6">
                  A consultancy that can host a tour on Monday and a factory visit on Thursday.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  BenuWorld sits at the overlap of tourism, investment, and education. Chinese-speaking clients, Bangladeshi
                  hosts, and international partners use the same office instead of stitching three vendors together.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary-teal font-semibold">
                  Read the story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { t: 'Inbound', d: 'Heritage, wildlife, coast' },
                  { t: 'Outbound', d: 'Visa files & group travel' },
                  { t: 'Investment', d: 'Intros & site programs' },
                  { t: 'Curriculum', d: 'EN / 中文 training' },
                ].map((item) => (
                  <div key={item.t} className="rounded-2xl bg-bg-soft-tint p-6 border border-black/5">
                    <div className="font-display text-xl font-semibold text-text-ink">{item.t}</div>
                    <div className="text-sm text-gray-600 mt-2">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-primary-teal font-semibold uppercase tracking-wider text-sm">Practices</span>
                <h2 className="text-4xl font-bold font-display text-text-ink mt-3">Four desks. One brief.</h2>
              </div>
              <Link href="/services" className="text-primary-teal font-medium inline-flex items-center">
                Compare services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="space-y-14">
              {services.map((service, index) => {
                const sectionPosts = publishedPosts(posts, service.section).slice(0, 3);
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-3xl border border-black/5 bg-white p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                      <div className="flex gap-4">
                        <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center shrink-0">
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-display text-text-ink mb-2">{service.title}</h3>
                          <p className="text-gray-600 max-w-2xl">{service.description}</p>
                        </div>
                      </div>
                      <Link href={service.link} className="text-sm font-semibold text-primary-teal shrink-0">
                        Open practice →
                      </Link>
                    </div>
                    {sectionPosts.length > 0 ? (
                      <div className="grid md:grid-cols-3 gap-6">
                        {sectionPosts.map((post) => (
                          <PostCard
                            key={post.id}
                            post={{
                              ...post,
                              date: postDate(post),
                              image: post.image || post.coverImage,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No published articles in this practice yet.</p>
                    )}
                  </motion.div>
                );
              })}
              {(() => {
                const newsPosts = publishedPosts(posts, 'Company News').slice(0, 3);
                return (
                  <div className="rounded-3xl border border-black/5 bg-white p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold font-display text-text-ink">Company News</h3>
                      <Link href="/services/company-news" className="text-sm font-semibold text-primary-teal">
                        Open news desk →
                      </Link>
                    </div>
                    {newsPosts.length > 0 ? (
                      <div className="grid md:grid-cols-3 gap-6">
                        {newsPosts.map((post) => (
                          <PostCard
                            key={post.id}
                            post={{
                              ...post,
                              date: postDate(post),
                              image: post.image || post.coverImage,
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No company news published yet.</p>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-primary-teal font-semibold uppercase tracking-wider text-sm">Bangladesh, hosted</span>
              <h2 className="text-4xl font-bold font-display text-text-ink mt-3">Sample inbound routes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {inboundRoutes.map((place) => (
                <Link key={place.id || place.name} href={routeHref(place)} className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-card block hover:shadow-brand transition-shadow">
                  {place.image ? (
                    <img src={place.image} alt={place.name} className="h-40 w-full object-cover" />
                  ) : (
                    <div className="h-28 hero-mesh" />
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <h3 className="font-display text-xl font-semibold">{place.name}</h3>
                      {place.tag ? (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary-teal/10 text-primary-teal shrink-0">{place.tag}</span>
                      ) : null}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{place.summary}</p>
                    <p className="text-xs uppercase tracking-wider text-gray-400">{place.days}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/services/inbound-tourism" className="inline-flex items-center text-primary-teal font-semibold">
                Build a custom itinerary <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {featuredMedia.length > 0 && (
          <section className="py-24 bg-bg-soft-tint">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="text-primary-teal font-semibold uppercase tracking-wider text-sm">From the library</span>
                  <h2 className="text-4xl font-bold font-display text-text-ink mt-3">Photos & video</h2>
                </div>
                <Link href="/gallery" className="text-primary-teal font-semibold">Open gallery</Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredMedia.map((item) => {
                  const href = mediaHref(item, routes);
                  const tile = (
                    <>
                      <div className="aspect-video">
                        <MediaBlock
                          src={item.url}
                          video={item.type === 'video' ? item.embedUrl || item.url : undefined}
                          alt={item.name}
                          className="h-full min-h-[160px] relative"
                        />
                      </div>
                      <p className="p-4 text-sm font-medium">{item.caption || item.name}</p>
                    </>
                  );
                  const className = 'rounded-2xl overflow-hidden bg-white shadow-card';
                  return href ? (
                    <Link key={item.id} href={href} className={`${className} block hover:shadow-brand transition-shadow`}>
                      {tile}
                    </Link>
                  ) : (
                    <div key={item.id} className={className}>
                      {tile}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="py-24 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold font-display text-text-ink mb-12 text-center">Why clients stay with one office</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white shadow-card flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary-teal" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold font-display text-text-ink mb-12 text-center">Client notes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name}>
                  <div className="p-7">
                    <Quote className="w-8 h-8 text-secondary-sand mb-4" />
                    <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-teal/10 flex items-center justify-center font-display font-bold text-primary-teal">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <FAQ items={faqs.home} title="Before you write to us" />
        <CtaBanner
          title="Send a one-page brief"
          text="Dates, destination or sector, language, and group size. We reply with a scoped next step."
          secondary={{ href: '/services', label: 'See practices' }}
        />
      </main>
    </div>
  );
}
