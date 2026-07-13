import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { BUSINESS, SERVICES, SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Locksmith FAQ Leicester | Common Questions About Our Services',
  description:
    'Answers to the most common questions about locksmith services in Leicester — costs, response times, key programming, vehicle damage, and more.',
  alternates: { canonical: `${SITE_URL}/faq` },
};

const ALL_FAQS = [
  // General
  {
    category: 'General',
    faqs: [
      {
        question: 'How quickly can you reach me in Leicester?',
        answer:
          'Car Locksmith Leicester typically arrives within 60 minutes of your call across Leicester and Leicestershire, and often sooner. We operate 24 hours a day, 7 days a week, including bank holidays.',
      },
      {
        question: 'Are you available on weekends and bank holidays?',
        answer:
          'Yes. We provide a full 24/7 emergency locksmith service every day of the year, including weekends and bank holidays. Our standard rates apply — we do not charge a premium for out-of-hours call-outs.',
      },
      {
        question: 'Do you provide free advice before I commit to a job?',
        answer:
          'Yes. We actively encourage you to call us first. We will give you an honest assessment of the situation and a firm price over the phone before you commit. There is no charge for this advice.',
      },
      {
        question: 'Will you confirm the price before attending?',
        answer:
          'Yes, always. We agree the full price before we travel to your location. There are no hidden extras or charges added after the job is complete.',
      },
    ],
  },
  // Car lockout
  {
    category: 'Emergency Car Lockout',
    faqs: [
      {
        question: 'Can a locksmith get into my car without a key?',
        answer:
          'Yes. Car Locksmith Leicester uses specialist, non-destructive tools to gain entry to locked vehicles without using a key. We can open most car locks without causing any damage to the paintwork, door seals, or locking mechanism.',
      },
      {
        question: 'Will you damage my car getting in?',
        answer:
          'No. We use professional-grade non-destructive entry tools. We do not use techniques that scratch, dent, or damage your vehicle. Our technicians are trained specifically to avoid any vehicle damage during lockout work.',
      },
      {
        question: 'What if my key is locked inside the car?',
        answer:
          'We can open the vehicle and retrieve the key safely. If the key is broken in the lock or ignition, we also provide a broken key extraction service — we remove the fragment without damaging the barrel and can cut a new key on-site.',
      },
    ],
  },
  // Key replacement & programming
  {
    category: 'Car Key Replacement & Programming',
    faqs: [
      {
        question: 'How much does it cost to replace a lost car key in Leicester?',
        answer:
          'The cost varies by vehicle make, model, year, and key type. Call us with your vehicle details and we will give you an accurate, no-obligation quote. As a guide, we are significantly cheaper than a main dealer — dealer key replacement often costs £200–£600+ and takes several days, whereas we supply, cut, and programme on-site.',
      },
      {
        question: 'Is a locksmith cheaper than a car dealership for key replacement?',
        answer:
          'Yes — significantly. Main dealers charge a premium for key replacement because they order keys in from manufacturers and use proprietary programming systems. Car Locksmith Leicester carries key stock and uses professional aftermarket programming equipment, allowing us to complete the job on-site at a fraction of the dealer cost.',
      },
      {
        question: 'What is a transponder key, and does mine need programming?',
        answer:
          'A transponder key contains a microchip that communicates with your car\'s immobiliser system. When you turn the ignition, the car sends a signal to the chip and checks for the correct coded response. If the chip isn\'t present or isn\'t programmed to your car, the engine will not start. Most modern car keys manufactured after the mid-1990s are transponder keys and require programming when replaced.',
      },
      {
        question: 'How long does car key programming take?',
        answer:
          'Transponder key programming typically takes 15–45 minutes on-site. Some vehicles with advanced security protocols take slightly longer. We will give you an accurate estimate when you call.',
      },
      {
        question: 'Can you replace a key if I have lost all my keys?',
        answer:
          'Yes. "All keys lost" replacement is a routine service. We use specialist diagnostic tools to programme a completely new key to your vehicle without needing any existing key. This is a more involved process but one we complete regularly across all major makes and models.',
      },
    ],
  },
  // Motorbike & vans
  {
    category: 'Motorbikes, Vans & Other Vehicles',
    faqs: [
      {
        question: 'Do you cover motorbike and scooter keys?',
        answer:
          'Yes. We provide key cutting, programming, lost key replacement, and lockout assistance for motorbikes and scooters across all major brands, including Yamaha, Suzuki, Honda, Kawasaki, Ducati, Triumph, and more.',
      },
      {
        question: 'Do you cover van and lorry keys?',
        answer:
          'Yes. We cover vans and light commercial vehicles from all major manufacturers, including Ford Transit, Volkswagen Transporter, Mercedes Sprinter, Vauxhall Movano, and others.',
      },
    ],
  },
  // Residential & commercial
  {
    category: 'Residential & Commercial',
    faqs: [
      {
        question: 'Can you open my front door if I\'m locked out of my home?',
        answer:
          'Yes. As well as automotive locksmith work, Car Locksmith Leicester provides emergency residential lockout services. We use non-destructive entry techniques where possible. If drilling is unavoidable as a last resort, we will replace the lock in the same visit.',
      },
      {
        question: 'Can you change all the locks on my business premises?',
        answer:
          'Yes. We provide commercial lock replacement, re-keying, and master key system services for businesses of all sizes across Leicester and Leicestershire. We can also provide advice on access control options.',
      },
    ],
  },
];

const allFaqsFlat = ALL_FAQS.flatMap((cat) => cat.faqs);
const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'FAQ', item: `${SITE_URL}/faq` },
  ]),
  buildFAQSchema(allFaqsFlat),
]);

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'FAQ' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-300">
            Answers to the most common questions about our{' '}
            <Link href="/services" className="font-semibold text-brand-400 hover:underline">
              locksmith services
            </Link>{' '}
            in Leicester. Can&apos;t find what you&apos;re looking for?{' '}
            <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-brand-400 hover:underline">
              Call us
            </a>{' '}
            or{' '}
            <Link href="/contact" className="font-semibold text-brand-400 hover:underline">
              send a message
            </Link>{' '}
            for free advice.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-3xl">
          {ALL_FAQS.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="mb-5 text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                {category.category}
              </h2>
              <dl className="space-y-0 divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden">
                {category.faqs.map((faq) => (
                  <div key={faq.question}>
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5">
                        <dt className="font-semibold text-slate-900 leading-snug">{faq.question}</dt>
                        <span className="mt-0.5 shrink-0 text-brand-500 font-bold group-open:hidden">+</span>
                        <span className="mt-0.5 shrink-0 text-brand-500 font-bold hidden group-open:block">−</span>
                      </summary>
                      <dd className="px-6 pb-5">
                        <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                      </dd>
                    </details>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Services */}
      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl">
          <h2 className="mb-2 text-xl font-bold text-slate-900">Explore Our Locksmith Services</h2>
          <p className="mb-5 text-sm text-slate-500">
            Each service page has its own detailed FAQs, process steps, and pricing guidance.
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-brand-300 hover:shadow-sm"
              >
                <span className="text-sm font-medium text-slate-800">{service.name}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-500 py-14 text-white">
        <div className="container-lg text-center">
          <h2 className="mb-3 text-2xl font-bold">Still have a question?</h2>
          <p className="mb-6 text-brand-100">Call us — we&apos;re always happy to advise before you commit to any work.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-xl font-bold text-brand-600 hover:bg-brand-50">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
