'use client';

import { useMemo, useState } from 'react';
import CtaBanner from '@/components/public/CtaBanner';
import { Search, Calendar, ArrowRight, Newspaper } from 'lucide-react';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { useLiveCms } from '@/lib/cms-client';
import type { Post } from '@/lib/types';
import { postDate, postHref, publishedPosts } from '@/lib/cms-helpers';
import MediaBlock from '@/components/public/MediaBlock';
import PostCard from '@/components/public/PostCard';

const categories = ['All', 'Inbound Tourism', 'Outbound Tourism', 'Foreign Investment', 'Teaching Curriculum', 'Company News'];

const topics = [
  { title: 'Inbound hosting notes', href: '/services/inbound-tourism' },
  { title: 'Visa & outbound corridors', href: '/services/outbound-tourism' },
  { title: 'Bangladesh market visits', href: '/services/foreign-investment' },
  { title: 'Language programs', href: '/services/teaching-curriculum' },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');
  const { data: allPosts } = useLiveCms<Post[]>('posts', []);
  const posts = publishedPosts(allPosts);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const inCat =
        selectedCategory === 'All' ||
        post.section === selectedCategory ||
        post.section?.toLowerCase() === selectedCategory.toLowerCase();
      const q = query.trim().toLowerCase();
      const inQ = !q || `${post.title} ${post.excerpt} ${post.author}`.toLowerCase().includes(q);
      return inCat && inQ;
    });
  }, [posts, selectedCategory, query]);

  const featuredPost = filteredPosts[0];
  const rest = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="relative min-h-[50vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 hero-mesh" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4">Insights</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">News & briefings</h1>
            <p className="text-xl text-white/85 max-w-2xl">Practice notes on travel, investment, and training published when there is something worth sending.</p>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4 justify-between">
            <div className="relative w-full lg:w-96 flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search titles and excerpts…"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category ? 'bg-primary-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="py-12 bg-bg-warm-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={postHref(featuredPost)} className="block">
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="min-h-[220px]">
                    <MediaBlock
                      src={featuredPost.image || featuredPost.coverImage}
                      video={featuredPost.video}
                      alt={featuredPost.title}
                      className="h-full min-h-[220px] relative"
                      controls={false}
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs uppercase tracking-wider text-primary-teal">{featuredPost.section}</span>
                    <h2 className="text-3xl font-display font-bold mt-3 mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="inline-flex items-center"><Calendar className="w-4 h-4 mr-1" />{postDate(featuredPost)}</span>
                      <span className="text-primary-teal font-semibold inline-flex items-center">
                        Read <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
            </div>
          </section>
        )}

        <section className="py-12 bg-bg-soft-tint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
                <div className="rounded-2xl bg-white p-10 border border-black/5">
                  <Newspaper className="w-10 h-10 text-primary-teal mb-4" />
                  <h2 className="text-2xl font-display font-bold mb-3">Nothing published in this filter yet</h2>
                  <p className="text-gray-600 mb-6">
                    Articles appear here as soon as you publish them in the admin panel.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {topics.map((t) => (
                      <Link key={t.href} href={t.href} className="rounded-xl border border-gray-100 px-4 py-3 hover:border-primary-teal text-sm font-medium">
                        {t.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl brand-gradient p-8 text-white">
                  <h3 className="font-display text-2xl font-semibold mb-3">Request a briefing</h3>
                  <p className="text-white/85 text-sm mb-6">Need a visa, sector, or destination note that is not on the site? Ask the office for a one-pager.</p>
                  <Link href="/contact" className="inline-flex px-4 py-4 rounded-lg bg-white text-primary-teal font-semibold">
                    Contact
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <PostCard
                    key={post.id}
                    post={{
                      ...post,
                      date: postDate(post),
                      image: post.image || post.coverImage,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <CtaBanner title="Stay on the briefing list" text="When we publish, it is usually a practice note not a newsletter blast. Inquire and we will include you." />
      </main>
    </div>
  );
}
