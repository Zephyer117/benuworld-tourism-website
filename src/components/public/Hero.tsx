'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Compass, Landmark, GraduationCap, Globe2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLiveCms } from '@/lib/cms-client';
import type { Slide } from '@/lib/types';
import { youtubeOrVimeoEmbed, isVideoFile } from '@/lib/utils';

const highlights = [
  { icon: Compass, label: 'Inbound tours', href: '/services/inbound-tourism' },
  { icon: Globe2, label: 'Outbound travel', href: '/services/outbound-tourism' },
  { icon: Landmark, label: 'Investment desk', href: '/services/foreign-investment' },
  { icon: GraduationCap, label: 'Language school', href: '/services/teaching-curriculum' },
];

function slideImage(slide?: Slide) {
  return slide?.image || slide?.imageUrl || '';
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSrcs, setLoadedSrcs] = useState<Record<string, boolean>>({});
  const { data: allSlides, loading } = useLiveCms<Slide[]>('slideshow', []);
  const slides = allSlides
    .filter((slide) => slide.active !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const copy = slides[currentSlide];
  const video = copy?.video;
  const embed = video ? youtubeOrVimeoEmbed(video) : null;
  const fileVideo = video && isVideoFile(video) ? video : '';
  const imageUrl = slideImage(copy);
  const title = copy?.title || copy?.headline;
  const subtitle =
    copy?.subtitle ||
    copy?.subtext ||
    'BenuWorld hosts inbound guests, sends outbound travelers, introduces investment partners, and trains teams in English and Mandarin.';

  const currentReady = Boolean(
    fileVideo || embed || (imageUrl && loadedSrcs[imageUrl]),
  );
  const showLoader = loading || (Boolean(imageUrl) && !loadedSrcs[imageUrl] && !fileVideo && !embed);

  const imageSlides = useMemo(
    () => slides.filter((slide) => slideImage(slide) && !slide.video),
    [slides],
  );

  useEffect(() => {
    if (slides.length > 1 && currentReady) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
      return () => clearInterval(timer);
    }
    if (!slides.length) setCurrentSlide(0);
  }, [slides.length, currentReady]);

  useEffect(() => {
    const next = slides[(currentSlide + 1) % Math.max(slides.length, 1)];
    const src = slideImage(next);
    if (!src) return;
    const img = new window.Image();
    img.src = src;
    img.onload = () => setLoadedSrcs((prev) => ({ ...prev, [src]: true }));
  }, [currentSlide, slides.length]);

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-bg-dark-teal">
      {imageSlides.map((slide) => {
        const src = slideImage(slide);
        const active = slide.id === copy?.id && !fileVideo && !embed;
        return (
          <motion.img
            key={slide.id}
            src={src}
            alt=""
            aria-hidden={!active}
            ref={(el) => {
              if (el?.complete && el.naturalWidth > 0) {
                setLoadedSrcs((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
              }
            }}
            onLoad={() => setLoadedSrcs((prev) => ({ ...prev, [src]: true }))}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: active && loadedSrcs[src] ? 1 : 0,
              scale: active && loadedSrcs[src] ? 1 : 1.08,
            }}
            transition={{
              opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 7, ease: 'linear' },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
            data-testid={active ? 'hero-background' : undefined}
          />
        );
      })}

      {fileVideo ? (
        <motion.video
          key={fileVideo}
          src={fileVideo}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        />
      ) : null}

      {embed && !fileVideo ? (
        <motion.iframe
          key={embed}
          src={`${embed}?autoplay=1&mute=1&controls=0&loop=1`}
          className="absolute inset-0 h-full w-full pointer-events-none"
          allow="autoplay; encrypted-media"
          title={title || 'Hero video'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        />
      ) : null}

      {!imageUrl && !fileVideo && !embed ? <div className="absolute inset-0 hero-mesh" /> : null}

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal/85 via-bg-dark-teal/35 to-transparent" />

      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="hero-loader"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 hero-mesh" />
            <motion.div
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              initial={{ x: '-40%' }}
              animate={{ x: '140%' }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative text-center text-white">
              <p className="text-[11px] uppercase tracking-[0.28em] text-secondary-sand mb-3">BenuWorld</p>
              <p className="text-sm text-white/70 mb-6">Preparing your view</p>
              <div className="mx-auto h-1 w-40 overflow-hidden rounded-full bg-white/20">
                <motion.div
                  className="h-full w-1/2 rounded-full bg-secondary-sand"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={copy?.id || 'hero-copy'}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: currentReady ? 1 : 0, y: currentReady ? 0 : 28 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-white"
          >
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-[11px] uppercase tracking-[0.22em] mb-6">
              Dhaka · Bangladesh
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={copy?.ctaLink || '/contact'}>
                <Button variant="secondary" size="lg" className="gap-2">
                  {copy?.ctaText || 'Plan a project'}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline-white" size="lg">
                  Browse services
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: currentReady ? 1 : 0, y: currentReady ? 0 : 16 }}
              transition={{ duration: 0.5, delay: currentReady ? 0.15 + index * 0.08 : 0 }}
            >
              <Link
                href={item.href}
                className="group block rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm px-4 py-4 text-white hover:bg-white hover:text-text-ink transition-colors"
              >
                <item.icon className="w-5 h-5 mb-3 text-secondary-sand group-hover:text-primary-teal" />
                <div className="text-sm font-semibold">{item.label}</div>
                <div className="text-xs text-white/60 group-hover:text-gray-500 mt-1">Explore</div>
              </Link>
            </motion.div>
          ))}
        </div>

        {slides.length > 1 && (
          <div className="flex gap-2 mt-8">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full overflow-hidden transition-all ${
                  index === currentSlide ? 'w-10 bg-white/25' : 'w-4 bg-white/35'
                }`}
                aria-label={`Slide ${index + 1}`}
              >
                {index === currentSlide && currentReady ? (
                  <motion.span
                    className="block h-full bg-secondary-sand"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 7, ease: 'linear' }}
                  />
                ) : null}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
