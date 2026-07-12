import Link from 'next/link';
import { Phone, Home, ChevronRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <div className="container-lg max-w-2xl text-center">
        <div className="mb-6 text-8xl font-extrabold text-brand-100">404</div>
        <h1 className="mb-4 text-3xl font-bold text-slate-900">Page not found</h1>
        <p className="mb-8 text-slate-500 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. If you need a locksmith urgently, call us now — we&apos;re available 24/7.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 text-lg font-bold text-white hover:bg-brand-600"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
        <div className="mt-10 text-left">
          <p className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Useful Links</p>
          <ul className="space-y-2" role="list">
            {[
              { href: '/services', label: 'All Locksmith Services' },
              { href: '/services/car-lockout', label: 'Emergency Car Lockout' },
              { href: '/services/car-key-replacement', label: 'Car Key Replacement' },
              { href: '/areas', label: 'Areas We Cover' },
              { href: '/faq', label: 'FAQ' },
              { href: '/contact', label: 'Contact Us' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:underline">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
