import type { Metadata } from 'next';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy | Car Locksmith Leicester',
  description: 'Privacy policy for Car Locksmith Leicester — how we collect, use, and protect your personal information.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
  ]),
]);

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Privacy Policy' }]} />
        </div>
      </div>

      <section className="bg-slate-900 py-12 text-white">
        <div className="container-lg">
          <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
          <p className="mt-2 text-slate-400 text-sm">Last updated: [INSERT DATE]</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl prose prose-slate">
          <p className="text-slate-600 leading-relaxed">
            This privacy policy explains how {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects your personal information when you use our website at{' '}
            <a href={SITE_URL} className="text-brand-600 hover:underline">{SITE_URL}</a>{' '}
            or contact us by phone or email.
          </p>

          {[
            {
              heading: '1. Information we collect',
              content: `When you contact us via the website contact form, we collect your name, phone number, email address (optional), and the information you provide about your locksmith enquiry. When you call us, we collect the information you provide during the call. We do not collect any additional data without your knowledge.`,
            },
            {
              heading: '2. How we use your information',
              content: `We use your contact information solely to respond to your enquiry and to arrange and complete any locksmith services you request. We do not use your information for marketing purposes without your explicit consent. We do not sell or share your information with third parties, except as necessary to deliver our services (e.g. our email service provider).`,
            },
            {
              heading: '3. Data retention',
              content: `We retain enquiry records for [INSERT RETENTION PERIOD] for business and legal purposes. If you wish to have your data deleted, contact us at ${BUSINESS.email}.`,
            },
            {
              heading: '4. Cookies',
              content: `Our website may use essential cookies to ensure basic functionality. If we use analytics cookies (e.g. Google Analytics), we will notify you via a cookie consent banner. [INSERT DETAILS OF COOKIES USED].`,
            },
            {
              heading: '5. Your rights',
              content: `Under UK GDPR, you have the right to access, rectify, erase, or restrict the processing of your personal data. To exercise any of these rights, contact us at ${BUSINESS.email}.`,
            },
            {
              heading: '6. Security',
              content: `We take reasonable technical and organisational measures to protect your personal data. Our website uses HTTPS encryption. However, no method of transmission over the internet is 100% secure.`,
            },
            {
              heading: '7. Contact',
              content: `If you have any questions about this privacy policy or how we handle your data, please contact us at ${BUSINESS.email} or call ${BUSINESS.phoneDisplay}.`,
            },
          ].map(({ heading, content }) => (
            <div key={heading} className="mt-8">
              <h2 className="text-lg font-bold text-slate-900">{heading}</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
