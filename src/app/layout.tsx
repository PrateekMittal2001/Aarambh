import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';
import { LoadingBar } from '@/components/shared/LoadingBar';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import { PageTransition } from '@/components/shared/PageTransition';

export const metadata: Metadata = {
  title: {
    default: 'Parivartan Pathshala — Books, Organic Foods & Vedic Learning for Kids',
    template: '%s | Parivartan Pathshala',
  },
  description: 'Inspiring children through quality books, organic nutrition, and Vedic wisdom. Building healthy, mindful, and cultured young minds.',
  keywords: ['children books', 'organic food kids', 'vedic mantras children', 'mindfulness kids', 'indian culture children', 'healthy snacks kids'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://parivartanpathshala.com',
    siteName: 'Parivartan Pathshala',
    title: 'Parivartan Pathshala — Books, Organic Foods & Vedic Learning for Kids',
    description: 'Inspiring children through quality books, organic nutrition, and Vedic wisdom.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Parivartan Pathshala' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">
        <LoadingBar />
        <Header />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
