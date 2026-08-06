import { Metadata } from 'next';
import { books } from '@/data';
import { ProductCard } from '@/components/shared/ProductCard';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Children\'s Books',
  description: 'Explore our curated collection of children\'s books that teach values, inspire imagination, and celebrate Indian heritage.',
};

const ageGroups = ['All', '3-6', '4-7', '5-12', '6-10', '6-12', '10-14'];
const categories = ['All', 'values', 'mythology', 'language', 'mindfulness', 'wellness'];

export default function BooksPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="📚 Children's Library"
          title="Books That Shape Character"
          subtitle="Age-appropriate stories that teach values, build vocabulary, and ignite a lifelong love for reading."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-600 mr-2 self-center">Age:</span>
            {ageGroups.map((age) => (
              <button
                key={age}
                className="rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 hover:border-saffron-400 hover:text-saffron-600 transition-colors first:bg-saffron-500 first:text-white first:border-saffron-500"
              >
                {age === 'All' ? 'All Ages' : `${age} yrs`}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <span className="text-sm font-medium text-gray-600 mr-2 self-center">Category:</span>
            <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-saffron-500">
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Bestsellers Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            🏆 Bestsellers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.filter(b => b.bestseller).map((book) => (
              <ProductCard key={book.id} product={book} type="book" />
            ))}
          </div>
        </div>

        {/* All Books */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">All Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <ProductCard key={book.id} product={book} type="book" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
