import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/FAQBlock';
import { Breadcrumb } from '@/components/Breadcrumb';
import { VideoPlayer } from '@/components/VideoPlayer';
import { VIDEOS, buildVideoObjectSchema } from '@/lib/videos';

export const metadata: Metadata = {
  title: 'Car Key Programming Leicester | Transponder & Remote Key Programming',
  description:
    'Expert car key programming in Leicester for transponder keys, remote fobs, and proximity keys. All major makes covered. Cheaper and faster than a main dealer.',
  alternates: { canonical: `${SITE_URL}/services/car-key-programming` },
};

const FAQS = [
  {
    question: 'What is a transponder key, and why does it need programming?',
    answer:
      'A transponder key contains a small electronic chip inside the key head. When you insert the key and turn the ignition, the car\'s immobiliser system sends a radio signal to the chip and expects a specific coded response. If the response doesn\'t match — or if the key has no chip — the immobiliser prevents the engine from starting. Programming pairs the new key\'s chip code to your vehicle\'s ECU so the immobiliser recognises and accepts it.',
  },
  {
    question: 'How long does car key programming take?',
    answer:
      'For most vehicles, transponder key programming takes between 15 and 45 minutes on-site. Complex or newer vehicles (particularly those with advanced key-learning security protocols) may take slightly longer. We will give you an accurate time estimate when you call.',
  },
  {
    question: 'Can you programme a key if I have no other keys left?',
    answer:
      'Yes. If all keys have been lost, we can still programme a new key from scratch using specialist diagnostic equipment. This is sometimes called "all keys lost" programming and requires a higher level of access to the vehicle\'s ECU — but it is a routine service for us.',
  },
  {
    question: 'Do you programme remote key fobs and keyless entry systems?',
    answer:
      'Yes. We programme standard remote fobs (with buttons for lock/unlock/boot), flip keys, and proximity (smart) keys for push-start vehicles. Pricing varies by vehicle make, model, and key type — call for a free quote.',
  },
];

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Services', item: `${SITE_URL}/services` },
    { name: 'Car Key Programming', item: `${SITE_URL}/services/car-key-programming` },
  ]),
  buildServiceSchema({
    name: 'Car Key Programming',
    description: 'Professional transponder key and remote fob programming for all major vehicle makes across Leicester and Leicestershire.',
    slug: 'car-key-programming',
  }),
  buildFAQSchema(FAQS),
  buildVideoObjectSchema(VIDEOS[1]),
]);

export default function CarKeyProgrammingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Services', href: '/services' }, { label: 'Car Key Programming' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Car Key Programming <span className="text-brand-400">Leicester</span>
          </h1>
          <p className="mb-8 text-lg text-slate-300">
            Expert transponder key programming, remote fob programming, and proximity key setup for all major vehicle makes — on-site in Leicester and Leicestershire, 24 hours a day.
          </p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 rounded-xl bg-brand-500 px-7 py-4 text-xl font-bold text-white hover:bg-brand-600">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-slate-900 py-12">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-2 text-xl font-bold text-white">Watch Transponder Key Programming</h2>
          <p className="mb-6 text-sm text-slate-400">
            Real footage of our technician programming a transponder key on-site in Leicester.
          </p>
          <VideoPlayer video={VIDEOS[1]} includeSchema={false} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">What Is Car Key Programming?</h2>
          <p className="mb-4 text-slate-600 leading-relaxed">
            Modern vehicles use electronic immobilisers to prevent theft. A <strong>transponder key</strong> contains a microchip that communicates with your car&apos;s Engine Control Unit (ECU). For the engine to start, the chip must broadcast the correct encrypted code — a code that has to be programmed specifically to your vehicle.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Car Locksmith Leicester uses professional-grade diagnostic and key-programming equipment to pair new keys — whether transponder chips, remote fobs, or push-start proximity keys — directly to your vehicle&apos;s ECU on-site, without needing to visit a dealer.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">Key Types We Programme</h2>
          <ul className="mb-8 space-y-3">
            {[
              'Transponder / chip keys (immobiliser bypass)',
              'Remote key fobs (lock/unlock/boot buttons)',
              'Flip keys / switchblade keys',
              'Proximity (smart) keys for push-start vehicles',
              'All-keys-lost programming (no existing key required)',
              'Additional key programming (spare keys paired to your car)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-2xl font-bold text-slate-900">Vehicle Makes Covered</h2>
          <div className="mb-8 flex flex-wrap gap-2">
            {['BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Ford', 'Vauxhall', 'Volkswagen', 'Land Rover', 'Jaguar', 'Honda', 'Nissan', 'Kia', 'Hyundai', 'Peugeot', 'Renault', 'SEAT', 'Skoda', 'Citroën'].map((b) => (
              <span key={b} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">{b}</span>
            ))}
          </div>

          <FAQBlock faqs={FAQS} heading="Car Key Programming FAQs" />
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Key not starting your car?</h2>
          <p className="mb-6 text-brand-100">Call for a free diagnosis — we&apos;ll advise on the best fix before you commit.</p>
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
              { slug: 'car-key-cutting', name: 'Car Key Cutting', desc: 'New key cut to your vehicle\'s exact code.' },
              { slug: 'car-key-replacement', name: 'Car Key Replacement', desc: 'Lost all your keys? We supply, cut, and programme a replacement.' },
              { slug: 'car-lockout', name: 'Emergency Car Lockout', desc: 'Locked out? We gain entry without damaging your vehicle.' },
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
