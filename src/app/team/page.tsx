'use client';

import CtaBanner from '@/components/public/CtaBanner';
import { motion } from 'framer-motion';
import { Mail, Globe, Compass, Landmark, GraduationCap } from 'lucide-react';
import Card from '@/components/ui/Card';
import { useLiveCms } from '@/lib/cms-client';
import type { TeamMember } from '@/lib/types';

const departments = [
  { icon: Compass, name: 'Travel operations', text: 'Inbound hosts, outbound files, hotels, and transfers.' },
  { icon: Landmark, name: 'Investment visits', text: 'Agendas, partner intros, interpreters for site days.' },
  { icon: GraduationCap, name: 'Curriculum', text: 'English, Mandarin, and corporate workshops.' },
  { icon: Globe, name: 'Client desk', text: 'One named coordinator so you are not bounced between silos.' },
];

export default function TeamPage() {
  const { data: teamMembers } = useLiveCms<TeamMember[]>('team', []);

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4">People</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">The desks behind BenuWorld.</h1>
            <p className="text-xl text-white/85 max-w-2xl">Operators, hosts, and trainers who run the brief not a generic agency roster.</p>
          </div>
        </section>

        <section className="py-16 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((d) => (
              <div key={d.name} className="rounded-2xl border border-black/5 p-6 bg-white">
                <d.icon className="w-7 h-7 text-primary-teal mb-3" />
                <h3 className="font-display font-semibold text-lg mb-2">{d.name}</h3>
                <p className="text-sm text-gray-600">{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-display mb-10">Current team</h2>
            {teamMembers.length === 0 ? (
              <div className="rounded-2xl bg-white border border-dashed border-primary-teal/30 p-12 text-center">
                <p className="text-lg text-gray-700 mb-2">Profiles are published from the studio when ready.</p>
                <p className="text-gray-500 mb-6">Until then, ask for a named project lead when you inquire we assign one for every engagement.</p>
                <a href="mailto:info@benuworld.com" className="text-primary-teal font-semibold">Email the office</a>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Card className="h-full overflow-hidden">
                      <div className="h-52 relative overflow-hidden">
                        {member.image || member.photo ? (
                          <img src={member.image || member.photo} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="h-full hero-mesh flex items-end p-6">
                            <div className="w-14 h-14 rounded-full bg-white text-primary-teal flex items-center justify-center font-display font-bold text-xl">
                              {member.name.split(' ').map((n) => n[0]).join('')}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold font-display">{member.name}</h3>
                        <p className="text-primary-teal text-sm font-medium mb-3">{member.role || member.title}</p>
                        <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.expertise?.map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-primary-teal/10 text-primary-teal text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="inline-flex items-center text-sm text-primary-teal">
                            <Mail className="w-4 h-4 mr-2" /> Write
                          </a>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-bg-warm-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Working with us</h2>
            <p className="text-gray-600">
              Every project gets a single coordinator. Interpreters, guides, and trainers join as the scope requires.
              If you are hiring, send a short note and CV we add specialists when a practice grows.
            </p>
          </div>
        </section>

        <CtaBanner
          title="Ask for a named lead"
          text="Tell us the practice and dates. We will introduce the person who will run the file."
        />
      </main>
    </div>
  );
}
