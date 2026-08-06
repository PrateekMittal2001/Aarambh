'use client';

import { SectionHeading, AnimatedCard } from '@/components/ui';
import { Search, ShoppingCart, BookOpen, Sparkles } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Explore', description: 'Browse our curated collection of books, organic foods, and Vedic learning programs.', step: '01' },
  { icon: ShoppingCart, title: 'Choose', description: 'Select age-appropriate products and programs tailored to your child\'s interests.', step: '02' },
  { icon: BookOpen, title: 'Learn & Grow', description: 'Watch your child develop through daily reading, healthy eating, and spiritual practices.', step: '03' },
  { icon: Sparkles, title: 'Transform', description: 'See the positive transformation in your child\'s confidence, health, and character.', step: '04' },
];

export function LearningJourney() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="🗺️ The Journey"
          title="How It Works"
          subtitle="A simple path to nurturing your child's complete growth."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedCard key={step.title} delay={i * 0.12}>
              <div className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] hidden lg:block w-[80%] border-t-2 border-dashed border-saffron-200" />
                )}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron-100 to-turmeric-100 mb-4">
                  <step.icon className="h-7 w-7 text-saffron-600" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-saffron-500 text-[10px] font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
