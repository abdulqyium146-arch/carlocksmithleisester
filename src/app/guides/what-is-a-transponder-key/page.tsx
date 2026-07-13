import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildFAQSchema, buildArticleSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FAQBlock } from '@/components/FAQBlock';

export const metadata: Metadata = {
  title: 'What is a Transponder Key? How Car Transponder Keys Work | Leicester',
  description:
    'Plain-English explanation of transponder keys — what they are, how the immobiliser chip communicates with your ECU, key types, programming, and what to do when one stops working.',
  alternates: { canonical: `${SITE_URL}/guides/what-is-a-transponder-key` },
};

const FAQS = [
  {
    question: 'How do I know if my car key has a transponder chip?',
    answer:
      'Most cars built from the mid-1990s onwards use transponder keys. A simple test: if your car has only one key and you lose it, the car will not start with a blank key cut to the same profile — that is because the cut blank has no chip to communicate with the immobiliser. You can also look at the key head: if it is thicker than a typical house key or has a visible plastic body beyond the metal blade, it almost certainly contains a transponder chip.',
  },
  {
    question: 'Can I start my car without the transponder chip?',
    answer:
      'No — not under normal circumstances on vehicles with a factory immobiliser. The engine management system will allow the engine to crank but will cut fuel injection or ignition once it fails to receive the correct coded response from the key chip. Some older immobiliser bypass modules exist, but fitting them disables a fundamental security system and is not recommended.',
  },
  {
    question: 'Why has my transponder key stopped working?',
    answer:
      'The most common reasons are: (1) the chip has been demagnetised by proximity to strong magnets; (2) the key has been physically damaged and the chip cracked; (3) the battery in a remote fob version has died (this affects the remote buttons but usually not the chip itself); (4) the vehicle\'s immobiliser module has developed a fault. A professional locksmith or auto electrician can diagnose which is the case quickly.',
  },
  {
    question: 'How long does transponder key programming take?',
    answer:
      'For most mainstream vehicles, transponder key programming takes 15–45 minutes on-site. Vehicles with advanced security systems — particularly newer premium brands — may take slightly longer. Our technicians will give you an accurate estimate when you call with your vehicle details.',
  },
  {
    question: 'Can a locksmith programme a transponder key without the original?',
    answer:
      'Yes. "All keys lost" transponder programming — where there is no existing working key — is a routine service for professional locksmiths. It requires specialist diagnostic equipment to access the vehicle\'s ECU directly and write a new key code. This is more involved than programming an additional spare key but is entirely possible for the vast majority of vehicles.',
  },
];

const KEY_TYPES = [
  {
    name: 'Fixed Code Transponder',
    era: 'Mid-1990s to early 2000s',
    description: 'The earliest transponder keys transmit a single fixed code — the same code every time the key is used. The immobiliser checks the code on each start; if it matches, the engine is released. Fixed code systems are simpler and less expensive to replace but are considered less secure by modern standards.',
  },
  {
    name: 'Rolling Code (Hopping Code) Transponder',
    era: 'Late 1990s onwards',
    description: 'Rather than a fixed code, rolling code systems transmit a different encrypted code on each use, generated from a shared algorithm between the key and the ECU. Even if someone captures the transmitted signal, it cannot be replayed because it will never repeat. This is now the standard approach in most mainstream vehicles.',
  },
  {
    name: 'Encrypted / Crypto Transponder',
    era: '2005 onwards (premium brands from ~2000)',
    description: 'Advanced encryption — used by BMW, Mercedes, Audi, Land Rover and others — adds bidirectional challenge-response authentication. The vehicle sends a challenge to the key; the key must respond with the correct cryptographically signed answer. These systems are the most secure and also the most complex to programme.',
  },
  {
    name: 'Smart / Proximity Key',
    era: '2005 onwards (now mainstream)',
    description: 'Rather than inserting a key, the vehicle detects the proximity key\'s presence within about a metre via low-frequency radio signals. The key fob constantly broadcasts its identity; the vehicle\'s antennas (in the door handles and cabin) check the credentials and allow entry and start. These require the most sophisticated programming equipment.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Guides', item: `${SITE_URL}/guides` },
    { name: 'What is a Transponder Key?', item: `${SITE_URL}/guides/what-is-a-transponder-key` },
  ]),
  buildArticleSchema({
    headline: 'What is a Transponder Key? How Car Transponder Keys Work',
    description: 'Plain-English explanation of transponder keys, how the immobiliser communicates with the ECU, key types, programming, and what to do when one fails.',
    slug: 'guides/what-is-a-transponder-key',
    datePublished: '2025-06-01',
    dateModified: '2026-07-12',
  }),
  buildFAQSchema(FAQS),
]);

export default function TransponderKeyGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb
            crumbs={[
              { label: 'Guides', href: '/guides' },
              { label: 'What is a Transponder Key?' },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-400">Technical Guide</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
            What is a Transponder Key?
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            A plain-English guide to how modern car keys work — what the chip inside your key actually does, how it communicates with your vehicle, and what happens when it stops working.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">What is a Transponder Key?</h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            A <strong>transponder key</strong> is a car key that contains a small electronic chip — a transponder (from <em>transmitter-responder</em>) — embedded inside the plastic head of the key. This chip communicates wirelessly with your vehicle&apos;s immobiliser system every time you insert the key and turn the ignition.
          </p>
          <p className="mb-4 text-slate-600 leading-relaxed">
            If the vehicle&apos;s immobiliser does not receive the correct coded signal from the chip, the engine will not start — even if the mechanical cuts on the key are perfectly correct for your locks. The physical key cut controls the ignition barrel; the transponder chip controls the engine.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Transponder keys were introduced in the mid-1990s as a response to rising vehicle theft. Before transponders, a thief could start any car by cutting a key to the right profile or hot-wiring the ignition. The transponder system means that even a perfect copy of the key profile will not start the car without the correct programmed chip.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">How Does a Transponder Key Work?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The process happens automatically in under a second — here is what occurs each time you start your car:
          </p>
          <ol className="space-y-5">
            {[
              {
                title: 'Key is inserted into the ignition barrel',
                body: 'As the key enters the barrel, an antenna coil built into the ignition lock detects the key\'s presence. The coil is part of the vehicle\'s immobiliser control module.',
              },
              {
                title: 'The immobiliser energises the transponder chip',
                body: 'The antenna coil generates a low-power electromagnetic field, which inductively powers the transponder chip inside the key — the chip has no battery of its own. This is the same principle as contactless payment cards.',
              },
              {
                title: 'The chip broadcasts its code',
                body: 'Once powered, the chip transmits a unique encrypted code back to the immobiliser control module via radio frequency. On modern vehicles, this is part of a challenge-response sequence — the vehicle sends a challenge, the key calculates and returns the correct cryptographic answer.',
              },
              {
                title: 'The immobiliser checks the code against the ECU',
                body: 'The immobiliser module verifies the received code against the authorised key codes stored in the vehicle\'s Engine Control Unit (ECU). If the code matches, the immobiliser releases the fuel injection and ignition systems.',
              },
              {
                title: 'Engine starts (or does not)',
                body: 'If the code matches, the engine starts normally. If not — wrong key, unprogrammed chip, or damaged chip — the ECU prevents the engine from starting. The starter motor may still crank, but the engine will not fire.',
              },
            ].map(({ title, body }, i) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
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

      {/* Types */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-4xl">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Types of Transponder Key</h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Transponder technology has evolved considerably since its introduction. There are four main categories, each representing a generation of increasing security complexity.
          </p>
          <div className="space-y-4">
            {KEY_TYPES.map((kt, i) => (
              <div key={kt.name} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 flex flex-wrap items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{kt.name}</h3>
                    <p className="text-xs text-slate-400">{kt.era}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{kt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When it fails */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">What Happens When a Transponder Key Stops Working?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            If the transponder chip fails or the key is not recognised by the immobiliser, the engine will not start — even though the physical key turns the barrel normally. This is different from the remote fob buttons not working (which affects locking/unlocking, not starting).
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Common causes include: the chip being cracked or damaged from dropping the key, demagnetisation from strong magnets (some phone wallet cases and wireless chargers can cause this), corrosion from water damage, or the immobiliser module developing a fault on the vehicle side.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If your car cranks but will not start and you have recently dropped your keys, had water exposure, or the key feels unusual, a failed transponder is a likely cause. Our{' '}
            <Link href="/services/car-key-programming" className="font-semibold text-brand-600 hover:underline">
              car key programming service
            </Link>{' '}
            includes diagnosis and replacement where needed.
          </p>
        </div>
      </section>

      {/* Programming */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">How Transponder Key Programming Works</h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Programming a new transponder key requires specialist diagnostic equipment that can communicate directly with the vehicle&apos;s ECU via its OBD (On-Board Diagnostics) port. The process varies by vehicle but generally involves:
          </p>
          <ul className="mb-6 space-y-3">
            {[
              'Connecting professional key-programming software to the vehicle\'s OBD port',
              'Authenticating with the ECU using manufacturer-specific protocols',
              'Reading the current immobiliser security data',
              'Writing the new key\'s chip identifier into the ECU\'s authorised key list',
              'Verifying the new key starts the vehicle before the job is complete',
            ].map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                <span className="text-slate-600 text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed">
            For most vehicles this takes 15–45 minutes on-site. See the full{' '}
            <Link href="/services/car-key-programming" className="font-semibold text-brand-600 hover:underline">
              car key programming service page
            </Link>{' '}
            for details, or the{' '}
            <Link href="/guides/car-key-replacement-cost-leicester" className="font-semibold text-brand-600 hover:underline">
              car key replacement cost guide
            </Link>{' '}
            for pricing information.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <FAQBlock faqs={FAQS} heading="Transponder Key FAQs" />
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-xl font-bold text-slate-900">Related Guides & Services</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: '/services/car-key-programming', label: 'Car Key Programming Service', type: 'Service' },
              { href: '/services/car-key-replacement', label: 'Car Key Replacement', type: 'Service' },
              { href: '/services/car-key-cutting', label: 'Car Key Cutting', type: 'Service' },
              { href: '/guides/car-key-replacement-cost-leicester', label: 'Car Key Replacement Cost Guide', type: 'Guide' },
              { href: '/guides/what-to-do-when-locked-out-of-car', label: 'What to Do When Locked Out', type: 'Guide' },
              { href: '/pricing', label: 'Locksmith Pricing Guide', type: 'Guide' },
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
          <h2 className="mb-3 text-2xl font-bold">Transponder key issue in Leicester?</h2>
          <p className="mb-6 text-brand-100">
            Call us — we will diagnose the problem and give you a fixed price before attending.
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
