'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  GripVertical, 
  Image as ImageIcon,
  Eye,
  EyeOff,
  Save,
  X
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AdminLayout from '@/components/admin/AdminLayout';
import MediaPicker from '@/components/admin/MediaPicker';
import { useLiveCms } from '@/lib/cms-client';
import { useToast } from '@/components/ui/Toast';
import { generateId } from '@/lib/utils';
import MediaBlock from '@/components/public/MediaBlock';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  imageUrl?: string;
  video?: string;
  active: boolean;
  order: number;
}

export default function SlideshowManager() {
  const { data: slides, save, reload } = useLiveCms<Slide[]>('slideshow', []);
  const { showToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);
  const [mediaTarget, setMediaTarget] = useState<'image' | 'video'>('image');

  const handleEdit = (slide: Slide) => {
    setSelectedSlide({ ...slide, image: slide.image || slide.imageUrl || '' });
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleAdd = () => {
    const newSlide: Slide = {
      id: generateId(),
      title: '',
      subtitle: '',
      ctaText: 'Learn more',
      ctaLink: '/contact',
      image: '',
      video: '',
      active: true,
      order: slides.length + 1,
    };
    setSelectedSlide(newSlide);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleSave = async () => {
    if (!selectedSlide) return;
    try {
      const slide = {
        ...selectedSlide,
        id: selectedSlide.id || generateId(),
        image: selectedSlide.image || selectedSlide.imageUrl || '',
        imageUrl: selectedSlide.image || selectedSlide.imageUrl || '',
      };
      if (isAdding) {
        await save([...slides, slide]);
        showToast('success', 'Slide added successfully!');
      } else {
        await save(slides.map((s) => (s.id === slide.id ? slide : s)));
        showToast('success', 'Slide updated successfully!');
      }
      await reload();
      setIsEditing(false);
      setIsAdding(false);
      setSelectedSlide(null);
    } catch (error) {
      showToast('error', 'Failed to save slide. Please try again.');
      console.error('Save error:', error);
    }
  };

  const toggleActive = async (id: string) => {
    try {
      const slide = slides.find((s) => s.id === id);
      await save(slides.map((slide) => (slide.id === id ? { ...slide, active: !slide.active } : slide)));
      showToast('success', slide?.active ? 'Slide deactivated!' : 'Slide activated!');
    } catch (error) {
      showToast('error', 'Failed to toggle slide. Please try again.');
      console.error('Toggle error:', error);
    }
  };

  const deleteSlide = async (id: string) => {
    if (confirm('Are you sure you want to delete this slide?')) {
      try {
        await save(slides.filter((slide) => slide.id !== id));
        await reload();
        showToast('success', 'Slide deleted successfully!');
      } catch (error) {
        showToast('error', 'Failed to delete slide. Please try again.');
        console.error('Delete error:', error);
      }
    }
  };

  const moveSlide = async (currentIndex: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= slides.length) return;
    try {
      const next = [...slides];
      const [movedSlide] = next.splice(currentIndex, 1);
      next.splice(newIndex, 0, movedSlide);
      await save(next.map((slide, index) => ({ ...slide, order: index + 1 })));
      await reload();
      showToast('success', 'Slide order updated successfully!');
    } catch (error) {
      showToast('error', 'Failed to update order. Please try again.');
      console.error('Move error:', error);
    }
  };

  const activeSlides = slides.filter(slide => slide.active);

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
              Slideshow Manager
            </h1>
            <p className="text-gray-600 mt-1">
              Manage homepage hero slides and their order
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleAdd} className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add New Slide
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Card>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-teal font-display">{slides.length}</div>
              <div className="text-gray-600 text-sm">Total Slides</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 font-display">{activeSlides.length}</div>
              <div className="text-gray-600 text-sm">Active Slides</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="text-3xl font-bold text-gray-400 font-display">{slides.length - activeSlides.length}</div>
              <div className="text-gray-600 text-sm">Inactive Slides</div>
            </div>
          </Card>
        </motion.div>

        {/* Slides List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            {slides.map((slide: Slide, index: number) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className={!slide.active ? 'opacity-60' : ''}>
                  <div className="p-6">
                    <div className="flex gap-4">
                      {/* Drag Handle & Thumbnail */}
                      <div className="flex flex-col items-center space-y-2">
                        <button
                          onClick={() => moveSlide(index, 'up')}
                          disabled={index === 0}
                          className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <GripVertical className="w-5 h-5 text-gray-400 rotate-180" />
                        </button>
                        <div className="w-32 h-20 rounded-lg overflow-hidden bg-gray-100">
                          {slide.image || slide.imageUrl || slide.video ? (
                            <MediaBlock src={slide.image || slide.imageUrl} video={slide.video} alt={slide.title} className="h-20" controls={false} />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-teal to-primary-aqua">
                              <ImageIcon className="w-8 h-8 text-white/50" />
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => moveSlide(index, 'down')}
                          disabled={index === slides.length - 1}
                          className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <GripVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>

                      {/* Slide Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-500">#{slide.order}</span>
                          {!slide.active && (
                            <Badge variant="warning">Inactive</Badge>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-bold font-display text-text-ink mb-1">
                          {slide.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{slide.subtitle}</p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center text-gray-500">
                            <span className="font-medium">CTA:</span>
                            <span className="ml-1">{slide.ctaText}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <span className="font-medium">Link:</span>
                            <span className="ml-1 text-primary-teal">{slide.ctaLink}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => toggleActive(slide.id)}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          title={slide.active ? 'Deactivate' : 'Activate'}
                        >
                          {slide.active ? (
                            <Eye className="w-5 h-5 text-green-600" />
                          ) : (
                            <EyeOff className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <button onClick={() => handleEdit(slide)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Edit">
                          <Edit className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                          onClick={() => deleteSlide(slide.id)}
                          className="p-2 rounded-lg hover:bg-red-100 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5 text-red-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {slides.length === 0 && (
            <Card>
              <div className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-text-ink mb-2">No slides yet</h3>
                <p className="text-gray-500 mb-4">Add your first slide to create the homepage hero</p>
                <Button variant="primary" size="md" onClick={handleAdd}>
                  Add New Slide
                </Button>
              </div>
            </Card>
          )}
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-purple-50 border-purple-200">
            <div className="p-6">
              <h3 className="font-semibold text-purple-800 mb-2">Slideshow Best Practices</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Use high-quality images with consistent aspect ratios (16:9 recommended)</li>
                <li>• Keep text concise and readable against the background</li>
                <li>• Limit to 3-5 active slides for optimal loading time</li>
                <li>• Test CTAs to ensure they drive desired user actions</li>
                <li>• Update slides regularly to keep content fresh</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Edit/Add Modal */}
      {isEditing && selectedSlide && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display text-text-ink">
                  {isAdding ? 'Add New Slide' : 'Edit Slide'}
                </h2>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setIsAdding(false);
                    setSelectedSlide(null);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={selectedSlide.title}
                    onChange={(e) => setSelectedSlide({ ...selectedSlide, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="Slide title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={selectedSlide.subtitle}
                    onChange={(e) => setSelectedSlide({ ...selectedSlide, subtitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="Slide subtitle"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CTA Text</label>
                    <input
                      type="text"
                      value={selectedSlide.ctaText}
                      onChange={(e) => setSelectedSlide({ ...selectedSlide, ctaText: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      placeholder="Button text"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CTA Link</label>
                    <input
                      type="text"
                      value={selectedSlide.ctaLink}
                      onChange={(e) => setSelectedSlide({ ...selectedSlide, ctaLink: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      placeholder="/page-url"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <div className="space-y-2">
                    {selectedSlide.image && (
                      <div className="w-full h-32 rounded-lg overflow-hidden border border-gray-200">
                        <img
                          src={selectedSlide.image}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => { setMediaTarget('image'); setIsMediaPickerOpen(true); }}
                      className="w-full"
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {selectedSlide.image ? 'Change Image' : 'Select Image from Media Library'}
                    </Button>
                    <input
                      type="text"
                      value={selectedSlide.image}
                      onChange={(e) => setSelectedSlide({ ...selectedSlide, image: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      placeholder="/images/... (or use media picker above)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background video (optional)</label>
                  <Button
                    variant="outline"
                    onClick={() => { setMediaTarget('video'); setIsMediaPickerOpen(true); }}
                    className="w-full mb-2"
                  >
                    Select video
                  </Button>
                  <input
                    type="text"
                    value={selectedSlide.video || ''}
                    onChange={(e) => setSelectedSlide({ ...selectedSlide, video: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                    placeholder="YouTube URL or /uploads/clip.mp4"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="active"
                    checked={selectedSlide.active}
                    onChange={(e) => setSelectedSlide({ ...selectedSlide, active: e.target.checked })}
                    className="w-4 h-4 text-primary-teal rounded focus:ring-primary-teal"
                  />
                  <label htmlFor="active" className="ml-2 text-sm text-gray-700">
                    Active (show on homepage)
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" onClick={() => {
                  setIsEditing(false);
                  setIsAdding(false);
                  setSelectedSlide(null);
                }}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  {isAdding ? 'Add Slide' : 'Save Changes'}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Media Picker */}
      <MediaPicker
        isOpen={isMediaPickerOpen}
        onClose={() => setIsMediaPickerOpen(false)}
        onSelect={(url) =>
          selectedSlide &&
          setSelectedSlide({
            ...selectedSlide,
            ...(mediaTarget === 'video' ? { video: url } : { image: url }),
          })
        }
        currentUrl={mediaTarget === 'video' ? selectedSlide?.video : selectedSlide?.image}
        filterType={mediaTarget === 'video' ? 'video' : 'image'}
      />
    </AdminLayout>
  );
}