import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Car Key Replacement Leicester | Lost Car Keys? We Replace Same Day',
  description:
    'Lost your car keys in Leicester? Car Locksmith Leicester supplies, cuts, and programmes replacement car keys on-site — all makes and models, significantly cheaper than the main dealer.',
  alternates: { canonical: `${SITE_URL}/services/car-key-replacement` },
};

const FAQS = [
  {
    question: 'How much does it cost to replace a lost car key in Leicester?',
    answer:
      'The cost of car key replacement varies by vehicle make, model, year, and key type. A basic cut-only key starts from a lower price, while a full transponder key with programming typically costs significantly less than a main dealer. Call us with your vehicle details for an accurate, no-obligation quote — we will always confirm the price before attending.',
  },
  {
    question: 'Can you replace a car key without the original?',
    answer:
      'Yes. Even if you have lost every key, we can supply and programme a completely new key using your vehicle\'s identification data. This is sometimes called "all keys lost" replacement and is a routine service we carry out regularly.',
  },
  {
    question: 'How long does car key replacement take?',
    answer:
      'From the moment we arrive, most car key replacements are completed in 30–60 minutes. This includes supply, key cutting, and ECU programming. Response time from your call is typically under 60 minutes across Leicester and Leicestershire.',
  },
  {
    question: 'Should I tell my insurer if I lose my car keys?',
    answer:
      'Yes — if you have lost your keys, particularly if they were stolen, you should notify your insurer and may wish to have your locks re-coded so the lost key no longer works. We can re-code your locks and provide a new key in the same visit.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Car Key Replacement', item: `${SITE_URL}/services/car-key-replacement` },
  ]),
  buildServiceSchema({
    name: 'Car Key Replacement',
    description: 'Same-day car key replacement for all makes and models across Leicester, including lost key scenarios and all-keys-lost programming.',
    slug: 'car-key-replacement',
  }),
  buildFAQSchema(FAQS),
]);

export default function CarKeyReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Car Key Replacement' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Car Key Replacement <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Lost your car keys? Car Locksmith Leicester supplies, cuts, and programmes replacement keys for all makes and models on-site — significantly cheaper than a main dealer, usually within 60 minutes of your call.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay} — Free Quote
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Lost Car Keys? Here&apos;s What to Do</h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Losing your car keys is stressful — and expensive if you go to the main dealer. Car Locksmith Leicester offers a fast, affordable alternative: we attend your location, supply the correct replacement key for your vehicle, cut it to the exact code, and programme it to your car&apos;s immobiliser — all in one visit.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            We cover all key types: basic cut keys, transponder chip keys, remote fobs, flip keys, and push-start proximity keys. If your keys were stolen or you&apos;re concerned about security, we can also re-code your vehicle so the lost key no longer works, and supply new coded keys in the same visit.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">What&apos;s Included in Car Key Replacement?</h2>
          <ul className="mb-8 space-y-3">
            {[
              'Supply of a new key blank (correct type for your vehicle)',
              'Precision key cutting to your vehicle\'s exact code',
              'Transponder / immobiliser chip programming',
              'Remote fob pairing (where applicable)',
              'Confirmation that the new key starts the vehicle',
              'Optional: re-coding of your vehicle so old/lost keys no longer work',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="mb-2 font-bold text-amber-800">Much cheaper than a main dealer</h3>
            <p className="text-sm text-amber-700 leading-relaxed">
              Main dealer car key replacement often costs £200–£600+ and can take 3–5 days as the key is ordered in. We carry stock of key blanks for most common vehicles and can usually complete the replacement in under an hour at a fraction of the dealer price. Call us for a free, no-obligation quote.
            </p>
          </div>

          <FAQBlock faqs={FAQS} heading="Car Key Replacement FAQs" />
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Lost your car keys in Leicester?</h2>
          <p className="mb-6 text-brand-100">Call now for a free, instant quote — no obligation.</p>
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
              { slug: 'car-key-programming', name: 'Car Key Programming', desc: 'Transponder and remote key programming for all makes.' },
              { slug: 'car-key-cutting', name: 'Car Key Cutting', desc: 'Precision key cutting to your vehicle\'s exact code.' },
              { slug: 'car-lockout', name: 'Emergency Car Lockout', desc: 'Locked out until your replacement key arrives? We gain access safely.' },
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
