/**
 * JoinEarlyAccessForm Component
 * 
 * Purpose: Collects early access sign-ups for MaxVue with Netlify Forms integration
 * Location: /src/components/JoinEarlyAccessForm.tsx
 * 
 * Features:
 * - Netlify Forms integration with XHR submission
 * - Inline thank-you message (no redirect)
 * - Honeypot spam protection
 * - Form validation and error handling
 * - WCAG 2.1 AA compliant with proper labels and ARIA attributes
 */

'use client';
import React, { useState, useRef } from 'react';

type Props = {
  precheckHardware?: boolean;
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function JoinEarlyAccessForm({ precheckHardware }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const form = formRef.current!;
      
      // Validate required fields before submission
      const firstName = (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value.trim();
      const lastName = (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value.trim();
      const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value.trim();

      if (!firstName) {
        setError('First name is required.');
        setSubmitting(false);
        return;
      }

      if (!lastName) {
        setError('Last name is required.');
        setSubmitting(false);
        return;
      }

      if (!email) {
        setError('Email address is required.');
        setSubmitting(false);
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address.');
        setSubmitting(false);
        return;
      }

      const formData = new FormData(form);
      // Netlify requires this
      formData.set('form-name', 'early-access');

      const body = encode(Object.fromEntries(formData as any));

      const resp = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });

      if (resp.ok) {
        setDone(true);
        form.reset();
        // Focus on success message for screen readers
        setTimeout(() => successRef.current?.focus(), 100);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div 
        ref={successRef}
        role="status" 
        aria-live="polite" 
        tabIndex={-1}
        className="rounded-2xl border p-6 shadow-sm bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#1D4262]">
        <h3 className="text-xl font-semibold">You're in. ✅</h3>
        <p className="mt-2 text-sm text-gray-700">
          Thanks for joining the MaxVue Early Access. We'll email only about MaxVue—no spam, unsubscribe anytime.
        </p>
        <ul className="mt-4 list-disc pl-5 text-sm text-gray-800">
          <li>Early access to the calibration beta</li>
          <li>Launch pricing + exclusive invites</li>
          <li>Priority updates on Hardware Add-Ons</li>
        </ul>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      id="waitlist-form"
      name="early-access"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      noValidate
      className="rounded-2xl border p-6 shadow-sm bg-white/70 backdrop-blur"
      onSubmit={onSubmit}
    >
      {/* hidden inputs for Netlify */}
      <input type="hidden" name="form-name" value="early-access" />
      <p className="hidden">
        <label htmlFor="company-field">
          Don't fill this out if you're human: <input id="company-field" name="company" autoComplete="off" tabIndex={-1} />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-base font-medium">
            First name
          </label>
          <input 
            id="first-name"
            name="first_name" 
            type="text"
            autoComplete="given-name"
            required 
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "form-error" : undefined}
            className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-[#1D4262] focus:border-transparent" 
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-base font-medium">
            Last name
          </label>
          <input 
            id="last-name"
            name="last_name" 
            type="text"
            autoComplete="family-name"
            required 
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "form-error" : undefined}
            className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-[#1D4262] focus:border-transparent" 
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="email-address" className="block text-base font-medium">
            Email address
          </label>
          <input 
            id="email-address"
            name="email" 
            type="email"
            autoComplete="email"
            required 
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "form-error" : undefined}
            className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-[#1D4262] focus:border-transparent" 
          />
        </div>
        <div>
          <label htmlFor="smartphone" className="block text-base font-medium">
            Smartphone
          </label>
          <select 
            id="smartphone"
            name="smartphone"
            autoComplete="off"
            required 
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "form-error" : undefined}
            className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-[#1D4262] focus:border-transparent">
            <option value="">Select…</option>
            <option value="iPhone">iPhone</option>
            <option value="Android">Android</option>
          </select>
        </div>
        <div>
          <label htmlFor="multifocal" className="block text-base font-medium">
            Do you wear multifocal contacts?
          </label>
          <select 
            id="multifocal"
            name="multifocal"
            autoComplete="off"
            required 
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "form-error" : undefined}
            className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-[#1D4262] focus:border-transparent">
            <option value="">Select…</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      {error && (
        <div id="form-error" role="alert" className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-[#1D4262] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4262] hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-busy={submitting}
      >
        {submitting ? 'Submitting…' : 'Join The Waitlist'}
      </button>

      <p className="mt-3 text-base text-gray-600">
        We'll only email about MaxVue. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
