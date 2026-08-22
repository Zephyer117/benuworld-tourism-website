'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { siteContact } from '@/lib/site-content';
import { cmsPost, useLiveCms } from '@/lib/cms-client';
import { generateId } from '@/lib/utils';
import type { BusinessHours, ContactInfo, Inquiry } from '@/lib/types';

const subjects = [
  { value: 'inbound-tourism', label: 'Inbound tourism' },
  { value: 'outbound-tourism', label: 'Outbound tourism' },
  { value: 'investment', label: 'Foreign investment' },
  { value: 'education', label: 'Teaching / curriculum' },
  { value: 'general', label: 'General inquiry' },
  { value: 'partnership', label: 'Partnership' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [emailDelivered, setEmailDelivered] = useState(true);
  const { data: contactInfo } = useLiveCms<ContactInfo>('contact', {
    address: siteContact.address,
    phone: siteContact.phone,
    email: siteContact.email,
    businessHours: [],
  });

  const phone = contactInfo?.phone || siteContact.phone;
  const email = contactInfo?.email || siteContact.email;
  const address = contactInfo?.address || siteContact.address;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const item: Inquiry = {
        id: generateId(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        status: 'new',
        createdAt: new Date().toISOString(),
        date: new Date().toISOString().slice(0, 10),
      };
      const result = await cmsPost('inquiries', item);
      setEmailDelivered(result.emailed !== false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      alert('Could not send the inquiry. Please call or email the office.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const hours: BusinessHours[] = contactInfo?.businessHours?.length
    ? contactInfo.businessHours
    : [
        { day: 'Saturday – Thursday', open: '9:00 AM', close: '6:00 PM', hours: '9:00 AM – 6:00 PM' },
        { day: 'Friday', open: '', close: '', hours: 'Closed', closed: true },
      ];

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative min-h-[50vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Write a brief. We will scope it.</h1>
            <p className="text-xl text-white/85 max-w-2xl">
              Include dates, destination or sector, language, and group size. The Dhaka desk replies on business days.
            </p>
          </div>
        </section>

        <section className="py-6 bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-4 text-sm">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-soft-tint">
              <Phone className="w-5 h-5 text-primary-teal" /> {phone}
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-soft-tint">
              <Mail className="w-5 h-5 text-primary-teal" /> {email}
            </a>
            <a href={siteContact.whatsapp} className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-soft-tint">
              <MessageCircle className="w-5 h-5 text-primary-teal" /> WhatsApp the desk
            </a>
          </div>
        </section>

        <section className="py-16 bg-bg-warm-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <Card hover={false}>
              <div className="p-8">
                <h2 className="text-2xl font-bold font-display mb-6">Inquiry form</h2>
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                    <p className="text-green-800 text-sm">
                      {emailDelivered
                        ? 'Received. A copy was emailed to the office. We will reply from that address.'
                        : 'Received and saved. Email delivery is not configured yet — the office still has this inquiry in Admin.'}
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="block text-sm font-medium">
                      Name *
                      <input required name="name" value={formData.name} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal outline-none" />
                    </label>
                    <label className="block text-sm font-medium">
                      Email *
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal outline-none" />
                    </label>
                  </div>
                  <label className="block text-sm font-medium">
                    Phone
                    <input name="phone" value={formData.phone} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal outline-none" />
                  </label>
                  <fieldset>
                    <legend className="text-sm font-medium mb-3">Practice *</legend>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((s) => (
                        <label
                          key={s.value}
                          className={`px-3 py-2 rounded-full text-sm border cursor-pointer ${
                            formData.subject === s.value
                              ? 'bg-primary-teal text-white border-primary-teal'
                              : 'border-gray-200 hover:border-primary-teal'
                          }`}
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={s.value}
                            checked={formData.subject === s.value}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          {s.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <label className="block text-sm font-medium">
                    Brief *
                    <textarea
                      required
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Dates, destination or sector, language, group size…"
                      className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal outline-none resize-none"
                    />
                  </label>
                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting} className="gap-2">
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending…' : 'Send inquiry'}
                  </Button>
                </form>
              </div>
            </Card>

            <div className="space-y-6">
              <Card hover={false}>
                <div className="p-8 space-y-4">
                  <h2 className="text-2xl font-bold font-display">Office channels</h2>
                  {[
                    ['Mobile', phone],
                    ['WeChat', contactInfo?.wechat || 'benuworld'],
                    ['Email', email],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card hover={false}>
                <div className="p-8">
                  <h2 className="text-2xl font-bold font-display mb-4">Visit</h2>
                  <div className="flex gap-3 mb-5 text-gray-700">
                    <MapPin className="w-5 h-5 text-primary-teal shrink-0" />
                    {address}
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps?q=Jurain+Dhaka&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="BenuWorld office map"
                    />
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="p-8">
                  <h2 className="text-2xl font-bold font-display mb-4">Hours</h2>
                  {hours.map((schedule, index) => {
                    const display = schedule.closed
                      ? 'Closed'
                      : schedule.hours || `${schedule.open} – ${schedule.close}`;
                    return (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0 text-sm">
                        <span className="inline-flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary-teal" />
                          {schedule.day}
                        </span>
                        <span className="text-gray-600">{display}</span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
