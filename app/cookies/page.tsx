import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Cayman Yoga - how we use browser storage and cookies.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <Link href="/" className="text-2xl font-bold text-teal-900 hover:text-teal-700 transition-colors">
          Cayman Yoga
        </Link>
        <Link href="/" className="text-teal-700 hover:text-teal-900 font-medium">
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
          <p className="text-sm text-gray-500">Last updated: November 5, 2025</p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites remember
            your preferences and improve your browsing experience.
          </p>

          <h2>How We Use Browser Storage</h2>
          <p>
            Cayman Yoga currently uses browser localStorage (not traditional cookies) to enhance your experience.
            Here's what we store:
          </p>

          <h3>Essential Storage</h3>
          <ul>
            <li><strong>Cookie Consent Preference:</strong> We remember whether you've accepted or declined our cookie notice</li>
          </ul>

          <h3>What We Don't Use</h3>
          <p>We currently do NOT use:</p>
          <ul>
            <li>Advertising cookies or trackers</li>
            <li>Social media cookies</li>
            <li>Third-party tracking cookies</li>
            <li>Cookies to collect personal information</li>
          </ul>

          <h2>Types of Storage We May Use</h2>

          <h3>Strictly Necessary</h3>
          <p>
            These are essential for the website to function properly. They remember your privacy preferences
            and help maintain security.
          </p>

          <h3>Performance and Analytics (If Enabled)</h3>
          <p>
            We may use analytics tools to understand how visitors use our site. These help us improve the
            website experience. All data is anonymized and aggregated.
          </p>

          <h2>Managing Your Preferences</h2>
          <p>You can control browser storage in several ways:</p>
          <ul>
            <li><strong>Browser Settings:</strong> Most browsers allow you to view, delete, and block cookies/localStorage</li>
            <li><strong>Clear Storage:</strong> You can clear all website data through your browser settings</li>
            <li><strong>Private Browsing:</strong> Use incognito/private mode to prevent storage persistence</li>
          </ul>

          <h3>How to Clear Browser Storage</h3>
          <ul>
            <li><strong>Chrome:</strong> Settings → Privacy and Security → Clear browsing data</li>
            <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data → Clear Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data → Remove All</li>
            <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            When you click links to external yoga teacher websites or other resources, those sites may set
            their own cookies. We do not control third-party cookies.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this cookie policy as we add new features or change our practices. Any changes
            will be posted on this page with an updated date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about our use of cookies or browser storage, please refer to our{' '}
            <Link href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link> or
            contact us through our website.
          </p>

          <h2>Consent</h2>
          <p>
            By using our website and accepting our cookie notice, you consent to our use of browser storage
            as described in this policy. You can withdraw consent at any time by clearing your browser data.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Cayman Yoga</h3>
              <p className="text-sm text-gray-600">Connecting wellness seekers with certified yoga instructors</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-teal-600">Home</Link></li>
                <li><Link href="/teachers" className="text-gray-600 hover:text-teal-600">Teachers</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray-600 hover:text-teal-600">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-teal-600 font-medium">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm pt-6 border-t border-gray-200">
            <p>© 2024 Cayman Yoga. Connecting wellness seekers with certified yoga instructors.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
