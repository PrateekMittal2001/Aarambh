import { Metadata } from 'next';
import { foodProducts } from '@/data';
import { ProductCard } from '@/components/shared/ProductCard';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Organic Foods for Kids',
  description: 'Discover our range of organic, preservative-free, healthy food products made with traditional Indian ingredients for growing children.',
};

const categories = ['All', 'snacks', 'drinks', 'breakfast', 'supplements'];

export default function FoodsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="🌿 100% Organic"
          title="Healthy Foods for Happy Kids"
          subtitle="Pure, organic nutrition inspired by Ayurveda and traditional Indian wisdom. No preservatives, no refined sugar."
        />

        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className="rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-600 hover:border-sage-400 hover:text-sage-600 transition-colors first:bg-sage-500 first:text-white first:border-sage-500"
            >
              {cat === 'All' ? '🍽️ All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Nutritional promise */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-sage-50 to-turmeric-50 p-8 border border-sage-100">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[
              { emoji: '🌱', label: 'Organic Sourced' },
              { emoji: '🚫', label: 'Zero Preservatives' },
              { emoji: '🍯', label: 'Natural Sweeteners' },
              { emoji: '🧪', label: 'Lab Tested' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bestsellers */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            🔥 Most Popular
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodProducts.filter(f => f.bestseller).map((food) => (
              <ProductCard key={food.id} product={food} type="food" />
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">All Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {foodProducts.map((food) => (
              <ProductCard key={food.id} product={food} type="food" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
