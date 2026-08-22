'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import MediaBlock from '@/components/public/MediaBlock';
import { postHref } from '@/lib/cms-helpers';

type PostCardPost = {
  id: string;
  slug?: string;
  title: string;
  excerpt?: string;
  image?: string;
  coverImage?: string;
  video?: string;
  date?: string;
  section?: string;
};

export default function PostCard({ post }: { post: PostCardPost }) {
  return (
    <Link href={postHref(post)} className="block h-full group">
      <Card className="h-full">
        <div className="h-40 overflow-hidden bg-gray-100">
          <MediaBlock
            src={post.image || post.coverImage}
            video={post.video}
            alt={post.title}
            className="h-40 relative"
            controls={false}
          />
        </div>
        <div className="p-6">
          {post.section ? (
            <div className="text-xs uppercase tracking-wider text-primary-teal mb-2">{post.section}</div>
          ) : null}
          {post.date ? <span className="text-xs text-gray-500">{post.date}</span> : null}
          <h3 className="text-lg font-display font-semibold mt-2 mb-2 group-hover:text-primary-teal transition-colors">
            {post.title}
          </h3>
          {post.excerpt ? (
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          ) : null}
          <span className="text-sm font-semibold text-primary-teal">Read article →</span>
        </div>
      </Card>
    </Link>
  );
}
