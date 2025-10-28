"use client";
import React from "react";

type Props = {
  precheckHardware?: boolean;
};

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function JoinEarlyAccessForm({ precheckHardware }: Props) {
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const form = formRef.current!;
      const formData = new FormData(form);
      // Netlify requires this
      formData.set("form-name", "early-access");

      const body = encode(Object.fromEntries(formData as any));

      const resp = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (resp.ok) {
        setDone(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border p-6 shadow-sm bg-white/70 backdrop-blur">
        <h3 className="text-xl font-semibold">You're in. ✅</h3>
        <p className="mt-2 text-sm text-gray-700">
          Thanks for joining the MaxVue Early Access. We'll email only about
          MaxVue—no spam, unsubscribe anytime.
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
      name="early-access"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      className="rounded-2xl border p-6 shadow-sm bg-white/70 backdrop-blur"
      onSubmit={onSubmit}
    >
      {/* hidden inputs for Netlify */}
      <input type="hidden" name="form-name" value="early-access" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="company" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">First name</label>
          <input
            name="first_name"
            required
            className="mt-1 w-full rounded-xl border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name</label>
          <input
            name="last_name"
            required
            className="mt-1 w-full rounded-xl border p-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Email address</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Smartphone</label>
          <select
            name="smartphone"
            required
            className="mt-1 w-full rounded-xl border p-2"
          >
            <option value="">Select…</option>
            <option>iPhone</option>
            <option>Android</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Do you wear multifocal contacts? (optional)
          </label>
          <select
            name="multifocal"
            className="mt-1 w-full rounded-xl border p-2"
          >
            <option value="">Prefer not to say</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="hardware_interest"
              defaultChecked={!!precheckHardware}
              className="rounded"
            />
            <span className="text-sm">
              Also join the Hardware Add-Ons waitlist
            </span>
          </label>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full rounded-2xl border border-[#1D4262] bg-[#3399FF] px-4 py-3 font-semibold text-white transition hover:bg-[#1D4262]"
      >
        {submitting ? "Submitting…" : "Join Early Access"}
      </button>

      <p className="mt-3 text-xs text-gray-600">
        We'll only email about MaxVue. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
