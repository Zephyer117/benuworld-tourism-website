'use client';

import FAQ from '@/components/public/FAQ';
import CtaBanner from '@/components/public/CtaBanner';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Target, Heart, Lightbulb, Compass } from 'lucide-react';
import { faqs } from '@/lib/site-content';

export default function AboutPage() {
  const values = [
    { icon: Heart, title: 'Client first', description: 'Scoped work, named contacts, and follow-through after the trip or meeting ends.' },
    { icon: Lightbulb, title: 'Practical, not theatrical', description: 'Itineraries and briefs you can actually run: hotels we use, partners we will introduce.' },
    { icon: Award, title: 'Standards', description: 'Clear costing, documented visa files, and interpreters who show up prepared.' },
    { icon: Globe, title: 'Bilingual by default', description: 'Mandarin, English, and Bangla in the same room when the project needs it.' },
  ];

  const timeline = [
    { year: '2014', title: 'Founded in Dhaka', description: 'Started as a tourism and education desk connecting Bangladesh with visiting guests.' },
    { year: '2016', title: 'Investment added', description: 'Began hosting market visits and partner introductions for inbound capital conversations.' },
    { year: '2018', title: 'Mandarin practice', description: 'Built dedicated Chinese-language hosting for BRI-related travel and training.' },
    { year: '2020', title: 'Remote delivery', description: 'Moved language programs and briefings online without dropping the Dhaka operations desk.' },
    { year: '2024', title: 'Four-practice firm', description: 'Inbound, outbound, investment, and curriculum now run as one coordinated office.' },
  ];

  const desks = [
    { icon: Compass, name: 'Travel operations', text: 'Guides, hotels, transfers, visa paperwork.' },
    { icon: Target, name: 'Investment visits', text: 'Agendas, interpreters, factory and site days.' },
    { icon: Users, name: 'Training', text: 'English, Mandarin, and corporate workshops.' },
  ];

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4">About</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display max-w-3xl mb-4">A Dhaka office built for cross-border work.</h1>
            <p className="text-xl text-white/85 max-w-2xl">Tourism, investment introductions, and language training run together so a visiting delegation does not need three vendors.</p>
          </div>
        </section>

        <section className="py-20 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-primary-teal font-semibold uppercase tracking-wider text-sm">Mission</p>
              <h2 className="text-4xl font-bold font-display mt-3 mb-6">Make Bangladesh workable for guests and the world workable for Bangladeshi clients.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We host inbound travel, file outbound journeys, introduce investment conversations, and train people to speak in the rooms those projects create. The through-line is bilingual coordination from Dhaka.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['2014', 'Year founded'],
                ['3', 'Working languages'],
                ['4', 'Practices'],
                ['Dhaka', 'Headquarters'],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-bg-soft-tint p-6">
                  <div className="text-3xl font-display font-bold text-primary-teal">{n}</div>
                  <div className="text-sm text-gray-600 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-display mb-10">How the office is organized</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {desks.map((d) => (
                <div key={d.name} className="bg-white rounded-2xl p-7 shadow-card">
                  <d.icon className="w-8 h-8 text-primary-teal mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">{d.name}</h3>
                  <p className="text-gray-600 text-sm">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-display mb-12 text-center">What we hold ourselves to</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-teal/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-teal" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-soft-tint">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-display mb-10 text-center">Milestones</h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[80px_1fr] gap-6 bg-white rounded-2xl p-6 shadow-card"
                >
                  <div className="font-display text-xl font-bold text-primary-teal">{item.year}</div>
                  <div>
                    <h3 className="font-semibold text-text-ink">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FAQ items={faqs.about} title="About the firm" />
        <CtaBanner title="Meet the people who will run your brief" text="The team page lists current roles. Contact us if you want a named lead for your project." secondary={{ href: '/team', label: 'See the team' }} />
      </main>
    </div>
  );
}
