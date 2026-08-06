'use client';

import Link from 'next/link';
import { SectionHeading, AnimatedCard } from '@/components/ui';
import { blogPosts } from '@/data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function FeaturedBlog() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-gradient-to-b from-sky-50/30 to-white">
      <div className="container-custom">
        <SectionHeading
          badge="📝 Resources"
          title="Latest from Our Blog"
          subtitle="Expert articles on parenting, nutrition, and holistic child development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((post, i) => (
            <AnimatedCard key={post.id} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden card-hover h-full">
                <div className="aspect-video bg-gradient-to-br from-sky-100 to-saffron-50 flex items-center justify-center text-4xl">
                  📝
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block self-start rounded-full bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-700 mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-saffron-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400 border-t border-gray-50 pt-4">
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.publishedAt}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime} min read</span>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-secondary gap-2">
            Read All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
