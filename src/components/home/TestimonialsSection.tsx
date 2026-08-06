'use client';

import { SectionHeading, AnimatedCard, StarRating } from '@/components/ui';
import { testimonials } from '@/data';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-turmeric-50/30 to-white">
      <div className="container-custom">
        <SectionHeading
          badge="💛 Loved by Families"
          title="What Parents Are Saying"
          subtitle="Join thousands of families who trust us for their children's growth and development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <AnimatedCard key={testimonial.id} delay={i * 0.1}>
              <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-full">
                <Quote className="h-8 w-8 text-saffron-200 mb-4" />
                <p className="flex-1 text-gray-600 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-saffron-100 to-turmeric-100 text-lg">
                    👤
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role} · Kids age: {testimonial.childAge}</p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
