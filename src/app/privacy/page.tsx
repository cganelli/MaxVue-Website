/**
 * Privacy Policy Page
 * 
 * Purpose: Provides information about MaxVue's privacy practices and data handling
 * Location: /src/app/privacy/page.tsx
 * 
 * This page outlines how MaxVue collects, uses, and protects user information.
 */

export const metadata = {
  title: "Privacy Policy - MaxVue",
  description: "MaxVue's Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and sign up for our beta list.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1e1e1e] mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            <strong>Last updated:</strong> January 8, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              MaxVue ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and sign up for our beta list.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Email Address:</strong> When you sign up for our beta list, we collect your email address.</li>
              <li><strong>Automatically Collected Data:</strong> We may collect certain information automatically when you visit our website, such as your IP address, browser type, and usage patterns.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Send you updates about MaxVue's launch and beta program</li>
              <li>Notify you when the MaxVue mobile app is available</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Data Storage and Security
            </h2>
            <p className="text-gray-700 mb-4">
              Your email address is securely stored and processed through Netlify Forms, our form processing service provider. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Netlify:</strong> Our hosting and form processing provider. Their privacy policy can be found at <a href="https://www.netlify.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1D4262] hover:underline">netlify.com/privacy</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of receiving communications from us</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Cookies and Tracking
            </h2>
            <p className="text-gray-700 mb-4">
              We use minimal tracking technologies on our website. We do not use cookies for tracking purposes on the coming soon page. For more information about our use of cookies, please refer to our Cookie Policy (to be added when applicable).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us through our contact form or email us at <a href="mailto:support@MaxVue.app" className="text-[#1D4262] hover:underline">support@MaxVue.app</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              GDPR Compliance
            </h2>
            <p className="text-gray-700 mb-4">
              If you are located in the European Economic Area (EEA), you have certain data protection rights. We process your personal information based on your consent when you provide your email address. You have the right to withdraw your consent at any time by contacting us.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <a 
              href="/" 
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-[#1D4262] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4262] hover:opacity-90 active:opacity-80"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

