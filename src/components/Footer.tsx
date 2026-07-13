import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS, SERVICES, AREAS } from '@/lib/constants';
import { Logo } from '@/components/Logo';

const EMERGENCY_LINKS = [
  { label: 'Emergency Car Lockout', href: '/services/car-lockout' },
  { label: 'Lost Car Keys', href: '/services/car-key-replacement' },
  { label: 'Locked Keys in Car', href: '/services/car-lockout' },
  { label: 'Broken Key in Ignition', href: '/services/broken-key-extraction' },
  { label: 'Home Lockout', href: '/services/residential-locksmith' },
  { label: 'Business Lockout', href: '/services/commercial-locksmith' },
];

const POPULAR_SEARCHES = [
  { label: 'Car Locksmith Leicester', href: '/' },
  { label: 'Car Key Replacement Leicester', href: '/services/car-key-replacement' },
  { label: 'Emergency Car Lockout Leicester', href: '/services/car-lockout' },
  { label: 'Car Key Programming Leicester', href: '/services/car-key-programming' },
  { label: 'Locksmith Near Me Leicester', href: '/areas/leicester' },
  { label: 'Auto Locksmith Leicester', href: '/services/car-lockout' },
  { label: 'Car Key Cutting Leicester', href: '/services/car-key-cutting' },
  { label: 'Motorbike Locksmith Leicester', href: '/services/motorbike-locksmith' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* NAP strip — consistent NAP for entity signals */}
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

      {/* Main footer — 6 semantic columns */}
      <div className="container-lg grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo variant="dark" size="md" />
          <p className="mt-1 text-sm text-slate-400 leading-relaxed">
            Car Locksmith Leicester — auto, residential, and commercial locksmith serving Leicester and Leicestershire for over 10 years. Available 24/7.
          </p>
          <div className="mt-5 space-y-2">
            <div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-300">
              <span className="text-green-400">✓</span> 10+ Years Experience
            </div>
            <br />
            <div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-300">
              <span className="text-green-400">✓</span> No Vehicle Damage Guarantee
            </div>
          </div>
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
            <li className="pt-1">
              <Link href="/services" className="text-sm font-semibold text-brand-400 hover:text-brand-300">
                All Services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">Areas Covered</h3>
          <ul className="space-y-2" role="list">
            {AREAS.slice(0, 9).map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="text-sm text-slate-400 hover:text-brand-400"
                >
                  {a.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link href="/areas" className="text-sm font-semibold text-brand-400 hover:text-brand-300">
                View all areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Emergency Services */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">Emergency Services</h3>
          <ul className="space-y-2" role="list">
            {EMERGENCY_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-400 hover:text-brand-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">Guides & Pricing</h3>
          <ul className="space-y-2" role="list">
            {[
              { label: 'Locksmith Pricing', href: '/pricing' },
              { label: 'What to Do When Locked Out', href: '/guides/what-to-do-when-locked-out-of-car' },
              { label: 'Car Key Replacement Cost', href: '/guides/car-key-replacement-cost-leicester' },
              { label: 'What is a Transponder Key?', href: '/guides/what-is-a-transponder-key' },
              { label: 'All Guides →', href: '/guides' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-slate-400 hover:text-brand-400">
                  {l.label}
                </Link>
              </li>
            ))}
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
        </div>
      </div>

      {/* Popular Searches strip */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="container-lg py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Popular Searches</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {POPULAR_SEARCHES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-sm text-slate-400 hover:text-brand-400"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-lg flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
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
