'use client';

import CtaBanner from '@/components/public/CtaBanner';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, Globe, GraduationCap, Landmark, Check } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';

export default function ServicesPage() {
  const services = [
    {
      title: 'Inbound Tourism',
      description: 'Day-by-day Bangladesh itineraries, Mandarin/English hosts, visas, and 24/7 local support.',
      icon: Plane,
      link: '/services/inbound-tourism',
      points: ['Wildlife & coast routes', 'Corporate hosting', 'Invitation letters'],
    },
    {
      title: 'Outbound Tourism',
      description: 'International packages with visa files, air, hotels, and destination briefings.',
      icon: Globe,
      link: '/services/outbound-tourism',
      points: ['China & East Asia', 'Schengen documentation', 'Group & family trips'],
    },
    {
      title: 'Foreign Investment',
      description: 'Market briefs, partner shortlists, site visits, and bilingual coordination in Bangladesh.',
      icon: Landmark,
      link: '/services/foreign-investment',
      points: ['Sector mapping', 'Factory programs', 'Permit liaison'],
    },
    {
      title: 'Teaching Curriculum',
      description: 'Business English, Mandarin, and on-site corporate workshops with placement and certificates.',
      icon: GraduationCap,
      link: '/services/teaching-curriculum',
      points: ['HSK pathway', 'Live online', 'Custom company courses'],
    },
  ];

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4">Services</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Four practices, one coordinator.</h1>
            <p className="text-xl text-white/85 max-w-2xl">Choose a desk or combine travel, investment, and training in a single visiting program.</p>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
            <p><span className="block font-display text-lg text-text-ink mb-1">Individuals</span>Tours, visas, language courses.</p>
            <p><span className="block font-display text-lg text-text-ink mb-1">Companies</span>Delegations, interpreters, training.</p>
            <p><span className="block font-display text-lg text-text-ink mb-1">Investors</span>Agendas, partners, site days.</p>
          </div>
        </section>

        <section className="py-20 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <Link href={service.link}>
                  <Card className="h-full">
                    <div className="p-8">
                      <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center mb-5">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold font-display mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-5">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.points.map((p) => (
                          <li key={p} className="flex gap-2 text-sm text-gray-700">
                            <Check className="w-4 h-4 text-primary-teal mt-0.5" /> {p}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center text-primary-teal font-semibold">
                        Open this practice <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <CtaBanner title="Not sure which desk?" text="Describe the trip, meeting, or course. We will assign a lead and reply with a scope." secondary={{ href: '/contact', label: 'Write to us' }} />
      </main>
    </div>
  );
}
