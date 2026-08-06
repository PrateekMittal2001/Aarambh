import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedBooks } from '@/components/home/FeaturedBooks';
import { OrganicFoodHighlights } from '@/components/home/OrganicFoodHighlights';
import { VedicLearningOverview } from '@/components/home/VedicLearningOverview';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LearningJourney } from '@/components/home/LearningJourney';
import { FeaturedBlog } from '@/components/home/FeaturedBlog';
import { CTASection } from '@/components/home/CTASection';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Parivartan Pathshala',
  url: 'https://parivartanpathshala.com',
  description: 'Inspiring children through quality books, organic nutrition, and Vedic wisdom.',
  foundingDate: '2020',
  address: { '@type': 'PostalAddress', addressLocality: 'Varanasi', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FeaturedBooks />
      <OrganicFoodHighlights />
      <VedicLearningOverview />
      <BenefitsSection />
      <LearningJourney />
      <TestimonialsSection />
      <FeaturedBlog />
      <CTASection />
    </>
  );
}
