'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GlobalTranslatorProps {
  children: ReactNode;
}

export default function GlobalTranslator({ children }: GlobalTranslatorProps) {
  const { language, translate } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const previousLanguage = useRef(language);
  const originalTexts = useRef<Map<Text, string>>(new Map());
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    // Skip translation on home page to prevent blocking
    if (pathname === '/') return;

    if (previousLanguage.current === language) {
      return;
    }

    previousLanguage.current = language;
    translateContent();
  }, [language, translate, pathname]);

  const translateContent = async () => {
    if (!containerRef.current) return;

    const textNodes = getTextNodes(containerRef.current);

    try {
      if (language === 'en') {
        // Restore original texts
        textNodes.forEach((node) => {
          if (originalTexts.current.has(node)) {
            node.textContent = originalTexts.current.get(node) || node.textContent;
          }
        });
      } else {
        // Store original texts and translate
        textNodes.forEach((node) => {
          if (node.textContent && !originalTexts.current.has(node)) {
            originalTexts.current.set(node, node.textContent);
          }
        });

        // Batch translations to avoid overwhelming the API
        const BATCH_SIZE = 10; // Process 10 translations at a time for maximum speed
        const batches = [];
        
        for (let i = 0; i < textNodes.length; i += BATCH_SIZE) {
          batches.push(textNodes.slice(i, i + BATCH_SIZE));
        }

        for (const batch of batches) {
          const translationPromises = batch.map(async (node) => {
            const originalText = originalTexts.current.get(node) || node.textContent || '';
            return await translate(originalText);
          });

          const translatedTexts = await Promise.all(translationPromises);

          // Update text nodes with translations
          batch.forEach((node, index) => {
            if (node.textContent) {
              node.textContent = translatedTexts[index];
            }
          });

          // Minimal delay between batches for maximum speed
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const getTextNodes = (element: HTMLElement): Text[] => {
    const textNodes: Text[] = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const text = node.textContent?.trim();
          if (!text) return NodeFilter.FILTER_REJECT;
          
          // Skip scripts, styles, code, and other technical elements
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          
          const tagName = parent.tagName.toLowerCase();
          const skipTags = ['script', 'style', 'code', 'pre', 'noscript', 'template', 'button'];
          if (skipTags.includes(tagName)) return NodeFilter.FILTER_REJECT;
          
          // Skip very short text (less than 2 characters)
          if (text.length < 2) return NodeFilter.FILTER_REJECT;
          
          // Skip numbers only
          if (/^\d+$/.test(text)) return NodeFilter.FILTER_REJECT;
          
          // Skip email addresses and URLs
          if (text.includes('@') || text.includes('http')) return NodeFilter.FILTER_REJECT;
          
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node as Text);
    }

    return textNodes;
  };

  return <div ref={containerRef}>{children}</div>;
}
