import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Cayman Yoga - how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
          <p className="text-sm text-gray-500">Last updated: November 5, 2025</p>

          <h2>Introduction</h2>
          <p>
            Cayman Yoga ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>Currently, our website is informational only. We collect minimal information:</p>
          <ul>
            <li><strong>Browser Storage:</strong> We use localStorage to remember your cookie consent preferences</li>
            <li><strong>Analytics:</strong> We may use analytics tools to understand how visitors use our site (aggregated, non-personal data)</li>
            <li><strong>Server Logs:</strong> Standard server log information including IP addresses, browser types, and access times</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Improve our website and user experience</li>
            <li>Understand how visitors interact with our content</li>
            <li>Maintain website security and prevent fraud</li>
            <li>Remember your privacy preferences</li>
          </ul>

          <h2>Cookies and Local Storage</h2>
          <p>
            We use browser localStorage to remember your cookie consent choice. This information stays on your device
            and is not transmitted to our servers. You can clear this data at any time through your browser settings.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website contains links to yoga teacher websites and other external resources. We are not responsible
            for the privacy practices of these third-party sites. We encourage you to read their privacy policies.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your information.
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access any personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not directed to children under 13. We do not knowingly collect personal information
            from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting
            the new policy on this page with an updated date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy or your data, please contact us through our website
            or visit our <Link href="/teachers" className="text-teal-600 hover:underline">teacher directory</Link>.
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
                <li><Link href="/privacy" className="text-teal-600 font-medium">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-gray-600 hover:text-teal-600">Cookie Policy</Link></li>
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
