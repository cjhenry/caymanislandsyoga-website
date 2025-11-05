import Link from "next/link";
import type { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Guide to Yoga Styles | Cayman Yoga",
  description: "Learn about different yoga styles including Hatha, Vinyasa, Yin, Ashtanga, Hot Yoga, and more. Find the perfect yoga practice for your goals and fitness level.",
};

const yogaStyles = [
  {
    name: "Hatha Yoga",
    description: "Traditional yoga focusing on physical postures and breath control. Perfect for beginners.",
    difficulty: "Beginner",
    benefits: ["Improves flexibility", "Builds strength", "Reduces stress", "Enhances mind-body connection"],
    whoItsFor: "Beginners, those seeking foundational practice, anyone wanting a slower-paced class",
    typicalClass: "60-90 minutes of basic poses held for several breaths, with emphasis on proper alignment and breathing techniques.",
    searchParam: "Hatha",
  },
  {
    name: "Vinyasa Flow",
    description: "Dynamic, flowing sequences that link breath with movement. Creative and energizing.",
    difficulty: "All Levels",
    benefits: ["Cardiovascular health", "Full-body strength", "Improved coordination", "Mental focus"],
    whoItsFor: "Those who enjoy movement, students wanting variety, anyone seeking a dynamic practice",
    typicalClass: "Flow-style class moving through sequences at a moderate pace, often set to music. Expect to move continuously.",
    searchParam: "Vinyasa",
  },
  {
    name: "Power Yoga / Power Vinyasa",
    description: "Athletic, vigorous practice building serious strength and stamina. Expect to sweat.",
    difficulty: "Intermediate to Advanced",
    benefits: ["Builds muscle", "Increases endurance", "Burns calories", "Mental toughness"],
    whoItsFor: "Athletes, fitness enthusiasts, those seeking challenging workouts, experienced practitioners",
    typicalClass: "75-90 minutes of challenging poses, arm balances, and core work. High intensity with minimal rest.",
    searchParam: "Power Vinyasa",
  },
  {
    name: "Yin Yoga",
    description: "Slow-paced practice with poses held for 3-5 minutes. Targets deep connective tissues.",
    difficulty: "All Levels",
    benefits: ["Increases flexibility", "Releases fascia", "Promotes relaxation", "Improves joint mobility"],
    whoItsFor: "Anyone seeking deep stretching, athletes needing recovery, those wanting meditation through movement",
    typicalClass: "Mostly floor-based poses held passively for several minutes. Props used for support. Very meditative.",
    searchParam: "Yin",
  },
  {
    name: "Restorative Yoga",
    description: "Deeply relaxing practice using props to support the body in restful poses.",
    difficulty: "All Levels",
    benefits: ["Stress relief", "Nervous system regulation", "Deep relaxation", "Recovery from illness/injury"],
    whoItsFor: "Those experiencing stress, anyone recovering from injury, students seeking deep rest",
    typicalClass: "4-6 poses held for 10-20 minutes each with extensive prop support. Focus on complete relaxation.",
    searchParam: "Restorative",
  },
  {
    name: "Hot Yoga",
    description: "Yoga practiced in a heated room (95-105°F). Promotes detoxification and flexibility.",
    difficulty: "Intermediate",
    benefits: ["Increased flexibility", "Detoxification", "Cardiovascular conditioning", "Mental discipline"],
    whoItsFor: "Those who enjoy heat, students wanting deeper stretches, anyone seeking detoxifying practice",
    typicalClass: "60-90 minutes in heated room. Bring towel and water. Expect to sweat heavily.",
    searchParam: "Hot Yoga",
  },
  {
    name: "Ashtanga Yoga",
    description: "Traditional, disciplined practice following a set sequence of poses. Physically demanding.",
    difficulty: "Advanced",
    benefits: ["Builds discipline", "Develops strength and flexibility", "Traditional practice", "Mental focus"],
    whoItsFor: "Disciplined students, those wanting traditional practice, experienced practitioners",
    typicalClass: "90 minutes following set sequence (Primary Series, etc.). Same sequence every class.",
    searchParam: "Ashtanga",
  },
  {
    name: "Kundalini Yoga",
    description: "Spiritual practice combining breath, movement, meditation, and chanting to awaken energy.",
    difficulty: "All Levels",
    benefits: ["Spiritual awakening", "Energy balancing", "Emotional release", "Enhanced intuition"],
    whoItsFor: "Those seeking spiritual practice, students interested in breathwork and meditation, open-minded practitioners",
    typicalClass: "Dynamic breathwork (pranayama), repetitive movements (kriyas), meditation, and chanting.",
    searchParam: "Kundalini",
  },
  {
    name: "Baptiste Yoga",
    description: "Powerful, transformational practice combining heat, vinyasa flow, and personal empowerment.",
    difficulty: "Intermediate to Advanced",
    benefits: ["Physical transformation", "Mental empowerment", "Community building", "Personal growth"],
    whoItsFor: "Those seeking transformation, students wanting supportive community, anyone ready for challenge",
    typicalClass: "90 minutes in heated room. Strong vinyasa flow with emphasis on personal breakthroughs.",
    searchParam: "Baptiste",
  },
  {
    name: "Jivamukti Yoga",
    description: "Vigorous vinyasa combined with philosophy, chanting, music, and ethical living.",
    difficulty: "Intermediate",
    benefits: ["Physical fitness", "Spiritual development", "Community connection", "Ethical living"],
    whoItsFor: "Those wanting holistic practice, students interested in yoga philosophy, spiritual seekers",
    typicalClass: "90 minutes including chanting, reading, asana practice, and meditation. Often themed.",
    searchParam: "Jivamukti",
  },
  {
    name: "Pranayama & Breathwork",
    description: "Focused breathing practices for energy, healing, and stress management.",
    difficulty: "All Levels",
    benefits: ["Stress reduction", "Energy regulation", "Improved lung capacity", "Mental clarity"],
    whoItsFor: "Everyone! Especially those with stress, anxiety, or respiratory interests",
    typicalClass: "30-60 minutes of various breathing techniques, often combined with light movement or meditation.",
    searchParam: "Pranayama",
  },
  {
    name: "Therapeutic Yoga",
    description: "Gentle, individualized practice for injury recovery and pain management.",
    difficulty: "Beginner",
    benefits: ["Injury recovery", "Pain management", "Improved mobility", "Personalized attention"],
    whoItsFor: "Those recovering from injury, people with chronic pain, students needing modifications",
    typicalClass: "Small groups or private sessions with individualized modifications and therapeutic focus.",
    searchParam: "Therapeutic",
  },
];

export default function YogaStylesPage() {
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
            Complete Guide to Yoga Styles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different types of yoga to find the perfect practice for your goals, fitness level, and preferences. From gentle Hatha to intense Power Yoga, there's a style for everyone.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 pb-20 max-w-7xl mx-auto">
        {/* Intro Section */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Finding Your Perfect Yoga Style</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yoga is not one-size-fits-all. With dozens of different styles, each offering unique benefits and approaches, finding the right practice can transform your wellness journey. Whether you're seeking physical fitness, stress relief, spiritual growth, or all of the above, there's a yoga style perfectly suited to your needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Below, we've outlined the most popular yoga styles offered in the Cayman Islands, including what to expect, who they're best for, and the benefits of each practice.
          </p>
        </div>

        {/* Yoga Styles Grid */}
        <div className="space-y-8">
          {yogaStyles.map((style) => (
            <div key={style.name} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{style.name}</h2>
                    <p className="text-lg text-gray-600">{style.description}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                    style.difficulty === "Beginner" ? "bg-green-100 text-green-700" :
                    style.difficulty === "Intermediate" ? "bg-blue-100 text-blue-700" :
                    style.difficulty === "Advanced" ? "bg-purple-100 text-purple-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {style.difficulty}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Benefits */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {style.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-gray-600">
                          <span className="text-teal-600 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who It's For */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Who It's For</h3>
                    <p className="text-gray-600">{style.whoItsFor}</p>
                  </div>
                </div>

                {/* Typical Class */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <p className="text-gray-600">{style.typicalClass}</p>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href={`/teachers?style=${encodeURIComponent(style.searchParam)}`}
                    className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Find {style.name} Teachers
                  </Link>
                  <Link
                    href={`/schedule?style=${encodeURIComponent(style.searchParam)}`}
                    className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors"
                  >
                    View {style.name} Classes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Try a New Style?</h2>
          <p className="text-xl mb-6 text-teal-50">
            Browse our complete class schedule and find your perfect practice today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Full Schedule
            </Link>
            <Link
              href="/teachers"
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Meet Our Teachers
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
                <li><Link href="/yoga-styles" className="text-teal-600 font-medium">Yoga Styles Guide</Link></li>
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
  );
}
