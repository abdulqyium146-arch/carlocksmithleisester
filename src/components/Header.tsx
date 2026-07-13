'use client';

import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { Logo } from '@/components/Logo';
import Link from 'next/link';

const NAV = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Emergency Car Lockout', href: '/services/car-lockout' },
      { label: 'Car Key Cutting', href: '/services/car-key-cutting' },
      { label: 'Car Key Programming', href: '/services/car-key-programming' },
      { label: 'Car Key Replacement', href: '/services/car-key-replacement' },
      { label: 'Broken Key Extraction', href: '/services/broken-key-extraction' },
      { label: 'Motorbike Locksmith', href: '/services/motorbike-locksmith' },
      { label: 'Residential Locksmith', href: '/services/residential-locksmith' },
      { label: 'Commercial Locksmith', href: '/services/commercial-locksmith' },
    ],
  },
  {
    label: 'Areas',
    href: '/areas',
    children: [
      { label: 'Leicester', href: '/areas/leicester' },
      { label: 'Oadby', href: '/areas/oadby' },
      { label: 'Wigston', href: '/areas/wigston' },
      { label: 'Hinckley', href: '/areas/hinckley' },
      { label: 'Loughborough', href: '/areas/loughborough' },
      { label: 'Market Harborough', href: '/areas/market-harborough' },
    ],
  },
  {
    label: 'Resources',
    href: '/guides',
    children: [
      { label: 'Pricing Guide', href: '/pricing' },
      { label: 'What to Do When Locked Out', href: '/guides/what-to-do-when-locked-out-of-car' },
      { label: 'Car Key Replacement Cost', href: '/guides/car-key-replacement-cost-leicester' },
      { label: 'What is a Transponder Key?', href: '/guides/what-is-a-transponder-key' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function toggleDropdown(href: string) {
    setOpenDropdown((v) => (v === href ? null : href));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav
        aria-label="Main navigation"
        className="container-lg flex h-16 items-center justify-between"
      >
        <Logo variant="light" size="md" />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {NAV.map((item) =>
            item.children ? (
              <li key={item.href} className="relative">
                <button
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  onClick={() => toggleDropdown(item.href)}
                  aria-expanded={openDropdown === item.href}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openDropdown === item.href ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {openDropdown === item.href && (
                  <ul
                    className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
                    role="menu"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <li role="none">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-brand-50"
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label === 'Services' ? 'All Services →' : item.label === 'Areas' ? 'All Areas →' : 'All Guides →'}
                      </Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 sm:flex"
            aria-label={`Call us: ${BUSINESS.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-semibold text-white sm:hidden"
            aria-label="Call now"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <button
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="container-lg flex flex-col gap-0 py-3" role="list">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 border-l border-slate-200 pl-4" role="list">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
