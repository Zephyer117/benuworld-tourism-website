'use client';

import { useLiveCms } from '@/lib/cms-client';
import { publishedPosts } from '@/lib/cms-helpers';
import type { Post } from '@/lib/types';

export function usePublishedPosts(section?: string) {
  const { data } = useLiveCms<Post[]>('posts', []);
  return publishedPosts(data, section);
}

export function postMedia(post: Post) {
  const image = typeof post.image === 'string' ? post.image : post.coverImage || '';
  return {
    id: String(post.id),
    title: post.title,
    excerpt: post.excerpt || '',
    image,
    video: post.video,
    date: post.date || post.publishedAt?.slice(0, 10) || '',
  };
}
