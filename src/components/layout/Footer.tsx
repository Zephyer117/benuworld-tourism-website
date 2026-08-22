import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import FloatingContact from '@/components/public/FloatingContact';
import { navServices, siteContact } from '@/lib/site-content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark-teal text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-primary-aqua text-sm uppercase tracking-[0.2em] mb-2">Plan with us</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold">Tell us where you want to go or invest.</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-secondary-sand text-text-ink font-semibold hover:bg-white transition-colors"
          >
            Request a proposal
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">B</span>
              </div>
              <span className="text-2xl font-bold font-display">BenuWorld</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dhaka consultancy for inbound and outbound travel, foreign investment introductions, and language training with Mandarin, English, and Bangla desks.
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">English · বাংলা · 中文</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-primary-aqua">About</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-primary-aqua">Team</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-primary-aqua">News</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary-aqua">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60 mb-4">Practices</h3>
            <ul className="space-y-3 text-sm">
              {navServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-300 hover:text-primary-aqua">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60 mb-4">Dhaka office</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3"><MapPin className="w-5 h-5 text-primary-aqua shrink-0" />{siteContact.address}</li>
              <li className="flex gap-3"><Phone className="w-5 h-5 text-primary-aqua shrink-0" />{siteContact.phone}</li>
              <li className="flex gap-3"><Mail className="w-5 h-5 text-primary-aqua shrink-0" />{siteContact.email}</li>
              <li className="flex gap-3"><Clock className="w-5 h-5 text-primary-aqua shrink-0" />{siteContact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} BenuWorld. All rights reserved.</p>
          <p className="text-gray-500 text-xs">Jurain, Dhaka · Tourism, investment & education consultancy</p>
        </div>
      </div>
      <FloatingContact />
    </footer>
  );
}
