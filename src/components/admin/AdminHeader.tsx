'use client';

import { Bell, Search, User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { logout, getUsername } from '@/lib/auth';

interface AdminHeaderProps {
  isSidebarCollapsed: boolean;
}

export default function AdminHeader({ isSidebarCollapsed }: AdminHeaderProps) {
  const router = useRouter();
  const username = getUsername();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header 
      className={`fixed top-0 right-0 bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 z-40 transition-all duration-300 ${
        isSidebarCollapsed ? 'left-20' : 'left-64'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        
        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <div className="w-10 h-10 rounded-full bg-primary-teal/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary-teal" />
          </div>
          <div className="hidden md:block">
            <div className="font-medium text-sm text-gray-900">{username || 'Admin User'}</div>
            <div className="text-xs text-gray-500">Super Admin</div>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg hover:bg-red-50 transition-colors group"
            title="Logout"
          >
            <LogOut className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
          </button>
        </div>
      </div>
    </header>
  );
}