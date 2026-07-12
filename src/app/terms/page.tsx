import type { Metadata } from 'next';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Terms of Service | Car Locksmith Leicester',
  description: 'Terms of service for Car Locksmith Leicester — the terms under which we provide our locksmith services.',
  alternates: { canonical: `${SITE_URL}/terms` },
};

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Terms of Service', item: `${SITE_URL}/terms` },
  ]),
]);

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Terms of Service' }]} />
        </div>
      </div>

      <section className="bg-slate-900 py-12 text-white">
        <div className="container-lg">
          <h1 className="text-3xl font-extrabold">Terms of Service</h1>
          <p className="mt-2 text-slate-400 text-sm">Last updated: [INSERT DATE]</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          <p className="mb-8 text-slate-600 leading-relaxed">
            These terms of service govern your use of our website and the locksmith services provided by {BUSINESS.name}. By using our website or engaging our services, you agree to these terms.
          </p>

          {[
            {
              heading: '1. Services',
              content: 'We provide auto, residential, and commercial locksmith services across Leicester and Leicestershire. All services are subject to availability and a job-specific quote agreed before work commences.',
            },
            {
              heading: '2. Pricing',
              content: 'We provide a firm price before attending any job. The agreed price is the price you pay — we do not add charges after the job is complete without prior agreement. All prices are inclusive of VAT where applicable.',
            },
            {
              heading: '3. Proof of ownership',
              content: 'For vehicle and property lockout services, we may ask you to provide evidence that you are the legal owner or authorised user of the property or vehicle. We reserve the right to refuse service if we have reasonable grounds to believe a service is being requested for unlawful purposes.',
            },
            {
              heading: '4. Limitation of liability',
              content: '[INSERT LIABILITY CLAUSE — this should be drafted by a legal professional for your specific business circumstances.]',
            },
            {
              heading: '5. Governing law',
              content: 'These terms are governed by the laws of England and Wales.',
            },
            {
              heading: '6. Contact',
              content: `If you have any questions about these terms, please contact us at ${BUSINESS.email}.`,
            },
          ].map(({ heading, content }) => (
            <div key={heading} className="mb-8">
              <h2 className="mb-2 text-lg font-bold text-slate-900">{heading}</h2>
              <p className="text-slate-600 leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
