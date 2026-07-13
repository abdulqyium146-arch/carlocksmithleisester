import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { AREAS, BUSINESS, SERVICES, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema } from '@/lib/schema';
import { ContactForm } from '@/components/ContactForm';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contact Car Locksmith Leicester | Call 24/7 or Send a Message',
  description:
    'Contact Car Locksmith Leicester for emergency lockout assistance, a free quote, or general enquiries. Call 24/7 or send us a message and we\'ll respond quickly.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Contact', item: `${SITE_URL}/contact` },
  ]),
]);

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Contact' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Contact <span className="text-brand-400">Car Locksmith Leicester</span>
          </h1>
          <p className="text-lg text-slate-300">
            For emergencies, please{' '}
            <a href={`tel:${BUSINESS.phone}`} className="font-bold text-brand-400 hover:underline">
              call us directly
            </a>{' '}
            — we&apos;re available 24/7. For quotes or non-urgent enquiries, use the form below.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact details */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-slate-900">Get in Touch</h2>
              <div className="space-y-6">
                {/* Phone — most prominent */}
                <div className="rounded-xl bg-brand-50 border border-brand-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Emergency / Call</p>
                      <a
                        href={`tel:${BUSINESS.phone}`}
                        className="mt-1 block text-2xl font-extrabold text-brand-700 hover:text-brand-800"
                      >
                        {BUSINESS.phoneDisplay}
                      </a>
                      <p className="mt-1 text-sm text-brand-600">Available 24 hours a day, 7 days a week</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Email</p>
                    <a href={`mailto:${BUSINESS.email}`} className="text-slate-900 hover:text-brand-600 font-medium break-all">
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Address</p>
                    <address className="not-italic text-slate-900 leading-relaxed">
                      {BUSINESS.address.streetAddress}<br />
                      {BUSINESS.address.addressLocality}<br />
                      {BUSINESS.address.postalCode}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">Hours</p>
                    <p className="text-slate-900 font-medium">24 hours / 7 days a week</p>
                    <p className="text-sm text-slate-500">Including weekends and bank holidays</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <div className="flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">
                  [INSERT GOOGLE MAPS EMBED — see PLACEHOLDERS.md]
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services + Areas quick navigation */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-lg font-bold text-slate-900">Our Services</h2>
              <div className="space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-white hover:text-brand-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-bold text-slate-900">Areas We Cover</h2>
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
          </div>
        </div>
      </section>
    </>
  );
}
