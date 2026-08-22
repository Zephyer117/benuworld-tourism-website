'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { siteContact } from '@/lib/site-content';

export default function CtaBanner({
  title,
  text,
  primary = { href: '/contact', label: 'Start an inquiry' },
  secondary,
}: {
  title: string;
  text: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="py-20 brand-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">{title}</h2>
          <p className="text-lg text-white/90 mb-8">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primary.href}>
              <Button variant="secondary" size="lg">
                {primary.label}
              </Button>
            </Link>
            {secondary ? (
              <Link href={secondary.href}>
                <Button variant="outline-white" size="lg">
                  {secondary.label}
                </Button>
              </Link>
            ) : (
              <a href={siteContact.phoneHref}>
                <Button variant="outline-white" size="lg">
                  Call {siteContact.phone}
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
