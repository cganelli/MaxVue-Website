/**
 * Accessibility Statement Page
 * 
 * Purpose: Provides information about MaxVue's commitment to accessibility
 * Location: /src/app/accessibility/page.tsx
 * 
 * This page outlines our accessibility standards, compliance status, and
 * how users can report accessibility issues.
 */

export const metadata = {
  title: "Accessibility Statement - MaxVue",
  description: "MaxVue is committed to ensuring digital accessibility for people with disabilities. Learn about our WCAG 2.2 Level AA compliance and how to report issues.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1e1e1e] mb-8">
          Accessibility Statement
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700 mb-4">
              MaxVue is dedicated to ensuring digital accessibility for people with disabilities. We strive to provide an inclusive experience that allows all users to access and use our website, regardless of their abilities or the assistive technologies they use. We are continually improving the user experience for everyone and applying the relevant accessibility standards to achieve these goals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Conformance Status
            </h2>
            <p className="text-gray-700 mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our goal is to maintain substantial conformance with WCAG 2.2 Level AA. We view accessibility as an ongoing effort and perform regular reviews to ensure we are meeting these standards.
            </p>
            <div className="bg-[#eaf1fd] rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold text-[#1e1e1e] mb-3">
                Our Accessibility Features
              </h3>
              <p className="text-gray-700 mb-3">
                To support an accessible experience, our site incorporates features designed for compatibility with assistive software:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Semantic HTML structure with proper landmarks to assist navigation.</li>
                <li>Keyboard navigation support with visible focus indicators.</li>
                <li>Skip links for bypassing repetitive content.</li>
                <li>ARIA attributes to enhance compatibility with screen readers.</li>
                <li>High color contrast ratios aiming for a minimum of 4.5:1 for normal text.</li>
                <li>Responsive design that works across various devices and screen sizes.</li>
                <li>Text that can be resized up to 200% without loss of functionality.</li>
                <li>Alternative text for images and clear form labeling with error association.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Compatibility with Assistive Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              The MaxVue website is designed to be compatible with standard assistive technologies, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Screen readers such as NVDA, JAWS, and VoiceOver.</li>
              <li>Keyboard-only navigation and voice control software.</li>
              <li>Modern browsers including the latest versions of Chrome, Firefox, Safari, and Edge.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Assessment Approach
            </h2>
            <p className="text-gray-700 mb-4">
              MaxVue evaluates the accessibility of this website through a systematic internal process:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Automated accessibility audits using industry-standard tools and AI-assisted code reviews.</li>
              <li>Manual keyboard-only navigation testing to ensure all interactive elements are reachable without a mouse.</li>
              <li>Code-level analysis against WCAG 2.2 Level AA criteria to identify and remediate potential barriers.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Feedback
            </h2>
            <p className="text-gray-700 mb-4">
              We welcome your feedback on the accessibility of the MaxVue website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Email:</strong> accessibility@maxvue.app</li>
              <li><strong>Response Time:</strong> We aim to respond to accessibility-related feedback within 5 business days.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Updates to This Statement
            </h2>
            <p className="text-gray-700 mb-4">
              We review and update this accessibility statement regularly to reflect our ongoing efforts and improvements. This statement was last updated in January 2026.
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
