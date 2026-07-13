import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { AREAS, BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Car Key Cutting Leicester | All Makes & Models | On-Site Service',
  description:
    'Professional car key cutting in Leicester. Keys cut to the exact code for all major makes and models — on-site where possible. Cheaper and faster than a main dealer.',
  alternates: { canonical: `${SITE_URL}/services/car-key-cutting` },
};

const FAQS = [
  {
    question: 'Can you cut a car key without the original?',
    answer:
      'Yes. Using your vehicle\'s key code (which we can retrieve from the car\'s lock data), we can cut a new key from scratch — even if you have no original to copy from. This is particularly useful when all keys have been lost.',
  },
  {
    question: 'How long does car key cutting take?',
    answer:
      'Key cutting itself typically takes only a few minutes on-site. If the key also needs programming to your vehicle\'s ECU (for transponder or remote keys), allow up to an hour in total.',
  },
  {
    question: 'Do you cut keys for all car brands?',
    answer:
      'We cut keys for all major brands including BMW, Mercedes-Benz, Audi, Toyota, Ford, Vauxhall, Volkswagen, Honda, and many more. Call us with your make, model, and year for a quick quote.',
  },
  {
    question: 'Is it cheaper to get a key cut by a locksmith than a dealer?',
    answer:
      'Yes — significantly. Dealers often charge several hundred pounds for a replacement key and may take days to order it in. We cut and (where needed) program keys on-site, usually at a fraction of the dealer price.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Car Key Cutting', item: `${SITE_URL}/services/car-key-cutting` },
  ]),
  buildServiceSchema({
    name: 'Car Key Cutting',
    description: 'Precision car key cutting for all makes and models, on-site across Leicester and Leicestershire.',
    slug: 'car-key-cutting',
  }),
  buildFAQSchema(FAQS),
]);

export default function CarKeyCuttingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Car Key Cutting' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Car Key Cutting <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Precision key cutting for all major car makes and models — on-site across Leicester and Leicestershire. Keys are cut to your vehicle&apos;s exact code, not merely copied from a worn original.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Professional Car Key Cutting in Leicester</h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Car Locksmith Leicester provides precision key cutting for all major vehicle makes and models. Unlike high-street key-cutting kiosks that simply copy the profile of an existing key (including any wear or distortions), we cut keys to the exact code held on file for your specific vehicle — producing a fresh, accurate key that will operate your locks smoothly for years to come.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            We can cut keys on-site, either at your home, workplace, or roadside — no need to visit a dealership or wait days for a key to be ordered in. For transponder keys and remote key fobs, we can also programme the new key to your car in the same visit.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">What We Can Cut</h2>
          <ul className="mb-8 space-y-3">
            {[
              'Standard mechanical car keys (all profiles)',
              'Transponder / chip keys (cut and programmed to your ECU)',
              'Remote key fobs / flip keys',
              'Proximity keys (keyless entry / push-start vehicles)',
              'Van and lorry keys',
              'Motorbike and scooter keys',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-2xl font-bold text-slate-900">Vehicles We Cover</h2>
          <p className="mb-3 text-slate-600">
            We cut keys for all major car brands, including but not limited to:
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {['BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Ford', 'Vauxhall', 'Volkswagen', 'Honda', 'Nissan', 'Hyundai', 'Kia', 'Peugeot', 'Renault', 'SEAT', 'Skoda', 'Fiat', 'Citroën', 'Land Rover', 'Jaguar'].map((brand) => (
              <span key={brand} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                {brand}
              </span>
            ))}
          </div>

          <FAQBlock faqs={FAQS} heading="Car Key Cutting FAQs" />
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Need a Key Cut in Leicester?</h2>
          <p className="mb-6 text-brand-100">Call for a free quote — we&apos;ll tell you the price before we arrive.</p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-xl font-bold text-brand-600 hover:bg-brand-50"
          >
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
              { slug: 'car-key-programming', name: 'Car Key Programming', desc: 'New key needs pairing with your car\'s ECU? We programme transponders and remote fobs on-site.' },
              { slug: 'car-key-replacement', name: 'Car Key Replacement', desc: 'Lost your only key? We supply, cut, and programme a replacement from scratch.' },
              { slug: 'car-lockout', name: 'Emergency Car Lockout', desc: 'Keys locked inside? We gain access without causing any damage.' },
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
          <h2 className="mb-2 text-xl font-bold text-slate-900">Car Key Cutting — Areas We Cover</h2>
          <p className="mb-5 text-sm text-slate-500">
            We cut car keys on-site across Leicester and all surrounding Leicestershire towns. Select your area for local service details.
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
