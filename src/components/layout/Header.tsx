'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, ChevronDown, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { navServices, siteContact } from '@/lib/site-content';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasMenu: true },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const solid = isScrolled || isMobileMenuOpen;
  const linkBase = solid
    ? 'text-text-ink/80 hover:text-primary-teal'
    : 'text-white/85 hover:text-white';
  const activeLink = solid ? 'text-primary-teal' : 'text-white';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`hidden lg:block text-xs tracking-wide transition-colors duration-300 ${
          solid ? 'bg-bg-dark-teal text-white/80' : 'bg-black/25 text-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={siteContact.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="w-3.5 h-3.5 text-primary-aqua" />
              {siteContact.phone}
            </a>
            <a href={`mailto:${siteContact.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="w-3.5 h-3.5 text-primary-aqua" />
              {siteContact.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary-aqua" />
              {siteContact.hours}
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          solid
            ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(18,33,30,0.08)] border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full brand-gradient flex items-center justify-center shrink-0 shadow-md">
                <span className="text-white font-bold text-lg font-display">B</span>
              </div>
              <div className="leading-tight">
                <span className={`block text-xl font-bold font-display ${solid ? 'text-text-ink' : 'text-white'}`}>
                  BenuWorld
                </span>
                <span className={`hidden sm:block text-[10px] uppercase tracking-[0.2em] ${solid ? 'text-primary-teal' : 'text-white/70'}`}>
                  Tourism · Investment · Education
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.hasMenu ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                        isActive(item.href) ? activeLink : linkBase
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    {isActive(item.href) && (
                      <span className={`absolute left-3 right-3 bottom-1 h-0.5 ${solid ? 'bg-primary-teal' : 'bg-secondary-sand'}`} />
                    )}
                    {servicesOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[520px]">
                        <div className="rounded-2xl bg-white shadow-brand border border-black/5 p-3 grid grid-cols-2 gap-1">
                          {navServices.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="rounded-xl px-4 py-3 hover:bg-bg-soft-tint transition-colors"
                            >
                              <div className="text-sm font-semibold text-text-ink">{service.name}</div>
                              <div className="text-xs text-gray-500 mt-0.5 leading-snug">{service.blurb}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive(item.href) ? activeLink : linkBase
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className={`absolute left-3 right-3 bottom-1 h-0.5 ${solid ? 'bg-primary-teal' : 'bg-secondary-sand'}`} />
                    )}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
            {/* TODO: Add contact info 
              <a
                href={siteContact.phoneHref}
                className={`text-sm font-medium ${solid ? 'text-text-ink' : 'text-white'}`}
              >
                {siteContact.phone}
              </a>
              */} 
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  Book a Consultation
                </Button>
              </Link>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg ${solid ? 'hover:bg-bg-soft-tint' : 'hover:bg-white/10'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${solid ? 'text-text-ink' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${solid ? 'text-text-ink' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-4 py-5 space-y-1">
            {navItems.map((item) =>
              item.hasMenu ? (
                <div key={item.name}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-text-ink font-medium"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 pb-2 space-y-1">
                      <Link href="/services" className="block py-2 text-sm text-primary-teal">
                        All services
                      </Link>
                      {navServices.map((service) => (
                        <Link key={service.href} href={service.href} className="block py-2 text-sm text-gray-600">
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="block py-3 text-text-ink font-medium">
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center justify-center">
                <LanguageSwitcher isMobile />
              </div>
              <a href={siteContact.phoneHref} className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-primary-teal" />
                {siteContact.phone}
              </a>
              <Link href="/contact">
                <Button variant="primary" size="md" fullWidth>
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
