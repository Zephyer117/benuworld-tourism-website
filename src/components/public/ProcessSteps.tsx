'use client';

import { motion } from 'framer-motion';

export default function ProcessSteps({
  steps,
  eyebrow = 'How it works',
  title,
}: {
  steps: { step: string; title: string; text: string }[];
  eyebrow?: string;
  title: string;
}) {
  return (
    <section className="py-20 bg-bg-dark-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary-aqua font-semibold uppercase tracking-wider text-sm">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-12 max-w-2xl">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-secondary-sand font-display text-2xl mb-4">{item.step}</div>
              <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
