import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, Award, Users, Shield } from 'lucide-react';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildOrganizationSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Car Locksmith Leicester | 10+ Years Serving Leicestershire',
  description:
    'Learn about Car Locksmith Leicester — a long-established auto, residential and commercial locksmith serving Leicester and Leicestershire for over 10 years. Our training standards, values, and approach.',
  alternates: { canonical: `${SITE_URL}/about` },
};

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'About', item: `${SITE_URL}/about` },
  ]),
  buildOrganizationSchema(),
]);

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'About' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            About <span className="text-brand-400">Car Locksmith Leicester</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Car Locksmith Leicester is an auto, residential, and commercial locksmith based in Leicester, UK, providing emergency vehicle entry, key cutting, key programming, and lock replacement services across Leicester and the surrounding area. We have been trading for over 10 years and built our reputation entirely on quality of work and genuine customer service.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-4xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Main story */}
            <div>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">Our Story</h2>
              <p className="mb-4 text-slate-600 leading-relaxed">
                Car Locksmith Leicester has operated in the Leicester area for over 10 years. We started with a focus on automotive locksmith work —{' '}
                <Link href="/services/car-lockout" className="font-semibold text-brand-600 hover:underline">car lockouts</Link>,{' '}
                <Link href="/services/car-key-cutting" className="font-semibold text-brand-600 hover:underline">key cutting</Link>, and{' '}
                <Link href="/services/car-key-programming" className="font-semibold text-brand-600 hover:underline">key programming</Link>{' '}
                — and have grown to cover{' '}
                <Link href="/services/residential-locksmith" className="font-semibold text-brand-600 hover:underline">residential</Link> and{' '}
                <Link href="/services/commercial-locksmith" className="font-semibold text-brand-600 hover:underline">commercial locksmith services</Link>{' '}
                as well, while keeping the same standards that built our original reputation.
              </p>
              <p className="mb-4 text-slate-600 leading-relaxed">
                We are a local, independent business — not a call centre or a franchise. When you call us, you speak directly to our team, and the technician who attends your job is one of our own trained staff, not a subcontracted third party.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our reputation in Leicester is built entirely on the quality of our work, honest pricing, and treating every customer with respect. We do not use high-pressure sales tactics and we never start a job without agreeing the price first. Have a question before you call?{' '}
                <Link href="/faq" className="font-semibold text-brand-600 hover:underline">Read our FAQ</Link>.
              </p>
            </div>

            {/* Values / USPs */}
            <div>
              <h2 className="mb-5 text-2xl font-bold text-slate-900">How We Work</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Award,
                    title: 'Rigorous technician training',
                    body: 'Each technician undergoes approximately 40 hours of structured training before attending jobs independently. Only around 1 in 10 applicants meets our standards and joins the team.',
                  },
                  {
                    icon: Shield,
                    title: 'No damage — guaranteed',
                    body: 'We use non-destructive entry methods and precision tools. We have never had a valid vehicle damage claim from a lockout job.',
                  },
                  {
                    icon: Users,
                    title: 'Free consultation before every job',
                    body: 'We encourage you to call us first for free advice. We will tell you honestly what is needed, what it will cost, and how long it will take — before you commit to anything.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Transparent, agreed pricing',
                    body: 'We confirm the price before attending every job. There are no hidden charges, no surprise extras, and no payment until you are satisfied.',
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-slate-50 p-8 md:grid-cols-4">
            {[
              { stat: '10+', label: 'Years in business' },
              { stat: '~40hrs', label: 'Technician training' },
              { stat: '1 in 10', label: 'Applicants hired' },
              { stat: '24/7', label: 'Emergency availability' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-brand-500">{stat}</div>
                <div className="mt-1 text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>

          {/* E-E-A-T block */}
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Our Credentials &amp; Affiliations</h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              {/* [INSERT REAL CREDENTIALS — e.g. DBS checked, Master Locksmith Association membership, TrustATrader/Checkatrade verified, etc.] */}
              [INSERT CREDENTIALS AND ACCREDITATIONS — see PLACEHOLDERS.md for details of what to include here]
            </p>
            <p className="text-slate-600 leading-relaxed">
              Reviews from verified customers can be found on our{' '}
              <a href={BUSINESS.googleBusinessProfileUrl} className="font-semibold text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Business Profile
              </a>{' '}
              {/* [INSERT OTHER REVIEW PLATFORMS e.g. Trustpilot, Checkatrade] */}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Ready to talk?</h2>
          <p className="mb-6 text-brand-100">Call us for a free, no-obligation consultation before any job.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-lg font-bold text-brand-600 hover:bg-brand-50">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/10">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
