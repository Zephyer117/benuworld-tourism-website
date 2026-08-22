'use client';

import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { siteContact } from '@/lib/site-content';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={siteContact.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href={siteContact.phoneHref}
        className="w-12 h-12 rounded-full bg-primary-teal text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Call"
      >
        <Phone className="w-5 h-5" />
      </a>
      <Link
        href="/contact"
        className="hidden sm:flex h-12 px-4 rounded-full bg-text-ink text-white shadow-lg items-center text-sm font-medium hover:bg-primary-teal transition-colors"
      >
        Inquire
      </Link>
    </div>
  );
}
