'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  GripVertical, 
  Link, 
  Mail,
  Star,
  StarOff,
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
import { generateId } from '@/lib/utils';
import type { TeamMember } from '@/lib/types';

export default function TeamManager() {
  const { data: teamMembers, save, loading, reload } = useLiveCms<TeamMember[]>('team', []);
  const { showToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);

  const toggleFeatured = async (id: string) => {
    try {
      const member = teamMembers.find((m) => m.id === id);
      await save(teamMembers.map((m) => (m.id === id ? { ...m, featured: !m.featured } : m)));
      showToast('success', member?.featured ? 'Removed from featured!' : 'Added to featured!');
    } catch (error) {
      showToast('error', 'Failed to update featured status. Please try again.');
      console.error('Toggle error:', error);
    }
  };

  const deleteMember = async (id: string) => {
    if (confirm('Are you sure you want to remove this team member?')) {
      try {
        await save(teamMembers.filter((member) => member.id !== id));
        await reload();
        showToast('success', 'Team member removed successfully!');
      } catch (error) {
        showToast('error', 'Failed to remove team member. Please try again.');
        console.error('Delete error:', error);
      }
    }
  };

  const handleEdit = (member: any) => {
    setSelectedMember({ ...member });
    setIsEditing(true);
    setIsAdding(false);
  };

  const handleAdd = () => {
    const newMember = {
      id: generateId(),
      name: '',
      role: '',
      title: '',
      email: '',
      bio: '',
      image: '',
      photo: '',
      featured: false,
      order: teamMembers.length + 1,
      expertise: [],
    };
    setSelectedMember(newMember);
    setIsEditing(true);
    setIsAdding(true);
  };

  const handleSave = async () => {
    if (!selectedMember) return;

    try {
      const member = {
        ...selectedMember,
        id: selectedMember.id || generateId(),
        image: selectedMember.image || selectedMember.photo || '',
        photo: selectedMember.image || selectedMember.photo || '',
        role: selectedMember.role || selectedMember.title || '',
      };
      if (isAdding) {
        await save([...teamMembers, member]);
        showToast('success', 'Team member added successfully!');
      } else {
        await save(teamMembers.map((item) => (item.id === member.id ? member : item)));
        showToast('success', 'Team member updated successfully!');
      }
      await reload();
      setIsEditing(false);
      setIsAdding(false);
      setSelectedMember(null);
    } catch (error) {
      console.error('Failed to save team member:', error);
      showToast('error', 'Failed to save team member. Please try again.');
    }
  };

  const moveMember = async (currentIndex: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= teamMembers.length) return;

    try {
      const newMembers = [...teamMembers];
      const [movedMember] = newMembers.splice(currentIndex, 1);
      newMembers.splice(newIndex, 0, movedMember);

      // Update order property
      const updatedMembers = newMembers.map((member, index) => ({
        ...member,
        order: index + 1
      }));

      await save(updatedMembers);
      showToast('success', 'Order updated successfully!');
    } catch (error) {
      showToast('error', 'Failed to update order. Please try again.');
      console.error('Move error:', error);
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
              Team Manager
            </h1>
            <p className="text-gray-600 mt-1">
              Manage team members and their display order
            </p>
          </div>
          <Button variant="primary" size="md" onClick={handleAdd} className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Team Member
          </Button>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card>
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      {/* Drag Handle */}
                      <div className="flex flex-col items-center space-y-1">
                        <button
                          onClick={() => moveMember(index, 'up')}
                          disabled={index === 0}
                          className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <GripVertical className="w-5 h-5 text-gray-400 rotate-180" />
                        </button>
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-teal/10 flex items-center justify-center">
                          {(member.image || member.photo) ? (
                            <img src={member.image || member.photo} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-primary-teal font-bold text-sm">
                              {member.name.split(' ').map((n) => n[0]).join('')}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => moveMember(index, 'down')}
                          disabled={index === teamMembers.length - 1}
                          className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                          <GripVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>

                      {/* Member Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold font-display text-text-ink">
                            {member.name}
                          </h3>
                          {member.featured && (
                            <Badge variant="primary" className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{member.role || member.title}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <a href={`mailto:${member.email}`} className="flex items-center hover:text-primary-teal transition-colors">
                            <Mail className="w-4 h-4 mr-1" />
                            {member.email}
                          </a>
                          {member.linkedin && (
                            <a href={member.linkedin} className="flex items-center hover:text-primary-teal transition-colors">
                              <Link className="w-4 h-4 mr-1" />
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFeatured(member.id)}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          title={member.featured ? 'Remove from featured' : 'Feature on homepage'}
                        >
                          {member.featured ? (
                            <Star className="w-5 h-5 text-yellow-500" />
                          ) : (
                            <StarOff className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        <button onClick={() => handleEdit(member)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Edit">
                          <Edit className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                          onClick={() => deleteMember(member.id)}
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

          {teamMembers.length === 0 && (
            <Card>
              <div className="p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-text-ink mb-2">No team members yet</h3>
                <p className="text-gray-500 mb-4">Add your first team member to get started</p>
                <Button variant="primary" size="md" onClick={handleAdd}>
                  Add Team Member
                </Button>
              </div>
            </Card>
          )}
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Tips for managing team members</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Use the arrows to adjust display order on the public Team page</li>
                <li>• Featured members appear on the homepage and get priority placement</li>
                <li>• Keep team information up to date for better credibility</li>
                <li>• Add LinkedIn profiles to help visitors connect with your team</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Edit/Add Modal */}
      {isEditing && selectedMember && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display text-text-ink">
                  {isAdding ? 'Add Team Member' : 'Edit Team Member'}
                </h2>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setIsAdding(false);
                    setSelectedMember(null);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    value={selectedMember.name}
                    onChange={(e) => setSelectedMember({ ...selectedMember, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                  <input
                    type="text"
                    value={selectedMember.role}
                    onChange={(e) => setSelectedMember({ ...selectedMember, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="Job title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={selectedMember.email}
                    onChange={(e) => setSelectedMember({ ...selectedMember, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                  <input
                    type="url"
                    value={selectedMember.linkedin}
                    onChange={(e) => setSelectedMember({ ...selectedMember, linkedin: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
                  <div className="space-y-2">
                    {selectedMember.image && (
                      <div className="w-32 h-32 rounded-lg overflow-hidden border border-gray-200 mx-auto">
                        <img
                          src={selectedMember.image}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <Button
                      variant="outline"
                      onClick={() => setIsMediaPickerOpen(true)}
                      className="w-full"
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {selectedMember.image ? 'Change Photo' : 'Select Photo from Media Library'}
                    </Button>
                    <input
                      type="text"
                      value={selectedMember.image || ''}
                      onChange={(e) => setSelectedMember({ ...selectedMember, image: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                      placeholder="/images/... (or use media picker above)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    value={selectedMember.bio}
                    onChange={(e) => setSelectedMember({ ...selectedMember, bio: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all resize-none"
                    placeholder="Short biography..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={selectedMember.featured}
                    onChange={(e) => setSelectedMember({ ...selectedMember, featured: e.target.checked })}
                    className="w-4 h-4 text-primary-teal rounded focus:ring-primary-teal"
                  />
                  <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                    Featured on homepage
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" onClick={() => {
                  setIsEditing(false);
                  setIsAdding(false);
                  setSelectedMember(null);
                }}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  {isAdding ? 'Add Member' : 'Save Changes'}
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
        onSelect={(url) => selectedMember && setSelectedMember({ ...selectedMember, image: url })}
        currentUrl={selectedMember?.image}
        filterType="image"
      />
    </AdminLayout>
  );
}