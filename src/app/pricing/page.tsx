import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, ChevronRight } from 'lucide-react';
import { BUSINESS, SERVICES, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FAQBlock } from '@/components/FAQBlock';

export const metadata: Metadata = {
  title: 'Locksmith Prices Leicester | Car Key & Lockout Cost Guide 2025',
  description:
    'Transparent locksmith pricing in Leicester. See how our car lockout, key cutting, key programming and key replacement costs compare to the main dealer. Always confirmed before we attend.',
  alternates: { canonical: `${SITE_URL}/pricing` },
};

const PRICING_FAQS = [
  {
    question: 'Do you always confirm the price before attending?',
    answer:
      'Yes — always. We give you a firm price over the phone before a technician leaves for your location. There are no hidden extras, no surprise charges after the job, and no payment until you are satisfied with the work.',
  },
  {
    question: 'Is an auto locksmith cheaper than a main dealer for car key replacement?',
    answer:
      'Yes — significantly cheaper in most cases. Main dealers order keys from the manufacturer, use proprietary equipment, and charge accordingly. Locksmith car key replacement typically costs a fraction of the dealer price because we carry key stock and programme keys on-site with professional aftermarket equipment.',
  },
  {
    question: 'Why do some locksmiths charge less than others?',
    answer:
      'Pricing varies by equipment quality, technician experience, and whether the locksmith carries key stock. Very cheap quotes often indicate the use of inferior key blanks, less capable programming equipment, or technicians with limited experience on certain vehicles. Always ask what\'s included and check reviews before booking.',
  },
  {
    question: 'Do you charge more for out-of-hours or weekend call-outs?',
    answer:
      'No. We do not apply a premium for out-of-hours, weekend, or bank holiday call-outs. Our quoted price is our price — regardless of when you call.',
  },
  {
    question: 'What affects the cost of car key replacement?',
    answer:
      'The main factors are: (1) key type — a basic mechanical key costs less than a transponder chip key, which costs less than a remote fob, which costs less than a smart/proximity key; (2) vehicle make and model — some brands require more complex programming; (3) the year of the vehicle — newer security protocols take longer to programme; and (4) whether you have any existing keys — all-keys-lost programming is more involved.',
  },
  {
    question: 'Do you offer a free quote over the phone?',
    answer:
      'Yes. Call us with your vehicle make, model, year, and registration, and we will give you an accurate, no-obligation price before we do anything else. There is no charge for this consultation.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Pricing', item: `${SITE_URL}/pricing` },
  ]),
  buildFAQSchema(PRICING_FAQS),
]);

const PRICE_FACTORS = [
  {
    heading: 'Key Type',
    body: 'Basic mechanical keys are the least expensive. Transponder chip keys require programming time and equipment. Remote key fobs add wireless pairing complexity. Smart / proximity keys (for push-start vehicles) are the most involved and therefore the highest cost.',
  },
  {
    heading: 'Vehicle Make & Model',
    body: 'European premium brands (BMW, Mercedes, Audi, Land Rover) typically use more complex immobiliser systems than mainstream models, which can affect programming time and cost. Japanese and Korean brands vary widely by model year.',
  },
  {
    heading: 'Key Scenario',
    body: 'A spare key cut from an existing working key costs less than a replacement for a lost key. "All keys lost" programming — where there is no existing working key — is the most complex scenario and takes longer.',
  },
  {
    heading: 'Vehicle Year',
    body: 'Post-2015 vehicles often feature advanced encrypted immobiliser protocols that require more sophisticated equipment and time. Pre-2000 vehicles are generally quicker and simpler to work on.',
  },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Pricing' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Locksmith Pricing <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-6 text-lg text-slate-300 leading-relaxed">
            We always confirm the full price before we attend — no hidden charges, no surprises. Call us for a free, no-obligation quote on any locksmith job across Leicester and Leicestershire.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-8 py-4 text-xl font-bold text-white hover:bg-brand-600"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay} — Free Quote
          </a>
        </div>
      </section>

      {/* Price promise */}
      <section className="border-y border-slate-100 bg-white">
        <div className="container-lg grid grid-cols-1 gap-0 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { stat: 'Free', label: 'Price confirmed before we attend' },
            { stat: 'No extras', label: 'Price agreed = price charged' },
            { stat: 'No premium', label: 'Same rate 24/7, weekends & bank holidays' },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 px-8 py-8 text-center">
              <span className="text-2xl font-extrabold text-brand-500">{stat}</span>
              <span className="text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dealer comparison */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Locksmith vs Main Dealer — The Cost Difference</h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            For automotive key work, a professional auto locksmith is almost always significantly cheaper than the main dealer — and faster. Here is why the gap exists and what you can expect.
          </p>

          <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Service</th>
                  <th className="px-5 py-4 text-center font-semibold">Main Dealer</th>
                  <th className="px-5 py-4 text-center font-semibold text-brand-300">Car Locksmith Leicester</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { service: 'Car key replacement (transponder)', dealer: '£200–£600+', us: 'Significantly less — call for quote' },
                  { service: 'Car key programming only', dealer: '£100–£350+', us: 'Competitive — call for quote' },
                  { service: 'Car key cutting (mechanical)', dealer: '£50–£150+', us: 'Competitive — call for quote' },
                  { service: 'Emergency car lockout', dealer: 'Not available', us: 'Flat-rate — call for quote' },
                  { service: 'Broken key extraction', dealer: 'Not available', us: 'Flat-rate — call for quote' },
                  { service: 'Time to attend', dealer: '3–7 days (order key in)', us: 'Typically within 60 minutes' },
                  { service: 'Out-of-hours availability', dealer: 'Business hours only', us: '24 / 7 / 365' },
                ].map((row) => (
                  <tr key={row.service} className="even:bg-slate-50">
                    <td className="px-5 py-4 font-medium text-slate-800">{row.service}</td>
                    <td className="px-5 py-4 text-center text-slate-500">{row.dealer}</td>
                    <td className="px-5 py-4 text-center font-semibold text-brand-600">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="mb-2 font-bold text-brand-800">Why are we cheaper than the dealer?</h3>
            <p className="text-sm text-brand-700 leading-relaxed">
              Main dealers order keys from the vehicle manufacturer and use proprietary programming systems — each with significant mark-ups. Car Locksmith Leicester carries key blanks for most common vehicles and uses professional aftermarket programming equipment that achieves the same result at a fraction of the dealer cost. We also attend your location, so there are no transport or recovery costs.
            </p>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">What Affects Locksmith Pricing?</h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            No two locksmith jobs are identical. These are the primary factors that affect the cost of any automotive key or lockout job.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {PRICE_FACTORS.map(({ heading, body }) => (
              <div key={heading} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-2 font-bold text-slate-900">{heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with pricing links */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Get a Quote for Your Service</h2>
          <p className="mb-6 text-slate-600">
            Call us with your details and we will give you an exact price before we attend. Each service page has more information about what is involved.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:border-brand-300 hover:shadow-sm"
              >
                <div>
                  <span className="text-sm font-semibold text-slate-800">{s.name}</span>
                  <p className="mt-0.5 text-xs text-slate-500 leading-snug">{s.description.slice(0, 70)}…</p>
                </div>
                <ChevronRight className="ml-3 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's always included */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">What Is Always Included in Our Price</h2>
          <ul className="space-y-3">
            {[
              'Free phone consultation and price agreed before we travel',
              'No call-out fee on top of the quoted price',
              'All labour included — no separate hourly charges',
              'Parts (key blanks, etc.) included in the quoted price',
              'No weekend, bank holiday, or out-of-hours premium',
              'No payment required until job is complete and you are satisfied',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <FAQBlock faqs={PRICING_FAQS} heading="Pricing FAQs" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Get Your Free Quote Now</h2>
          <p className="mb-6 text-brand-100">
            Call us — we will give you an exact price before committing to anything.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-xl font-bold text-brand-600 hover:bg-brand-50"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
