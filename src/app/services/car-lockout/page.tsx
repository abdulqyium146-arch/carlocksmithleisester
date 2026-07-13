import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { AREAS, BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema, buildHowToSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';
import { VideoPlayer } from '@/components/VideoPlayer';
import { VIDEOS, buildVideoObjectSchema } from '@/lib/videos';

export const metadata: Metadata = {
  title: 'Emergency Car Lockout Leicester | Locked Out of Your Car? Call 24/7',
  description:
    'Locked out of your car in Leicester? Car Locksmith Leicester provides fast, damage-free emergency vehicle entry across Leicester and Leicestershire — typically on-site within 60 minutes.',
  alternates: { canonical: `${SITE_URL}/services/car-lockout` },
};

const FAQS = [
  {
    question: 'How long does it take to get into a locked car?',
    answer:
      'In most cases, our technician can gain entry to a locked vehicle in just a few minutes using specialist non-destructive tools. The full process — including our arrival — typically takes under 60 minutes from your call.',
  },
  {
    question: 'Will you damage my car getting in?',
    answer:
      'No. Car Locksmith Leicester uses professional-grade tools designed to open vehicle locks without causing any damage to paintwork, door seals, or the locking mechanism itself. We do not use techniques that scratch or dent your vehicle.',
  },
  {
    question: 'What if my key is still inside the car?',
    answer:
      'We can retrieve keys locked inside the vehicle safely and without damage. If your key is broken in the lock or ignition, see our broken key extraction service instead.',
  },
  {
    question: 'Do you cover all car makes and models?',
    answer:
      'Yes. We cover all major makes including BMW, Mercedes, Audi, Toyota, Ford, Vauxhall, Volkswagen, and many more. If you\'re unsure whether we can help with your specific vehicle, call us for a free consultation.',
  },
];

const PROCESS_STEPS = [
  {
    title: 'Call Car Locksmith Leicester',
    body: `Ring us any time on ${BUSINESS.phoneDisplay}. We'll ask for your location, the make and model of your vehicle, and a brief description of what happened.`,
  },
  {
    title: 'We dispatch a technician',
    body: 'A local technician will be dispatched to your location immediately. We aim to arrive within 60 minutes across Leicester and Leicestershire.',
  },
  {
    title: 'We gain entry safely',
    body: 'Using specialist non-destructive tools, we open your vehicle without causing any damage. In most cases this takes just a few minutes once we\'re on-site.',
  },
  {
    title: 'You\'re back on the road',
    body: 'Once inside, we\'ll check the vehicle is secure before leaving. If you need a replacement key or spare key cut, we can do that on-site too.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Emergency Car Lockout', item: `${SITE_URL}/services/car-lockout` },
  ]),
  buildServiceSchema({
    name: 'Emergency Car Lockout',
    description:
      'Professional, damage-free emergency vehicle entry service across Leicester and Leicestershire, available 24 hours a day, 7 days a week.',
    slug: 'car-lockout',
  }),
  buildFAQSchema(FAQS),
  buildHowToSchema({
    name: 'How to Get Into a Locked Car in Leicester',
    steps: PROCESS_STEPS.map((s) => ({ name: s.title, text: s.body })),
  }),
  buildVideoObjectSchema(VIDEOS[0]),
]);

export default function CarLockoutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb
            crumbs={[
              { label: 'Services', href: '/services' },
              { label: 'Emergency Car Lockout' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg">
          <div className="mx-auto max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3 py-1 text-sm text-brand-300">
              <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" aria-hidden="true" />
              Available Now — 24/7
            </div>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
              Emergency Car Lockout<br />
              <span className="text-brand-400">Leicester</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300">
              Locked out of your car? Car Locksmith Leicester provides fast, professional, and completely damage-free vehicle entry across Leicester and all surrounding areas — 24 hours a day, 7 days a week.
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-brand-600"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {BUSINESS.phoneDisplay} — Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Key stats */}
      <section className="border-y border-slate-100 bg-white">
        <div className="container-lg grid grid-cols-1 gap-0 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { icon: Clock, stat: '~60 min', label: 'Typical response time' },
            { icon: ShieldCheck, stat: 'Zero', label: 'Damage to your vehicle' },
            { icon: CheckCircle, stat: '24/7', label: 'Available every day' },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 px-8 py-8 text-center">
              <Icon className="h-7 w-7 text-brand-500" aria-hidden="true" />
              <span className="text-3xl font-extrabold text-slate-900">{stat}</span>
              <span className="text-sm text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-slate-900 py-12">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-2 text-xl font-bold text-white">See It in Action</h2>
          <p className="mb-6 text-sm text-slate-400">
            Real footage of our technician completing an emergency car lockout in Leicester — no damage, no drama.
          </p>
          <VideoPlayer video={VIDEOS[0]} includeSchema={false} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">
            What to Do if You&apos;re Locked Out of Your Car in Leicester
          </h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Being locked out of your vehicle is a stressful experience, especially if it happens at night or in an unfamiliar location. The first thing to do is stay calm and call Car Locksmith Leicester on{' '}
            <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-brand-600 hover:underline">
              {BUSINESS.phoneDisplay}
            </a>
            . We operate 24 hours a day, 7 days a week, and will typically be with you within 60 minutes.
          </p>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Our technicians use professional, non-destructive tools to gain entry to your vehicle. This means no damage to your paintwork, door seals, or locking mechanism — unlike the &ldquo;slim-jim&rdquo; techniques sometimes used by less experienced operators, which can crack seals, scratch paint, and trigger airbag sensors.
          </p>
          <p className="mb-4 text-slate-600 leading-relaxed">
            We cover all major makes and models — including BMW, Mercedes, Audi, Toyota, Ford, Vauxhall, and many more — and can handle vehicles with complex electronic locking systems as well as traditional mechanical locks. See our{' '}
            <Link href="/faq" className="font-semibold text-brand-600 hover:underline">
              frequently asked questions
            </Link>{' '}
            for more detail, or{' '}
            <Link href="/about" className="font-semibold text-brand-600 hover:underline">
              learn about us
            </Link>{' '}
            before you call.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Not sure what to do next? Read our step-by-step guide:{' '}
            <Link href="/guides/what-to-do-when-locked-out-of-car" className="font-semibold text-brand-600 hover:underline">
              What to Do When Locked Out of Your Car
            </Link>
            .
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">Our Car Lockout Process</h2>
          <ol className="mb-8 space-y-4">
            {PROCESS_STEPS.map(({ title, body }, i) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
            <h3 className="mb-2 font-bold text-brand-800">Important safety note</h3>
            <p className="text-sm text-brand-700 leading-relaxed">
              If you are in an unsafe location — on a motorway hard shoulder, in a car park after dark, or elsewhere where you feel at risk — prioritise your personal safety first. Move away from traffic and call us from a safe position. We will reach you as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <FAQBlock faqs={FAQS} heading="Car Lockout FAQs" />
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding bg-white">
        <div className="container-lg">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related Services</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'broken-key-extraction', name: 'Broken Key Extraction', desc: 'Key snapped in the lock or ignition? We extract it without damaging the barrel.' },
              { slug: 'car-key-replacement', name: 'Car Key Replacement', desc: 'Lost all your keys? We supply and program replacements on-site.' },
              { slug: 'car-key-cutting', name: 'Car Key Cutting', desc: 'Get a spare key cut so you\'re never locked out again.' },
            ].map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-xl border border-slate-200 p-5 hover:border-brand-300 hover:shadow-sm"
              >
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
          <h2 className="mb-2 text-xl font-bold text-slate-900">Emergency Car Lockout — Areas We Cover</h2>
          <p className="mb-5 text-sm text-slate-500">
            Based in Leicester, we respond to car lockouts across all surrounding Leicestershire towns. Select your area for local service details.
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

      {/* CTA */}
      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Locked out of your car right now?</h2>
          <p className="mb-6 text-brand-100">Call us immediately — we&apos;ll be with you as fast as possible.</p>
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
