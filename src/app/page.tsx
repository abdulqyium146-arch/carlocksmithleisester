import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone, Clock, ShieldCheck, Star, Car, Key, Cpu, KeyRound,
  Wrench, Bike, Home, Building2, ChevronRight, CheckCircle,
  MapPin, Award
} from 'lucide-react';
import { BUSINESS, SERVICES, AREAS, SITE_URL } from '@/lib/constants';
import {
  buildPageGraph, buildBreadcrumbSchema, buildFAQSchema,
  buildBusinessSchema, buildOrganizationSchema, buildWebSiteSchema
} from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  title: 'Car Locksmith Leicester | 24/7 Emergency Auto Locksmith',
  description:
    'Car Locksmith Leicester — 24/7 emergency car lockout, key cutting, key programming and replacement. Serving Leicester and all surrounding areas. Faster and significantly cheaper than the main dealer.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  Car, Key, Cpu, KeyRound, Wrench, Bike, Home, Building2,
};

const HOME_FAQS = [
  {
    question: 'How quickly can a locksmith reach me in Leicester?',
    answer:
      'Car Locksmith Leicester typically arrives within 60 minutes of your call, and often sooner. We cover Leicester city centre and all surrounding areas 24 hours a day, 7 days a week, including bank holidays.',
  },
  {
    question: 'Is a locksmith cheaper than a car dealership for key replacement?',
    answer:
      'Yes — significantly. Main dealer key replacement often costs several hundred pounds and can take days as keys are ordered in. Car Locksmith Leicester supplies, cuts, and programs replacement keys on-site at a fraction of the dealer price, usually in less than an hour.',
  },
  {
    question: 'Can a locksmith get into my car without causing damage?',
    answer:
      'Yes. Our technicians are trained to gain entry using specialist tools that do not damage your vehicle\'s paintwork, door seals, or locking mechanism. We do not use the destructive "slim-jim" techniques that cheaper, untrained operators sometimes use.',
  },
  {
    question: 'Do you cover motorbike and van keys as well as cars?',
    answer:
      'Yes. We provide key cutting, programming, and lockout services for motorbikes, scooters, vans, and lorries, in addition to all car makes and models.',
  },
];

const schema = buildPageGraph([
  buildBusinessSchema(),
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildBreadcrumbSchema([{ name: 'Home', item: SITE_URL }]),
  buildFAQSchema(HOME_FAQS),
]);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 pb-20 pt-16 text-white md:pb-28 md:pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500 blur-3xl" />
        </div>
        <div className="container-lg relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Available Now — 24 / 7 Emergency Response
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Car Locksmith{' '}
              <span className="text-brand-400">Leicester</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              Emergency car lockout, key cutting, key programming and replacement across Leicester and Leicestershire.
              Typically on-site within 60 minutes — <strong className="text-white">significantly cheaper than a main dealer.</strong>
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600 sm:w-auto"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                Request a Quote
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust micro-signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                10+ years experience
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                No vehicle damage
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                Free advice &amp; consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                All makes &amp; models
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="container-lg grid grid-cols-2 gap-0 divide-x divide-slate-200 md:grid-cols-4">
          {[
            { icon: Clock, stat: '60 min', label: 'Typical Response Time' },
            { icon: Award, stat: '10+', label: 'Years in Business' },
            { icon: ShieldCheck, stat: '0', label: 'Vehicle Damage Claims' },
            { icon: Star, stat: '[RATING]', label: '[REVIEW COUNT] Reviews' },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-4 py-8 text-center">
              <Icon className="mb-1 h-6 w-6 text-brand-500" aria-hidden="true" />
              <span className="text-2xl font-extrabold text-slate-900">{stat}</span>
              <span className="text-xs font-medium text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-white" aria-labelledby="services-heading">
        <div className="container-lg">
          <div className="mb-12 text-center">
            <h2 id="services-heading" className="mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Locksmith Services in Leicester
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-500">
              From emergency car lockouts to residential and commercial lock changes, we handle every locksmith need — 24 hours a day, 7 days a week.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? Key;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{service.shortName}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">{service.description}</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Learn more <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-100"
            >
              View All Services <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-slate-50" aria-labelledby="why-heading">
        <div className="container-lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 id="why-heading" className="mb-6 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Why Choose Car Locksmith Leicester?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: 'Significantly cheaper than your main dealer',
                    body: 'Dealerships often charge several hundred pounds and take days to order a replacement key. We supply, cut, and program keys on-site — typically in under an hour at a fraction of the cost.',
                  },
                  {
                    title: 'No damage to your vehicle — guaranteed',
                    body: 'Our technicians use specialist, non-destructive entry tools. We never damage paintwork, seals, or locking mechanisms. This is a standard we set through rigorous training — roughly 1 in 10 applicants is hired after 40+ hours of training.',
                  },
                  {
                    title: '10+ years serving the Leicester area',
                    body: 'We\'re a long-established, reputation-based local business. Our repeat custom and referrals speak for themselves — we\'re still here after more than a decade because we do the job properly.',
                  },
                  {
                    title: 'Free advice before you commit',
                    body: 'Not sure what you need, or wondering if it\'s worth calling out a locksmith? Call us first. We\'ll give you an honest assessment over the phone at no charge.',
                  },
                  {
                    title: 'All vehicle types covered',
                    body: 'Cars, vans, lorries, motorbikes, and scooters. BMW, Toyota, Mercedes, Audi, Yamaha, Suzuki, Ducati — all major makes and most models.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Comparison card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate-900">
                Locksmith vs Dealer: Car Key Replacement Cost
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Car Locksmith Leicester', cost: '£[PRICE RANGE]', fast: true, note: 'On-site, typically under 1 hour' },
                  { label: 'Main Car Dealership', cost: '£300–£600+', fast: false, note: 'Often 2–5 days to order the key' },
                ].map(({ label, cost, fast, note }) => (
                  <div
                    key={label}
                    className={`rounded-lg p-4 ${fast ? 'border-2 border-brand-300 bg-brand-50' : 'border border-slate-200 bg-slate-50'}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`font-bold ${fast ? 'text-brand-700' : 'text-slate-700'}`}>{label}</p>
                        <p className="text-sm text-slate-500">{note}</p>
                      </div>
                      <span className={`shrink-0 text-xl font-extrabold ${fast ? 'text-brand-600' : 'text-slate-600'}`}>
                        {cost}
                      </span>
                    </div>
                    {fast && (
                      <p className="mt-2 text-xs font-semibold text-brand-600">
                        ✓ Recommended — faster, cheaper, no damage
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400">
                * [INSERT REAL PRICE RANGE] — prices vary by vehicle make/model and service required. Call for a free quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="section-padding bg-white" aria-labelledby="areas-heading">
        <div className="container-lg">
          <div className="mb-10 text-center">
            <h2 id="areas-heading" className="mb-3 text-3xl font-extrabold text-slate-900">
              Areas We Cover
            </h2>
            <p className="mx-auto max-w-xl text-slate-500">
              Based in Leicester, we provide fast locksmith response across the city and all surrounding Leicestershire towns.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50" aria-labelledby="faq-home-heading">
        <div className="container-lg max-w-3xl">
          <h2 id="faq-home-heading" className="mb-8 text-3xl font-extrabold text-slate-900">
            Common Questions
          </h2>
          <div className="space-y-4">
            {HOME_FAQS.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-brand-500 transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-semibold text-brand-600 hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-500 py-16 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Need a Locksmith in Leicester Right Now?
          </h2>
          <p className="mb-8 text-brand-100">
            Call us any time — day or night. We&apos;ll be with you as quickly as possible.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-xl font-bold text-brand-600 shadow-lg hover:bg-brand-50"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
