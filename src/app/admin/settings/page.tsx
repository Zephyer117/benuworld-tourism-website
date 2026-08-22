'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Palette, 
  Users, 
  Save,
  Shield,
  Bell
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLiveCms } from '@/lib/cms-client';
import type { SiteSettings } from '@/lib/types';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const { data: cmsSettings, save: saveCmsSettings } = useLiveCms<SiteSettings>('settings', {
    siteTitle: 'BenuWorld',
    tagline: 'Tourism, Investment & Education Consultancy',
    footerText: '',
    primaryColor: '#0F766E',
    languages: ['en', 'bn', 'zh'],
    defaultLanguage: 'en',
    inquiryEmail: 'info@benuworld.com',
    notificationEmail: 'admin@benuworld.com',
  });
  const [settings, setSettings] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem('benuworldSettings');
      if (savedSettings) {
        return JSON.parse(savedSettings);
      }
    }
    
    return {
    // General Settings
    siteName: 'BenuWorld',
    siteTagline: 'Tourism, Investment & Education Consultancy',
    siteUrl: 'https://benuworld.com',
    
    // Brand Settings
    primaryColor: '#0F766E',
    secondaryColor: '#2DD4BF',
    
    // SEO Settings
    metaTitle: 'BenuWorld - Tourism, Investment & Education Consultancy',
    metaDescription: 'Bangladesh-based consultancy operating across Inbound Tourism, Outbound Tourism, Foreign Investment, and Teaching Curriculum services.',
    
    // Social Settings
    facebookUrl: 'https://facebook.com/benuworld',
    twitterUrl: 'https://twitter.com/benuworld',
    linkedinUrl: 'https://linkedin.com/company/benuworld',
    
    // Email Settings
    notificationEmail: 'admin@benuworld.com',
    inquiryEmail: 'info@benuworld.com'
    };
  });

  useEffect(() => {
    if (cmsSettings.inquiryEmail || cmsSettings.notificationEmail) {
      setSettings((prev: typeof settings) => ({
        ...prev,
        inquiryEmail: cmsSettings.inquiryEmail || prev.inquiryEmail,
        notificationEmail: cmsSettings.notificationEmail || prev.notificationEmail,
      }));
    }
  }, [cmsSettings.inquiryEmail, cmsSettings.notificationEmail]);

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem('benuworldSettings', JSON.stringify(settings));
  }, [settings]);

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'brand', label: 'Brand', icon: Palette },
    { id: 'seo', label: 'SEO', icon: Globe },
    { id: 'social', label: 'Social', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const handleSave = async () => {
    localStorage.setItem('benuworldSettings', JSON.stringify(settings));
    await saveCmsSettings({
      ...cmsSettings,
      inquiryEmail: settings.inquiryEmail,
      notificationEmail: settings.notificationEmail,
    });
    alert('Settings saved. New inquiries will email the Inquiry Email address.');
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
            Settings
          </h1>
          <p className="text-gray-600 mt-1">
            Configure your site settings and preferences
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-teal shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <div className="p-6">
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-display text-text-ink mb-4">
                    General Settings
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Name
                    </label>
                    <input
                      type="text"
                      value={settings.siteName}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Tagline
                    </label>
                    <input
                      type="text"
                      value={settings.siteTagline}
                      onChange={(e) => setSettings({ ...settings, siteTagline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site URL
                    </label>
                    <input
                      type="url"
                      value={settings.siteUrl}
                      onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'brand' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-display text-text-ink mb-4">
                    Brand Settings
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Color
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={settings.primaryColor}
                        onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                        className="w-16 h-16 rounded-lg border border-gray-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={settings.primaryColor}
                        onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Color
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        value={settings.secondaryColor}
                        onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                        className="w-16 h-16 rounded-lg border border-gray-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={settings.secondaryColor}
                        onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'seo' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-display text-text-ink mb-4">
                    SEO Settings
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={settings.metaTitle}
                      onChange={(e) => setSettings({ ...settings, metaTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={settings.metaDescription}
                      onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'social' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-display text-text-ink mb-4">
                    Social Media
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Facebook URL
                    </label>
                    <input
                      type="url"
                      value={settings.facebookUrl}
                      onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Twitter URL
                    </label>
                    <input
                      type="url"
                      value={settings.twitterUrl}
                      onChange={(e) => setSettings({ ...settings, twitterUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={settings.linkedinUrl}
                      onChange={(e) => setSettings({ ...settings, linkedinUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-display text-text-ink mb-4">
                    Notification Settings
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notification Email
                    </label>
                    <input
                      type="email"
                      value={settings.notificationEmail}
                      onChange={(e) => setSettings({ ...settings, notificationEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Email
                    </label>
                    <input
                      type="email"
                      value={settings.inquiryEmail}
                      onChange={(e) => setSettings({ ...settings, inquiryEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-display text-text-ink mb-4">
                    Security Settings
                  </h2>
                  
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800 text-sm">
                      Security settings such as password management, two-factor authentication, and access controls would be configured here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-end"
        >
          <Button variant="primary" size="lg" onClick={handleSave} className="flex items-center gap-2">
            <Save className="w-5 h-5" />
            Save Settings
          </Button>
        </motion.div>
      </div>
    </AdminLayout>
  );
}