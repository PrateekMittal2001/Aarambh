'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Leaf, Sparkles, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-hero)]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-saffron-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sage-200/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-turmeric-100/20 blur-3xl" />
      </div>

      <div className="container-custom relative py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-saffron-200 px-4 py-2 text-sm font-medium text-saffron-700 shadow-sm mb-6">
              <Sparkles className="h-4 w-4" />
              Nurturing Young Minds Since 2020
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1]">
              Where{' '}
              <span className="gradient-text">Wisdom</span>,{' '}
              <span className="gradient-text">Nutrition</span> &{' '}
              <span className="gradient-text">Joy</span>{' '}
              Come Together
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              Inspire your child with enriching books, nourish them with organic goodness, and guide them through ancient Vedic wisdom — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/books" className="btn-primary gap-2">
                Explore Our World <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/vedic-learning" className="btn-secondary">
                Start Learning
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['🧒', '👧', '👦', '👶'].map((emoji, i) => (
                    <span key={i} className="flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-white shadow-sm text-sm">
                      {emoji}
                    </span>
                  ))}
                </div>
                <span className="font-medium">10,000+ Happy Families</span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-lg">
              {/* Floating cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-8 rounded-2xl bg-white p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-100 text-2xl">📖</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">50+ Books</p>
                    <p className="text-xs text-gray-500">Curated for Kids</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-1/3 rounded-2xl bg-white p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-turmeric-100 text-2xl">🍃</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">100% Organic</p>
                    <p className="text-xs text-gray-500">No Preservatives</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-4 bottom-8 rounded-2xl bg-white p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lotus-100 text-2xl">🕉️</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Vedic Wisdom</p>
                    <p className="text-xs text-gray-500">Age-Appropriate</p>
                  </div>
                </div>
              </motion.div>

              {/* Central illustration placeholder */}
              <div className="mx-auto h-[400px] w-[400px] rounded-full bg-gradient-to-br from-saffron-100 via-turmeric-50 to-sage-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🌳</div>
                  <p className="text-sm font-medium text-gray-500">Growing with Wisdom</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category pills */}
      <div className="container-custom pb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: BookOpen, label: 'Children\'s Books', href: '/books', color: 'bg-sky-50 text-sky-700 border-sky-200' },
            { icon: Leaf, label: 'Organic Foods', href: '/foods', color: 'bg-sage-50 text-sage-700 border-sage-200' },
            { icon: Sparkles, label: 'Vedic Learning', href: '/vedic-learning', color: 'bg-saffron-50 text-saffron-700 border-saffron-200' },
          ].map(({ icon: Icon, label, href, color }) => (
            <Link
              key={href}
              href={href}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all hover:shadow-md ${color}`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
