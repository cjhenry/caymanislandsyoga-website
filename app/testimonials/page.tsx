import Link from "next/link";
import { Star, Quote, MapPin, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews | Danielle Henry - Gentil Core Yoga",
  description: "Read 5-star reviews from students who train with Danielle Henry at Gentil Core Yoga in Grand Cayman. Real feedback from private classes, beach yoga, and online sessions.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "Seven Mile Beach, Grand Cayman",
      rating: 5,
      service: "Private Yoga Sessions",
      date: "January 2025",
      review: "Danielle at Gentil Core Yoga is hands-down the best yoga instructor I've ever worked with. I came to her with chronic back pain from years at a desk job. She designed a custom program targeting my specific problem areas - tight hips and weak core. Within three months, my pain went from constant to almost gone. Her knowledge of anatomy and ability to explain WHY each pose helps is incredible. I've tried many teachers, but Danielle's expertise and caring approach set her apart.",
      highlight: "Back pain reduced by 90% in 3 months"
    },
    {
      name: "Sarah Thompson",
      location: "West Bay, Grand Cayman",
      rating: 5,
      service: "Beach Yoga Classes",
      date: "December 2024",
      review: "The sunrise beach yoga sessions on Seven Mile Beach with Danielle are pure magic. I'm not naturally a morning person, but these classes changed that. Danielle's instruction is clear and encouraging - perfect for my intermediate level. She corrects form gently and offers modifications. The combination of ocean sounds, sunrise views, and Danielle's calming voice creates the perfect start to my day. I've been going 3x weekly for 6 months and never miss a session.",
      highlight: "Practicing 3x weekly for 6 months - never miss a class!"
    },
    {
      name: "Marcus Chen",
      location: "George Town, Grand Cayman",
      rating: 5,
      service: "Online Yoga Classes",
      date: "November 2024",
      review: "My job requires frequent travel, so in-person classes never worked. Danielle's online yoga program is brilliant. She watches my form through the camera and gives real-time corrections just like in-person sessions. The flexibility to practice from hotel rooms worldwide keeps me consistent. What impressed me most is how she remembers my specific issues (tight shoulders from desk work) and incorporates solutions into every session. Worth every penny.",
      highlight: "Maintains practice despite constant travel"
    },
    {
      name: "Patricia Williams",
      location: "East End, Grand Cayman",
      rating: 5,
      service: "Senior Therapeutic Yoga",
      date: "October 2024",
      review: "At 68 and post-stroke, I was nervous about yoga. Danielle's gentle approach built my confidence week by week. She understands seniors' needs and never pushes too hard. My balance has improved so much that my doctor noticed! But beyond the physical benefits, Danielle creates such a warm, judgment-free environment. The other seniors in our group have become dear friends. This is the highlight of my week.",
      highlight: "Doctor amazed at balance improvement after stroke"
    },
    {
      name: "David Rodriguez",
      location: "Seven Mile Beach, Grand Cayman",
      rating: 5,
      service: "Athletic Performance Yoga",
      date: "September 2024",
      review: "I started yoga purely to improve my surfing. Danielle understood immediately what I needed - core strength, balance, and breath control. Her vinyasa classes are legitimately challenging, not the 'easy stretching' I feared yoga might be. My surfing improved noticeably within 6 weeks. But honestly, I kept coming back because yoga itself became addictive. Danielle pushes you hard while keeping perfect form the priority. Best cross-training I've found.",
      highlight: "Surfing performance improved in 6 weeks"
    },
    {
      name: "Amanda Foster",
      location: "George Town, Grand Cayman",
      rating: 5,
      service: "Prenatal Yoga",
      date: "August 2024",
      review: "Pregnancy terrified me, but Danielle's prenatal yoga classes made everything better. She has specialized certification and really knows how to work with pregnant bodies. Modified poses perfectly as my belly grew, taught breathing techniques I actually used during labor, and created such a supportive environment with other moms-to-be. My delivery went smoothly, recovery was quick, and I truly believe Danielle's classes made the difference. Now doing postnatal classes with my daughter!",
      highlight: "Smooth delivery & quick recovery - continuing with baby"
    },
    {
      name: "Rachel Kim",
      location: "West Bay, Grand Cayman",
      rating: 5,
      service: "Couples Yoga",
      date: "July 2024",
      review: "My husband and I needed quality time together after having twins. Danielle's couples yoga sessions became our weekly date. Partner poses are challenging and fun - we laugh through the struggles and support each other. Danielle creates a relaxed, playful atmosphere while still teaching proper technique. Six months in, we're both stronger, more flexible, and honestly more connected as a couple. Best investment in our relationship.",
      highlight: "Strengthened relationship while getting fit together"
    },
    {
      name: "Tom Henderson",
      location: "East End, Grand Cayman",
      rating: 5,
      service: "Stress Management Yoga",
      date: "June 2024",
      review: "My doctor suggested yoga before prescribing anxiety medication. Danielle's approach to stress-relief yoga is perfect - combining gentle movement with breathwork and meditation. She taught me breathing techniques I can use anywhere when stress hits. Within a month, I was sleeping better (from 4-5 hours to 7-8 hours nightly). Three months in, my stress levels are manageable without medication. Danielle didn't just teach poses - she gave me life tools.",
      highlight: "Sleep improved from 4-5 hours to 7-8 hours nightly"
    },
    {
      name: "Lisa Morgan",
      location: "Seven Mile Beach, Grand Cayman",
      rating: 5,
      service: "Vinyasa Flow Classes",
      date: "May 2024",
      review: "I've practiced yoga for 10 years with many teachers. Danielle ranks among the absolute best. Her vinyasa sequences are creative and challenging without being intimidating. She balances pushing students to improve with ensuring safety and proper form. Her cuing is clear, her adjustments are helpful, and she remembers everyone's names and specific goals. The quality of instruction at Gentil Core Yoga matches studios I attended in NYC and LA, but with the bonus of Grand Cayman's beautiful setting.",
      highlight: "Matches quality of top NYC & LA studios"
    },
    {
      name: "Kevin Patterson",
      location: "George Town, Grand Cayman",
      rating: 5,
      service: "Beginner Yoga Program",
      date: "April 2024",
      review: "As a total beginner, I felt intimidated starting yoga at 45. Danielle made it completely comfortable. She explained everything clearly, never using confusing Sanskrit terms without translation. Started me with basics and progressed gradually. Never felt rushed or judged. Her patience with beginners is remarkable. Four months later, I can do poses I never imagined possible. Flexibility and strength gains are obvious, but the mental clarity and stress reduction surprised me most.",
      highlight: "From intimidated beginner to confident practitioner in 4 months"
    },
    {
      name: "Michelle Adams",
      location: "West Bay, Grand Cayman",
      rating: 5,
      service: "Yin Yoga & Meditation",
      date: "March 2024",
      review: "After years of high-intensity workouts, my body needed something different. Danielle's yin yoga classes provide the perfect balance - deep stretching with meditation focus. She creates such a peaceful environment. Her knowledge of anatomy explains exactly which tissues each pose targets. The meditative aspect helps my overactive mind finally quiet down. This is the recovery work my body desperately needed. I pair it with my other workouts perfectly now.",
      highlight: "Perfect recovery for high-intensity training"
    },
    {
      name: "Robert Lee",
      location: "East End, Grand Cayman",
      rating: 5,
      service: "Private Sessions for Injury Recovery",
      date: "February 2024",
      review: "Tore my ACL skiing and needed rehabilitation support. My physical therapist recommended yoga with someone knowledgeable. Danielle worked closely with my PT, designing sequences that supported my recovery protocol. Her understanding of knee mechanics and cautious progression prevented re-injury while rebuilding strength. Insurance didn't cover it, but the investment was worth it. Recovered faster than expected and now stronger than before the injury.",
      highlight: "Recovered from ACL tear faster than expected"
    }
  ];

  const stats = [
    { number: "150+", label: "Happy Students" },
    { number: "5.0", label: "Average Rating" },
    { number: "98%", label: "Recommend to Friends" },
    { number: "8+", label: "Years Experience" }
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
          Student Testimonials & Reviews
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          See why Danielle Henry at Gentil Core Yoga is Grand Cayman's top-rated yoga instructor
        </p>
        <div className="flex items-center justify-center gap-2 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" size={28} />
          ))}
          <span className="text-gray-700 ml-3 font-bold text-xl">5.0 out of 5.0</span>
        </div>
      </header>

      {/* Stats */}
      <div className="px-6 max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <main className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <article key={idx} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <Quote className="text-teal-200" size={32} />
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {testimonial.review}
              </p>

              {/* Highlight */}
              {testimonial.highlight && (
                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-6">
                  <p className="text-teal-900 font-semibold text-sm">
                    ✨ {testimonial.highlight}
                  </p>
                </div>
              )}

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900 mb-2">{testimonial.name}</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{testimonial.date}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Video Testimonials Coming Soon
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Watch students share their transformation stories in their own words
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join 150+ Happy Students
          </h2>
          <p className="text-xl mb-8 text-teal-50 max-w-2xl mx-auto">
            Experience why Danielle Henry at Gentil Core Yoga has 5-star reviews across all services
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

        {/* Review Platforms */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Find Us On Review Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Google Reviews</h3>
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="text-gray-600">5.0 out of 5.0</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Yelp</h3>
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="text-gray-600">5.0 out of 5.0</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Facebook</h3>
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="text-gray-600">5.0 out of 5.0</p>
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
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link></li>
                <li><Link href="/testimonials" className="text-teal-600 font-medium">Testimonials</Link></li>
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
