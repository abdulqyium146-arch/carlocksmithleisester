import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { AREAS, BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Residential Locksmith Leicester | Home Lockout, Lock Change & Security',
  description:
    'Residential locksmith services in Leicester: emergency home lockout, lock replacement, lock upgrades, and home security advice. 24/7 response across Leicester and Leicestershire.',
  alternates: { canonical: `${SITE_URL}/services/residential-locksmith` },
};

const FAQS = [
  {
    question: 'Can a locksmith open my front door if I\'m locked out?',
    answer:
      'Yes. Car Locksmith Leicester provides residential lockout services alongside our automotive work. We can open most door locks non-destructively. If the lock must be drilled as a last resort, we will always replace it in the same visit.',
  },
  {
    question: 'How much does it cost to change a house lock in Leicester?',
    answer:
      'Lock change costs vary depending on the lock type (standard cylinder, BS kitemarked, multipoint), the number of locks, and the accessibility. Call us for a free quote — we will give you a firm price before attending.',
  },
  {
    question: 'What should I do if I\'ve been burgled or my keys have been stolen?',
    answer:
      'Call us immediately. We provide emergency lock replacement following a burglary or lost/stolen key situation. We can replace your locks the same day, often within the hour, to secure your home as quickly as possible.',
  },
  {
    question: 'Do you upgrade locks to higher security standards?',
    answer:
      'Yes. We can fit BS3621 kitemarked locks and high-security cylinder replacements that meet insurance requirements. We can also advise on wider home security improvements during our visit.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Residential Locksmith', item: `${SITE_URL}/services/residential-locksmith` },
  ]),
  buildServiceSchema({
    name: 'Residential Locksmith Services',
    description: 'Emergency home lockout, lock replacement, lock upgrade and home security services across Leicester and Leicestershire, available 24/7.',
    slug: 'residential-locksmith',
  }),
  buildFAQSchema(FAQS),
]);

export default function ResidentialLocksmithPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Residential Locksmith' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Residential Locksmith <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Locked out of your home, need a lock changed, or looking to improve your home security? Car Locksmith Leicester provides professional residential locksmith services across Leicester and Leicestershire — 24 hours a day.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay} — 24/7
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Residential Locksmith Services in Leicester</h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Our residential locksmith service covers everything from emergency lockouts to planned lock upgrades. As with all our work, we use non-destructive entry methods wherever possible and always give you an honest assessment and price before starting any job.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">What We Offer</h2>
          <ul className="mb-8 space-y-3">
            {[
              'Emergency home lockout — non-destructive entry where possible',
              'Lock replacement and upgrade (including BS3621 kitemarked locks)',
              'uPVC door lock replacement and repair',
              'Composite and wooden door lock changes',
              'Multipoint locking mechanism repair and replacement',
              'Lock re-keying (change locks so old keys no longer work)',
              'Additional key cutting for household locks',
              'Post-burglary emergency lock replacement',
              'Home security assessment and advice',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <FAQBlock faqs={FAQS} heading="Residential Locksmith FAQs" />
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Home locksmith needed in Leicester?</h2>
          <p className="mb-6 text-brand-100">Call now — we&apos;ll give you a free price before attending.</p>
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
              { slug: 'commercial-locksmith', name: 'Commercial Locksmith', desc: 'Lock changes and access control for business premises.' },
              { slug: 'car-lockout', name: 'Emergency Car Lockout', desc: 'Locked out of your car as well? We cover that too.' },
              { slug: 'car-key-replacement', name: 'Car Key Replacement', desc: 'Lost all your keys including your car keys? We replace them on-site.' },
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
          <h2 className="mb-2 text-xl font-bold text-slate-900">Residential Locksmith — Areas We Cover</h2>
          <p className="mb-5 text-sm text-slate-500">
            We provide home lockout, lock replacement, and security upgrade services across Leicester and all surrounding Leicestershire towns. Select your area for local service details.
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
