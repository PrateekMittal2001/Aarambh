import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import { StarRating, Badge } from '@/components/ui';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  type: 'book' | 'food';
}

export function ProductCard({ product, type }: ProductCardProps) {
  const href = type === 'book' ? `/books/${product.slug}` : `/foods/${product.slug}`;

  return (
    <div className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-4 card-hover">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.bestseller && <Badge variant="warning">Bestseller</Badge>}
      </div>

      {/* Image */}
      <Link href={href} className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-saffron-50 to-turmeric-50">
        <div className="flex h-full items-center justify-center text-6xl">
          {type === 'book' ? '📚' : '🍃'}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <Link href={href}>
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-saffron-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>

        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        <div className="mt-auto pt-4">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
        </div>
      </div>
    </div>
  );
}
