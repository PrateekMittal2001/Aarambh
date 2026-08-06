import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { foodProducts } from '@/data';
import { formatPrice } from '@/lib/utils';
import { StarRating, Badge } from '@/components/ui';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return foodProducts.map((food) => ({ slug: food.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const food = foodProducts.find((f) => f.slug === params.slug);
  if (!food) return { title: 'Product Not Found' };
  return { title: food.name, description: food.shortDescription };
}

export default function FoodDetailPage({ params }: Props) {
  const food = foodProducts.find((f) => f.slug === params.slug);
  if (!food) notFound();

  return (
    <div className="section-padding">
      <div className="container-custom">
        <Link href="/foods" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-saffron-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Foods
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-sage-50 to-turmeric-50 flex items-center justify-center text-[120px]">
            🍃
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {food.bestseller && <Badge variant="warning">Bestseller</Badge>}
              {food.certifications.map((cert) => (
                <Badge key={cert} variant="success">{cert}</Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">{food.name}</h1>
            <p className="mt-2 text-gray-500">{food.weight}</p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={food.rating} size="md" />
              <span className="text-sm text-gray-500">({food.reviewCount} reviews)</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(food.price)}</span>
              {food.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(food.originalPrice)}</span>
              )}
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">{food.description}</p>

            {/* Ingredients */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {food.ingredients.map((ing) => (
                  <span key={ing} className="inline-flex items-center gap-1 rounded-full bg-sage-50 px-3 py-1.5 text-sm text-sage-700">
                    <Check className="h-3 w-3" /> {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutritional Info */}
            <div className="mt-6 rounded-2xl bg-gray-50 p-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Nutritional Info (per serving)</h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(food.nutritionalInfo).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-lg font-bold text-gray-900">{value}</p>
                    <p className="text-xs text-gray-500 capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </div>

            {food.allergens.length > 0 && (
              <p className="mt-4 text-sm text-amber-600 bg-amber-50 rounded-lg px-4 py-2">
                ⚠️ Allergens: {food.allergens.join(', ')}
              </p>
            )}

            {/* Actions */}
            <div className="mt-8">
              <Link href="/contact" className="btn-primary gap-2">
                <MessageCircle className="h-5 w-5" /> Enquire Now
              </Link>
              <p className="mt-3 text-sm text-gray-500">Interested in this product? Contact us to place an order.</p>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              Shelf Life: {food.shelfLife}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
