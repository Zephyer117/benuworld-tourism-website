'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import Card from '@/components/ui/Card';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AnalyticsPage() {
  const stats = [
    {
      title: 'Total Page Views',
      value: '45,678',
      change: '+12.5%',
      trend: 'up',
      icon: Eye,
      color: 'bg-primary-teal'
    },
    {
      title: 'Unique Visitors',
      value: '12,345',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'bg-primary-aqua'
    },
    {
      title: 'Avg. Session Duration',
      value: '4m 32s',
      change: '-2.1%',
      trend: 'down',
      icon: Clock,
      color: 'bg-secondary-sand'
    },
    {
      title: 'Bounce Rate',
      value: '32.4%',
      change: '-5.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-secondary-terracotta'
    }
  ];

  const topPages = [
    { page: '/home', views: 15432, percentage: 34 },
    { page: '/services/inbound-tourism', views: 8765, percentage: 19 },
    { page: '/contact', views: 6543, percentage: 14 },
    { page: '/team', views: 4321, percentage: 9 },
    { page: '/news', views: 3210, percentage: 7 }
  ];

  const trafficSources = [
    { source: 'Direct', visitors: 8765, percentage: 71 },
    { source: 'Google', visitors: 2109, percentage: 17 },
    { source: 'Social Media', visitors: 987, percentage: 8 },
    { source: 'Referral', visitors: 484, percentage: 4 }
  ];

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
            Analytics
          </h1>
          <p className="text-gray-600 mt-1">
            Track your site's performance and user engagement
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
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
                    <div className={`flex items-center text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 mr-1" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-ink mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                  Top Pages
                </h2>
                
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-ink">{page.page}</span>
                        <span className="text-sm text-gray-600">{page.views.toLocaleString()} views</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-teal h-2 rounded-full"
                          style={{ width: `${page.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-bold font-display text-text-ink mb-6">
                  Traffic Sources
                </h2>
                
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-ink">{source.source}</span>
                        <span className="text-sm text-gray-600">{source.visitors.toLocaleString()} visitors</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-aqua h-2 rounded-full"
                          style={{ width: `${source.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Analytics Setup Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Analytics Integration</h3>
              <p className="text-blue-700 text-sm">
                Connect Google Analytics or Plausible to get detailed insights. Go to Settings &gt; Analytics to configure your tracking setup.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium">
                Configure Analytics
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </AdminLayout>
  );
}