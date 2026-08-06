'use client';

import { SectionHeading, AnimatedCard } from '@/components/ui';
import { Brain, Heart, Shield, Sparkles, BookOpen, Users } from 'lucide-react';

const benefits = [
  { icon: Brain, title: 'Cognitive Development', description: 'Books and mantras stimulate brain development, improving memory, focus, and analytical thinking.', color: 'bg-sky-100 text-sky-600' },
  { icon: Heart, title: 'Emotional Intelligence', description: 'Stories with values and mindfulness practices help children understand and manage emotions.', color: 'bg-lotus-100 text-lotus-600' },
  { icon: Shield, title: 'Strong Immunity', description: 'Organic, Ayurvedic foods provide essential nutrients that build a strong immune system naturally.', color: 'bg-sage-100 text-sage-600' },
  { icon: Sparkles, title: 'Cultural Connection', description: 'Vedic education connects children to their roots, building pride in India\'s rich heritage.', color: 'bg-saffron-100 text-saffron-600' },
  { icon: BookOpen, title: 'Love for Learning', description: 'Engaging content creates a lifelong love for reading, exploring, and self-improvement.', color: 'bg-turmeric-100 text-turmeric-600' },
  { icon: Users, title: 'Family Bonding', description: 'Activities designed for parent-child participation strengthen family relationships.', color: 'bg-earth-100 text-earth-600' },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="✨ Why Parents Choose Us"
          title="Holistic Benefits for Your Child"
          subtitle="Every product and program is designed to nurture the complete development of your child."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <AnimatedCard key={benefit.title} delay={i * 0.08}>
              <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-saffron-200 transition-colors">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
