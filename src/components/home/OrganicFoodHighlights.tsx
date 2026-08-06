'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading, AnimatedCard } from '@/components/ui';
import { ProductCard } from '@/components/shared/ProductCard';
import { foodProducts } from '@/data';

export function OrganicFoodHighlights() {
  const featured = foodProducts.filter((f) => f.featured).slice(0, 4);

  return (
    <section className="section-padding bg-gradient-to-b from-sage-50/50 to-white">
      <div className="container-custom">
        <SectionHeading
          badge="🌿 Pure & Natural"
          title="Organic Goodness for Growing Kids"
          subtitle="Nutrient-rich, preservative-free foods made with traditional Indian ingredients that kids actually love."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((food, i) => (
            <AnimatedCard key={food.id} delay={i * 0.1}>
              <ProductCard product={food} type="food" />
            </AnimatedCard>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {['🏅 FSSAI Certified', '🌱 India Organic', '🚫 No Preservatives', '💚 No Refined Sugar'].map((badge) => (
            <span key={badge} className="inline-flex items-center rounded-full bg-white border border-sage-200 px-4 py-2 text-sm font-medium text-sage-700 shadow-sm">
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/foods" className="btn-secondary gap-2">
            Shop All Foods <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
