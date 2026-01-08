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
            <p className="text-lg text-gray-700 mb-6">
              <strong>Last Updated:</strong> January 2026
            </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-700 mb-4">
              MaxVue is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards to achieve these goals.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in providing an inclusive experience that enables all users to access and 
              use our website, regardless of their abilities or the assistive technologies they use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Conformance Status
            </h2>
            <p className="text-gray-700 mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers 
              and developers to improve accessibility for people with disabilities. It defines three 
              levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>MaxVue website is fully conformant with WCAG 2.2 Level AA.</strong> Fully 
              conformant means that the content fully conforms to the accessibility standard without 
              any exceptions.
            </p>
            <div className="bg-[#eaf1fd] rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold text-[#1e1e1e] mb-3">
                Our Accessibility Features
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Semantic HTML structure with proper landmarks</li>
                <li>Keyboard navigation support with visible focus indicators</li>
                <li>Skip link for bypassing repetitive content</li>
                <li>Proper form labeling and error association</li>
                <li>ARIA attributes for screen reader compatibility</li>
                <li>High color contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)</li>
                <li>Responsive design that works at all screen sizes</li>
                <li>Text that can be resized up to 200% without loss of functionality</li>
                <li>Alternative text for images</li>
                <li>Clear error messages and form validation</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Feedback
            </h2>
            <p className="text-gray-700 mb-4">
              We welcome your feedback on the accessibility of the MaxVue website. Please let us 
              know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Email:</strong> accessibility@maxvue.app</li>
              <li><strong>Phone:</strong> (Please contact us through our main contact form)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We try to respond to feedback within 5 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Compatibility with Assistive Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              The MaxVue website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Keyboard-only navigation</li>
              <li>Voice control software</li>
              <li>Screen magnification software</li>
              <li>Browser zoom up to 200%</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The website should be compatible with assistive technologies on the following browsers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Chrome (latest version)</li>
              <li>Firefox (latest version)</li>
              <li>Safari (latest version)</li>
              <li>Edge (latest version)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Known Issues and Limitations
            </h2>
            <p className="text-gray-700 mb-4">
              Despite our best efforts to ensure accessibility, there may be some limitations. 
              We are actively working to address these issues and improve our website's accessibility.
            </p>
            <p className="text-gray-700 mb-4">
              If you encounter any accessibility barriers, please contact us using the information 
              provided above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Assessment Approach
            </h2>
            <p className="text-gray-700 mb-4">
              MaxVue assessed the accessibility of this website through the following approaches:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Self-evaluation using automated tools (pa11y, Lighthouse)</li>
              <li>Manual code review against WCAG 2.2 Level AA criteria</li>
              <li>Testing with keyboard-only navigation</li>
              <li>Testing with screen reader software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Formal Complaints
            </h2>
            <p className="text-gray-700 mb-4">
              If you are not satisfied with our response to your accessibility concern, you may 
              file a formal complaint. We are committed to resolving accessibility issues in a 
              timely manner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-4">
              Updates to This Statement
            </h2>
            <p className="text-gray-700 mb-4">
              We will review and update this accessibility statement regularly to reflect any 
              changes to our website or improvements in our accessibility efforts. This statement 
              was last updated in January 2026.
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

