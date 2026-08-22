'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Save,
  Eye
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLiveCms } from '@/lib/cms-client';
import type { ContactInfo } from '@/lib/types';

const emptyContact: ContactInfo = {
  phone: '+880 1234-567890',
  wechat: 'benuworld',
  qq: '123456789',
  skype: 'benuworld.bd',
  email: 'info@benuworld.com',
  address: 'Jurain, Dhaka, Bangladesh',
  mapLat: '23.7104',
  mapLng: '90.4074',
  businessHours: [
    { day: 'Saturday', open: '09:00', close: '18:00' },
    { day: 'Sunday', open: '09:00', close: '18:00' },
    { day: 'Monday', open: '09:00', close: '18:00' },
    { day: 'Tuesday', open: '09:00', close: '18:00' },
    { day: 'Wednesday', open: '09:00', close: '18:00' },
    { day: 'Thursday', open: '09:00', close: '18:00' },
    { day: 'Friday', open: '', close: '', closed: true },
  ],
};

export default function ContactManager() {
  const { data: contactInfo, setData: setContactInfo, save } = useLiveCms<ContactInfo>('contact', emptyContact);

  const handleSave = async () => {
    await save(contactInfo);
    alert('Contact information is now live on the website.');
  };

  const updateBusinessHours = (index: number, field: string, value: string) => {
    const newHours = [...contactInfo.businessHours];
    newHours[index] = { ...newHours[index], [field]: value };
    setContactInfo({ ...contactInfo, businessHours: newHours });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold font-display text-text-ink">
            Contact Manager
          </h1>
          <p className="text-gray-600 mt-1">
            Manage contact information and business hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Information Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                  Contact Channels
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      WeChat ID
                    </label>
                    <input
                      type="text"
                      value={contactInfo.wechat}
                      onChange={(e) => setContactInfo({ ...contactInfo, wechat: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      QQ Number
                    </label>
                    <input
                      type="text"
                      value={contactInfo.qq}
                      onChange={(e) => setContactInfo({ ...contactInfo, qq: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skype Username
                    </label>
                    <input
                      type="text"
                      value={contactInfo.skype}
                      onChange={(e) => setContactInfo({ ...contactInfo, skype: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <p className="text-xs text-gray-500 mb-2">
                      New inquiries are emailed here (unless INQUIRY_EMAIL is set in the environment).
                    </p>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Physical Address
                    </label>
                    <textarea
                      value={contactInfo.address}
                      onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Map Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                  Map Location
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Latitude
                    </label>
                    <input
                      type="text"
                      value={contactInfo.mapLat}
                      onChange={(e) => setContactInfo({ ...contactInfo, mapLat: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Longitude
                    </label>
                    <input
                      type="text"
                      value={contactInfo.mapLng}
                      onChange={(e) => setContactInfo({ ...contactInfo, mapLng: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-3">Map Preview</h3>
                    <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                      <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3!2d${contactInfo.mapLng}!3d${contactInfo.mapLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                <Clock className="w-5 h-5 inline mr-2" />
                Business Hours
              </h2>
              
              <div className="space-y-3">
                {contactInfo.businessHours.map((hours, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-32 font-medium text-gray-700">{hours.day}</div>
                    
                    {hours.closed ? (
                      <div className="flex-1 text-red-600 font-medium">Closed</div>
                    ) : (
                      <div className="flex-1 flex items-center gap-2">
                        <input
                          type="time"
                          value={hours.open}
                          onChange={(e) => updateBusinessHours(index, 'open', e.target.value)}
                          className="px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          value={hours.close}
                          onChange={(e) => updateBusinessHours(index, 'close', e.target.value)}
                          className="px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                        />
                      </div>
                    )}
                    
                    <button
                      onClick={() => {
                        const newHours = [...contactInfo.businessHours];
                        newHours[index] = { 
                          ...newHours[index], 
                          closed: !newHours[index].closed,
                          open: newHours[index].closed ? '09:00' : '',
                          close: newHours[index].closed ? '18:00' : ''
                        };
                        setContactInfo({ ...contactInfo, businessHours: newHours });
                      }}
                      className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors text-sm"
                    >
                      {hours.closed ? 'Open' : 'Close'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Live Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-blue-800">
                  <Eye className="w-5 h-5 inline mr-2" />
                  Live Preview
                </h2>
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  View on Contact Page →
                </a>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phone}
                  </div>
                  <div className="flex items-center text-sm text-blue-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WeChat: {contactInfo.wechat}
                  </div>
                  <div className="flex items-center text-sm text-blue-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    QQ: {contactInfo.qq}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </div>
                  <div className="flex items-center text-sm text-blue-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    {contactInfo.address}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-end"
        >
          <Button variant="primary" size="lg" onClick={handleSave} className="flex items-center gap-2">
            <Save className="w-5 h-5" />
            Save Changes
          </Button>
        </motion.div>
      </div>
    </AdminLayout>
  );
}