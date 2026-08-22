'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Calendar,
  CheckCircle,
  Clock,
  Archive,
  Star,
  Reply,
  Trash2
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLiveCms } from '@/lib/cms-client';
import type { Inquiry } from '@/lib/types';

export default function InquiriesManager() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { data: inquiries, save } = useLiveCms<Inquiry[]>('inquiries', []);

  const filteredInquiries = inquiries.filter((inquiry: Inquiry) => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateStatus = async (id: string, newStatus: string) => {
    await save(
      inquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status: newStatus as Inquiry['status'] } : inquiry,
      ),
    );
  };

  const archiveInquiry = async (id: string) => {
    if (confirm('Archive this inquiry?')) {
      await save(inquiries.filter((inquiry) => inquiry.id !== id));
    }
  };

  const deleteInquiry = async (id: string) => {
    if (confirm('Permanently delete this inquiry?')) {
      await save(inquiries.filter((inquiry) => inquiry.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'primary';
      case 'in-progress': return 'warning';
      case 'completed': return 'success';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'secondary';
      case 'medium': return 'default';
      case 'low': return 'ghost';
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
        >
          <h1 className="text-3xl font-bold font-display text-text-ink">
            Inquiries Manager
          </h1>
          <p className="text-gray-600 mt-1">
            Manage contact form submissions and inquiries
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-teal font-display">{inquiries.length}</div>
              <div className="text-gray-600 text-sm">Total Inquiries</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 font-display">
                {inquiries.filter((i: Inquiry) => i.status === 'new').length}
              </div>
              <div className="text-gray-600 text-sm">New</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="text-3xl font-bold text-yellow-600 font-display">
                {inquiries.filter((i: Inquiry) => i.status === 'in-progress').length}
              </div>
              <div className="text-gray-600 text-sm">In Progress</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 font-display">
                {inquiries.filter((i: Inquiry) => i.status === 'completed').length}
              </div>
              <div className="text-gray-600 text-sm">Completed</div>
            </div>
          </Card>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search inquiries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Inquiries List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-4">
            {filteredInquiries.map((inquiry: Inquiry, index: number) => (
              <motion.div
                key={inquiry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary-teal/10 flex items-center justify-center">
                          <span className="text-primary-teal font-bold">
                            {inquiry.name.split(' ').map((n: string) => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-text-ink">{inquiry.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Mail className="w-4 h-4" />
                            {inquiry.email}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <select
                          value={inquiry.status}
                          onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                          className="px-3 py-1 rounded-lg border border-gray-200 text-sm focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none"
                        >
                          <option value="new">New</option>
                          <option value="in-progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                        {inquiry.priority === 'high' && (
                          <Badge variant={getPriorityColor(inquiry.priority) as any} className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            High Priority
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-text-ink mb-1">{inquiry.subject}</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{inquiry.message}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {inquiry.date || inquiry.createdAt?.slice(0, 10)}
                        </div>
                        {inquiry.assignedTo && (
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {inquiry.assignedTo}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Reply className="w-4 h-4" />
                          Reply
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => archiveInquiry(inquiry.id)} className="flex items-center gap-1">
                          <Archive className="w-4 h-4" />
                          Archive
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteInquiry(inquiry.id)} className="flex items-center gap-1 text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredInquiries.length === 0 && (
            <Card>
              <div className="p-12 text-center">
                <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No inquiries found matching your criteria.</p>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </AdminLayout>
  );
}