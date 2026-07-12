import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Motorbike Locksmith Leicester | Bike & Scooter Key Cutting, Programming',
  description:
    'Specialist motorbike and scooter locksmith in Leicester. Key cutting, key programming, lost key replacement and lockout service for all major brands including Yamaha, Suzuki and Ducati.',
  alternates: { canonical: `${SITE_URL}/services/motorbike-locksmith` },
};

const FAQS = [
  {
    question: 'Can you replace lost motorbike keys?',
    answer:
      'Yes. We supply and programme replacement keys for most major motorbike and scooter brands, including Yamaha, Suzuki, Honda, Kawasaki, Ducati, and more. Call us with your make, model, and year for a quote.',
  },
  {
    question: 'Do you cover locked-out motorbike situations?',
    answer:
      'Yes. If you are locked out of a motorbike — for example, keys locked in a pannierbox or lost — we can help with emergency access or key replacement on-site across Leicester and Leicestershire.',
  },
  {
    question: 'Can you cut a key for an older motorbike that no longer has a key code on record?',
    answer:
      'For older bikes where the original key code is unavailable, we can often cut a new key by impression (by reading the lock directly), or by accessing the bike to retrieve the key code from the lock itself. Call us to discuss your specific situation.',
  },
  {
    question: 'Do you cover scooters and mopeds as well as larger motorbikes?',
    answer:
      'Yes. We cover all two-wheeled motor vehicles, from 50cc scooters and mopeds to large-displacement motorbikes, across all major brands.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Motorbike Locksmith', item: `${SITE_URL}/services/motorbike-locksmith` },
  ]),
  buildServiceSchema({
    name: 'Motorbike & Scooter Locksmith Services',
    description: 'Specialist motorbike and scooter key cutting, programming, lost key replacement and lockout services across Leicester and Leicestershire.',
    slug: 'motorbike-locksmith',
  }),
  buildFAQSchema(FAQS),
]);

export default function MotorbikeLocksmithPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Motorbike & Scooter Locksmith' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Motorbike &amp; Scooter Locksmith <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Specialist locksmith services for motorbikes, scooters, and mopeds across Leicester and Leicestershire. Key cutting, key programming, lost key replacement — all major brands covered.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Motorbike Locksmith Services in Leicester</h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Car Locksmith Leicester has the specialist equipment and expertise to handle locksmith work on motorbikes and scooters, which require different tools and techniques to car key work. We cover all major brands including Yamaha, Suzuki, Honda, Kawasaki, Ducati, Triumph, KTM, and more.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Whether you&apos;ve lost your keys, need a spare cut, have a broken key in the ignition, or simply need advice, call us for a free consultation before committing to any work.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">Our Motorbike Locksmith Services</h2>
          <ul className="mb-8 space-y-3">
            {[
              'Motorbike key cutting (all profiles)',
              'Scooter and moped key cutting and programming',
              'Lost motorbike key replacement',
              'Transponder and immobiliser key programming for modern bikes',
              'Broken key extraction from ignition or lock',
              'Emergency motorbike lockout assistance',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-2xl font-bold text-slate-900">Brands We Cover</h2>
          <div className="mb-8 flex flex-wrap gap-2">
            {['Yamaha', 'Suzuki', 'Honda', 'Kawasaki', 'Ducati', 'Triumph', 'KTM', 'BMW Motorrad', 'Aprilia', 'MV Agusta', 'Harley-Davidson', 'Piaggio', 'Vespa', 'Kymco'].map((b) => (
              <span key={b} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">{b}</span>
            ))}
          </div>

          <FAQBlock faqs={FAQS} heading="Motorbike Locksmith FAQs" />
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Motorbike locksmith needed in Leicester?</h2>
          <p className="mb-6 text-brand-100">Call for a free quote — we cover all major brands.</p>
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
              { slug: 'car-key-cutting', name: 'Car Key Cutting', desc: 'Need car keys cut too? We cover all vehicle types.' },
              { slug: 'broken-key-extraction', name: 'Broken Key Extraction', desc: 'Key snapped in the ignition? We extract it safely.' },
              { slug: 'car-key-replacement', name: 'Car Key Replacement', desc: 'Lost all keys? We supply and programme replacements.' },
            ].map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border border-slate-200 p-5 hover:border-brand-300 hover:shadow-sm">
                <h3 className="mb-1 font-bold text-slate-900">{s.name}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
