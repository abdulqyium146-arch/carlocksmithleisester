import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Car, Key, Cpu, KeyRound, Wrench, Bike, Home, Building2, Phone } from 'lucide-react';
import { SERVICES, SITE_URL, BUSINESS } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Locksmith Services Leicester | Car, Motorbike, Residential & Commercial',
  description:
    'Full range of locksmith services in Leicester: emergency car lockout, key cutting, key programming, key replacement, broken key extraction, motorbike, residential and commercial locksmith.',
  alternates: { canonical: `${SITE_URL}/services` },
};

const ICON_MAP: Record<string, React.ElementType> = {
  Car, Key, Cpu, KeyRound, Wrench, Bike, Home, Building2,
};

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
  ]),
]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Locksmith Services in Leicester
          </h1>
          <p className="mx-auto max-w-2xl text-slate-300 md:text-lg">
            Car Locksmith Leicester offers a complete range of auto, residential, and commercial locksmith services — available 24 / 7 across Leicester and Leicestershire.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-bold text-white hover:bg-brand-600"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {BUSINESS.phoneDisplay} — 24/7
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white hover:bg-white/10"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="all-services-heading">
        <div className="container-lg">
          <h2 id="all-services-heading" className="mb-10 text-2xl font-bold text-slate-900">
            All Services
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? Key;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{service.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{service.description}</p>
                  <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Learn more <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Not sure which service you need?</h2>
          <p className="mb-6 text-brand-100">Call us for free advice — we&apos;ll tell you exactly what&apos;s needed before you commit.</p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-brand-600 hover:bg-brand-50"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
