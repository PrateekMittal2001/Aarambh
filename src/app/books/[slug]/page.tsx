import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { books } from '@/data';
import { formatPrice } from '@/lib/utils';
import { StarRating, Badge } from '@/components/ui';
import { ArrowLeft, MessageCircle } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) return { title: 'Book Not Found' };
  return { title: book.name, description: book.shortDescription };
}

export default function BookDetailPage({ params }: Props) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) notFound();

  return (
    <div className="section-padding">
      <div className="container-custom">
        <Link href="/books" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-saffron-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Books
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-saffron-50 to-turmeric-50 flex items-center justify-center text-[120px]">
            📚
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {book.bestseller && <Badge variant="warning">Bestseller</Badge>}
              <Badge variant="info">Ages {book.ageGroup}</Badge>
              <Badge>{book.category}</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">{book.name}</h1>
            <p className="mt-2 text-gray-500">by <span className="text-gray-700 font-medium">{book.author}</span></p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={book.rating} size="md" />
              <span className="text-sm text-gray-500">({book.reviewCount} reviews)</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">{formatPrice(book.price)}</span>
              {book.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(book.originalPrice)}</span>
              )}
              {book.originalPrice && (
                <span className="rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700">
                  Save {formatPrice(book.originalPrice - book.price)}
                </span>
              )}
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">{book.description}</p>

            {/* Book details */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-gray-50 p-6">
              <div><span className="text-xs text-gray-400 uppercase">Pages</span><p className="font-medium text-gray-900">{book.pages}</p></div>
              <div><span className="text-xs text-gray-400 uppercase">Language</span><p className="font-medium text-gray-900">{book.language}</p></div>
              <div><span className="text-xs text-gray-400 uppercase">Publisher</span><p className="font-medium text-gray-900">{book.publisher}</p></div>
              <div><span className="text-xs text-gray-400 uppercase">ISBN</span><p className="font-medium text-gray-900">{book.isbn}</p></div>
            </div>

            {/* Actions */}
            <div className="mt-8">
              <Link href="/contact" className="btn-primary gap-2">
                <MessageCircle className="h-5 w-5" /> Enquire Now
              </Link>
              <p className="mt-3 text-sm text-gray-500">Interested in this book? Contact us to place an order.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
