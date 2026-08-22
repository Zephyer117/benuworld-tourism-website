'use client';

import { use } from 'react';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import MediaBlock from '@/components/public/MediaBlock';
import { useLiveCms } from '@/lib/cms-client';
import type { Post } from '@/lib/types';
import { postMedia } from '@/lib/use-published-posts';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { data: posts, loading } = useLiveCms<Post[]>('posts', []);
  const post =
    posts.find((p) => String(p.id) === resolvedParams.id) ||
    posts.find((p) => p.slug === resolvedParams.id) ||
    null;
  const media = post ? postMedia(post) : null;

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-gray-500">Post not found</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section for Header */}
        <section className="relative min-h-[40vh] flex items-end overflow-hidden bg-bg-dark-teal">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4">News & Insights</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display max-w-3xl mb-4">{post.title}</h1>
            <p className="text-white/80 uppercase tracking-wider text-sm">{post.section}</p>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="bg-bg-warm-white py-4 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a
              href="/news"
              className="inline-flex items-center text-primary-teal hover:text-primary-aqua transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </a>
          </div>
        </section>

        {/* Article Meta */}
        <section className="py-8 bg-bg-warm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date || post.publishedAt?.slice(0, 10)}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.views} views
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-teal/10 flex items-center justify-center mr-3">
                  <span className="text-primary-teal font-bold text-sm">
                    {post.author?.charAt(0) || "B"}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-text-ink text-sm">{post.author}</div>
                  <div className="text-xs text-gray-500">Author</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-bg-warm-white pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <MediaBlock src={media?.image} video={post.video} alt={post.title} className="h-full min-h-[240px]" />
            </div>
          </div>
        </section>

        {post.gallery && post.gallery.length > 0 ? (
          <section className="bg-bg-warm-white pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold font-display text-text-ink mb-6">Photos from this story</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {post.gallery.map((url) => (
                  <div key={url} className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                    <img src={url} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Article Content */}
        <section className="py-12 bg-bg-soft-tint">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {typeof post.content === 'string' ? post.content : post.excerpt}
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 bg-bg-warm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-display text-text-ink mb-8">
              More Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-lg font-bold font-display text-text-ink mb-2">
                    Check back for more articles
                  </h3>
                  <a
                    href="/news"
                    className="inline-flex items-center text-primary-teal font-medium hover:text-primary-aqua transition-colors"
                  >
                    View All News
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 brand-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for the latest news and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}