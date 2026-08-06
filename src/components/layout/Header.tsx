'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import { NavItem } from '@/types';
import { SearchOverlay } from './SearchOverlay';

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Books', href: '/books',
    children: [
      { label: 'All Books', href: '/books' },
      { label: 'Age 3-6', href: '/books?age=3-6' },
      { label: 'Age 6-10', href: '/books?age=6-10' },
      { label: 'Age 10-14', href: '/books?age=10-14' },
    ],
  },
  {
    label: 'Organic Foods', href: '/foods',
    children: [
      { label: 'All Products', href: '/foods' },
      { label: 'Snacks', href: '/foods?category=snacks' },
      { label: 'Drinks', href: '/foods?category=drinks' },
      { label: 'Breakfast', href: '/foods?category=breakfast' },
    ],
  },
  { label: 'Vedic Learning', href: '/vedic-learning' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-saffron-400 to-saffron-600">
              <span className="text-lg font-bold text-white">प</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-display font-bold text-gray-900">Parivartan Pathshala</h1>
              <p className="text-[10px] text-gray-500 -mt-1">Books • Nutrition • Wisdom</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-colors hover:text-saffron-600 hover:bg-saffron-50"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-48 rounded-xl bg-white p-2 shadow-xl border border-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-saffron-50 hover:text-saffron-600 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button aria-label="Search (Ctrl+K)" onClick={() => setSearchOpen(true)} className="flex items-center gap-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors p-2 lg:border lg:border-gray-200 lg:px-3 lg:py-1.5">
              <Search className="h-4 w-4" />
              <span className="hidden lg:inline text-xs text-gray-400">Ctrl+K</span>
            </button>
            <button
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-saffron-50 hover:text-saffron-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
