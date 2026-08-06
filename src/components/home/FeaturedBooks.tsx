'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading, AnimatedCard } from '@/components/ui';
import { ProductCard } from '@/components/shared/ProductCard';
import { books } from '@/data';

export function FeaturedBooks() {
  const featured = books.filter((b) => b.featured).slice(0, 4);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="📚 Curated Reading"
          title="Books That Inspire Young Minds"
          subtitle="Handpicked stories that teach values, ignite imagination, and celebrate Indian heritage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((book, i) => (
            <AnimatedCard key={book.id} delay={i * 0.1}>
              <ProductCard product={book} type="book" />
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/books" className="btn-secondary gap-2">
            View All Books <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
