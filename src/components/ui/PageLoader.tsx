'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Skip loader on home page to prevent navigation blocking
    if (pathname === '/') return;

    setIsLoading(true);
    setShowLoader(true);

    // Reduced delay from 500ms to 150ms for faster navigation
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowLoader(false), 150);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!showLoader) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg-warm-white/80 backdrop-blur-sm transition-opacity duration-150 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center">
        <div className="relative w-8 h-8 mx-auto mb-3">
          <div className="absolute inset-0 border-3 border-primary-teal/20 rounded-full" />
          <div className="absolute inset-0 border-3 border-primary-teal rounded-full border-t-transparent animate-spin" />
        </div>
        <div className="text-xs font-medium text-text-ink">Loading...</div>
      </div>
    </div>
  );
}

// Simple loading spinner component
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className="absolute inset-0 border-2 border-primary-teal/20 rounded-full" />
      <div className="absolute inset-0 border-2 border-primary-teal rounded-full border-t-transparent animate-spin" />
    </div>
  );
}
