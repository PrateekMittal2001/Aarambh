'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white">Join Our Family</h3>
              <p className="text-sm text-gray-400 mt-1">Get parenting tips, new arrivals & exclusive offers</p>
            </div>
            <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full bg-gray-800 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600">
                <span className="text-base font-bold text-white">प</span>
              </div>
              <span className="text-lg font-display font-bold text-white">Parivartan Pathshala</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Nurturing young minds through the wisdom of books, the goodness of organic nutrition, and the power of Vedic knowledge.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-gray-800 hover:bg-saffron-600 transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-gray-800 hover:bg-saffron-600 transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-gray-800 hover:bg-saffron-600 transition-colors"><Youtube className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-gray-800 hover:bg-saffron-600 transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {[['Children\'s Books', '/books'], ['Organic Foods', '/foods'], ['Vedic Learning', '/vedic-learning'], ['Blog & Resources', '/blog'], ['About Us', '/about']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-400 hover:text-saffron-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              {[['FAQs', '/faq'], ['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Contact Us', '/contact']].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-gray-400 hover:text-saffron-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 text-saffron-400 shrink-0" />
                <span>123 Wisdom Lane, Varanasi, Uttar Pradesh 221001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-saffron-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-saffron-400 shrink-0" />
                <span>hello@parivartanpathshala.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Parivartan Pathshala. All rights reserved.</p>
          <p className="text-xs text-gray-500">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
