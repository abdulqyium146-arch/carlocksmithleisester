import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, AlertTriangle, CheckCircle, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema, buildHowToSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FAQBlock } from '@/components/FAQBlock';

export const metadata: Metadata = {
  title: 'What to Do When Locked Out of Your Car | Leicester Locksmith Guide',
  description:
    'Locked out of your car in Leicester? Follow these steps: stay safe, do not try to force entry, and call a professional. Full guide with what to do, what not to do, and how to prevent it.',
  alternates: { canonical: `${SITE_URL}/guides/what-to-do-when-locked-out-of-car` },
};

const FAQS = [
  {
    question: 'Is it illegal to break into your own car in the UK?',
    answer:
      'No — it is not illegal to break into your own car in the UK. However, attempting to force entry can trigger airbag sensors, crack door seals, damage paintwork, and activate the alarm. Attempting entry with tools that look like burglary equipment in a public place could also attract police attention, even if you own the vehicle. A professional locksmith is always the safest and most cost-effective option.',
  },
  {
    question: 'How long does it take a locksmith to get into a locked car?',
    answer:
      'An experienced auto locksmith using specialist non-destructive entry tools can typically gain access to a locked vehicle in 5–15 minutes on-site. The total time from your call to being back inside your car — including travel — is typically under 60 minutes across Leicester and Leicestershire.',
  },
  {
    question: 'Does car insurance cover lockouts?',
    answer:
      'Many comprehensive car insurance policies include roadside assistance that covers lockouts. Check your policy documents or call your insurer before paying out of pocket. However, if you need someone urgently and do not have cover, a professional auto locksmith is usually the fastest and most affordable option.',
  },
  {
    question: 'What if my key has broken inside the car lock?',
    answer:
      'Do not try to start the car or remove the key fragment with pliers — both actions risk pushing the fragment deeper into the barrel or damaging the ignition. Call an auto locksmith immediately. We provide a specialist broken key extraction service that removes the fragment without damaging the lock, followed by on-site key cutting and programming.',
  },
  {
    question: 'What if I have locked a child or pet inside my car?',
    answer:
      'This is a genuine emergency. Call 999 first if there is immediate risk to life — police and fire crews can gain access quickly. If the situation is not immediately life-threatening, call Car Locksmith Leicester on 07988 388514 and we will respond as a priority. On hot days, act immediately — temperatures inside a locked car can rise to dangerous levels within minutes.',
  },
];

const STEPS = [
  {
    title: 'Assess your immediate safety',
    body: 'Before doing anything else, check whether you are in a safe location. If you are on a motorway hard shoulder, a fast dual carriageway, or anywhere you feel at risk after dark, move away from traffic to a safe position. Your personal safety comes before getting back into the car.',
  },
  {
    title: 'Check all doors, windows, and the boot',
    body: 'This sounds obvious, but it is worth checking every entry point methodically before calling anyone. Try the passenger door, rear doors, and boot release. Check whether any window is open enough to reach inside. People find their own solution more often than you would expect.',
  },
  {
    title: 'Locate your spare key',
    body: 'If you have a spare key at home, or a friend or family member can bring one to you, this is often the most cost-effective solution. Consider whether a taxi to collect the spare key and return is faster and cheaper than a call-out depending on your location.',
  },
  {
    title: 'Check your breakdown or insurance cover',
    body: 'Many comprehensive insurance policies and breakdown memberships (RAC, AA, Green Flag) include lockout assistance. Check your documents or call your provider. Be aware that response times from national breakdown services can be 1–3 hours, and they may not be equipped to handle all scenarios.',
  },
  {
    title: 'Call a professional auto locksmith',
    body: 'If you need to get back in quickly, or your breakdown cover does not apply, an auto locksmith is the fastest and safest option. Car Locksmith Leicester operates 24/7, typically arrives within 60 minutes across Leicester and Leicestershire, and uses non-destructive tools that cause zero damage to your vehicle.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Guides', item: `${SITE_URL}/guides` },
    { name: 'What to Do When Locked Out of Your Car', item: `${SITE_URL}/guides/what-to-do-when-locked-out-of-car` },
  ]),
  buildArticleSchema({
    headline: 'What to Do When Locked Out of Your Car',
    description: 'Step-by-step guide for car lockout situations — immediate steps, what to avoid, who to call, and how to prevent future lockouts.',
    slug: 'guides/what-to-do-when-locked-out-of-car',
    datePublished: '2025-06-01',
    dateModified: '2026-07-12',
  }),
  buildHowToSchema({
    name: 'What to Do When Locked Out of Your Car in Leicester',
    steps: STEPS.map((s) => ({ name: s.title, text: s.body })),
  }),
  buildFAQSchema(FAQS),
]);

export default function LockedOutGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb
            crumbs={[
              { label: 'Guides', href: '/guides' },
              { label: 'Locked Out of Your Car' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-400">Emergency Advice</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
            What to Do When Locked Out of Your Car
          </h1>
          <p className="mb-6 text-lg text-slate-300 leading-relaxed">
            Being locked out of your car is stressful — but it happens to thousands of drivers every day. This guide walks you through exactly what to do, what not to do, who to call, and how to avoid it in the future.
          </p>
          <p className="text-sm text-slate-400">
            Need help right now?{' '}
            <a href={`tel:${BUSINESS.phone}`} className="font-bold text-brand-400 hover:underline">
              Call {BUSINESS.phoneDisplay}
            </a>
            {' '}— we are available 24/7 across Leicester and Leicestershire.
          </p>
        </div>
      </section>

      {/* Warning box */}
      <section className="bg-red-50 border-y border-red-200 py-6">
        <div className="container-lg max-w-3xl">
          <div className="flex gap-4">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-red-500" aria-hidden="true" />
            <div>
              <p className="font-bold text-red-800">Do not attempt to force entry yourself</p>
              <p className="mt-1 text-sm text-red-700 leading-relaxed">
                Using coat hangers, screwdrivers, or any improvised tool to force entry can crack door seals, scratch paintwork, trigger airbag sensors, and damage the locking mechanism — turning a simple £80 locksmith call into a £500+ repair bill. Specialist non-destructive tools exist precisely because forcing entry causes damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Step-by-Step: What to Do</h2>
          <ol className="space-y-6">
            {STEPS.map(({ title, body }, i) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What NOT to do */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">What NOT to Do When Locked Out</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Do not use a coat hanger or wire',
                body: 'The classic TV technique of using a bent coat hanger to hook the door latch works on 1970s cars. Modern vehicles have completely different internal mechanisms, weatherproof seals, and electronics. Sliding wire between the door and frame will damage the seal and likely accomplish nothing useful.',
              },
              {
                title: 'Do not use a wedge and rod kit unless trained',
                body: 'Inflatable wedge kits are sold online and can prise a gap in the door frame — but without training, the gap is very likely to bend the door frame, damage the weatherstrip, or trigger the alarm. These tools require practice and knowledge of each vehicle\'s door structure.',
              },
              {
                title: 'Do not break a window unless it is an emergency',
                body: 'Breaking a window to retrieve keys is a last resort that should only be considered if there is a genuine emergency (child or pet in immediate danger). A window replacement typically costs £150–£300 and may not be covered by your insurance.',
              },
              {
                title: 'Do not call an untested locksmith from an online directory',
                body: 'Rogue locksmiths operate across the UK, advertising extremely low call-out fees and then charging several hundred pounds once on-site. Always call a locksmith you can verify — check Google reviews, Trustpilot, or ask for a firm price before they attend.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 font-bold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to call a locksmith */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">When a Locksmith is the Right Choice</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            An{' '}
            <Link href="/services/car-lockout" className="font-semibold text-brand-600 hover:underline">
              auto locksmith
            </Link>{' '}
            is typically the fastest, cheapest, and safest solution when:
          </p>
          <ul className="mb-8 space-y-3">
            {[
              'You need to get back into your car within the hour',
              'Your breakdown cover does not include lockout assistance',
              'You are in a location where a long wait is impractical or unsafe',
              'Your keys are locked inside and you need the car to move',
              'You have a broken key in the lock or ignition (requires specialist extraction)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Car Locksmith Leicester covers the full{' '}
            <Link href="/areas" className="font-semibold text-brand-600 hover:underline">
              Leicester and Leicestershire area
            </Link>
            , operating 24 hours a day. We use professional non-destructive entry tools that open modern vehicle locking systems without any damage to paintwork, seals, or electronics. See our{' '}
            <Link href="/guides/car-key-replacement-cost-leicester" className="font-semibold text-brand-600 hover:underline">
              car key replacement cost guide
            </Link>{' '}
            if you also need a new key.
          </p>
        </div>
      </section>

      {/* Prevention tips */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">How to Prevent Future Car Lockouts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: 'Get a spare key cut', body: 'The single most effective prevention. Get a spare key cut and programmed and keep it somewhere accessible — at home, with a trusted family member, or in a small magnetic key box.' },
              { icon: ShieldCheck, title: 'Use a key hook at home', body: 'A dedicated key hook by the door creates a consistent place to put your car keys every time you enter the house, making it much harder to accidentally leave them inside.' },
              { icon: ShieldCheck, title: 'Try a Bluetooth key tracker', body: 'Devices like Tile or Apple AirTag attached to your keyring alert you via your smartphone when your keys are out of range — before you lock them inside or lose them.' },
              { icon: ShieldCheck, title: 'Make a habit of checking before you close', body: 'The simplest habit: whenever you close your car door, pause and physically feel for your keys before it clicks shut. This takes two seconds and prevents the most common lockout scenario.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-brand-500" aria-hidden="true" />
                  <h3 className="font-bold text-slate-900">{title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-600 leading-relaxed">
            If you want to get a spare key cut,{' '}
            <Link href="/services/car-key-cutting" className="font-semibold text-brand-600 hover:underline">
              our car key cutting service
            </Link>{' '}
            covers all makes and models on-site across Leicester and Leicestershire.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <FAQBlock faqs={FAQS} heading="Car Lockout FAQs" />
        </div>
      </section>

      {/* Related content */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-xl font-bold text-slate-900">Related Guides & Services</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: '/services/car-lockout', label: 'Emergency Car Lockout Service', type: 'Service' },
              { href: '/services/broken-key-extraction', label: 'Broken Key Extraction', type: 'Service' },
              { href: '/services/car-key-cutting', label: 'Car Key Cutting — Get a Spare', type: 'Service' },
              { href: '/guides/car-key-replacement-cost-leicester', label: 'Car Key Replacement Cost Guide', type: 'Guide' },
              { href: '/guides/what-is-a-transponder-key', label: 'What is a Transponder Key?', type: 'Guide' },
              { href: '/faq', label: 'Frequently Asked Questions', type: 'FAQ' },
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
          <h2 className="mb-3 text-2xl font-bold">Locked out right now?</h2>
          <p className="mb-6 text-brand-100">
            Car Locksmith Leicester — 24/7, typically on-site within 60 minutes, zero vehicle damage.
          </p>
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
