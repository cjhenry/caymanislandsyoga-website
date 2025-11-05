import Link from "next/link";
import type { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Island Wellness Tips | Healthy Living in Cayman Islands",
  description: "Practical wellness tips for living healthy in the Cayman Islands. Yoga practices, nutrition advice, stress management, and island-specific wellness guidance.",
};

const wellnessTips = [
  {
    category: "Yoga Practice",
    icon: "🧘",
    tips: [
      {
        title: "Practice Beach Yoga at Sunrise",
        description: "Take advantage of Cayman's beautiful beaches for early morning yoga. The soft sand adds challenge for balance poses, and the ocean sounds create natural meditation.",
        action: "Best spots: Seven Mile Beach (Public Access), Rum Point, Spotts Beach",
      },
      {
        title: "Stay Hydrated in the Heat",
        description: "The Caribbean climate requires extra hydration, especially during hot yoga or outdoor classes. Drink water before, during, and after practice.",
        action: "Aim for: 8-10 glasses daily, more on practice days or hot weather",
      },
      {
        title: "Consistent Practice Over Intensity",
        description: "Regular, gentle practice (even 15 minutes daily) beats occasional intense sessions. Build your practice sustainably.",
        action: "Start with: 3x per week, gradually increasing to daily practice",
      },
    ],
  },
  {
    category: "Nutrition",
    icon: "🥗",
    tips: [
      {
        title: "Embrace Local Island Produce",
        description: "Shop at Cayman's farmers markets for fresh, local fruits and vegetables. Coconut, mango, papaya, and local fish support both health and community.",
        action: "Visit: Camana Bay Farmers Market (Wednesdays), Produce Stands in East End",
      },
      {
        title: "Mindful Eating Practices",
        description: "Apply yoga principles to eating: slow down, chew thoroughly, and eat without distractions. Honor your body's hunger and fullness cues.",
        action: "Try: Eating one meal per day mindfully, without phone or TV",
      },
      {
        title: "Balance Island Indulgences",
        description: "Enjoy Cayman's delicious food culture while maintaining balance. Follow the 80/20 rule: nutritious foods 80% of the time, treats 20%.",
        action: "Plan ahead: Enjoy weekend brunches guilt-free with weekday nourishment",
      },
    ],
  },
  {
    category: "Mental Wellness",
    icon: "🧠",
    tips: [
      {
        title: "Daily Meditation Practice",
        description: "Even 5-10 minutes of daily meditation reduces stress and improves focus. Island life offers perfect natural settings for practice.",
        action: "Start with: Guided apps like Insight Timer or Calm, or join group meditation",
      },
      {
        title: "Digital Detox Days",
        description: "Take regular breaks from screens to reconnect with nature and yourself. Leave your phone behind on beach walks or Sunday adventures.",
        action: "Try: Tech-free Sundays or evening device curfews after 8pm",
      },
      {
        title: "Gratitude Journaling",
        description: "Start or end each day listing 3 things you're grateful for. Living in paradise makes this practice especially powerful.",
        action: "Keep a journal: By your bed for morning or evening reflection",
      },
    ],
  },
  {
    category: "Physical Health",
    icon: "💪",
    tips: [
      {
        title: "Cross-Train with Island Activities",
        description: "Complement yoga with swimming, snorkeling, paddle boarding, or cycling. Cayman offers endless active opportunities.",
        action: "Mix it up: Yoga 3x/week + 2x water sports or cycling",
      },
      {
        title: "Prioritize Sleep",
        description: "In our fast-paced island community, quality sleep is crucial. Aim for 7-9 hours with consistent bed and wake times.",
        action: "Create routine: Cool, dark room, no screens 30min before bed, calming evening ritual",
      },
      {
        title: "Sun Protection for Outdoor Practice",
        description: "Protect your skin during outdoor yoga or activities. Use reef-safe sunscreen and practice during early morning or late afternoon.",
        action: "Choose: Reef-safe SPF 30+, reapply every 2 hours, wear protective clothing",
      },
    ],
  },
  {
    category: "Stress Management",
    icon: "🌊",
    tips: [
      {
        title: "Ocean Therapy",
        description: "Swimming in the ocean has proven mental health benefits. The combination of exercise, cold water, and natural beauty reduces anxiety and boosts mood.",
        action: "Make it routine: Morning ocean swims 2-3x per week",
      },
      {
        title: "Breathwork for Quick Calm",
        description: "Use pranayama techniques anywhere, anytime. 4-7-8 breathing (inhale 4, hold 7, exhale 8) activates relaxation response.",
        action: "Practice: During traffic, before meetings, or when feeling overwhelmed",
      },
      {
        title: "Set Boundaries",
        description: "Protect your energy by saying no to commitments that don't serve you. Prioritize activities that bring joy and restoration.",
        action: "Evaluate: Current commitments and eliminate energy drains",
      },
    ],
  },
  {
    category: "Community & Connection",
    icon: "❤️",
    tips: [
      {
        title: "Join a Yoga Community",
        description: "Regular classes create accountability and social connection. The yoga community in Cayman is welcoming and supportive.",
        action: "Commit to: Same class/teacher weekly to build relationships",
      },
      {
        title: "Volunteer & Give Back",
        description: "Contributing to your community enhances wellbeing. Many yoga teachers organize charity classes and environmental initiatives.",
        action: "Get involved: Beach cleanups, charity yoga events, community service",
      },
      {
        title: "Nurture Meaningful Relationships",
        description: "Prioritize quality time with loved ones. Island life can be fast-paced - schedule regular connection time.",
        action: "Schedule: Weekly friend dates, family dinners, or walking meetups",
      },
    ],
  },
];

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <Link href="/" className="text-2xl font-bold text-teal-900 hover:text-teal-700 transition-colors">
          Cayman Yoga
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/teachers" className="text-teal-700 hover:text-teal-900 font-medium">
            Teachers
          </Link>
          <Link href="/schedule" className="text-teal-700 hover:text-teal-900 font-medium">
            Schedule
          </Link>
          <Link href="/blog" className="text-teal-700 hover:text-teal-900 font-medium">
            Blog
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Island Wellness Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical guidance for living your healthiest life in the Cayman Islands. From yoga and nutrition to stress management and island-specific wellness advice.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 pb-20 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="mb-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Wellness in Paradise</h2>
          <p className="text-lg text-teal-50 leading-relaxed mb-4">
            Living in the Cayman Islands offers unique opportunities for wellness - from year-round outdoor yoga to ocean swimming and fresh tropical produce. However, island life also presents challenges: heat, humidity, fast-paced tourism industry, and the need to maintain balance.
          </p>
          <p className="text-lg text-teal-50 leading-relaxed">
            These tips are specifically curated for our island community, combining timeless wellness wisdom with practical advice for thriving in Cayman.
          </p>
        </div>

        {/* Wellness Categories */}
        <div className="space-y-12">
          {wellnessTips.map((category) => (
            <div key={category.category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <span className="text-5xl">{category.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
              </div>

              {/* Tips Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tips.map((tip, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{tip.description}</p>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-sm text-teal-800 font-medium">{tip.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Wellness Checklist */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Weekly Wellness Checklist</h2>
          <p className="text-gray-600 mb-6">
            Use this checklist to maintain balanced wellness habits throughout your week:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Yoga practice 3+ times",
              "Meditation daily (even 5 minutes)",
              "Ocean swim or beach walk",
              "8 hours sleep per night",
              "Healthy meals with local produce",
              "Digital detox period",
              "Quality time with loved ones",
              "Gratitude journaling",
              "Hydration (8+ glasses water daily)",
              "Outdoor activity beyond yoga",
              "Breathwork when stressed",
              "Something just for fun",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 rounded-lg hover:bg-teal-50 transition-colors">
                <div className="w-6 h-6 border-2 border-teal-600 rounded flex-shrink-0 mt-0.5"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local Resources */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Wellness Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Farmers Markets</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Camana Bay Farmers Market - Wednesdays 12-7pm</li>
                <li>• Produce stands along Bodden Town Road</li>
                <li>• Fresh fish at local harbors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Outdoor Spaces</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Seven Mile Beach - Yoga & swimming</li>
                <li>• Mastic Trail - Hiking & nature</li>
                <li>• Camana Bay - Walking & cycling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wellness Centers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <Link href="/teachers" className="text-teal-600 hover:underline">Browse local yoga studios</Link></li>
                <li>• National Gallery Wellness Center</li>
                <li>• Camana Bay Fitness facilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Beach cleanups (monthly)</li>
                <li>• Charity yoga classes</li>
                <li>• Wellness workshops & retreats</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-xl mb-6 text-teal-50">
            Explore our yoga classes and connect with certified instructors across the Cayman Islands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Class Schedule
            </Link>
            <Link
              href="/teachers"
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Find a Teacher
            </Link>
          </div>
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
                <li><Link href="/schedule" className="text-gray-600 hover:text-teal-600">Schedule</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/yoga-styles" className="text-gray-600 hover:text-teal-600">Yoga Styles Guide</Link></li>
                <li><Link href="/guide/finding-teacher" className="text-gray-600 hover:text-teal-600">Finding a Teacher</Link></li>
                <li><Link href="/wellness" className="text-teal-600 font-medium">Wellness Tips</Link></li>
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
