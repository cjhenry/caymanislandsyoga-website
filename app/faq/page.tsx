import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga FAQ - Your Questions Answered | Grand Cayman",
  description: "Get answers to common questions about yoga in Grand Cayman. Learn about classes, pricing, styles, certifications, and what to expect.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What should I wear to my first yoga class?",
          a: "Comfortable, stretchy clothes that let you move freely work best. Most people wear fitted athletic wear like leggings and a tank top or t-shirt. For beach yoga, a swimsuit works great. Bring layers since some studios keep AC pretty cold."
        },
        {
          q: "Do I need to bring my own yoga mat?",
          a: "Beach yoga students usually bring their own mat or large towel. Many studios provide mats for free or a small rental fee ($2-5). If you plan to practice regularly, buying your own mat ($20-60) is a good investment."
        },
        {
          q: "I'm not flexible at all. Can I still do yoga?",
          a: "Absolutely! Flexibility is a result of yoga, not a requirement. Teachers modify poses for every fitness level. Many students start with zero flexibility and see improvement within weeks. Beginners often make the fastest progress."
        },
        {
          q: "How often should I practice yoga as a beginner?",
          a: "Starting with 2-3 classes per week gives great results without overwhelming the body. Some students prefer one weekly group class plus home practice. Consistency matters more than frequency - regular practice beats sporadic intensive sessions."
        },
        {
          q: "What's the difference between yoga and stretching?",
          a: "Yoga combines physical poses with breathing techniques and meditation. Stretching focuses only on lengthening muscles. Yoga builds strength, flexibility, balance, and mental clarity together. It's a complete mind-body practice, not just exercise."
        }
      ]
    },
    {
      category: "Classes & Pricing",
      questions: [
        {
          q: "How much do yoga classes cost in Grand Cayman?",
          a: "Group classes cost $20-35 per session depending on location. Private lessons run $80-150 per hour. Monthly unlimited passes cost $120-200. Beach yoga tends to be cheaper ($20-25) than studio classes ($25-35). Package deals usually save 10-20%."
        },
        {
          q: "What's the difference between private and group classes?",
          a: "Private sessions give one-on-one attention with routines customized to your needs. Group classes cost less but follow a set sequence for everyone. Private students progress faster while group students enjoy community and lower prices."
        },
        {
          q: "Do hotels offer yoga classes?",
          a: "Yes! Most major Grand Cayman resorts provide yoga for guests. Kimpton Seafire, Ritz-Carlton, Westin, and Marriott all have programs. Classes are often free for guests or cost $10-20. Private sessions can be arranged through hotel concierges."
        },
        {
          q: "Can I do online yoga from Grand Cayman?",
          a: "Definitely. Many local instructors offer online classes via Zoom or other platforms. Online sessions cost $15-25 for groups or $60-120 for private lessons. You just need internet, a device with camera, and space to practice."
        },
        {
          q: "Are there yoga class packages or memberships?",
          a: "Most studios and instructors offer package deals. Common options include 10-class punch cards ($180-280), monthly unlimited passes ($120-200), or discounted private session bundles. Packages save 10-25% compared to drop-in rates."
        },
        {
          q: "Do I need to book classes in advance?",
          a: "Beach classes and large studios usually accept drop-ins, but popular times fill up. Smaller studios and private sessions require booking ahead. During peak tourist season (December-April), advance booking is smart."
        }
      ]
    },
    {
      category: "Yoga Styles",
      questions: [
        {
          q: "What's the best yoga style for beginners?",
          a: "Hatha yoga is perfect for newcomers. It focuses on basic poses and breathing at a slower pace. Restorative yoga also works well for beginners wanting gentle practice. Vinyasa Flow is great once you know the basics."
        },
        {
          q: "What is beach yoga like?",
          a: "Beach yoga happens on the sand, usually at sunrise or sunset. The unstable surface makes poses harder (great workout!) while ocean sounds enhance meditation. Classes are typically beginner-friendly Hatha or gentle Flow styles. Bring sunscreen!"
        },
        {
          q: "What's the difference between hot yoga and regular yoga?",
          a: "Hot yoga happens in rooms heated to 95-105°F. The heat increases flexibility and promotes sweating. Regular yoga is practiced at room temperature. Cayman's tropical climate means outdoor yoga is naturally warm without extra heating."
        },
        {
          q: "What is Vinyasa Flow?",
          a: "Vinyasa links breath with movement in flowing sequences. Classes move faster than Hatha with transitions between poses. It builds strength and cardio fitness while improving flexibility. Great for people wanting a workout feel."
        },
        {
          q: "What is Yin Yoga?",
          a: "Yin yoga involves holding gentle poses for 3-5 minutes each. It targets deep connective tissue and promotes relaxation. Perfect for stress relief, improving flexibility, and balancing active lifestyles. Most poses are seated or lying down."
        },
        {
          q: "Is prenatal yoga available in Grand Cayman?",
          a: "Yes, several certified instructors offer prenatal yoga. These classes adapt poses for pregnancy safety while helping with flexibility, breathing, and stress management. Look for teachers with specialized prenatal certification."
        }
      ]
    },
    {
      category: "Instructors & Safety",
      questions: [
        {
          q: "Are Grand Cayman yoga teachers certified?",
          a: "Most instructors hold RYT (Registered Yoga Teacher) certification from Yoga Alliance. RYT-200 means 200 hours of training; RYT-500 means 500 hours. Many have additional specialties like prenatal, therapeutic, or specific style certifications."
        },
        {
          q: "How do I choose the right yoga teacher?",
          a: "Consider their certification level, teaching style, and specialties. Read reviews and try intro classes with different teachers. Match their pace to your goals - beginners need patient teachers while advanced students want challenging instruction."
        },
        {
          q: "Can yoga help with injuries or health conditions?",
          a: "Therapeutic yoga helps many conditions, but always consult your doctor first. Tell instructors about injuries or health issues so they can modify poses. Private sessions work best for injury recovery since teachers fully customize practice."
        },
        {
          q: "Is yoga safe for seniors?",
          a: "Absolutely! Gentle yoga styles like Restorative and modified Hatha are perfect for seniors. Yoga improves balance (reducing fall risk), maintains flexibility, and supports joint health. Many instructors specialize in senior-friendly classes."
        },
        {
          q: "What if I have back pain or joint problems?",
          a: "Yoga can help, but work with experienced teachers who understand modifications. Private sessions let instructors design routines around your specific issues. Always get medical clearance for serious conditions."
        }
      ]
    },
    {
      category: "Locations & Logistics",
      questions: [
        {
          q: "Where are yoga classes held in Grand Cayman?",
          a: "Classes happen across the island - Seven Mile Beach has the most options including beach yoga and hotel programs. George Town has air-conditioned studios. East End, West Bay, and Bodden Town have community classes and private instructors."
        },
        {
          q: "What time do beach yoga classes start?",
          a: "Morning beach classes run 6:00-7:30am before heat builds. Evening sessions happen 5:00-6:30pm during sunset. These times avoid midday sun and offer cooler temperatures for outdoor practice."
        },
        {
          q: "Is there yoga on Cayman Brac or Little Cayman?",
          a: "Options are limited on the sister islands but private instructors visit both locations. Some resorts arrange yoga for guests. Online classes work perfectly for residents of smaller islands."
        },
        {
          q: "Can instructors come to my home or hotel?",
          a: "Yes! Many teachers offer mobile private sessions. They come to your home, hotel room, condo, or favorite beach spot with all necessary equipment. This is especially popular for vacation rentals and hotel guests."
        },
        {
          q: "What's the best beach for yoga in Grand Cayman?",
          a: "Seven Mile Beach is most popular with multiple daily classes. Smith Barcadere and Cemetery Beach offer quieter alternatives. East End's Kaibo Beach has growing programs. Choose based on proximity and crowd preference."
        }
      ]
    },
    {
      category: "Special Programs",
      questions: [
        {
          q: "Are there yoga retreats in the Cayman Islands?",
          a: "Yes! Multi-day retreats combine intensive yoga practice with healthy meals, island activities, and accommodation. They typically last 3-7 days and cost $1,200-3,000. Perfect for deepening practice or vacationing with purpose."
        },
        {
          q: "Can I book yoga for special events?",
          a: "Definitely! Instructors offer yoga for bachelorette parties, corporate team building, birthday celebrations, and group vacations. Private beach sessions for special occasions are popular. Contact teachers directly for custom arrangements."
        },
        {
          q: "Are there kids yoga classes?",
          a: "Some instructors specialize in children's yoga with age-appropriate poses and playful teaching. Family yoga sessions let parents and kids practice together. Private sessions work well for families since teachers adapt to different ages."
        },
        {
          q: "Is couples yoga available?",
          a: "Yes, many instructors offer couples sessions. These include partner poses that build connection and communication. Popular for anniversaries, honeymoons, or just spending quality time together. Sunrise beach sessions are especially romantic."
        }
      ]
    },
    {
      category: "Practical Questions",
      questions: [
        {
          q: "Should I eat before yoga?",
          a: "Practice on an empty or light stomach. Eat 2-3 hours before class if having a meal, or 30-60 minutes if having a light snack like fruit. Drinking water is fine. Full stomachs make certain poses uncomfortable."
        },
        {
          q: "What does 'namaste' mean?",
          a: "It's a Sanskrit greeting meaning 'the light in me honors the light in you.' Teachers often say it at class end as a respectful closing. Students respond with 'namaste' back."
        },
        {
          q: "Do I need to be religious or spiritual to do yoga?",
          a: "Not at all! Yoga works as pure physical exercise. Some teachers include spiritual elements while others focus entirely on fitness. Choose instructors whose approach matches your comfort level."
        },
        {
          q: "How long are typical yoga classes?",
          a: "Most group classes run 60-75 minutes. Some express classes are 45 minutes. Private sessions are usually 60 minutes but can be customized. Beach sunrise classes sometimes run shorter (45-60 min) due to heat."
        },
        {
          q: "Can I take photos during class?",
          a: "Ask your instructor first. Beach classes often allow photos, especially at sunrise/sunset. Studio classes typically prohibit photography to respect other students' privacy. Never photograph other students without permission."
        },
        {
          q: "What if I need to leave class early?",
          a: "Tell the instructor beforehand and set up near the exit. Leave quietly during a standing pose or transition, not during final relaxation. It's acceptable for emergencies or schedule conflicts."
        },
        {
          q: "How quickly will I see results from yoga?",
          a: "Most students notice improved flexibility and stress reduction within 2-3 weeks of regular practice. Strength gains appear in 4-6 weeks. Mental benefits like better sleep and reduced anxiety often show up immediately."
        }
      ]
    }
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
      <header className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about yoga in Grand Cayman
        </p>
      </header>

      {/* FAQ Content */}
      <main className="px-6 pb-20 max-w-4xl mx-auto">
        {faqCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-teal-500">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((item, qIdx) => (
                <details
                  key={qIdx}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer hover:bg-teal-50 transition-colors flex items-start justify-between">
                    <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                    <ChevronDown className="flex-shrink-0 mt-1 text-teal-600 group-open:rotate-180 transition-transform" size={20} />
                  </summary>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-6 text-teal-50">
            Browse our certified yoga instructors who can answer your specific questions
          </p>
          <Link
            href="/teachers"
            className="inline-block px-8 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors"
          >
            Find Your Teacher
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
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
                <li><Link href="/faq" className="text-teal-600 font-medium">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Private Classes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Beach Yoga</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Online Sessions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Yoga Retreats</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog Articles</Link></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Pricing Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Testimonials</a></li>
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
