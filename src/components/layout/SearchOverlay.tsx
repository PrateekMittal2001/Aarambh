'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { books, foodProducts, vedicPrograms } from '@/data';

interface SearchResult {
  title: string;
  href: string;
  category: string;
}

const allItems: SearchResult[] = [
  ...books.map((b) => ({ title: b.name, href: `/books/${b.slug}`, category: 'Book' })),
  ...foodProducts.map((f) => ({ title: f.name, href: `/foods/${f.slug}`, category: 'Food' })),
  ...vedicPrograms.map((p) => ({ title: p.title, href: `/vedic-learning/${p.slug}`, category: 'Program' })),
];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length > 1
    ? allItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Search">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative mx-auto mt-20 w-full max-w-xl px-4">
        <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
            <Search className="h-5 w-5 text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search books, foods, programs..."
              className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none"
            />
            <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors" aria-label="Close search">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto">
            {query.trim().length > 1 && results.length === 0 && (
              <p className="px-5 py-8 text-center text-sm text-gray-500">No results found for &ldquo;{query}&rdquo;</p>
            )}
            {results.length > 0 && (
              <ul className="py-2">
                {results.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-5 py-3 hover:bg-saffron-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-900">{item.title}</span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500">{item.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {query.trim().length <= 1 && (
              <div className="px-5 py-6 text-center text-sm text-gray-400">
                Type at least 2 characters to search
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
