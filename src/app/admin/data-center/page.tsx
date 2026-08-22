'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Edit, 
  Trash2, 
  Plus, 
  Search, 
  Filter,
  Save,
  X,
  Eye,
  CheckCircle,
  AlertCircle,
  Image as ImageIcon
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLiveCms } from '@/lib/cms-client';
import { generateId } from '@/lib/utils';
import { siteContact } from '@/lib/site-content';
import type { ContactInfo, MediaItem, Post, SiteSettings, Slide, TeamMember } from '@/lib/types';

function contactRows(contact: ContactInfo) {
  return [
    { id: 'phone', label: 'Phone', value: contact.phone || '' },
    { id: 'email', label: 'Email', value: contact.email || '' },
    { id: 'address', label: 'Address', value: contact.address || '' },
    { id: 'wechat', label: 'WeChat', value: contact.wechat || '' },
    { id: 'whatsapp', label: 'WhatsApp', value: contact.whatsapp || '' },
  ];
}

function settingsRows(settings: SiteSettings) {
  return [
    { id: 'siteTitle', label: 'Site title', value: settings.siteTitle || '' },
    { id: 'tagline', label: 'Tagline', value: settings.tagline || '' },
    { id: 'footerText', label: 'Footer text', value: settings.footerText || '' },
    { id: 'primaryColor', label: 'Primary color', value: settings.primaryColor || '' },
  ];
}

export default function AdminDataCenter() {
  const [activeTab, setActiveTab] = useState('posts');
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const { data: posts, save: savePosts } = useLiveCms<Post[]>('posts', []);
  const { data: team, save: saveTeam } = useLiveCms<TeamMember[]>('team', []);
  const { data: slideshow, save: saveSlideshow } = useLiveCms<Slide[]>('slideshow', []);
  const { data: media, save: saveMedia } = useLiveCms<MediaItem[]>('media', []);
  const { data: contact, save: saveContact } = useLiveCms<ContactInfo>('contact', {
    address: siteContact.address,
    phone: siteContact.phone,
    email: siteContact.email,
    businessHours: [],
  });
  const { data: settings, save: saveSettings } = useLiveCms<SiteSettings>('settings', {
    siteTitle: 'BenuWorld',
    tagline: '',
    footerText: '',
    primaryColor: '#0F766E',
    languages: ['en'],
    defaultLanguage: 'en',
  });

  const appData = useMemo(
    () => ({
      posts,
      team,
      slideshow,
      media,
      contact: contactRows(contact),
      settings: settingsRows(settings),
    }),
    [posts, team, slideshow, media, contact, settings],
  );

  const tabs = [
    { id: 'posts', label: 'Posts', icon: Database, count: appData.posts.length },
    { id: 'team', label: 'Team', icon: CheckCircle, count: appData.team.length },
    { id: 'slideshow', label: 'Slideshow', icon: Eye, count: appData.slideshow.length },
    { id: 'media', label: 'Media', icon: ImageIcon, count: appData.media.length },
    { id: 'contact', label: 'Contact', icon: AlertCircle, count: appData.contact.length },
    { id: 'settings', label: 'Settings', icon: Filter, count: appData.settings.length },
  ];

  const currentData = appData[activeTab as keyof typeof appData] || [];
  const filteredData = currentData.filter((item: any) => 
    Object.values(item).some((val: any) => 
      String(val).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleEdit = (item: any) => {
    setSelectedItem({ ...item });
    setIsEditing(true);
  };

  const handleAdd = () => {
    const newItem = getNewItemTemplate(activeTab);
    setSelectedItem(newItem);
    setIsAdding(true);
    setIsEditing(true);
  };

  const getNewItemTemplate = (tab: string) => {
    const newId = generateId();

    switch (tab) {
      case 'posts':
        return { id: newId, title: '', excerpt: '', content: '', section: 'Inbound Tourism', status: 'draft', date: new Date().toISOString().split('T')[0], author: 'Admin' };
      case 'team':
        return { id: newId, name: '', role: '', bio: '', email: '', featured: false, order: team.length + 1 };
      case 'slideshow':
        return { id: newId, title: '', subtitle: '', image: '', active: true, order: slideshow.length + 1 };
      case 'media':
        return { id: newId, name: '', type: 'image', url: '', size: '', uploadedAt: new Date().toISOString(), featured: false };
      default:
        return { id: newId };
    }
  };

  const persistTab = async (tab: string, next: any[]) => {
    if (tab === 'posts') await savePosts(next as Post[]);
    if (tab === 'team') await saveTeam(next as TeamMember[]);
    if (tab === 'slideshow') await saveSlideshow(next as Slide[]);
    if (tab === 'media') await saveMedia(next as MediaItem[]);
    if (tab === 'contact') {
      await saveContact({
        ...contact,
        phone: next.find((row) => row.id === 'phone')?.value ?? contact.phone,
        email: next.find((row) => row.id === 'email')?.value ?? contact.email,
        address: next.find((row) => row.id === 'address')?.value ?? contact.address,
        wechat: next.find((row) => row.id === 'wechat')?.value ?? contact.wechat,
        whatsapp: next.find((row) => row.id === 'whatsapp')?.value ?? contact.whatsapp,
      });
    }
    if (tab === 'settings') {
      await saveSettings({
        ...settings,
        siteTitle: next.find((row) => row.id === 'siteTitle')?.value ?? settings.siteTitle,
        tagline: next.find((row) => row.id === 'tagline')?.value ?? settings.tagline,
        footerText: next.find((row) => row.id === 'footerText')?.value ?? settings.footerText,
        primaryColor: next.find((row) => row.id === 'primaryColor')?.value ?? settings.primaryColor,
      });
    }
  };

  const handleSave = async () => {
    if (!selectedItem) return;
    const current = appData[activeTab as keyof typeof appData] as any[];
    const next = isAdding
      ? [...current, selectedItem]
      : current.map((item) => (item.id === selectedItem.id ? selectedItem : item));
    await persistTab(activeTab, next);
    setIsEditing(false);
    setIsAdding(false);
    setSelectedItem(null);
  };

  const handleDelete = async (id: string | number) => {
    if (activeTab === 'contact' || activeTab === 'settings') return;
    if (!confirm('Are you sure you want to delete this item?')) return;
    const current = appData[activeTab as keyof typeof appData] as any[];
    await persistTab(activeTab, current.filter((item) => item.id !== id));
  };

  const renderEditForm = () => {
    if (!selectedItem) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-display text-text-ink">
                {isAdding ? `Add New ${activeTab.slice(0, -1)}` : `Edit ${activeTab.slice(0, -1)}`}
              </h2>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setIsAdding(false);
                  setSelectedItem(null);
                }}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {Object.entries(selectedItem).map(([key, value]) => {
                if (key === 'id' || key === 'type') return null;
                
                return (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    {key === 'status' || key === 'active' || key === 'featured' ? (
                      <select
                        value={String(value)}
                        onChange={(e) => setSelectedItem({ ...selectedItem, [key]: e.target.value === 'true' })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    ) : (key === 'primaryColor' || key === 'secondaryColor') ? (
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          value={String(value)}
                          onChange={(e) => setSelectedItem({ ...selectedItem, [key]: e.target.value })}
                          className="w-16 h-16 rounded-lg border border-gray-200 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={String(value)}
                          onChange={(e) => setSelectedItem({ ...selectedItem, [key]: e.target.value })}
                          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                        />
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={String(value)}
                        onChange={(e) => setSelectedItem({ ...selectedItem, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  const renderDataTable = () => {
    const getItemKey = (item: any) => {
      if (activeTab === 'posts') return 'title';
      if (activeTab === 'team') return 'name';
      if (activeTab === 'slideshow') return 'title';
      if (activeTab === 'media') return 'name';
      if (activeTab === 'contact') return 'label';
      if (activeTab === 'settings') return 'label';
      return 'id';
    };

    return (
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-700">ID</th>
                <th className="text-left p-4 font-semibold text-gray-700">
                  {activeTab === 'posts' ? 'Title' : 
                   activeTab === 'team' ? 'Name' : 
                   activeTab === 'slideshow' ? 'Title' : 
                   activeTab === 'media' ? 'File' :
                   activeTab === 'contact' ? 'Label' : 
                   'Setting'}
                </th>
                {activeTab === 'posts' && <th className="text-left p-4 font-semibold text-gray-700">Section</th>}
                {activeTab === 'posts' && <th className="text-left p-4 font-semibold text-gray-700">Status</th>}
                {activeTab === 'team' && <th className="text-left p-4 font-semibold text-gray-700">Role</th>}
                {activeTab === 'team' && <th className="text-left p-4 font-semibold text-gray-700">Featured</th>}
                {activeTab === 'slideshow' && <th className="text-left p-4 font-semibold text-gray-700">Order</th>}
                {activeTab === 'slideshow' && <th className="text-left p-4 font-semibold text-gray-700">Active</th>}
                {activeTab === 'media' && <th className="text-left p-4 font-semibold text-gray-700">Type</th>}
                {activeTab === 'media' && <th className="text-left p-4 font-semibold text-gray-700">Section</th>}
                {activeTab === 'contact' && <th className="text-left p-4 font-semibold text-gray-700">Value</th>}
                {activeTab === 'settings' && <th className="text-left p-4 font-semibold text-gray-700">Value</th>}
                <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item: any, index: number) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm text-gray-500">#{item.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium text-text-ink">{item[getItemKey(item)]}</span>
                  </td>
                  {activeTab === 'posts' && (
                    <td className="p-4">
                      <span className="text-sm text-gray-700">{item.section}</span>
                    </td>
                  )}
                  {activeTab === 'posts' && (
                    <td className="p-4">
                      <Badge variant={item.status === 'published' ? 'success' : 'warning'}>
                        {item.status}
                      </Badge>
                    </td>
                  )}
                  {activeTab === 'team' && (
                    <td className="p-4">
                      <span className="text-sm text-gray-700">{item.role}</span>
                    </td>
                  )}
                  {activeTab === 'team' && (
                    <td className="p-4">
                      <Badge variant={item.featured ? 'primary' : 'default'}>
                        {item.featured ? 'Yes' : 'No'}
                      </Badge>
                    </td>
                  )}
                  {activeTab === 'slideshow' && (
                    <td className="p-4">
                      <span className="text-sm text-gray-700">{item.order}</span>
                    </td>
                  )}
                  {activeTab === 'slideshow' && (
                    <td className="p-4">
                      <Badge variant={item.active ? 'success' : 'default'}>
                        {item.active ? 'Active' : 'Inactive'}
                      </Badge>
                    </td>
                  )}
                  {activeTab === 'media' && (
                    <td className="p-4">
                      <span className="text-sm text-gray-700 capitalize">{item.type}</span>
                    </td>
                  )}
                  {activeTab === 'media' && (
                    <td className="p-4">
                      <span className="text-sm text-gray-700">{item.section || '—'}</span>
                    </td>
                  )}
                  {activeTab === 'contact' && (
                    <td className="p-4">
                      <span className="text-sm text-gray-700">{item.value}</span>
                    </td>
                  )}
                  {activeTab === 'settings' && (
                    <td className="p-4">
                      <span className="text-sm text-gray-700">{item.value}</span>
                    </td>
                  )}
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      {activeTab !== 'contact' && activeTab !== 'settings' && (
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredData.length === 0 && (
          <div className="p-12 text-center">
            <Database className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No data found matching your criteria.</p>
          </div>
        )}
      </Card>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold font-display text-text-ink">
              Admin Data Center
            </h1>
            <p className="text-gray-600 mt-1">
              Manage all your website data from one place
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={handleAdd}
            disabled={activeTab === 'contact' || activeTab === 'settings'}
            className="flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add New
          </Button>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {tabs.map((tab) => (
            <Card
              key={tab.id}
              className={`cursor-pointer transition-all ${
                activeTab === tab.id ? 'ring-2 ring-primary-teal' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="p-4 text-center">
                <tab.icon className={`w-6 h-6 mx-auto mb-2 ${
                  activeTab === tab.id ? 'text-primary-teal' : 'text-gray-400'
                }`} />
                <div className="text-2xl font-bold text-text-ink">{tab.count}</div>
                <div className="text-sm text-gray-600">{tab.label}</div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                <Badge variant="default" className="text-xs">
                  {tab.count}
                </Badge>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={`Search ${activeTab}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                  />
                </div>

                <select className="px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all">
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                <select className="px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {renderDataTable()}
        </motion.div>

        {/* Bulk Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="text-sm text-gray-600">
            Showing {filteredData.length} of {currentData.length} items
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              Import Data
            </Button>
          </div>
        </motion.div>

        {/* Edit Modal */}
        {isEditing && renderEditForm()}
      </div>
    </AdminLayout>
  );
}