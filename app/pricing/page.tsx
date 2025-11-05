import Link from "next/link";
import { Check, X, Star, Award, Users, Video, MapPin, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Pricing & Packages | Danielle Henry - Gentil Core Yoga",
  description: "Transparent pricing for yoga classes in Grand Cayman. Compare private sessions, group classes, online yoga, and packages from Danielle Henry at Gentil Core Yoga.",
};

export default function PricingPage() {
  const pricingOptions = [
    {
      name: "Private Sessions",
      icon: <Heart />,
      description: "One-on-one personalized instruction",
      prices: [
        { label: "Single Session", price: "$120", unit: "per hour" },
        { label: "5-Session Package", price: "$550", unit: "($110/session)", savings: "Save $50" },
        { label: "10-Session Package", price: "$1,000", unit: "($100/session)", savings: "Save $200" }
      ],
      features: [
        "Fully customized routines",
        "Flexible scheduling",
        "Practice at your location",
        "Faster progress than group",
        "Perfect for injuries/special needs",
        "Includes personalized program design"
      ],
      bestFor: "Beginners, injury recovery, fast results, special needs"
    },
    {
      name: "Group Classes",
      icon: <Users />,
      description: "Small group beach or studio sessions",
      prices: [
        { label: "Single Class", price: "$25", unit: "per class" },
        { label: "10-Class Punch Card", price: "$220", unit: "($22/class)", savings: "Save $30" },
        { label: "Monthly Unlimited", price: "$180", unit: "unlimited classes", savings: "Best value!" }
      ],
      features: [
        "Beach or studio locations",
        "Community atmosphere",
        "Multiple weekly times",
        "All skill levels welcome",
        "Mat provided if needed",
        "Consistent schedule"
      ],
      bestFor: "Budget-conscious, social learners, regular practitioners"
    },
    {
      name: "Online Yoga",
      icon: <Video />,
      description: "Live virtual sessions from anywhere",
      prices: [
        { label: "Private Online Session", price: "$90", unit: "per hour" },
        { label: "Group Online Class", price: "$20", unit: "per class" },
        { label: "Monthly Unlimited Online", price: "$100", unit: "unlimited classes", savings: "Huge savings!" }
      ],
      features: [
        "Practice from anywhere",
        "No commute time",
        "Live instruction with feedback",
        "Record for later review",
        "Perfect for travelers",
        "Flexible scheduling"
      ],
      bestFor: "Busy schedules, travelers, home practice preference"
    },
    {
      name: "Beach Yoga",
      icon: <MapPin />,
      description: "Sunrise or sunset yoga on Seven Mile Beach",
      prices: [
        { label: "Single Class", price: "$25", unit: "per class" },
        { label: "10-Class Card", price: "$220", unit: "($22/class)", savings: "Save $30" },
        { label: "Monthly Package", price: "$160", unit: "12 classes/month", savings: "Best deal!" }
      ],
      features: [
        "Stunning sunrise/sunset views",
        "Natural vitamin D",
        "Sand challenges balance",
        "Ocean sound meditation",
        "Seven Mile Beach location",
        "Weather backup plan"
      ],
      bestFor: "Nature lovers, tourists, morning people"
    }
  ];

  const competitorComparison = {
    headers: ["Feature", "Gentil Core Yoga (Danielle Henry)", "Competitor A", "Competitor B", "Competitor C"],
    rows: [
      {
        feature: "Instructor Certification",
        gentil: "RYT-500, 8+ years experience",
        compA: "RYT-200, 3 years",
        compB: "RYT-200, 5 years",
        compC: "No certification listed"
      },
      {
        feature: "Private Session Price",
        gentil: "$120/hour",
        compA: "$150/hour",
        compB: "$130/hour",
        compC: "$100/hour"
      },
      {
        feature: "Group Class Price",
        gentil: "$25 ($22 with package)",
        compA: "$30",
        compB: "$28",
        compC: "$20"
      },
      {
        feature: "Online Classes Available",
        gentil: true,
        compA: false,
        compB: true,
        compC: false
      },
      {
        feature: "Beach Yoga Sessions",
        gentil: true,
        compA: false,
        compB: true,
        compC: false
      },
      {
        feature: "Flexible Scheduling",
        gentil: true,
        compA: "Limited",
        compB: "Limited",
        compC: true
      },
      {
        feature: "Specialized Programs",
        gentil: "Prenatal, Therapeutic, Athletic, Seniors",
        compA: "General only",
        compB: "Prenatal only",
        compC: "General only"
      },
      {
        feature: "Average Rating",
        gentil: "5.0 stars (150+ reviews)",
        compA: "4.2 stars",
        compB: "4.5 stars",
        compC: "3.8 stars"
      },
      {
        feature: "Package Discounts",
        gentil: true,
        compA: false,
        compB: true,
        compC: false
      },
      {
        feature: "Money-Back Guarantee",
        gentil: true,
        compA: false,
        compB: false,
        compC: false
      },
      {
        feature: "Free Trial Class",
        gentil: true,
        compA: false,
        compB: false,
        compC: true
      },
      {
        feature: "Mobile Service",
        gentil: "Hotels, homes, beaches",
        compA: "Studio only",
        compB: "Limited",
        compC: "Studio only"
      }
    ]
  };

  const addOns = [
    { name: "Yoga Mat Rental", price: "$5", description: "High-quality mat provided" },
    { name: "Private Beach Setup", price: "$25", description: "Umbrella, mats, props at private beach location" },
    { name: "Couples Session Add-on", price: "+$40", description: "Add second person to private session" },
    { name: "Video Recording", price: "$15", description: "Record session for home practice" },
    { name: "Personalized Program Design", price: "$75", description: "Custom home practice routine" },
    { name: "Nutrition Consultation", price: "$60", description: "60-min session with certified nutritionist partner" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <Link href="/" className="text-2xl font-bold text-teal-900 hover:text-teal-700 transition-colors">
          Cayman Yoga
        </Link>
        <div className="flex gap-6">
          <Link href="/teachers" className="text-teal-700 hover:text-teal-900 font-medium">
            Teachers
          </Link>
          <Link href="/blog" className="text-teal-700 hover:text-teal-900 font-medium">
            Blog
          </Link>
          <Link href="/" className="text-teal-700 hover:text-teal-900 font-medium">
            Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Transparent Pricing & Packages
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Flexible options for every budget and goal with Danielle Henry at Gentil Core Yoga
        </p>
        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-6 py-3 rounded-full font-semibold">
          <Award size={24} />
          <span>First Class Free for New Students - No Risk!</span>
        </div>
      </header>

      {/* Main Pricing Cards */}
      <main className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pricingOptions.map((option, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-teal-500 transition-all overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 text-white p-6">
                <div className="text-center mb-4 text-4xl">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{option.name}</h3>
                <p className="text-teal-100 text-center text-sm">{option.description}</p>
              </div>

              {/* Pricing */}
              <div className="p-6 border-b border-gray-200">
                {option.prices.map((price, pIdx) => (
                  <div key={pIdx} className="mb-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-sm text-gray-600">{price.label}</span>
                      <span className="text-2xl font-bold text-gray-900">{price.price}</span>
                    </div>
                    <div className="text-xs text-gray-500">{price.unit}</div>
                    {price.savings && (
                      <div className="text-xs font-semibold text-green-600 mt-1">{price.savings}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-600 border-t border-gray-200 pt-4">
                  <strong>Best for:</strong> {option.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Competitor Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            How We Compare
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            See why students choose Gentil Core Yoga over other Grand Cayman instructors
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                  {competitorComparison.headers.map((header, idx) => (
                    <th key={idx} className="px-6 py-4 text-left font-bold">
                      {header}
                      {idx === 1 && <Star className="inline ml-2" fill="currentColor" size={16} />}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitorComparison.rows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-teal-700 font-semibold bg-teal-50">
                      {typeof row.gentil === 'boolean' ? (
                        row.gentil ? <Check className="text-green-500" size={20} /> : <X className="text-red-500" size={20} />
                      ) : (
                        row.gentil
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {typeof row.compA === 'boolean' ? (
                        row.compA ? <Check className="text-green-500" size={20} /> : <X className="text-gray-400" size={20} />
                      ) : (
                        row.compA
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {typeof row.compB === 'boolean' ? (
                        row.compB ? <Check className="text-green-500" size={20} /> : <X className="text-gray-400" size={20} />
                      ) : (
                        row.compB
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {typeof row.compC === 'boolean' ? (
                        row.compC ? <Check className="text-green-500" size={20} /> : <X className="text-gray-400" size={20} />
                      ) : (
                        row.compC
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Optional Add-Ons
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-teal-600 mb-3">{addon.price}</p>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Policies */}
        <div className="mb-20 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment & Policies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Payment Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} />
                  Cash
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} />
                  Credit/Debit Cards
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} />
                  Bank Transfer
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" size={16} />
                  Venmo/PayPal
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Cancellation Policy</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Cancel 24 hours ahead for full refund</li>
                <li>• Late cancels charged 50%</li>
                <li>• No-shows charged full amount</li>
                <li>• Packages valid for 6 months</li>
                <li>• Weather cancels get full refund or reschedule</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Satisfaction Guarantee</h3>
            <p className="text-gray-700">
              If you're not satisfied with your first session, we'll refund 100% of your money. No questions asked. We're confident you'll love working with Danielle at Gentil Core Yoga.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Yoga Journey?
          </h2>
          <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
            Book your free trial class with Danielle Henry at Gentil Core Yoga today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teachers"
              className="inline-block px-8 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors"
            >
              Book Free Trial Class
            </Link>
            <a
              href="https://www.gentilcoreyoga.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-teal-700 text-white font-bold rounded-lg hover:bg-teal-800 transition-colors border-2 border-white"
            >
              Visit Gentil Core Yoga
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Pricing Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do packages expire?</h3>
              <p className="text-gray-700 text-sm">Class packages are valid for 6 months from purchase. We can extend in special circumstances.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-2">Can I share packages?</h3>
              <p className="text-gray-700 text-sm">Class packages are non-transferable, but couples packages can be shared between two people.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-2">Are there student/senior discounts?</h3>
              <p className="text-gray-700 text-sm">Yes! Students and seniors (65+) get 10% off all packages. Contact us for details.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer corporate programs?</h3>
              <p className="text-gray-700 text-sm">Absolutely! We create custom corporate wellness programs. Contact for group rates.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Cayman Yoga</h3>
              <p className="text-sm text-gray-600">Featuring Danielle Henry at Gentil Core Yoga</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-teal-600">Home</Link></li>
                <li><Link href="/teachers" className="text-gray-600 hover:text-teal-600">Teachers</Link></li>
                <li><Link href="/pricing" className="text-teal-600 font-medium">Pricing</Link></li>
                <li><Link href="/testimonials" className="text-gray-600 hover:text-teal-600">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.gentilcoreyoga.com" className="text-gray-600 hover:text-teal-600">Private Classes</a></li>
                <li><a href="https://www.gentilcoreyoga.com" className="text-gray-600 hover:text-teal-600">Beach Yoga</a></li>
                <li><a href="https://www.gentilcoreyoga.com" className="text-gray-600 hover:text-teal-600">Online Sessions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.gentilcoreyoga.com" className="text-gray-600 hover:text-teal-600">Gentil Core Yoga</a></li>
                <li><span className="text-gray-600">Grand Cayman</span></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm pt-6 border-t border-gray-200">
            <p>© 2024 Cayman Yoga. Featuring Danielle Henry at Gentil Core Yoga - Grand Cayman's Premier Yoga Instruction.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
