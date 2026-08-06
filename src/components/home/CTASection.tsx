'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-saffron-500 via-saffron-600 to-earth-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="container-custom relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            Start Your Child&apos;s Journey<br />
            <span className="text-turmeric-200">Towards Wisdom & Wellness</span>
          </h2>
          <p className="mt-6 text-lg text-saffron-100 max-w-2xl mx-auto">
            Join over 10,000 families who are raising mindful, healthy, and culturally rooted children with Parivartan Pathshala.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-saffron-600 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
            >
              Get Started Today <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
