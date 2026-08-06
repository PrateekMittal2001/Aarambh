'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { SectionHeading, AnimatedCard } from '@/components/ui';
import { vedicPrograms } from '@/data';

export function VedicLearningOverview() {
  return (
    <section className="section-padding bg-gradient-to-b from-saffron-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-turmeric-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-lotus-100/30 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <SectionHeading
          badge="🕉️ Ancient Wisdom, Modern Learning"
          title="Vedic Mantras & संस्कार for Children"
          subtitle="Age-appropriate spiritual education that builds focus, discipline, and a connection to India's rich heritage."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vedicPrograms.map((program, i) => (
            <AnimatedCard key={program.id} delay={i * 0.1}>
              <Link href={`/vedic-learning/${program.slug}`} className="group block rounded-2xl border border-gray-100 bg-white p-6 card-hover">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-100 to-turmeric-100 text-2xl">
                  🕉️
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-saffron-600 transition-colors">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{program.description}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                  <span className="rounded-full bg-gray-100 px-2 py-1">Ages {program.ageGroup}</span>
                  <span className="rounded-full bg-gray-100 px-2 py-1">{program.duration}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-saffron-600">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* Mantra preview */}
        <AnimatedCard delay={0.3}>
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-saffron-500 to-saffron-600 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 text-[200px] font-display leading-none text-center opacity-20">ॐ</div>
            </div>
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold">Try a Free Mantra Session</h3>
                <p className="mt-3 text-saffron-100 text-lg">
                  Experience the Gayatri Mantra with guided pronunciation, meaning, and benefits — absolutely free.
                </p>
              </div>
              <button className="flex items-center gap-3 rounded-full bg-white px-6 py-4 text-saffron-600 font-semibold shadow-xl hover:shadow-2xl transition-all">
                <Play className="h-5 w-5" fill="currentColor" />
                Play Free Session
              </button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
