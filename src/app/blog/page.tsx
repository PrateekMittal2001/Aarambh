import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { SectionHeading } from '@/components/ui';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Resources',
  description: 'Expert articles on parenting, child nutrition, Vedic education, mindfulness, and holistic child development.',
};

export default function BlogPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="📝 Blog & Resources"
          title="Insights for Mindful Parenting"
          subtitle="Expert advice on nutrition, education, spiritual growth, and raising well-rounded children."
        />

        {/* Featured Post */}
        {blogPosts[0] && (
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group mb-12 grid md:grid-cols-2 gap-8 rounded-3xl border border-gray-100 bg-white overflow-hidden card-hover"
          >
            <div className="aspect-video md:aspect-auto bg-gradient-to-br from-saffron-50 to-sky-50 flex items-center justify-center text-6xl">
              📝
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <span className="inline-block self-start rounded-full bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-700 mb-3">
                Featured • {blogPosts[0].category}
              </span>
              <h2 className="text-2xl font-display font-bold text-gray-900 group-hover:text-saffron-600 transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="mt-3 text-gray-500 leading-relaxed">{blogPosts[0].excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {blogPosts[0].publishedAt}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {blogPosts[0].readTime} min</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron-600">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        )}

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden card-hover"
            >
              <div className="aspect-video bg-gradient-to-br from-sky-50 to-sage-50 flex items-center justify-center text-4xl">
                📝
              </div>
              <div className="flex-1 p-6">
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 mb-3">
                  {post.category}
                </span>
                <h3 className="font-semibold text-gray-900 group-hover:text-saffron-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                  <span>{post.publishedAt}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
