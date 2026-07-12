'use client';

import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export function StickyCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-600 bg-brand-500 md:hidden"
      role="complementary"
      aria-label="Emergency call bar"
    >
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex w-full items-center justify-center gap-3 py-4 text-white"
        aria-label={`Call Car Locksmith Leicester now: ${BUSINESS.phoneDisplay}`}
      >
        <span className="flex h-10 w-10 animate-pulse-slow items-center justify-center rounded-full bg-white/20">
          <Phone className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs font-medium opacity-90">Emergency? Call Now — 24/7</span>
          <span className="block text-xl font-bold tracking-wide">{BUSINESS.phoneDisplay}</span>
        </span>
      </a>
    </div>
  );
}
