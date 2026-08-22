'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ({
  items,
  title = 'Frequently asked questions',
  eyebrow = 'FAQ',
}: {
  items: { q: string; a: string }[];
  title?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-bg-warm-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary-teal font-semibold uppercase tracking-wider text-sm text-center">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-text-ink mt-3 mb-10 text-center">{title}</h2>
        <div className="divide-y divide-gray-200 border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-card">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-text-ink">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary-teal shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
