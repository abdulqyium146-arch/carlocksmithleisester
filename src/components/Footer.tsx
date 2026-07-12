import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS, SERVICES, AREAS } from '@/lib/constants';
import { Logo } from '@/components/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* NAP strip — consistent, exact NAP used for entity signals */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="container-lg grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</p>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-lg font-bold text-white hover:text-brand-400"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Availability</p>
              <p className="font-semibold text-white">24 / 7 Emergency Service</p>
              <p className="text-sm text-slate-400">Typically on-site within 60 minutes</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</p>
              <address className="not-italic text-sm font-semibold text-white">
                {BUSINESS.address.streetAddress}<br />
                {BUSINESS.address.addressLocality}, {BUSINESS.address.postalCode}
              </address>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-sm font-semibold text-white hover:text-brand-400 break-all"
              >
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-lg grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo variant="dark" size="md" />
          <p className="text-sm text-slate-400 leading-relaxed">
            Car Locksmith Leicester is an auto, residential, and commercial locksmith based in Leicester, UK, providing emergency vehicle entry, key cutting, key programming, and lock replacement services across Leicester and the surrounding area.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">Services</h3>
          <ul className="space-y-2" role="list">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-slate-400 hover:text-brand-400"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">Areas Covered</h3>
          <ul className="space-y-2" role="list">
            {AREAS.slice(0, 10).map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="text-sm text-slate-400 hover:text-brand-400"
                >
                  {a.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/areas" className="text-sm font-semibold text-brand-400 hover:text-brand-300">
                View all areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">Company</h3>
          <ul className="space-y-2" role="list">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Contact', href: '/contact' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-slate-400 hover:text-brand-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Trust badges */}
          <div className="mt-6 space-y-2">
            <div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-300">
              <span className="text-green-400">✓</span> 10+ Years Experience
            </div>
            <br />
            <div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-300">
              <span className="text-green-400">✓</span> No Vehicle Damage Guarantee
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-lg flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality},{' '}
            {BUSINESS.address.postalCode} — Tel: {BUSINESS.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
