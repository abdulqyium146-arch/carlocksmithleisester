import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, ChevronRight } from 'lucide-react';
import { AREAS, BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Areas Covered | Car Locksmith Leicester & Leicestershire',
  description:
    'Car Locksmith Leicester covers Leicester city and all surrounding Leicestershire towns including Oadby, Wigston, Birstall, Loughborough, Hinckley and more. Fast 24/7 response across the region.',
  alternates: { canonical: `${SITE_URL}/areas` },
};

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Areas Covered', item: `${SITE_URL}/areas` },
  ]),
]);

export default function AreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Areas Covered' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg text-center">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Locksmith Coverage Across <span className="text-brand-400">Leicestershire</span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-300 md:text-lg">
            Based in Leicester, we provide fast 24/7 locksmith response across the city and all surrounding Leicestershire towns. If your location isn&apos;t listed, call us — our coverage area continues to grow.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 font-bold text-white hover:bg-brand-600">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {BUSINESS.phoneDisplay} — 24/7
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="areas-list-heading">
        <div className="container-lg">
          <h2 id="areas-list-heading" className="mb-8 text-2xl font-bold text-slate-900">
            All Areas We Cover
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span className="font-semibold text-slate-800">{area.name}</span>
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-brand-500" aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="mb-3 text-xl font-bold text-slate-900">Don&apos;t see your area listed?</h2>
            <p className="mb-5 text-slate-600">
              Our coverage extends beyond the towns listed above. Call us to check whether we can reach your location — in most cases, if you are within 15–20 miles of Leicester city centre, we can help.
            </p>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 font-bold text-white hover:bg-brand-600">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call to Check Coverage
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
