import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MapPin, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { AREAS, SERVICES, BUSINESS, SITE_URL } from '@/lib/constants';
import {
  buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema
} from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

interface Props {
  params: { 'area-slug': string };
}

function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug) ?? null;
}

export function generateStaticParams() {
  return AREAS.map((a) => ({ 'area-slug': a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = getArea(params['area-slug']);
  if (!area) return {};
  return {
    title: `Car Locksmith ${area.name} | 24/7 Auto & Residential Locksmith`,
    description: `Need a locksmith in ${area.name}? Car Locksmith Leicester provides 24/7 emergency car lockout, key cutting, key programming, and residential locksmith services in ${area.name} and surrounding areas.`,
    alternates: { canonical: `${SITE_URL}/areas/${area.slug}` },
  };
}

export default function AreaPage({ params }: Props) {
  const area = getArea(params['area-slug']);
  if (!area) return notFound();

  const areaFaqs = [
    {
      question: `How quickly can a locksmith reach ${area.name}?`,
      answer: `Car Locksmith Leicester typically arrives in ${area.name} within 60 minutes of your call, and often sooner depending on traffic conditions. We operate 24 hours a day, 7 days a week.`,
    },
    {
      question: `Do you cover all locksmith services in ${area.name}?`,
      answer: `Yes. We provide our full range of locksmith services in ${area.name}, including emergency car lockout, car key cutting, car key programming, car key replacement, broken key extraction, motorbike locksmith services, residential locksmith, and commercial locksmith.`,
    },
    {
      question: `Is there a call-out fee for ${area.name}?`,
      answer: `Call us for current pricing — we always confirm the full price before attending. Our rates are transparent and significantly cheaper than a main dealer for automotive key work.`,
    },
  ];

  const schema = buildPageGraph([
    buildBreadcrumbSchema([
      { name: 'Home', item: SITE_URL },
      { name: 'Areas Covered', item: `${SITE_URL}/areas` },
      { name: area.name, item: `${SITE_URL}/areas/${area.slug}` },
    ]),
    {
      '@type': 'LocalBusiness',
      name: `Car Locksmith Leicester — serving ${area.name}`,
      url: `${SITE_URL}/areas/${area.slug}`,
      telephone: BUSINESS.phone,
      areaServed: { '@type': 'City', name: area.name },
    },
    buildFAQSchema(areaFaqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Areas', href: '/areas' }, { label: area.name }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 flex items-center gap-2 text-sm text-brand-300">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Serving {area.name}, Leicestershire
            </div>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Car Locksmith <span className="text-brand-400">{area.name}</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300">
              Car Locksmith Leicester provides a full range of auto, residential, and commercial locksmith services in {area.name} — 24 hours a day, 7 days a week. Emergency car lockout, key cutting, key programming and more, typically on-site within 60 minutes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold text-white hover:bg-white/10">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="border-y border-slate-100 bg-white">
        <div className="container-lg grid grid-cols-2 gap-0 divide-x divide-slate-200 md:grid-cols-4">
          {[
            { icon: Clock, stat: '~60 min', label: `To ${area.name}` },
            { icon: CheckCircle, stat: '24/7', label: 'Always available' },
            { icon: MapPin, stat: 'On-site', label: 'Come to you' },
            { icon: CheckCircle, stat: 'All Makes', label: 'Vehicles covered' },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
              <Icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
              <span className="text-xl font-extrabold text-slate-900">{stat}</span>
              <span className="text-xs text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About the service in this area */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">
            Locksmith Services in {area.name}
          </h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Car Locksmith Leicester is based in Leicester and provides rapid locksmith response to {area.name} and all surrounding areas. Whether you are locked out of your car in {area.name}, need a replacement key cut and programmed, or require a residential or commercial lock change, we can be with you quickly.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Our technicians carry the equipment to handle most locksmith jobs on-site in a single visit — no return trips, no waiting days for parts. For automotive key work, we are significantly cheaper than a main dealer, with no compromise on quality or professionalism.
          </p>

          {/* Services list */}
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Services Available in {area.name}
          </h2>
          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:border-brand-300 hover:shadow-sm"
              >
                <span className="text-sm font-medium text-slate-800">{service.shortName}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              </Link>
            ))}
          </div>

          {/* Area-specific FAQ */}
          <h2 className="mb-6 text-2xl font-bold text-slate-900">FAQs — {area.name}</h2>
          <div className="space-y-4">
            {areaFaqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-brand-500 transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-50 py-12">
        <div className="container-lg">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Find Us Near {area.name}</h2>
          {/* [INSERT GOOGLE MAPS EMBED for area.name — replace the div below with an <iframe> using the Google Maps Embed API with your Place ID] */}
          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 text-slate-400 text-sm">
            [INSERT GOOGLE MAP EMBED — see PLACEHOLDERS.md]
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Map embed placeholder — replace with your Google Maps embed code before launch.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Need a Locksmith in {area.name}?</h2>
          <p className="mb-6 text-brand-100">Available 24/7 — call us now for fast response.</p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-xl font-bold text-brand-600 hover:bg-brand-50">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Other Areas We Cover</h2>
          <div className="flex flex-wrap gap-3">
            {AREAS.filter((a) => a.slug !== area.slug).slice(0, 8).map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700">
                <MapPin className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
                {a.name}
              </Link>
            ))}
            <Link href="/areas" className="flex items-center gap-1.5 rounded-lg border border-brand-200 bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100">
              View all areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
