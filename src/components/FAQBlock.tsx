'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  faqs: FAQ[];
  heading?: string;
}

export function FAQBlock({ faqs, heading = 'Frequently Asked Questions' }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="py-12">
      <h2 id="faq-heading" className="mb-8 text-2xl font-bold text-slate-900">
        {heading}
      </h2>
      <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200">
        {faqs.map((faq, i) => (
          <div key={i}>
            <dt>
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </dt>
            <dd
              id={`faq-answer-${i}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
