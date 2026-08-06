import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui';
import { Heart, BookOpen, Leaf, Sparkles, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Parivartan Pathshala — our mission to inspire children through books, organic nutrition, and Vedic wisdom.',
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-saffron-100 px-4 py-1.5 text-xs font-semibold text-saffron-700 mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
            Nurturing the Next Generation with{' '}
            <span className="gradient-text">Love & Wisdom</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Parivartan Pathshala was born from a simple belief: every child deserves access to wholesome nutrition, enriching stories, and the timeless wisdom of Indian culture.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl bg-gradient-to-br from-saffron-50 to-turmeric-50 p-8 border border-saffron-100">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower parents with trusted resources that help their children grow into healthy, mindful, and culturally rooted individuals — through the power of stories, natural nutrition, and spiritual education.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-sage-50 to-sky-50 p-8 border border-sage-100">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A world where every child is nurtured holistically — their mind stimulated by knowledge, body nourished by nature, and spirit enriched by ancient wisdom adapted for the modern age.
            </p>
          </div>
        </div>

        {/* Values */}
        <SectionHeading
          badge="💎 Our Values"
          title="What We Stand For"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Heart, title: 'Child-First Approach', description: 'Every product and program is designed with the child\'s well-being and joy as the top priority.' },
            { icon: Leaf, title: 'Purity & Transparency', description: 'From ingredients to content — we maintain complete transparency and never compromise on quality.' },
            { icon: BookOpen, title: 'Lifelong Learning', description: 'We ignite curiosity and a love for learning that extends far beyond childhood.' },
            { icon: Sparkles, title: 'Cultural Heritage', description: 'We celebrate and preserve India\'s rich spiritual and cultural traditions for future generations.' },
            { icon: Award, title: 'Evidence-Based', description: 'Our programs combine traditional wisdom with modern educational research and child psychology.' },
            { icon: Users, title: 'Community', description: 'We build a supportive community of like-minded families on the journey of conscious parenting.' },
          ].map((value) => (
            <div key={value.title} className="rounded-2xl border border-gray-100 p-6 hover:border-saffron-200 transition-colors">
              <value.icon className="h-8 w-8 text-saffron-500 mb-4" />
              <h3 className="font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <SectionHeading
          badge="👥 Our Team"
          title="The People Behind Parivartan"
          subtitle="A passionate team of educators, nutritionists, Sanskrit scholars, and parents."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Dr. Anita Sharma', role: 'Founder & Vedic Scholar', emoji: '👩‍🏫' },
            { name: 'Rajiv Menon', role: 'Head of Nutrition', emoji: '👨‍🔬' },
            { name: 'Priya Desai', role: 'Children\'s Author', emoji: '✍️' },
            { name: 'Vikram Patel', role: 'Education Director', emoji: '🎓' },
          ].map((member) => (
            <div key={member.name} className="text-center rounded-2xl border border-gray-100 p-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-saffron-100 to-turmeric-100 text-3xl mb-4">
                {member.emoji}
              </div>
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
