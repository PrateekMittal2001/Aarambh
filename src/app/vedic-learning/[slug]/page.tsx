import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { vedicPrograms } from '@/data';
import { formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui';
import { ArrowLeft, Users, Clock, Play, CheckCircle2 } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return vedicPrograms.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const program = vedicPrograms.find((p) => p.slug === params.slug);
  if (!program) return { title: 'Program Not Found' };
  return { title: program.title, description: program.description };
}

export default function VedicProgramPage({ params }: Props) {
  const program = vedicPrograms.find((p) => p.slug === params.slug);
  if (!program) notFound();

  return (
    <div className="section-padding">
      <div className="container-custom">
        <Link href="/vedic-learning" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-saffron-600 transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Programs
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-saffron-50 to-turmeric-50 flex items-center justify-center text-[80px] mb-8">
              🕉️
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="warning">Ages {program.ageGroup}</Badge>
              <Badge variant="info">{program.level}</Badge>
              <Badge>{program.duration}</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">{program.title}</h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{program.description}</p>

            {/* Benefits */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What Your Child Will Gain</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {program.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 rounded-xl bg-sage-50 p-4">
                    <CheckCircle2 className="h-5 w-5 text-sage-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mantras */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Mantras in This Program</h2>
              <div className="space-y-4">
                {program.mantras.map((mantra) => (
                  <div key={mantra.id} className="rounded-2xl border border-gray-100 p-6 hover:border-saffron-200 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{mantra.name}</h3>
                        <p className="mt-2 text-xl font-display text-saffron-700 leading-relaxed">{mantra.sanskrit}</p>
                        <p className="mt-1 text-sm text-gray-500 italic">{mantra.transliteration}</p>
                        <p className="mt-3 text-gray-600">{mantra.meaning}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {mantra.benefits.map((b) => (
                            <span key={b} className="rounded-full bg-turmeric-50 px-3 py-1 text-xs text-turmeric-700">{b}</span>
                          ))}
                        </div>
                      </div>
                      <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-600 hover:bg-saffron-200 transition-colors" aria-label="Play mantra">
                        <Play className="h-4 w-4" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-gray-900">{formatPrice(program.price)}</span>
                <p className="text-sm text-gray-500 mt-1">per program</p>
              </div>

              <Link href="/contact" className="btn-primary w-full mb-4 text-center">Enquire to Enroll</Link>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>Duration: {program.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span>{program.enrolledCount}+ students enrolled</span>
                </div>
                <div className="flex items-center gap-3">
                  <Play className="h-4 w-4 text-gray-400" />
                  <span>{program.mantras.length} mantras included</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3">Includes</h4>
                <ul className="space-y-2">
                  {['Video lessons', 'Audio pronunciations', 'Printable worksheets', 'Progress tracking'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-sage-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
