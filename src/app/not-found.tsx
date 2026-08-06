import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-custom text-center max-w-lg mx-auto">
        <div className="text-8xl mb-6">🌱</div>
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Looks like this page hasn&apos;t sprouted yet. Let&apos;s get you back on the right path.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
