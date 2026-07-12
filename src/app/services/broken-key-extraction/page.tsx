import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Broken Key Extraction Leicester | Key Stuck in Lock or Ignition?',
  description:
    'Broken key stuck in your car lock or ignition in Leicester? Car Locksmith Leicester extracts it safely without damaging the barrel, then cuts and programmes a new key on-site.',
  alternates: { canonical: `${SITE_URL}/services/broken-key-extraction` },
};

const FAQS = [
  {
    question: 'Can you extract a broken key without replacing the lock?',
    answer:
      'In most cases, yes. We use specialist extraction tools that remove the broken key fragment without damaging the lock barrel or ignition switch. Once the key is extracted, we assess the lock — if it is undamaged (which it usually is), we simply cut and programme a new key.',
  },
  {
    question: 'What should I do if a key breaks in my ignition?',
    answer:
      'Do not try to start the car or use pliers to pull the key out — both actions risk pushing the fragment further into the barrel or damaging the ignition. Call Car Locksmith Leicester immediately. Leave the key exactly as it is; attempting DIY extraction almost always causes additional damage and increases the repair cost.',
  },
  {
    question: 'How long does broken key extraction take?',
    answer:
      'Extraction typically takes 15–30 minutes. If a new key also needs to be cut and programmed afterwards, allow up to an hour in total. Our technician will give you a clear time estimate when we arrive.',
  },
  {
    question: 'What if the ignition is damaged after the key broke?',
    answer:
      'If the broken key caused damage to the ignition barrel, we can assess and — in many cases — replace it on-site, then cut and programme a new key to the replacement barrel. Call us to discuss your specific situation.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Broken Key Extraction', item: `${SITE_URL}/services/broken-key-extraction` },
  ]),
  buildServiceSchema({
    name: 'Broken Key Extraction',
    description: 'Professional broken key extraction from car locks and ignitions across Leicester, without causing damage to the barrel.',
    slug: 'broken-key-extraction',
  }),
  buildFAQSchema(FAQS),
]);

export default function BrokenKeyExtractionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Broken Key Extraction' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Broken Key Extraction <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Key snapped in your car door lock or ignition? Car Locksmith Leicester extracts it safely without damaging the lock barrel, then cuts and programmes a new key on-site — all in one visit.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay} — 24/7
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <div className="mb-8 flex gap-4 rounded-xl border border-red-200 bg-red-50 p-5">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-red-500" aria-hidden="true" />
            <div>
              <p className="font-bold text-red-800">Do not attempt DIY extraction</p>
              <p className="mt-1 text-sm text-red-700 leading-relaxed">
                Using pliers, glue, or other DIY methods almost always pushes the key fragment deeper or damages the lock barrel — significantly increasing repair costs. Call us first.
              </p>
            </div>
          </div>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">Professional Broken Key Extraction</h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Car Locksmith Leicester uses specialist extraction tools to remove broken key fragments from door locks, boot locks, and ignition barrels without causing any additional damage. Keys snap for a variety of reasons — metal fatigue over time, a sudden jolt, or the wrong angle of force — and it is a common emergency we deal with throughout Leicester every week.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Once the fragment is removed, we inspect the lock for damage. In the vast majority of cases, the lock is completely unharmed, and we can then cut and programme a new key on-site. If the ignition barrel has been damaged, we can replace it in the same visit for most vehicles.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">What We Cover</h2>
          <ul className="mb-8 space-y-3">
            {[
              'Broken keys extracted from car door locks',
              'Broken keys extracted from boot / tailgate locks',
              'Broken keys extracted from ignition barrels',
              'Post-extraction lock inspection at no extra charge',
              'New key cut and programmed on-site after extraction',
              'Ignition barrel replacement where required',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <FAQBlock faqs={FAQS} heading="Broken Key Extraction FAQs" />
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Key broken in your lock or ignition?</h2>
          <p className="mb-6 text-brand-100">Call us now — the sooner we attend, the less risk of further damage.</p>
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
              { slug: 'car-key-replacement', name: 'Car Key Replacement', desc: 'New key supplied, cut and programmed after extraction.' },
              { slug: 'car-key-cutting', name: 'Car Key Cutting', desc: 'Precision key cutting to your exact vehicle code.' },
              { slug: 'car-lockout', name: 'Emergency Car Lockout', desc: 'Locked out as well? We gain entry damage-free.' },
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
