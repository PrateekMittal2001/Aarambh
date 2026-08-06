'use client';

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/YOUR_FORM_ID_HERE';

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-saffron-100 px-4 py-1.5 text-xs font-semibold text-saffron-700 mb-4">
            📬 Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Interested in our books, foods, or learning programs? Want to place an order or have a question? Fill out our form and we&apos;ll get back to you.
          </p>
        </div>

        {/* Google Form CTA */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="rounded-3xl bg-gradient-to-br from-saffron-50 to-turmeric-50 border border-saffron-100 p-8 md:p-12 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
              Submit Your Query
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Whether you want to buy a product, ask about our Vedic programs, or just say hello — use our form below. We typically respond within 24 hours.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 text-lg px-8 py-4"
            >
              Open Contact Form <ExternalLink className="h-5 w-5" />
            </a>
            <p className="mt-4 text-xs text-gray-400">Opens Google Forms in a new tab</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">Or reach us directly</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Mail, title: 'Email', detail: 'hello@parivartanpathshala.com' },
              { icon: Phone, title: 'Phone', detail: '+91 98765 43210' },
              { icon: MapPin, title: 'Location', detail: 'Varanasi, Uttar Pradesh' },
            ].map((item) => (
              <div key={item.title} className="text-center rounded-2xl border border-gray-100 p-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 mb-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
