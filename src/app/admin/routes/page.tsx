'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Image as ImageIcon } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AdminLayout from '@/components/admin/AdminLayout';
import MediaPicker from '@/components/admin/MediaPicker';
import { useLiveCms } from '@/lib/cms-client';
import { useToast } from '@/components/ui/Toast';
import { generateId } from '@/lib/utils';
import { servicePathFromSection, slugify } from '@/lib/cms-helpers';
import { DEFAULT_INBOUND_ROUTES, GALLERY_SECTIONS, type InboundRoute } from '@/lib/types';

export default function ServiceCardsManager() {
  const { data: routes, save, reload } = useLiveCms<InboundRoute[]>('routes', DEFAULT_INBOUND_ROUTES);
  const { showToast } = useToast();
  const [filterSection, setFilterSection] = useState('all');
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selected, setSelected] = useState<InboundRoute | null>(null);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);
  const [pickerTarget, setPickerTarget] = useState<'cover' | 'gallery'>('cover');

  const ordered = [...routes]
    .filter((route) => filterSection === 'all' || route.section === filterSection)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const closeEditor = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelected(null);
  };

  const handleAdd = () => {
    setSelected({
      id: generateId(),
      name: '',
      slug: '',
      tag: '',
      days: '',
      summary: '',
      body: '',
      image: '',
      gallery: [],
      section: filterSection === 'all' ? 'Inbound Tourism' : filterSection,
      active: true,
      order: routes.length + 1,
    });
    setIsAdding(true);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!selected?.name.trim()) {
      showToast('error', 'Please enter a title.');
      return;
    }
    const next = {
      ...selected,
      id: selected.id || generateId(),
      section: selected.section || 'Inbound Tourism',
      slug: slugify(selected.slug || selected.name),
      gallery: Array.from(new Set([selected.image, ...(selected.gallery || [])].filter(Boolean))) as string[],
    };
    try {
      if (isAdding) {
        await save([...routes, next]);
        showToast('success', 'Card added successfully!');
      } else {
        await save(routes.map((route) => (route.id === next.id ? next : route)));
        showToast('success', 'Card updated successfully!');
      }
      await reload();
      closeEditor();
    } catch (error) {
      showToast('error', 'Failed to save card. Please try again.');
      console.error('Save error:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Remove this card from the service page?')) return;
    try {
      await save(routes.filter((route) => route.id !== id));
      await reload();
      showToast('success', 'Card removed successfully!');
    } catch (error) {
      showToast('error', 'Failed to remove card. Please try again.');
      console.error('Delete error:', error);
    }
  };

  const toggleActive = async (id: string) => {
    try {
      await save(routes.map((route) => (route.id === id ? { ...route, active: route.active === false } : route)));
      await reload();
      const route = routes.find((r) => r.id === id);
      showToast('success', route?.active === false ? 'Card is now visible!' : 'Card is now hidden!');
    } catch (error) {
      showToast('error', 'Failed to update card visibility. Please try again.');
      console.error('Toggle error:', error);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display text-text-ink">Service cards</h1>
            <p className="text-gray-600 mt-1">
              These cards appear in the route/highlights grid on each service page. Assign a service so the card only shows there. Inbound cards also appear on the homepage.
            </p>
          </div>
          <Button variant="primary" onClick={handleAdd}>
            <Plus className="w-5 h-5 mr-2" />
            Add card
          </Button>
        </div>

        <Card>
          <div className="p-4">
            <select
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            >
              <option value="all">All services</option>
              {GALLERY_SECTIONS.map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          {ordered.map((route) => (
            <Card key={route.id} className={route.active === false ? 'opacity-60' : ''}>
              <div className="flex gap-4 p-4">
                <div className="w-28 h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  {route.image ? (
                    <img src={route.image} alt={route.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full hero-mesh" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-semibold text-text-ink">{route.name}</h3>
                      <p className="text-xs text-primary-teal mt-1">{route.section} · {route.tag} · {route.days}</p>
                    </div>
                    <span className="text-xs text-gray-400">#{route.order}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{route.summary}</p>
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => { setSelected({ ...route, section: route.section || 'Inbound Tourism', gallery: route.gallery || [] }); setIsAdding(false); setIsEditing(true); }} className="p-2 rounded-lg hover:bg-gray-100" title="Edit">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button onClick={() => void toggleActive(route.id)} className="px-2 py-1 text-xs rounded-lg hover:bg-gray-100">
                      {route.active === false ? 'Show' : 'Hide'}
                    </button>
                    <button onClick={() => void handleDelete(route.id)} className="p-2 rounded-lg hover:bg-red-50" title="Delete">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {isEditing && selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-display">{isAdding ? 'Add card' : 'Edit card'}</h2>
                <button onClick={closeEditor} className="p-2 rounded-lg hover:bg-gray-100">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Show on this service *</label>
                <select
                  value={selected.section}
                  onChange={(e) => setSelected({ ...selected, section: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                >
                  {GALLERY_SECTIONS.map((section) => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  value={selected.name}
                  onChange={(e) =>
                    setSelected({
                      ...selected,
                      name: e.target.value,
                      slug: isAdding && !selected.slug ? slugify(e.target.value) : selected.slug,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                  placeholder="Cox's Bazar"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Page URL slug</label>
                <input
                  value={selected.slug || ''}
                  onChange={(e) => setSelected({ ...selected, slug: slugify(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                  placeholder="coxs-bazar"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Opens at /services/{servicePathFromSection(selected.section)}/{selected.slug || slugify(selected.name) || '…'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tag</label>
                  <input
                    value={selected.tag}
                    onChange={(e) => setSelected({ ...selected, tag: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                    placeholder="Coast"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration / extra line</label>
                  <input
                    value={selected.days}
                    onChange={(e) => setSelected({ ...selected, days: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                    placeholder="3–5 days"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Display order</label>
                <input
                  type="number"
                  value={selected.order}
                  onChange={(e) => setSelected({ ...selected, order: Number(e.target.value) || 0 })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={selected.summary}
                  onChange={(e) => setSelected({ ...selected, summary: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Full page content (optional)</label>
                <textarea
                  value={selected.body || ''}
                  onChange={(e) => setSelected({ ...selected, body: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal resize-none"
                  placeholder="Itinerary notes, what is included, who this is for…"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cover image</label>
                {selected.image ? (
                  <div className="h-32 rounded-xl overflow-hidden border border-gray-200 mb-2">
                    <img src={selected.image} alt="" className="w-full h-full object-cover" />
                  </div>
                ) : null}
                <Button
                  variant="outline"
                  className="w-full mb-2"
                  onClick={() => {
                    setPickerTarget('cover');
                    setIsMediaPickerOpen(true);
                  }}
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  {selected.image ? 'Change cover image' : 'Select cover image'}
                </Button>
                <input
                  value={selected.image || ''}
                  onChange={(e) => setSelected({ ...selected, image: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                  placeholder="/uploads/..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">More photos</label>
                <p className="text-xs text-gray-500 mb-2">These show on the destination page under the cover.</p>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {(selected.gallery || []).filter((url) => url && url !== selected.image).map((url) => (
                    <div key={url} className="relative aspect-video rounded-lg overflow-hidden border border-gray-200">
                      <img src={url} alt="" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        className="absolute top-1 right-1 p-1 rounded-md bg-black/60 text-white"
                        onClick={() =>
                          setSelected({
                            ...selected,
                            gallery: (selected.gallery || []).filter((item) => item !== url),
                          })
                        }
                        aria-label="Remove photo"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setPickerTarget('gallery');
                    setIsMediaPickerOpen(true);
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add photos
                </Button>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selected.active !== false}
                  onChange={(e) => setSelected({ ...selected, active: e.target.checked })}
                />
                Show on website
              </label>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={closeEditor}>Cancel</Button>
                <Button variant="primary" onClick={() => void handleSave()}>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      <MediaPicker
        isOpen={isMediaPickerOpen}
        onClose={() => setIsMediaPickerOpen(false)}
        onSelect={(url) => {
          if (!selected) return;
          if (pickerTarget === 'cover') {
            setSelected({ ...selected, image: url, gallery: Array.from(new Set([url, ...(selected.gallery || [])])) });
            return;
          }
          const gallery = Array.from(new Set([...(selected.gallery || []), url]));
          setSelected({
            ...selected,
            gallery,
            image: selected.image || url,
          });
        }}
        currentUrl={pickerTarget === 'cover' ? selected?.image : undefined}
        filterType="image"
        stayOpen={pickerTarget === 'gallery'}
      />
    </AdminLayout>
  );
}
