'use client';

import { useState } from 'react';
import { Upload, Search, Image as ImageIcon, FileText, Trash2, Star, Video } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLiveCms } from '@/lib/cms-client';
import { useToast } from '@/components/ui/Toast';
import { DEFAULT_INBOUND_ROUTES, GALLERY_SECTIONS, type InboundRoute, type MediaItem } from '@/lib/types';
import MediaBlock from '@/components/public/MediaBlock';
import { compressImage } from '@/lib/utils';

export default function MediaLibrary() {
  const { data: mediaItems, save, loading, reload } = useLiveCms<MediaItem[]>('media', []);
  const { data: routes } = useLiveCms<InboundRoute[]>('routes', DEFAULT_INBOUND_ROUTES);
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterSection, setFilterSection] = useState('all');
  const [uploadSection, setUploadSection] = useState(GALLERY_SECTIONS[0]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [youtube, setYoutube] = useState('');

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this file?')) return;
    try {
      const updated = mediaItems.filter((item) => item.id !== id);
      await save(updated);
      // Optimistic update - no need to reload
      showToast('success', 'File deleted successfully!');
    } catch (error) {
      showToast('error', 'Failed to delete file. Please try again.');
      console.error('Delete error:', error);
    }
  };

  const toggleFeatured = async (id: string) => {
    try {
      const item = mediaItems.find((item) => item.id === id);
      const updated = mediaItems.map((item) => (item.id === id ? { ...item, featured: !item.featured } : item));
      await save(updated);
      // Optimistic update - no need to reload
      showToast('success', item?.featured ? 'Removed from gallery!' : 'Added to gallery!');
    } catch (error) {
      showToast('error', 'Failed to update featured status. Please try again.');
      console.error('Toggle error:', error);
    }
  };

  const setSection = async (id: string, section: string) => {
    try {
      const updated = mediaItems.map((item) => (item.id === id ? { ...item, section, routeId: item.section === section ? item.routeId : undefined } : item));
      await save(updated);
      // Optimistic update - no need to reload
      showToast('success', 'Service section updated!');
    } catch (error) {
      showToast('error', 'Failed to update section. Please try again.');
      console.error('Section error:', error);
    }
  };

  const setRoute = async (id: string, routeId: string) => {
    try {
      const route = routes.find((entry) => entry.id === routeId);
      const updated = mediaItems.map((item) =>
          item.id === id
            ? { ...item, routeId: routeId || undefined, section: route?.section || item.section }
            : item,
        );
      await save(updated);
      // Optimistic update - no need to reload
      showToast('success', 'Destination page updated!');
    } catch (error) {
      showToast('error', 'Failed to update destination. Please try again.');
      console.error('Route error:', error);
    }
  };

  const uploadFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setIsUploading(true);
    setUploadProgress(0);
    try {
      const fileArray = Array.from(files);
      const totalFiles = fileArray.length;
      let completed = 0;
      
      // Compress images before upload for better performance
      const compressPromises = fileArray.map(async (file) => {
        if (file.type.startsWith('image/')) {
          return await compressImage(file, 1920, 0.8);
        }
        return file;
      });
      
      const compressedFiles = await Promise.all(compressPromises);
      setUploadProgress(30); // Compression done
      
      // Upload files in parallel for better performance
      const uploadPromises = compressedFiles.map(async (file) => {
        const form = new FormData();
        form.append('file', file);
        form.append('section', uploadSection);
        form.append('featured', 'true');
        const res = await fetch('/api/upload', { method: 'POST', body: form });
        if (!res.ok) throw new Error(`Upload failed for ${file.name}`);
        completed++;
        setUploadProgress(30 + Math.round((completed / totalFiles) * 70));
        return res.json();
      });
      
      const results = await Promise.allSettled(uploadPromises);
      const successCount = results.filter(r => r.status === 'fulfilled').length;
      const failCount = results.filter(r => r.status === 'rejected').length;
      
      if (failCount > 0) {
        showToast('warning', `${successCount} uploaded, ${failCount} failed`);
      } else {
        showToast('success', `${successCount} file(s) uploaded successfully!`);
      }
      
      // Optimistic: only reload if uploads succeeded
      if (successCount > 0) {
        await reload();
      }
    } catch (error) {
      console.error(error);
      showToast('error', 'Upload failed. Try a smaller file.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const addYoutube = async () => {
    if (!youtube.trim()) return;
    setIsUploading(true);
    try {
      const form = new FormData();
      form.append('youtube', youtube.trim());
      form.append('caption', 'Featured video');
      form.append('featured', 'true');
      form.append('section', uploadSection);
      const res = await fetch('/api/upload', { method: 'POST', body: form });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Could not add video');
      }
      setYoutube('');
      await reload();
      showToast('success', 'Video added successfully!');
    } catch (error) {
      showToast('error', error instanceof Error ? error.message : 'Could not add video');
    } finally {
      setIsUploading(false);
    }
  };

  const filteredItems = mediaItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesSection = filterSection === 'all' || item.section === filterSection || (filterSection === 'unassigned' && !item.section);
    return matchesSearch && matchesType && matchesSection;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-display text-text-ink">Media Library</h1>
            <p className="text-gray-600 mt-1">Assign a service and a destination. Use the star button to show/hide images in the public gallery. Gallery clicks open that destination page (for example /services/inbound-tourism/coxs-bazar).</p>
          </div>
          <Button variant="primary" onClick={() => document.getElementById('file-input')?.click()} disabled={isUploading}>
            <Upload className="w-5 h-5 mr-2" />
            {isUploading ? `Uploading... ${uploadProgress}%` : 'Upload files'}
          </Button>
          <input
            id="file-input"
            type="file"
            multiple
            accept="image/*,video/mp4,video/webm,video/ogg,.pdf"
            className="hidden"
            onChange={(e) => void uploadFiles(e.target.files)}
          />
        </div>

        <Card>
          <div className="p-6 grid md:grid-cols-[1fr_220px_auto] gap-3">
            <input
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              placeholder="Paste a YouTube or Vimeo URL"
              className="px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
            />
            <select
              value={uploadSection}
              onChange={(e) => setUploadSection(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            >
              {GALLERY_SECTIONS.map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
            <Button variant="outline" onClick={() => void addYoutube()} disabled={isUploading}>
              <Video className="w-4 h-4 mr-2" /> Add video link
            </Button>
          </div>
        </Card>

        <Card>
          <div className="p-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search media..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
              />
            </div>
            <select
              value={uploadSection}
              onChange={(e) => setUploadSection(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
              title="Service for new uploads"
            >
              {GALLERY_SECTIONS.map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            >
              <option value="all">All types</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
              <option value="document">Documents</option>
            </select>
            <select
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200"
            >
              <option value="all">All services</option>
              {GALLERY_SECTIONS.map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
              <option value="unassigned">Unassigned</option>
            </select>
          </div>
        </Card>

        {loading && <p className="text-sm text-gray-500">Loading media…</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-square relative bg-gray-100">
                {item.type === 'document' ? (
                  <div className="h-full flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-300" />
                  </div>
                ) : (
                  <MediaBlock
                    src={item.url}
                    video={item.type === 'video' ? item.embedUrl || item.url : undefined}
                    alt={item.name}
                    className="h-full"
                    controls={item.type === 'video'}
                  />
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.type} · {item.size}</p>
                <select
                  value={item.section || ''}
                  onChange={(e) => void setSection(item.id, e.target.value)}
                  className="mt-2 w-full text-xs px-2 py-2 rounded-lg border border-gray-200"
                >
                  <option value="">No service section</option>
                  {GALLERY_SECTIONS.map((section) => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
                <select
                  value={item.routeId || ''}
                  onChange={(e) => void setRoute(item.id, e.target.value)}
                  className="mt-2 w-full text-xs px-2 py-2 rounded-lg border border-gray-200"
                >
                  <option value="">No destination page</option>
                  {routes
                    .filter((route) => !item.section || route.section === item.section)
                    .map((route) => (
                      <option key={route.id} value={route.id}>
                        {route.name}
                      </option>
                    ))}
                </select>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => void toggleFeatured(item.id)} className="p-2 rounded-lg hover:bg-gray-100" title={item.featured ? "Hide from gallery" : "Show in gallery"}>
                    <Star className={`w-4 h-4 ${item.featured ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
                  </button>
                  <button onClick={() => void handleDelete(item.id)} className="p-2 rounded-lg hover:bg-red-50">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {!loading && filteredItems.length === 0 && (
          <Card>
            <div className="p-12 text-center">
              <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Choose a service above, then upload. Each image appears under that heading on the public Gallery page.</p>
            </div>
          </Card>
        )}

        <Card className="border-2 border-dashed" >
          <button
            type="button"
            className="w-full p-12 text-center"
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="font-semibold mb-1">Drop files or click to browse</h3>
            <p className="text-sm text-gray-500">JPG, PNG, WebP, MP4, WebM</p>
          </button>
        </Card>
      </div>
    </AdminLayout>
  );
}
