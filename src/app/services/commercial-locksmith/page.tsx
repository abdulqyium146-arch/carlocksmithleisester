import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { AREAS, BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Commercial Locksmith Leicester | Business Lock Changes & Access Control',
  description:
    'Commercial locksmith services in Leicester: emergency business lockout, lock changes, master key systems, and access control for offices, shops, and commercial premises across Leicestershire.',
  alternates: { canonical: `${SITE_URL}/services/commercial-locksmith` },
};

const FAQS = [
  {
    question: 'Can you provide emergency locksmith cover for a business outside of office hours?',
    answer:
      'Yes. Car Locksmith Leicester operates 24 hours a day, 7 days a week, including evenings, weekends, and bank holidays. We understand that a business lockout or security breach can happen at any time and needs to be resolved immediately.',
  },
  {
    question: 'Do you install master key systems for commercial properties?',
    answer:
      'Yes. We design and install master key systems that allow different levels of access — for example, a building manager key that opens all locks, departmental keys that open only certain areas, and individual keys for specific offices or rooms.',
  },
  {
    question: 'Can you change all the locks on our premises after a staff member leaves?',
    answer:
      'Yes. Re-keying or replacing locks after a staff departure is a routine commercial job. We can change all locks to a new key profile, ensuring the departed member of staff\'s key no longer works, while providing new keys to authorised staff.',
  },
  {
    question: 'Do you work with all commercial door types?',
    answer:
      'Yes. We work with standard wooden and metal commercial doors, fire doors, uPVC frames, aluminium shopfront doors, roller shutters, and most access-controlled entrances. Call us to discuss your specific requirements.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Commercial Locksmith', item: `${SITE_URL}/services/commercial-locksmith` },
  ]),
  buildServiceSchema({
    name: 'Commercial Locksmith Services',
    description: 'Professional commercial locksmith services across Leicester and Leicestershire, including emergency entry, lock changes, master key systems, and access control.',
    slug: 'commercial-locksmith',
  }),
  buildFAQSchema(FAQS),
]);

export default function CommercialLocksmithPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Commercial Locksmith' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Commercial Locksmith <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Professional locksmith services for businesses and commercial premises across Leicester and Leicestershire. Emergency entry, lock replacement, master key systems, and access control — all available 24/7.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay} — 24/7
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Commercial Locksmith Services in Leicester</h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Car Locksmith Leicester provides a full range of commercial locksmith services for businesses of all sizes — from small retail units to large office buildings. We understand that security issues affecting a business need to be resolved quickly and professionally, often outside of normal working hours.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">Commercial Services We Provide</h2>
          <ul className="mb-8 space-y-3">
            {[
              'Emergency commercial lockout — non-destructive entry where possible',
              'Commercial lock replacement and re-keying',
              'Master key system design and installation',
              'High-security deadlock and padlock fitting',
              'Shopfront and aluminium door lock servicing',
              'Roller shutter lock repair and replacement',
              'Fire door lock compliance checks and fitting',
              'Post-break-in emergency security restoration',
              'Access control integration advice',
              'Fleet vehicle key management for businesses with multiple vehicles',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <FAQBlock faqs={FAQS} heading="Commercial Locksmith FAQs" />
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Commercial locksmith needed in Leicester?</h2>
          <p className="mb-6 text-brand-100">We work with businesses of all sizes — call to discuss your requirements.</p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-xl font-bold text-brand-600 hover:bg-brand-50">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'residential-locksmith', name: 'Residential Locksmith', desc: 'Home lockout, lock change and security upgrades.' },
              { slug: 'car-lockout', name: 'Emergency Car Lockout', desc: 'We also cover fleet vehicles and company cars.' },
              { slug: 'car-key-cutting', name: 'Car Key Cutting', desc: 'Spare key cutting for fleet and company vehicles.' },
            ].map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border border-slate-200 p-5 hover:border-brand-300 hover:shadow-sm">
                <h3 className="mb-1 font-bold text-slate-900">{s.name}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg">
          <h2 className="mb-2 text-xl font-bold text-slate-900">Commercial Locksmith — Areas We Cover</h2>
          <p className="mb-5 text-sm text-slate-500">
            We provide commercial lock, access control, and security services for businesses across Leicester and all surrounding Leicestershire towns. Select your area for local service details.
          </p>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-brand-300 hover:text-brand-700"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
