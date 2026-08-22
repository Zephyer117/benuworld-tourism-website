'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ProcessSteps from '@/components/public/ProcessSteps';
import FAQ from '@/components/public/FAQ';
import CtaBanner from '@/components/public/CtaBanner';
import { MediaStack } from '@/components/public/MediaBlock';
import PostCard from '@/components/public/PostCard';
import { isVideoFile, youtubeOrVimeoEmbed } from '@/lib/utils';

interface Highlight {
  id?: string;
  name: string;
  slug?: string;
  section?: string;
  tag?: string;
  days?: string;
  summary: string;
  image?: string;
  href?: string;
  focus?: string;
  visa?: string;
  note?: string;
  level?: string;
  format?: string;
  weeks?: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  gallery?: string[];
  features: string[];
  contactNumber: string;
  posts: Array<{
    id: string;
    slug?: string;
    title: string;
    excerpt: string;
    image?: string;
    video?: string;
    date: string;
  }>;
  process?: { step: string; title: string; text: string }[];
  processTitle?: string;
  highlights?: Highlight[];
  highlightsTitle?: string;
  galleryHrefs?: Record<string, string>;
  faqs?: { q: string; a: string }[];
  quoteHref?: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  heroVideo,
  gallery = [],
  features,
  contactNumber,
  posts,
  process,
  processTitle,
  highlights,
  highlightsTitle,
  faqs,
  quoteHref = '/contact',
  galleryHrefs = {},
}: ServicePageTemplateProps) {
  const embed = heroVideo ? youtubeOrVimeoEmbed(heroVideo) : null;
  const fileVideo = heroVideo && isVideoFile(heroVideo) ? heroVideo : '';

  return (
    <div className="flex-1">
      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        {fileVideo ? (
          <video src={fileVideo} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline />
        ) : embed ? (
          <iframe
            src={`${embed}?autoplay=1&mute=1&controls=0`}
            className="absolute inset-0 h-full w-full pointer-events-none"
            allow="autoplay; encrypted-media"
            title={title}
          />
        ) : heroImage ? (
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroImage})` }} />
        ) : null}
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal via-bg-dark-teal/40 to-transparent" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
          <nav className="flex items-center space-x-2 text-sm mb-6 text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-[0.2em] text-xs text-secondary-sand mb-3">Practice</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4 max-w-3xl">{title}</h1>
            <p className="text-xl text-white/85 max-w-2xl mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${contactNumber.replace(/\s/g, '')}`}>
                <Button variant="secondary" size="md" className="gap-2">
                  <Phone className="w-4 h-4" />
                  {contactNumber}
                </Button>
              </a>
              <Link href={quoteHref}>
                <Button variant="outline-white" size="md">Request a proposal</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {(heroImage && heroVideo) || gallery.length > 0 ? (
        <section className="py-12 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold mb-6">Photos & video</h2>
            <MediaStack image={heroImage} video={heroVideo} gallery={gallery} alt={title} hrefFor={(url) => galleryHrefs[url]} />
          </div>
        </section>
      ) : null}

      <section className="py-20 bg-bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-ink mb-4">What this desk covers</h2>
              <p className="text-lg text-gray-600 mb-10">{description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary-teal shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card hover={false}>
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-2">Start this engagement</h3>
                <p className="text-sm text-gray-600 mb-6">Share dates, group size, and language. We return a scoped outline.</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Response within one business day</li>
                  <li>• English / Bangla / Mandarin</li>
                  <li>• Dhaka office coordination</li>
                </ul>
                <Link href={quoteHref}>
                  <Button variant="primary" fullWidth>Open inquiry form</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="py-20 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-ink mb-10">
              {highlightsTitle || 'Highlights'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item) => {
                const href = item.href;
                const card = (
                  <>
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
                  ) : (
                    <div className="h-28 hero-mesh" />
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                      {item.tag && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary-teal/10 text-primary-teal shrink-0">{item.tag}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{item.summary || item.note || item.focus}</p>
                    <p className="text-xs text-gray-400 mt-3 uppercase tracking-wider">
                      {item.days || item.visa || item.level || item.weeks}
                      {item.format ? ` · ${item.format}` : ''}
                    </p>
                  </div>
                  </>
                );
                const className = 'bg-white rounded-2xl overflow-hidden border border-black/5 shadow-card block hover:shadow-brand transition-shadow';
                return href ? (
                  <Link key={item.id || item.name} href={href} className={className}>
                    {card}
                  </Link>
                ) : (
                  <div key={item.id || item.name} className={className}>
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {process && process.length > 0 && (
        <ProcessSteps steps={process} title={processTitle || `How ${title} engagements run`} />
      )}

      <section className="py-20 bg-bg-soft-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold font-display text-text-ink">From the news desk</h2>
            <Link href="/news" className="text-primary-teal font-medium inline-flex items-center">
              All articles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={{
                    ...post,
                    section: title,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-primary-teal/30 bg-white p-10 text-center">
              <p className="text-gray-600 mb-4">No published articles in this practice yet. Ask us for a current briefing instead.</p>
              <Link href="/contact">
                <Button variant="outline">Request a briefing</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {faqs && faqs.length > 0 && <FAQ items={faqs} />}

      <CtaBanner
        title={`Talk to the ${title} desk`}
        text={`We will confirm feasibility, timing, and what we need from you to start.`}
        primary={{ href: quoteHref, label: 'Send inquiry' }}
        secondary={{ href: 'mailto:info@benuworld.com', label: 'Email the office' }}
      />
    </div>
  );
}
