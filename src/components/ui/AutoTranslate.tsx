'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AutoTranslateProps {
  children: string;
  className?: string;
  as?: React.ElementType;
}

export default function AutoTranslate({ children, className = '', as: Component = 'span' }: AutoTranslateProps) {
  const { language, translate } = useLanguage();
  const [translatedText, setTranslatedText] = useState(children);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const translateContent = async () => {
      if (language === 'en') {
        setTranslatedText(children);
        return;
      }

      setIsLoading(true);
      try {
        const translated = await translate(children);
        setTranslatedText(translated);
      } catch (error) {
        console.error('Translation error:', error);
        setTranslatedText(children);
      } finally {
        setIsLoading(false);
      }
    };

    translateContent();
  }, [children, language, translate]);

  if (isLoading) {
    return <Component className={className}>{children}</Component>;
  }

  return <Component className={className}>{translatedText}</Component>;
}
