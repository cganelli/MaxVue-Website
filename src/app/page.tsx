'use client';

import React from 'react';
import Section from '@/components/Section';
import JoinEarlyAccessForm from '@/components/JoinEarlyAccessForm';
import NextImage from 'next/image';

function getHeadline(searchParams?: string) {
  const sp = new URLSearchParams(searchParams || '');
  // Toggle A/B via ?headline=alt
  return sp.get('headline') === 'alt' ? 'Read more. Squint less.' : 'Sharper screens. Fewer squints.';
}

export default function Page() {
  const [headline, setHeadline] = React.useState('Sharper screens. Fewer squints.');
  const [precheckHardware, setPrecheckHardware] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setHeadline(getHeadline(window.location.search));
      setPrecheckHardware(params.get('hardware') === '1');
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <Section className="pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-serif md:text-5xl">{headline}</h1>
            <p className="mt-4 text-lg text-gray-800">
              MaxVue digitally tunes on-screen text to reduce near-vision blur for many people with mild presbyopia or multifocal contacts.
              It won't replace readers for everyone—especially higher prescriptions—but it often makes everyday reading noticeably easier.
            </p>

            <div className="mt-6">
              <a href="#join" className="inline-block rounded-2xl border border-[#1D4262] bg-[#3399FF] px-5 py-3 font-semibold text-white transition hover:bg-[#1D4262]">
                Join Early Access
              </a>
            </div>

            <p className="mt-3 text-xs text-gray-600">
              We'll only email about MaxVue. No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Phone demo with embedded HTML */}
          <div className="rounded-3xl border bg-white p-3 shadow-sm">
            <div className="w-full rounded-2xl bg-black p-3">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden relative">
                <iframe
                  src="/maxvue-homepage-embed.html"
                  className="w-full h-full border-0 rounded-2xl"
                  title="MaxVue App Demo"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: '9/16',
                    transform: 'scale(1.2) translateY(15px)',
                    transformOrigin: 'center center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT YOU'LL GET */}
      <Section>
        <h2 className="text-2xl font-semibold">What you'll get when you sign up</h2>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-gray-800 md:grid-cols-2">
          <li>Early access to the MaxVue calibration beta</li>
          <li>Launch pricing and exclusive invites</li>
          <li>Priority updates on our Hardware Add-Ons program (for higher prescriptions)</li>
        </ul>
      </Section>

      {/* WHAT THE APP DOES NOW */}
      <Section>
        <h2 className="text-2xl font-semibold">What the MaxVue app does (now)</h2>
        <ul className="mt-4 grid list-disc gap-3 pl-5 text-gray-800">
          <li><strong>Personalized screen tuning:</strong> Uses a quick calibration to optimize weight, spacing, and edge contrast for your eyes.</li>
          <li><strong>Comfort boost for many users:</strong> Less squinting and less pinch-to-zoom for everyday reading.</li>
          <li><strong>Works where you read:</strong> Email, messages, documents, articles, and most apps.</li>
        </ul>
        <p className="mt-3 text-sm text-gray-700">
          Results vary. People with mild near-vision blur or multifocal contacts often see the most benefit.
        </p>
        <div className="mt-5">
          <a href="#join" className="text-[#1D4262] underline underline-offset-4">Get Early Access</a>
        </div>
      </Section>

      {/* COMING SOON (R&D) */}
      <Section>
        <h2 className="text-2xl font-semibold">Coming Soon (R&amp;D)</h2>
        <div className="mt-4 rounded-2xl border p-5">
          <h3 className="text-xl font-semibold">Hardware Add-Ons</h3>
          <p className="mt-2 text-gray-800">
            We're exploring thin optical overlays that enhance clarity beyond software—aimed at users with stronger near-vision needs.
            If you're interested in accessory hardware when it's ready, join the waitlist.
          </p>
          <div className="mt-3">
            <a href="#join" onClick={(e) => {
              // add ?hardware=1 without reload in App Router
              if (typeof window !== 'undefined') {
                e.preventDefault();
                const url = new URL(window.location.href);
                url.searchParams.set('hardware', '1');
                window.history.replaceState({}, '', url.toString());
                const el = document.getElementById('join');
                el?.scrollIntoView({ behavior: 'smooth' });
                setPrecheckHardware(true);
              }
            }} className="text-[#1D4262] underline underline-offset-4">
              Join the Hardware Waitlist
            </a>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            Note: We're testing options; availability and specs may change. We'll share honest results as we learn.
          </p>
        </div>
      </Section>

      {/* FORM */}
      <Section id="join">
        <h2 className="mb-4 text-2xl font-semibold">Join Early Access</h2>
        <JoinEarlyAccessForm precheckHardware={precheckHardware} />
      </Section>

      {/* FAQ (with schema.org) */}
      <Section>
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold">Will MaxVue replace my readers?</h3>
            <p className="text-gray-800">
              For many users with mild presbyopia, MaxVue reduces how often you need readers for phone tasks.
              It won't fully replace readers for everyone—especially higher adds or low-light, tiny text scenarios.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How is this different from zooming?</h3>
            <p className="text-gray-800">
              Zoom makes text bigger. MaxVue also optimizes rendering (weight, spacing, edge contrast) based on your
              calibration to make text easier to resolve at typical phone distance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What if my prescription is stronger?</h3>
            <p className="text-gray-800">
              Software alone has limits. You'll still benefit in some cases (especially with Green Reading and better lighting),
              but if you rely on +1.75D to +2.50D readers or higher, join the Hardware Waitlist for future accessory options.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is this a medical device?</h3>
            <p className="text-gray-800">
              No. MaxVue doesn't diagnose, treat, or cure any condition. If your vision changes, see an eye-care professional.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Will MaxVue change my photos or videos?</h3>
            <p className="text-gray-800">
              We prioritize text clarity. Images and videos are minimally altered; you can still zoom when you want more detail.
            </p>
          </div>
        </div>
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Will MaxVue replace my readers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For many users with mild presbyopia, MaxVue reduces how often you need readers for phone tasks. It will not fully replace readers for everyone—especially higher adds or low-light, tiny text scenarios."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is this different from zooming?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zoom makes text bigger. MaxVue also optimizes rendering (weight, spacing, edge contrast) based on your calibration to make text easier to resolve at typical phone distance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if my prescription is stronger?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Software alone has limits. You will still benefit in some cases (especially with Green Reading and better lighting), but if you rely on +1.75D to +2.50D readers or higher, join the Hardware Waitlist for future accessory options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this a medical device?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. MaxVue does not diagnose, treat, or cure any condition. If your vision changes, see an eye-care professional."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will MaxVue change my photos or videos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We prioritize text clarity. Images and videos are minimally altered; you can still zoom when you want more detail."
                  }
                }
              ]
            })
          }}
        />
      </Section>

      {/* FINAL CTA + FOOTER */}
      <Section>
        <div className="rounded-2xl border p-6 text-center">
          <h2 className="text-2xl font-semibold">Try MaxVue first. Help shape what's next.</h2>
          <p className="mt-2 text-gray-800">Digital tuning now. Hardware options later—only if they truly help.</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#join" className="rounded-2xl border border-[#1D4262] bg-[#3399FF] px-5 py-3 font-semibold text-white transition hover:bg-[#1D4262]">
              Join Early Access
            </a>
            <a
              href="#join"
              onClick={(e) => {
                if (typeof window !== 'undefined') {
                  e.preventDefault();
                  const url = new URL(window.location.href);
                  url.searchParams.set('hardware', '1');
                  window.history.replaceState({}, '', url.toString());
                  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
                  setPrecheckHardware(true);
                }
              }}
              className="text-[#1D4262] underline underline-offset-4"
            >
              Interested in hardware, too? Join the Hardware Waitlist.
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-600">
            MaxVue is not a medical device and is not a replacement for an eye exam. Individual results vary.
            <br />
            <span className="font-medium">Clarity Promise:</span> No hype. We'll share measured results and clear limits.
          </p>
        </div>
      </Section>
    </main>
  );
}
