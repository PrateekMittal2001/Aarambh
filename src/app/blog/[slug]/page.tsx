import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-saffron-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <span className="inline-block rounded-full bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-700 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author.name}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.publishedAt}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime} min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl bg-gradient-to-br from-saffron-50 to-sky-50 flex items-center justify-center text-6xl mb-10">
            📝
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-saffron-600">
            <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
            <p className="text-gray-600 leading-relaxed">
              This is a placeholder for the full blog post content. In a production environment, this would be rich content loaded from a CMS with proper formatting, images, and embedded media.
            </p>
            <h2>Key Takeaways</h2>
            <ul>
              <li>Consistent practice yields the best results for children</li>
              <li>Age-appropriate content keeps children engaged and motivated</li>
              <li>Parent involvement amplifies the learning experience</li>
              <li>Small daily habits create lasting positive change</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We encourage parents to explore our resources and find what resonates with their family values and their child&apos;s unique personality.
            </p>
          </div>

          {/* Author */}
          <div className="mt-12 rounded-2xl bg-gray-50 p-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-saffron-100 to-turmeric-100 text-2xl">
              👤
            </div>
            <div>
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.bio}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
