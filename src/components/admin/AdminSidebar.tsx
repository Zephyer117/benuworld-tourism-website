'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Image as ImageIcon, 
  Phone, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  Mail,
  TrendingUp,
  Database
} from 'lucide-react';

interface AdminSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ isCollapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();

  const navigation = [
    { section: 'Content', items: [
      { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { name: 'Data Center', href: '/admin/data-center', icon: Database },
      { name: 'Posts', href: '/admin/posts', icon: FileText },
      { name: 'Slideshow', href: '/admin/slideshow', icon: ImageIcon },
      { name: 'Service cards', href: '/admin/routes', icon: ImageIcon },
      { name: 'Media Library', href: '/admin/media', icon: ImageIcon },
    ]},
    { section: 'People', items: [
      { name: 'Team', href: '/admin/team', icon: Users },
    ]},
    { section: 'Site', items: [
      { name: 'Contact', href: '/admin/contact', icon: Phone },
      { name: 'Inquiries', href: '/admin/inquiries', icon: Mail },
      { name: 'Analytics', href: '/admin/analytics', icon: TrendingUp },
      { name: 'Settings', href: '/admin/settings', icon: Settings },
    ]},
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-bg-dark-teal text-white transition-all duration-300 z-50 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full brand-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">B</span>
            </div>
            <span className="font-bold font-display">Admin</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navigation.map((group) => (
          <div key={group.section} className="mb-6">
            {!isCollapsed && (
              <div className="px-4 mb-2">
                <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                  {group.section}
                </span>
              </div>
            )}
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 mx-2 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-primary-aqua text-bg-dark-teal font-medium'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary-aqua/20 flex items-center justify-center">
            <span className="text-primary-aqua font-bold">A</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <div className="font-medium text-sm">Admin User</div>
              <div className="text-xs text-white/50">admin@benuworld.com</div>
            </div>
          )}
          <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" title="Logout">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}