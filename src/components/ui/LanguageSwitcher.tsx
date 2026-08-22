'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export default function LanguageSwitcher({ className = '', isMobile = false }: { className?: string; isMobile?: boolean }) {
  const { language, setLanguage } = useLanguage();

  const textColor = isMobile ? 'text-gray-600' : 'text-white';

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as any)}
          className={`px-2 py-1 rounded text-[10px] uppercase tracking-[0.18em] transition-all ${
            language === lang.code
              ? `${textColor} font-medium`
              : `${textColor}/70 hover:${textColor}`
          }`}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
