'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  Image as ImageIcon, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Card from '@/components/ui/Card';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLiveCms } from '@/lib/cms-client';
import { publishedPosts } from '@/lib/cms-helpers';
import type { Inquiry, MediaItem, Post, Slide, TeamMember } from '@/lib/types';

export default function AdminDashboard() {
  const { data: posts } = useLiveCms<Post[]>('posts', []);
  const { data: teamMembers } = useLiveCms<TeamMember[]>('team', []);
  const { data: slides } = useLiveCms<Slide[]>('slideshow', []);
  const { data: media } = useLiveCms<MediaItem[]>('media', []);
  const { data: inquiries } = useLiveCms<Inquiry[]>('inquiries', []);

  const stats = {
    totalPosts: posts.length,
    teamMembers: teamMembers.length,
    slideshowImages: slides.length,
    mediaFiles: media.length,
  };

  const sections = ['Inbound Tourism', 'Outbound Tourism', 'Foreign Investment', 'Teaching Curriculum', 'Company News'];
  const contentHealth = sections.map((section) => {
    const count = publishedPosts(posts, section).length;
    return {
      section,
      posts: count,
      status: count >= 3 ? 'healthy' : count > 0 ? 'warning' : 'critical',
    };
  });

  const recentActivity = [
    ...inquiries.slice(0, 3).map((inquiry) => ({
      action: 'Contact form submission',
      item: `New inquiry from ${inquiry.name}`,
      time: inquiry.createdAt || inquiry.date || '',
      icon: Clock,
      color: 'text-yellow-500',
    })),
    ...posts.slice(0, 2).map((post) => ({
      action: post.status === 'published' ? 'Post published' : 'Post saved',
      item: post.title,
      time: post.updatedAt || post.publishedAt || post.date || '',
      icon: CheckCircle,
      color: 'text-green-500',
    })),
    ...media.slice(0, 2).map((item) => ({
      action: 'Media uploaded',
      item: item.name,
      time: item.uploadedAt || '',
      icon: ImageIcon,
      color: 'text-purple-500',
    })),
  ].slice(0, 6);

  const statsArray = [
    {
      title: 'Total Posts',
      value: String(stats.totalPosts),
      change: 'Updated in real-time',
      icon: FileText,
      color: 'bg-primary-teal',
      trend: 'up'
    },
    {
      title: 'Team Members',
      value: String(stats.teamMembers),
      change: 'Updated in real-time',
      icon: Users,
      color: 'bg-primary-aqua',
      trend: 'up'
    },
    {
      title: 'Slideshow Images',
      value: String(stats.slideshowImages),
      change: 'Updated in real-time',
      icon: ImageIcon,
      color: 'bg-secondary-sand',
      trend: 'neutral'
    },
    {
      title: 'Media Library',
      value: String(stats.mediaFiles),
      change: 'Updated in real-time',
      icon: TrendingUp,
      color: 'bg-secondary-terracotta',
      trend: 'up'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold font-display text-text-ink">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening with your site.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsArray.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    {stat.trend === 'up' && (
                      <span className="text-green-500 text-sm font-medium flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +12%
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-ink mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                  <p className="text-gray-400 text-xs mt-2">{stat.change}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Content Health Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {contentHealth.filter(ch => ch.status === 'critical').length > 0 && (
            <Card className="bg-red-50 border-red-200">
              <div className="p-6 flex items-center">
                <AlertCircle className="w-6 h-6 text-red-600 mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-red-800">Content Health Check</h3>
                  <p className="text-red-700 text-sm">
                    {contentHealth.filter(ch => ch.status === 'critical').length} of {contentHealth.length} sections need content. Consider adding posts to improve your site.
                  </p>
                </div>
              </div>
            </Card>
          )}
          {contentHealth.filter(ch => ch.status === 'critical').length === 0 && contentHealth.filter(ch => ch.status === 'warning').length > 0 && (
            <Card className="bg-yellow-50 border-yellow-200">
              <div className="p-6 flex items-center">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-yellow-800">Content Health Check</h3>
                  <p className="text-yellow-700 text-sm">
                    {contentHealth.filter(ch => ch.status === 'warning').length} of {contentHealth.length} sections could use more content.
                  </p>
                </div>
              </div>
            </Card>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                  Recent Activity
                </h2>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`w-5 h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-text-ink">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.item}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Content by Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                  Posts by Section
                </h2>
                
                <div className="space-y-4">
                  {contentHealth.map((item) => (
                    <div key={item.section}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-ink">{item.section}</span>
                        <span className="text-sm text-gray-600">{item.posts} posts</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.status === 'healthy' ? 'bg-primary-teal' : item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${Math.min((item.posts / 8) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                Quick Actions
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="p-4 border border-gray-200 rounded-xl hover:border-primary-teal hover:bg-primary-teal/5 transition-all text-left">
                  <FileText className="w-6 h-6 text-primary-teal mb-2" />
                  <div className="font-medium text-text-ink">New Post</div>
                  <div className="text-sm text-gray-500">Create content</div>
                </button>
                
                <button className="p-4 border border-gray-200 rounded-xl hover:border-primary-teal hover:bg-primary-teal/5 transition-all text-left">
                  <Users className="w-6 h-6 text-primary-aqua mb-2" />
                  <div className="font-medium text-text-ink">Add Team</div>
                  <div className="text-sm text-gray-500">New member</div>
                </button>
                
                <button className="p-4 border border-gray-200 rounded-xl hover:border-primary-teal hover:bg-primary-teal/5 transition-all text-left">
                  <ImageIcon className="w-6 h-6 text-secondary-sand mb-2" />
                  <div className="font-medium text-text-ink">Upload Image</div>
                  <div className="text-sm text-gray-500">To slideshow</div>
                </button>
                
                <button className="p-4 border border-gray-200 rounded-xl hover:border-primary-teal hover:bg-primary-teal/5 transition-all text-left">
                  <TrendingUp className="w-6 h-6 text-secondary-terracotta mb-2" />
                  <div className="font-medium text-text-ink">View Analytics</div>
                  <div className="text-sm text-gray-500">Site stats</div>
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </AdminLayout>
  );
}