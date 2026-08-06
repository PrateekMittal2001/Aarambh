'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in learning more about Parivartan Pathshala products.';

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-200 transition-all hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </a>
  );
}
