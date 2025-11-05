import Link from "next/link";
import type { Metadata } from "next";
import SearchHero from "@/components/SearchHero";

export const metadata: Metadata = {
  title: "Find the Best Yoga Teachers in Cayman Islands",
  description: "Discover certified yoga instructors and classes across Grand Cayman, Cayman Brac, and Little Cayman. Browse teachers specializing in Hatha, Vinyasa, Yin, Hot Yoga, and more.",
};

export default function Home() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cayman Yoga",
    "url": "https://caymanyoga.com",
    "description": "Find certified yoga teachers and classes in the Cayman Islands",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://caymanyoga.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who are the best yoga teachers in the Cayman Islands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Cayman Islands is home to many experienced and certified yoga instructors specializing in various styles including Hatha, Vinyasa, Yin, and Hot Yoga. Browse our directory to find teachers with verified credentials and student reviews."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find yoga classes in Grand Cayman?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yoga classes are available throughout Grand Cayman, including Seven Mile Beach, George Town, Bodden Town, and East End. Many instructors offer beach yoga, studio sessions, and private in-home classes."
        }
      },
      {
        "@type": "Question",
        "name": "What types of yoga are offered in Cayman?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local instructors teach a wide range of yoga styles including Hatha Yoga, Vinyasa Flow, Yin Yoga, Ashtanga, Restorative Yoga, Hot Yoga, Prenatal Yoga, and specialized wellness workshops."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-teal-900">Cayman Yoga</h1>
        <div className="flex items-center gap-4">
          <Link href="/teachers" className="text-teal-700 hover:text-teal-900 font-medium">Teachers</Link>
          <Link href="/schedule" className="text-teal-700 hover:text-teal-900 font-medium">Schedule</Link>
          <Link href="/venues" className="text-teal-700 hover:text-teal-900 font-medium">Venues</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-20 max-w-7xl mx-auto">
        <SearchHero />

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🧘</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Certified Instructors</h3>
            <p className="text-gray-600">
              All teachers are certified with years of experience in various yoga disciplines
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Island-Wide Coverage</h3>
            <p className="text-gray-600">
              Find yoga classes across all three Cayman Islands, from Seven Mile Beach to East End
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Personalized Experience</h3>
            <p className="text-gray-600">
              Private sessions, group classes, beach yoga, and specialized workshops available
            </p>
          </div>
        </div>

        {/* FAQ Section for AEO */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Who are the best yoga teachers in the Cayman Islands?
              </h3>
              <p className="text-gray-600">
                The Cayman Islands is home to many experienced and certified yoga instructors
                specializing in various styles including Hatha, Vinyasa, Yin, and Hot Yoga.
                Browse our directory to find teachers with verified credentials and student reviews.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Where can I find yoga classes in Grand Cayman?
              </h3>
              <p className="text-gray-600">
                Yoga classes are available throughout Grand Cayman, including Seven Mile Beach,
                George Town, Bodden Town, and East End. Many instructors offer beach yoga,
                studio sessions, and private in-home classes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What types of yoga are offered in Cayman?
              </h3>
              <p className="text-gray-600">
                Local instructors teach a wide range of yoga styles including Hatha Yoga,
                Vinyasa Flow, Yin Yoga, Ashtanga, Restorative Yoga, Hot Yoga, Prenatal Yoga,
                and specialized wellness workshops.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 py-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Cayman Yoga</h3>
              <p className="text-sm text-gray-600">Connecting wellness seekers with certified yoga instructors</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-teal-600 font-medium">Home</Link></li>
                <li><Link href="/teachers" className="text-gray-600 hover:text-teal-600">Teachers</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/yoga-styles" className="text-gray-600 hover:text-teal-600">Yoga Styles Guide</Link></li>
                <li><Link href="/guide/finding-teacher" className="text-gray-600 hover:text-teal-600">Finding a Teacher</Link></li>
                <li><Link href="/wellness" className="text-gray-600 hover:text-teal-600">Wellness Tips</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm pt-6 border-t border-gray-200">
            <p>© 2024 Cayman Yoga. Connecting wellness seekers with certified yoga instructors.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
