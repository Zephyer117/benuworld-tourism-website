'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  FileText,
  Save,
  X
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AdminLayout from '@/components/admin/AdminLayout';
import MediaPicker from '@/components/admin/MediaPicker';
import { Image as ImageIcon } from 'lucide-react';
import { useLiveCms } from '@/lib/cms-client';
import { useToast } from '@/components/ui/Toast';
import { generateId, compressImage } from '@/lib/utils';
import type { Post } from '@/lib/types';

export default function PostsManager() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sectionFilter, setSectionFilter] = useState('all');
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);
  const [mediaTarget, setMediaTarget] = useState<'image' | 'video'>('image');
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [galleryUploadProgress, setGalleryUploadProgress] = useState(0);

  const { data: posts, save, loading, reload } = useLiveCms<Post[]>('posts', []);

  const sections = ['all', 'Inbound Tourism', 'Outbound Tourism', 'Foreign Investment', 'Teaching Curriculum', 'Company News'];
  const statuses = ['all', 'published', 'draft', 'scheduled'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    const matchesSection = sectionFilter === 'all' || post.section === sectionFilter;
    return matchesSearch && matchesStatus && matchesSection;
  });

  const handleEdit = (post: any) => {
    setSelectedPost({ ...post, gallery: Array.isArray(post.gallery) ? post.gallery : [] });
    setIsEditing(true);
    setIsAdding(false);
  };

  const uploadPostImages = async (files: FileList | null) => {
    if (!files?.length || !selectedPost) return;
    setUploadingGallery(true);
    setGalleryUploadProgress(0);
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
      setGalleryUploadProgress(30); // Compression done
      
      // Upload images in parallel for better performance
      const uploadPromises = compressedFiles.map(async (file) => {
        const form = new FormData();
        form.append('file', file);
        form.append('library', 'false');
        const res = await fetch('/api/upload', { method: 'POST', body: form });
        if (!res.ok) throw new Error(`Upload failed for ${file.name}`);
        completed++;
        setGalleryUploadProgress(30 + Math.round((completed / totalFiles) * 70));
        return res.json();
      });
      
      const results = await Promise.allSettled(uploadPromises);
      const urls: string[] = [];
      let failCount = 0;
      
      results.forEach((result) => {
        if (result.status === 'fulfilled' && result.value.url) {
          urls.push(result.value.url);
        } else {
          failCount++;
        }
      });
      
      setSelectedPost({
        ...selectedPost,
        gallery: [...(selectedPost.gallery || []), ...urls],
      });
      
      if (failCount > 0) {
        showToast('warning', `${urls.length} uploaded, ${failCount} failed`);
      } else {
        showToast('success', `${urls.length} image(s) uploaded successfully!`);
      }
    } catch (error) {
      console.error(error);
      showToast('error', 'Could not upload post images. Try again.');
    } finally {
      setUploadingGallery(false);
      setGalleryUploadProgress(0);
    }
  };

  const removeGalleryImage = (url: string) => {
    if (!selectedPost) return;
    setSelectedPost({
      ...selectedPost,
      gallery: (selectedPost.gallery || []).filter((item: string) => item !== url),
    });
  };

  const handleAdd = () => {
    const newPost = {
      id: generateId(),
      title: '',
      slug: '',
      section: 'Inbound Tourism',
      status: 'draft',
      publishedAt: new Date().toISOString(),
      date: new Date().toISOString().slice(0, 10),
      author: 'Admin',
      views: 0,
      excerpt: '',
      content: '',
      image: '',
      video: '',
      gallery: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSelectedPost(newPost);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleSave = async () => {
    if (!selectedPost) return;
    try {
      const post = {
        ...selectedPost,
        id: selectedPost.id || generateId(),
        slug: selectedPost.slug || selectedPost.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        content: typeof selectedPost.content === 'string' ? selectedPost.content : '',
        image: typeof selectedPost.image === 'string' ? selectedPost.image : '',
        gallery: Array.isArray(selectedPost.gallery) ? selectedPost.gallery.filter(Boolean) : [],
        updatedAt: new Date().toISOString(),
      };
      if (isAdding) {
        await save([post, ...posts]);
        showToast('success', 'Post created successfully!');
      } else {
        await save(posts.map((p) => ((p.id || (p as { _id?: string })._id) === post.id ? post : p)));
        showToast('success', 'Post updated successfully!');
      }
      await reload();
      setIsEditing(false);
      setIsAdding(false);
      setSelectedPost(null);
    } catch (error) {
      showToast('error', 'Failed to save post. Please try again.');
      console.error('Save error:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await save(posts.filter((post) => post.id !== id && (post as { _id?: string })._id !== id));
        await reload();
        showToast('success', 'Post deleted successfully!');
      } catch (error) {
        showToast('error', 'Failed to delete post. Please try again.');
        console.error('Delete error:', error);
      }
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await save(
        posts.map((p) =>
          p.id === id || (p as { _id?: string })._id === id ? { ...p, status: newStatus as Post['status'] } : p,
        ),
      );
      showToast('success', `Post status changed to ${newStatus}!`);
    } catch (error) {
      showToast('error', 'Failed to update status. Please try again.');
      console.error('Status change error:', error);
    }
    await reload();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'success';
      case 'draft': return 'warning';
      case 'scheduled': return 'default';
      default: return 'default';
    }
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
              Posts Manager
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your blog posts and content
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleAdd} className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Post
          </Button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>

                {/* Section Filter */}
                <select
                  value={sectionFilter}
                  onChange={(e) => setSectionFilter(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                >
                  {sections.map(section => (
                    <option key={section} value={section}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Posts Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-semibold text-gray-700">Post</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Section</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Author</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Date</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Views</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post, index) => (
                    <tr
                      key={post.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-primary-teal to-primary-aqua flex items-center justify-center">
                            {typeof post.image === 'string' && post.image ? (
                              <img src={post.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <FileText className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-text-ink">{post.title}</div>
                            <div className="text-sm text-gray-500">ID: {String(post.id).slice(-8)}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-700">{post.section}</span>
                      </td>
                      <td className="p-4">
                        <Badge variant={getStatusColor(post.status) as any}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center text-sm text-gray-700">
                          <Calendar className="w-4 h-4 mr-2" />
                          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-gray-700">{post.views || 0}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors" title="View">
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button onClick={() => handleEdit(post)} className="p-2 rounded-lg hover:bg-gray-200 transition-colors" title="Edit">
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button onClick={() => handleDelete(post.id)} className="p-2 rounded-lg hover:bg-red-100 transition-colors" title="Delete">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredPosts.length === 0 && (
              <div className="p-12 text-center">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No posts found matching your criteria.</p>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-between"
        >
          <div className="text-sm text-gray-600">
            Showing {filteredPosts.length} of {posts.length} posts
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="primary" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Edit/Add Modal */}
      {isEditing && selectedPost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display text-text-ink">
                  {isAdding ? 'Create New Post' : 'Edit Post'}
                </h2>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setIsAdding(false);
                    setSelectedPost(null);
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
                    value={selectedPost.title}
                    onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="Post title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                  <textarea
                    value={selectedPost.excerpt || ''}
                    onChange={(e) => setSelectedPost({ ...selectedPost, excerpt: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all resize-none"
                    placeholder="Short summary for the news page..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Section *</label>
                    <select
                      value={selectedPost.section}
                      onChange={(e) => setSelectedPost({ ...selectedPost, section: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    >
                      <option value="Inbound Tourism">Inbound Tourism</option>
                      <option value="Outbound Tourism">Outbound Tourism</option>
                      <option value="Foreign Investment">Foreign Investment</option>
                      <option value="Teaching Curriculum">Teaching Curriculum</option>
                      <option value="Company News">Company News</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                    <select
                      value={selectedPost.status}
                      onChange={(e) => setSelectedPost({ ...selectedPost, status: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                  <input
                    type="text"
                    value={selectedPost.author}
                    onChange={(e) => setSelectedPost({ ...selectedPost, author: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="Author name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <div className="space-y-2">
                    {typeof selectedPost.image === 'string' && selectedPost.image && (
                      <div className="w-full h-32 rounded-lg overflow-hidden border border-gray-200">
                        <img
                          src={selectedPost.image}
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
                      {selectedPost.image ? 'Change Image' : 'Select Image from Media Library'}
                    </Button>
                    <input
                      type="text"
                      value={typeof selectedPost.image === 'string' ? selectedPost.image : ''}
                      onChange={(e) => setSelectedPost({ ...selectedPost, image: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      placeholder="/images/... (or use media picker above)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video (optional)</label>
                  <Button
                    variant="outline"
                    onClick={() => { setMediaTarget('video'); setIsMediaPickerOpen(true); }}
                    className="w-full mb-2"
                  >
                    Select video from library
                  </Button>
                  <input
                    type="text"
                    value={selectedPost.video || ''}
                    onChange={(e) => setSelectedPost({ ...selectedPost, video: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary-teal"
                    placeholder="YouTube URL or /uploads/video.mp4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">This post’s photos</label>
                  <p className="text-xs text-gray-500 mb-3">
                    These images belong only to this article. They will not appear on the Gallery page or on other posts.
                  </p>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {(selectedPost.gallery || []).map((url: string) => (
                      <div key={url} className="relative h-24 rounded-lg overflow-hidden border border-gray-200">
                        <img src={url} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeGalleryImage(url)}
                          className="absolute top-1 right-1 p-1 rounded-full bg-black/60 text-white"
                          title="Remove"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <input
                    id="post-gallery-input"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      void uploadPostImages(e.target.files);
                      e.target.value = '';
                    }}
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('post-gallery-input')?.click()}
                    className="w-full"
                    disabled={uploadingGallery}
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    {uploadingGallery ? `Uploading... ${galleryUploadProgress}%` : 'Upload photos for this post only'}
                  </Button>
                </div>

                <div>
                  <textarea
                    value={typeof selectedPost.content === 'string' ? selectedPost.content : ''}
                    onChange={(e) => setSelectedPost({ ...selectedPost, content: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all resize-none"
                    placeholder="Post content..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" onClick={() => {
                  setIsEditing(false);
                  setIsAdding(false);
                  setSelectedPost(null);
                }}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  {isAdding ? 'Create Post' : 'Save Changes'}
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
          selectedPost &&
          setSelectedPost({
            ...selectedPost,
            ...(mediaTarget === 'video' ? { video: url } : { image: url }),
          })
        }
        currentUrl={mediaTarget === 'video' ? selectedPost?.video : selectedPost?.image}
        filterType={mediaTarget === 'video' ? 'video' : 'image'}
      />
    </AdminLayout>
  );
}