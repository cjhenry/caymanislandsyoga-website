import Link from "next/link";
import { Star, TrendingUp, Heart, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Transformation Stories | Danielle Henry - Gentil Core Yoga",
  description: "Real transformation stories from students who trained with Danielle Henry at Gentil Core Yoga in Grand Cayman. See the life-changing results from private and group yoga classes.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      name: "Jennifer Martinez",
      age: 42,
      location: "Seven Mile Beach",
      challenge: "Chronic back pain from desk job",
      duration: "3 months of private sessions",
      results: [
        "Back pain reduced by 90%",
        "Stopped taking daily pain medication",
        "Improved posture and core strength",
        "Now practices yoga 4x per week independently"
      ],
      testimonial: "I tried physical therapy, chiropractors, and massage for two years with minimal relief. Three months of private yoga with Danielle at Gentil Core Yoga changed everything. She designed sequences specifically for my tight hips and weak core. Within six weeks, I noticed real improvement. Now I'm pain-free and addicted to yoga.",
      transformation: "From daily pain medication to pain-free active lifestyle"
    },
    {
      name: "Marcus Thompson",
      age: 35,
      location: "George Town",
      challenge: "Stress and anxiety from high-pressure finance job",
      duration: "6 weeks of beach yoga",
      results: [
        "Better sleep quality - from 4-5 hours to 7-8 hours nightly",
        "Reduced work-related anxiety",
        "Learned breathing techniques for stress management",
        "Lost 12 pounds as bonus benefit"
      ],
      testimonial: "My doctor suggested yoga for stress before considering medication. Danielle's sunrise beach sessions on Seven Mile Beach became my therapy. The combination of her expert instruction, ocean sounds, and breathwork techniques gave me tools to manage stress. I sleep better, feel calmer, and actually enjoy mornings now.",
      transformation: "From chronic stress and poor sleep to calm, rested, and focused"
    },
    {
      name: "Sarah & Michael Rodriguez",
      age: "38 & 40",
      location: "West Bay",
      challenge: "Wanted to reconnect as couple after having twins",
      duration: "8 weeks of couples private sessions",
      results: [
        "Quality time together focused on wellness",
        "Both improved flexibility and strength",
        "Learned partner poses for continued practice",
        "Now do weekly yoga dates at home"
      ],
      testimonial: "Having twins left us exhausted with zero couple time. Danielle's couples yoga sessions gave us an hour each week to reconnect while getting fit. Partner poses built trust and communication. We laugh through the challenges and support each other. It's become our favorite weekly ritual.",
      transformation: "From exhausted, disconnected parents to strong, connected partners"
    },
    {
      name: "Patricia Williams",
      age: 68,
      location: "East End",
      challenge: "Balance issues and fear of falling after minor stroke",
      duration: "4 months of gentle therapeutic yoga",
      results: [
        "Dramatically improved balance and stability",
        "Increased confidence in daily activities",
        "Better range of motion in shoulders and hips",
        "Made new friends in senior yoga group"
      ],
      testimonial: "After my stroke, I was scared to move much. My daughter found Danielle who specializes in therapeutic yoga for seniors. She started me very gently, building confidence with each session. My balance improved so much that my doctor was amazed. I feel independent again and actually look forward to our group classes.",
      transformation: "From fearful and unstable to confident and active at 68"
    },
    {
      name: "David Chen",
      age: 29,
      location: "Seven Mile Beach",
      challenge: "Wanted to improve surfing performance",
      duration: "10 weeks of strength-focused vinyasa",
      results: [
        "Increased core strength and balance",
        "Better breath control while surfing",
        "Improved flexibility for pop-ups",
        "Reduced shoulder and neck tension"
      ],
      testimonial: "I started yoga purely to improve my surfing. Danielle understood exactly what I needed - core strength, balance, and breath control. Her athletic vinyasa classes pushed me hard while teaching proper alignment. My surfing improved dramatically, but I kept coming back because I loved how yoga made me feel overall.",
      transformation: "From casual yogi to dedicated practitioner with improved athletic performance"
    },
    {
      name: "Amanda Foster",
      age: 31,
      location: "George Town",
      challenge: "Prenatal support for first pregnancy",
      duration: "6 months of prenatal yoga",
      results: [
        "Comfortable pregnancy with minimal back pain",
        "Learned breathing for labor",
        "Quick recovery after delivery",
        "Continued with postnatal classes"
      ],
      testimonial: "Pregnancy terrified me, especially the physical changes. Danielle's prenatal yoga classes made everything better. She modified poses as my belly grew and taught breathing techniques I used during labor. My delivery went smoothly, and I recovered fast. She's now teaching me postnatal yoga with my baby daughter joining us!",
      transformation: "From anxious first-time mom to confident, strong mother"
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
          Real Transformation Stories
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          See how Danielle Henry's yoga instruction at Gentil Core Yoga changed these students' lives
        </p>
        <div className="flex items-center justify-center gap-2 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" size={24} />
          ))}
          <span className="text-gray-700 ml-2 font-semibold">5.0 Average Rating from 150+ Students</span>
        </div>
      </header>

      {/* Case Studies */}
      <main className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <article key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{study.name}, {study.age}</h2>
                    <p className="text-teal-100">{study.location} • {study.duration}</p>
                  </div>
                  <Award className="flex-shrink-0" size={40} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Challenge */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Heart className="text-red-500" size={20} />
                    The Challenge
                  </h3>
                  <p className="text-gray-700 pl-7">{study.challenge}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="text-green-500" size={20} />
                    Results Achieved
                  </h3>
                  <ul className="space-y-2 pl-7">
                    {study.results.map((result, rIdx) => (
                      <li key={rIdx} className="text-gray-700 flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-6">
                  <p className="text-gray-800 italic leading-relaxed">
                    "{study.testimonial}"
                  </p>
                  <p className="text-gray-700 font-semibold mt-4">— {study.name}</p>
                </div>

                {/* Transformation */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                  <p className="text-sm font-semibold text-amber-800 mb-1">TRANSFORMATION</p>
                  <p className="text-lg font-bold text-gray-900">{study.transformation}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
            <div className="text-gray-600">Students Transformed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
            <div className="text-gray-600">Report Less Pain</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">8+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
            Work with Danielle Henry, Grand Cayman's top-rated yoga instructor at Gentil Core Yoga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teachers"
              className="inline-block px-8 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors"
            >
              Book Your First Session
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
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link></li>
                <li><Link href="/case-studies" className="text-teal-600 font-medium">Case Studies</Link></li>
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
