import { Metadata } from 'next';
import Link from 'next/link';
import { vedicPrograms } from '@/data';
import { SectionHeading } from '@/components/ui';
import { ArrowRight, Users, Clock, BarChart3 } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Vedic Learning for Kids',
  description: 'Age-appropriate Vedic mantras, Sanskrit shlokas, mindfulness, and संस्कार programs designed to nurture spiritual growth in children.',
};

export default function VedicLearningPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="🕉️ Vedic Education"
          title="Ancient Wisdom for Young Minds"
          subtitle="Structured programs that teach mantras, mindfulness, and Indian values in a fun, age-appropriate way."
        />

        {/* Hero banner */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-saffron-500 to-earth-500 p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 text-[200px] opacity-10 font-display leading-none">ॐ</div>
          <div className="relative max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold">The Gift of संस्कार</h2>
            <p className="mt-4 text-saffron-100 text-lg leading-relaxed">
              Our Vedic learning programs are designed by Sanskrit scholars and child psychologists to make ancient wisdom accessible, engaging, and meaningful for today&apos;s children.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2"><Users className="h-4 w-4" /> 1500+ Students</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Self-Paced</span>
              <span className="flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Progress Tracking</span>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {vedicPrograms.map((program) => (
            <Link
              key={program.id}
              href={`/vedic-learning/${program.slug}`}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden card-hover"
            >
              <div className="aspect-video bg-gradient-to-br from-saffron-50 to-turmeric-50 flex items-center justify-center text-6xl relative">
                🕉️
                <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
                  {program.level}
                </span>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-700">Ages {program.ageGroup}</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{program.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-saffron-600 transition-colors">
                  {program.title}
                </h3>
                <p className="mt-2 text-gray-500 line-clamp-2">{program.description}</p>

                <div className="mt-4">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Benefits</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {program.benefits.slice(0, 3).map((benefit) => (
                      <span key={benefit} className="rounded-full bg-sage-50 px-2.5 py-1 text-xs text-sage-700">{benefit}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(program.price)}</span>
                    <span className="text-sm text-gray-400 ml-1">/ program</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-saffron-600">
                    Enroll Now <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Progress Dashboard Mockup */}
        <div className="mt-16">
          <SectionHeading
            badge="📊 Track Progress"
            title="Your Child's Learning Dashboard"
            subtitle="Monitor progress, celebrate milestones, and keep your child motivated."
          />
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Mantras Learned', value: '12', color: 'text-saffron-600' },
                { label: 'Days Streak', value: '28', color: 'text-sage-600' },
                { label: 'Hours Practiced', value: '15', color: 'text-sky-600' },
                { label: 'Achievements', value: '6', color: 'text-turmeric-600' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-gray-50">
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-gradient-to-r from-sage-50 to-turmeric-50 p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Morning Mantra Magic — Progress</span>
                <span className="text-sm font-bold text-sage-600">75%</span>
              </div>
              <div className="h-3 rounded-full bg-white overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sage-400 to-sage-500 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
