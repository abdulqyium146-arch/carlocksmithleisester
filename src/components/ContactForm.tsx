'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setState('success');
      form.reset();
    } catch {
      setState('error');
      setErrorMsg('Something went wrong. Please call us directly or try again.');
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 py-12 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" aria-hidden="true" />
        <h3 className="text-xl font-bold text-green-800">Message Received</h3>
        <p className="text-green-700">We&apos;ll get back to you shortly. For urgent jobs, please call us directly.</p>
        <button
          className="mt-2 rounded-lg border border-green-300 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-100"
          onClick={() => setState('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {state === 'error' && (
        <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          {errorMsg}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            placeholder="07xxx xxxxxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        >
          <option value="">— Select a service —</option>
          <option value="car-lockout">Emergency Car Lockout</option>
          <option value="car-key-cutting">Car Key Cutting</option>
          <option value="car-key-programming">Car Key Programming</option>
          <option value="car-key-replacement">Car Key Replacement (Lost Keys)</option>
          <option value="broken-key-extraction">Broken Key Extraction</option>
          <option value="motorbike-locksmith">Motorbike / Scooter Locksmith</option>
          <option value="residential-locksmith">Residential Locksmith</option>
          <option value="commercial-locksmith">Commercial Locksmith</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="vehicle" className="mb-1.5 block text-sm font-medium text-slate-700">
          Vehicle Make &amp; Model (if applicable)
        </label>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          placeholder="e.g. BMW 3 Series 2019"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          placeholder="Briefly describe your locksmith issue or request..."
        />
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === 'loading' ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        For immediate emergencies, please{' '}
        <a href="tel:+447988388514" className="font-medium text-brand-600 hover:underline">
          call us directly
        </a>{' '}
        rather than using this form.
      </p>
    </form>
  );
}
