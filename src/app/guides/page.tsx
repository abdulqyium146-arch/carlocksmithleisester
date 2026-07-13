import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import { buildPageGraph, buildBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Locksmith Guides & Advice Leicester | Car Key & Security Guides',
  description:
    'Free locksmith guides and advice from Car Locksmith Leicester. Learn what to do when locked out, car key replacement costs, transponder key explained, and more.',
  alternates: { canonical: `${SITE_URL}/guides` },
};

const schema = buildPageGraph([
  buildBreadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Guides', item: `${SITE_URL}/guides` },
  ]),
]);

const GUIDES = [
  {
    slug: 'what-to-do-when-locked-out-of-car',
    title: 'What to Do When Locked Out of Your Car',
    description:
      'Step-by-step advice for when you find yourself locked out — what to do immediately, what not to do, who to call, and how to prevent it happening again.',
    readTime: '5 min read',
    category: 'Emergency Advice',
  },
  {
    slug: 'car-key-replacement-cost-leicester',
    title: 'Car Key Replacement Cost in Leicester (2025 Guide)',
    description:
      'A clear breakdown of what car key replacement costs in Leicester — by key type, vehicle make, and scenario. How locksmiths compare to main dealers.',
    readTime: '6 min read',
    category: 'Pricing & Cost',
  },
  {
    slug: 'what-is-a-transponder-key',
    title: 'What is a Transponder Key? How Transponder Keys Work',
    description:
      'A plain-English explanation of transponder keys, how the immobiliser system works, what happens when a chip key fails, and what programming involves.',
    readTime: '5 min read',
    category: 'Technical Guides',
  },
];

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-slate-100 bg-slate-50">
        <div className="container-lg pt-4 pb-2">
          <Breadcrumb crumbs={[{ label: 'Guides' }]} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="container-lg max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3 py-1 text-sm text-brand-300">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Free Advice
          </div>
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Locksmith Guides <span className="text-brand-400">&amp; Advice</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Practical guides from Car Locksmith Leicester — written to help you understand your situation, know your options, and make informed decisions before you call anyone.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-lg max-w-4xl">
          <div className="grid gap-6">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-brand-300 hover:shadow-md transition-shadow"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {guide.category}
                  </span>
                  <span className="text-xs text-slate-400">{guide.readTime}</span>
                </div>
                <h2 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-brand-600">
                  {guide.title}
                </h2>
                <p className="mb-4 text-sm text-slate-500 leading-relaxed">{guide.description}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-brand-600">
                  Read guide
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-lg max-w-3xl text-center">
          <h2 className="mb-3 text-xl font-bold text-slate-900">Can&apos;t find what you need?</h2>
          <p className="mb-5 text-slate-500">
            Call us — we are happy to advise on any locksmith situation before you commit to anything.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/faq" className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700">
              Browse the FAQ
            </Link>
            <Link href="/contact" className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
