'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Image as ImageIcon, FileText, Check, Video } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cmsGet } from '@/lib/cms-client';
import type { MediaItem } from '@/lib/types';
import MediaBlock from '@/components/public/MediaBlock';

interface MediaPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string, item?: MediaItem) => void;
  currentUrl?: string;
  filterType?: 'image' | 'video' | 'all';
  stayOpen?: boolean;
}

export default function MediaPicker({
  isOpen,
  onClose,
  onSelect,
  currentUrl,
  filterType = 'image',
  stayOpen = false,
}: MediaPickerProps) {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    void cmsGet<MediaItem[]>('media').then((items) => {
      setMediaItems(items || []);
      const match = items?.find((m) => m.url === currentUrl || m.embedUrl === currentUrl);
      setSelectedItem(match || null);
    }).catch(console.error);
  }, [isOpen, currentUrl]);

  const filteredItems = mediaItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleConfirm = () => {
    if (!selectedItem) return;
    onSelect(selectedItem.embedUrl || selectedItem.url, selectedItem);
    if (!stayOpen) onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-bold font-display text-text-ink">Media Library</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search media..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {filteredItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <ImageIcon className="w-12 h-12 mb-4" />
                <p>No media yet. Upload in Admin → Media.</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedItem?.id === item.id
                        ? 'border-primary-teal ring-2 ring-primary-teal/30'
                        : 'border-gray-200'
                    }`}
                  >
                    {item.type === 'document' ? (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-gray-400" />
                      </div>
                    ) : (
                      <MediaBlock src={item.url} video={item.embedUrl || (item.type === 'video' ? item.url : undefined)} alt={item.name} className="h-full" controls={false} />
                    )}
                    {item.type === 'video' && (
                      <span className="absolute left-2 top-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1">
                        <Video className="w-3 h-3" /> Video
                      </span>
                    )}
                    {selectedItem?.id === item.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-primary-teal rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 truncate">
                      {item.name}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="p-4 border-t border-gray-200 flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button variant="primary" onClick={handleConfirm} disabled={!selectedItem}>
              Select
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
