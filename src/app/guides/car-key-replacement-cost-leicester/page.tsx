import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, ChevronRight } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FAQBlock } from '@/components/FAQBlock';

export const metadata: Metadata = {
  title: 'Car Key Replacement Cost Leicester 2025 | Locksmith vs Dealer Price Guide',
  description:
    'How much does car key replacement cost in Leicester? A breakdown by key type, vehicle make, and scenario — plus a full comparison of locksmith vs main dealer costs.',
  alternates: { canonical: `${SITE_URL}/guides/car-key-replacement-cost-leicester` },
};

const FAQS = [
  {
    question: 'How much does car key replacement cost in Leicester?',
    answer:
      'Cost varies significantly by key type and vehicle. Basic mechanical keys are least expensive, transponder chip keys are mid-range, remote fobs are higher, and smart/proximity keys are the most expensive. Call Car Locksmith Leicester with your vehicle make, model, and year for an exact quote — we always confirm the price before attending and are significantly cheaper than the main dealer for most vehicles.',
  },
  {
    question: 'Why is car key replacement so expensive at the dealer?',
    answer:
      'Main dealers do not manufacture keys in-house. They order key blanks from the vehicle manufacturer at a high mark-up, then use proprietary programming equipment — also expensive to maintain. The process typically takes 3–7 days and the price reflects the overhead at every stage. A professional auto locksmith carries key stock, uses professional aftermarket equipment, and attends your location — eliminating most of those costs.',
  },
  {
    question: 'Can I buy a replacement key online and have it programmed?',
    answer:
      'Technically possible for some older vehicles, but risky for most modern cars. Online key blanks vary significantly in quality and compatibility. Some aftermarket keys work reliably; others fail within months or will not programme at all. For vehicles built after 2010, professional supply and programming by a qualified locksmith is almost always cheaper in the long run than buying an incompatible key online.',
  },
  {
    question: 'Can you replace a car key if all keys have been lost?',
    answer:
      'Yes. "All keys lost" replacement is a routine service we carry out regularly. Without an existing working key, the process requires a higher level of access to the vehicle\'s ECU to programme from scratch, which takes longer — but it is entirely possible for the vast majority of vehicles. Call us with your vehicle details for a quote.',
  },
  {
    question: 'Should I tell my insurer if my car keys have been stolen?',
    answer:
      'Yes — if keys were stolen rather than simply lost, notify your insurer. Depending on your policy, they may cover the cost of replacement. You should also have your vehicle re-coded so the stolen key no longer works. Car Locksmith Leicester can re-code your vehicle and supply new keys in the same visit.',
  },
];

const KEY_TYPES = [
  {
    type: 'Basic Mechanical Key',
    description: 'A simple metal key with no electronics. Used on older vehicles (typically pre-1995) and some budget models. Cut to profile only — no programming required.',
    complexity: 'Lowest',
    typical: 'Least expensive',
    example: 'Older Ford, Vauxhall, Citroën pre-2000',
  },
  {
    type: 'Transponder / Chip Key',
    description: 'Contains an electronic chip that communicates with the vehicle\'s immobiliser. The most common type in vehicles built from the mid-1990s onwards. Requires both cutting and ECU programming.',
    complexity: 'Medium',
    typical: 'Mid-range',
    example: 'Ford, Vauxhall, VW, Toyota 1996–2015',
  },
  {
    type: 'Remote Key Fob',
    description: 'Includes the transponder chip plus wireless buttons (lock, unlock, boot). Requires cutting, transponder programming, and remote pairing. The standard key type for most current mainstream vehicles.',
    complexity: 'Medium-High',
    typical: 'Higher',
    example: 'Most vehicles 2005 onwards',
  },
  {
    type: 'Smart / Proximity Key',
    description: 'Keyless entry and push-start ignition. The vehicle detects the key\'s presence without insertion. The most complex to programme — requires advanced diagnostic access and more time on-site.',
    complexity: 'Highest',
    typical: 'Most expensive',
    example: 'BMW, Mercedes, Audi, newer Ford & VW, Toyota Prius',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Guides', item: `${SITE_URL}/guides` },
    { name: 'Car Key Replacement Cost Leicester', item: `${SITE_URL}/guides/car-key-replacement-cost-leicester` },
  ]),
  buildArticleSchema({
    headline: 'Car Key Replacement Cost in Leicester (2025 Guide)',
    description: 'A clear breakdown of what car key replacement costs in Leicester — by key type, vehicle make, and scenario. How locksmiths compare to main dealers.',
    slug: 'guides/car-key-replacement-cost-leicester',
    datePublished: '2025-06-01',
    dateModified: '2026-07-12',
  }),
  buildFAQSchema(FAQS),
]);

export default function CarKeyReplacementCostGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb
            crumbs={[
              { label: 'Guides', href: '/guides' },
              { label: 'Car Key Replacement Cost' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-400">Pricing & Cost Guide — 2025</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Car Key Replacement Cost<br />
            <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-6 text-lg text-slate-300 leading-relaxed">
            Lost your car keys and not sure what a replacement should cost? This guide breaks down car key replacement pricing by key type, vehicle make, and scenario — and explains why a professional locksmith is almost always significantly cheaper and faster than the main dealer.
          </p>
          <p className="text-sm text-slate-400">
            For an exact quote on your vehicle:{' '}
            <a href={`tel:${BUSINESS.phone}`} className="font-bold text-brand-400 hover:underline">
              call {BUSINESS.phoneDisplay}
            </a>
            {' '}— free, no obligation.
          </p>
        </div>
      </section>

      {/* Quick answer */}
      <section className="border-y border-slate-100 bg-white">
        <div className="container-lg max-w-3xl py-10">
          <h2 className="mb-4 text-xl font-bold text-slate-900">The Short Answer</h2>
          <p className="text-slate-600 leading-relaxed">
            Car key replacement costs vary widely — from a modest sum for a basic mechanical key to several hundred pounds for a smart proximity key on a premium vehicle. The three variables that matter most are: <strong>key type</strong>, <strong>vehicle make and year</strong>, and <strong>whether you have any existing working keys</strong>. A professional{' '}
            <Link href="/services/car-key-replacement" className="font-semibold text-brand-600 hover:underline">
              auto locksmith car key replacement
            </Link>{' '}
            will cost significantly less than the main dealer for the same job — often 40–70% less — and is completed on-site within hours rather than days.
          </p>
        </div>
      </section>

      {/* Key types */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Car Key Types and Their Cost Factors</h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            The type of key your vehicle uses is the single biggest factor in replacement cost. Here is a guide to each type, from simplest to most complex.
          </p>
          <div className="space-y-4">
            {KEY_TYPES.map((kt) => (
              <div key={kt.type} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-900">{kt.type}</h3>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      Complexity: {kt.complexity}
                    </span>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                      {kt.typical}
                    </span>
                  </div>
                </div>
                <p className="mb-2 text-sm text-slate-600 leading-relaxed">{kt.description}</p>
                <p className="text-xs text-slate-400">Common in: {kt.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locksmith vs dealer */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Locksmith vs Main Dealer — Why the Price Differs</h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Most people assume the main dealer is the only option for key replacement. This is not true — and the dealer is almost always the most expensive option.
          </p>

          <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold" />
                  <th className="px-5 py-4 text-center font-semibold">Main Dealer</th>
                  <th className="px-5 py-4 text-center font-semibold text-brand-300">Auto Locksmith</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Relative cost', 'Highest', 'Significantly lower'],
                  ['Time to complete', '3–7 days (key ordered in)', 'Same day, on-site'],
                  ['Comes to you', 'No — you must transport vehicle', 'Yes — mobile service'],
                  ['Out-of-hours availability', 'Business hours only', '24/7'],
                  ['Equipment quality', 'Proprietary OEM systems', 'Professional aftermarket'],
                  ['All-keys-lost service', 'Yes', 'Yes'],
                  ['Key quality', 'OEM', 'Professional aftermarket (same function)'],
                ].map(([feature, dealer, locksmith]) => (
                  <tr key={feature as string} className="even:bg-slate-50">
                    <td className="px-5 py-3 font-medium text-slate-700">{feature}</td>
                    <td className="px-5 py-3 text-center text-slate-500">{dealer}</td>
                    <td className="px-5 py-3 text-center font-medium text-brand-600">{locksmith}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="mb-2 font-bold text-amber-800">Why dealers charge more</h3>
            <p className="text-sm text-amber-700 leading-relaxed">
              Main dealers do not stock replacement keys. They order them from the vehicle manufacturer at retail price, mark them up, then programme them using proprietary software licensed from the manufacturer. Every step in that chain has a cost that gets passed to you. A professional locksmith uses the same class of key blank and programming equipment — at a wholesale cost — and programmes on-site without a middleman.
            </p>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Other Factors That Affect Car Key Replacement Cost</h2>
          <ul className="space-y-4">
            {[
              { title: 'Vehicle make and model', body: 'Premium European brands (BMW, Mercedes-Benz, Audi, Land Rover, Jaguar) generally have more complex immobiliser systems than mainstream brands. This increases programming time and, in some cases, specialist tool costs.' },
              { title: 'Model year', body: 'Post-2018 vehicles from most manufacturers use encrypted rolling-code or token-based immobiliser systems that take longer to programme and require more capable equipment than older models.' },
              { title: 'Number of existing keys', body: 'If you have at least one working key, the locksmith can use it as a reference during programming. "All keys lost" (zero existing keys) is more involved and typically costs more.' },
              { title: 'Re-coding after theft', body: 'If your keys were stolen rather than lost, you should have your vehicle re-coded so the missing key no longer works. This is an additional programming step but essential for security — and costs less than you might expect.' },
            ].map(({ title, body }) => (
              <li key={title} className="flex gap-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-slate-900">{title} — </span>
                  <span className="text-sm text-slate-600 leading-relaxed">{body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Red flags */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Red Flags: Cheap Locksmith Quotes to Avoid</h2>
          <p className="mb-5 text-slate-600 leading-relaxed">
            Rogue locksmiths advertise very low call-out prices online and charge many times that amount once on-site. These are the warning signs to look for.
          </p>
          <div className="space-y-3">
            {[
              'No fixed price offered over the phone — only "starting from" amounts',
              'No verifiable reviews on Google, Trustpilot, or Checkatrade',
              'Cannot tell you the specific key type needed for your vehicle',
              'Price increases significantly after arriving at your location',
              'No receipt or invoice provided after the job',
            ].map((flag) => (
              <div key={flag} className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-100 px-4 py-3">
                <span className="mt-0.5 text-red-500 font-bold">✕</span>
                <span className="text-sm text-red-700">{flag}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-600 leading-relaxed">
            Car Locksmith Leicester always confirms the full price before attending, provides a transparent quote over the phone, and does not charge until the job is complete and you are satisfied. See our{' '}
            <Link href="/pricing" className="font-semibold text-brand-600 hover:underline">
              full pricing guide
            </Link>
            {' '}for more.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <FAQBlock faqs={FAQS} heading="Car Key Replacement Cost — FAQs" />
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-xl font-bold text-slate-900">Related Guides & Services</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: '/services/car-key-replacement', label: 'Car Key Replacement Service', type: 'Service' },
              { href: '/services/car-key-programming', label: 'Car Key Programming', type: 'Service' },
              { href: '/services/car-key-cutting', label: 'Car Key Cutting', type: 'Service' },
              { href: '/pricing', label: 'Full Locksmith Pricing Guide', type: 'Guide' },
              { href: '/guides/what-is-a-transponder-key', label: 'What is a Transponder Key?', type: 'Guide' },
              { href: '/guides/what-to-do-when-locked-out-of-car', label: 'What to Do When Locked Out', type: 'Guide' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-brand-300 hover:shadow-sm"
              >
                <div>
                  <span className="block text-sm font-medium text-slate-800">{l.label}</span>
                  <span className="text-xs text-brand-500">{l.type}</span>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Lost your car keys in Leicester?</h2>
          <p className="mb-6 text-brand-100">Call for your free, no-obligation quote — we always confirm the price before attending.</p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-xl font-bold text-brand-600 hover:bg-brand-50"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
