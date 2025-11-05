import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, Users, Award, MapPin, Heart, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Find the Right Yoga Teacher | Complete Guide",
  description: "Learn how to choose the perfect yoga teacher for your needs. Expert tips on evaluating credentials, teaching styles, and finding your ideal instructor in Cayman Islands.",
};

export default function FindingTeacherGuidePage() {
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
      <header className="px-6 py-16 max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            How to Find the Right Yoga Teacher
          </h1>
          <p className="text-xl text-gray-600">
            Your complete guide to choosing a yoga instructor who matches your goals, personality, and practice level
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 pb-20 max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Finding the right yoga teacher can make all the difference in your practice. A great teacher not only guides you through poses safely but also inspires, challenges, and supports your personal growth. Whether you're a complete beginner or an experienced practitioner, choosing the right instructor is key to a fulfilling yoga journey.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            In the Cayman Islands, we're fortunate to have a diverse community of highly qualified yoga teachers. Here's how to find your perfect match.
          </p>
        </div>

        {/* Key Factors */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">What to Look For in a Yoga Teacher</h2>

          {/* Certifications */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Certifications & Training</h3>
                <p className="text-gray-600 mb-4">
                  Look for teachers with recognized yoga certifications. The most common are:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>RYT-200:</strong> Completed 200-hour teacher training (entry-level certification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>RYT-500:</strong> Completed advanced 500-hour training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>E-RYT:</strong> Experienced Registered Yoga Teacher (extensive teaching hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>Specialized certifications:</strong> Prenatal, therapeutic, kids yoga, etc.</span>
                  </li>
                </ul>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Good to know:</strong> While certifications are important, teaching experience and personal practice are equally valuable. Many excellent teachers have 10+ years of experience and continuous training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Style */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Teaching Style & Approach</h3>
                <p className="text-gray-600 mb-4">
                  Every teacher has a unique style. Consider what resonates with you:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Alignment-Focused</h4>
                    <p className="text-sm text-gray-600">Detailed instructions on proper form and anatomy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Flow-Oriented</h4>
                    <p className="text-sm text-gray-600">Emphasis on smooth movement and rhythm</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Spiritual/Philosophical</h4>
                    <p className="text-sm text-gray-600">Incorporates yoga philosophy, meditation, chanting</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fitness-Focused</h4>
                    <p className="text-sm text-gray-600">Athletic approach emphasizing strength and cardio</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  <strong>Tip:</strong> Try a few different teachers to discover which approach motivates and inspires you most.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Level */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Match Your Experience Level</h3>
                <p className="text-gray-600 mb-4">
                  Choose classes and teachers appropriate for your current level:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Complete Beginners</h4>
                    <p className="text-sm text-gray-600">Look for: "Beginner," "Fundamentals," "Gentle," or "Hatha" classes. Teachers who provide modifications and detailed explanations.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Intermediate Students</h4>
                    <p className="text-sm text-gray-600">Look for: "Vinyasa Flow," "Power Yoga," or "All Levels" classes. Teachers who offer challenges while maintaining safety.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Advanced Practitioners</h4>
                    <p className="text-sm text-gray-600">Look for: "Advanced," "Power," "Ashtanga," or specialized workshops. Teachers who inspire growth and refinement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personality & Connection */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Personality & Connection</h3>
                <p className="text-gray-600 mb-4">
                  Beyond credentials, the right teacher should:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Create a safe, welcoming environment where you feel comfortable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Communicate clearly and offer hands-on adjustments (with permission)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Respect your limitations and encourage growth at your pace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Inspire and motivate you to show up consistently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Demonstrate genuine passion for yoga and teaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location & Schedule */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-teal-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Practical Considerations</h3>
                <p className="text-gray-600 mb-4">
                  Consistency is key to progress. Consider:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>Location:</strong> Choose a teacher near your home or work for easy access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>Schedule:</strong> Find class times that fit your routine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>Class Size:</strong> Smaller classes mean more individual attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>Pricing:</strong> Consider your budget and look for package deals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600"><strong>Setting:</strong> Studio, beach, private - choose what suits you</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Questions to Ask */}
        <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Questions to Ask a Potential Teacher</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-medium">What are your certifications and how long have you been teaching?</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-medium">What styles of yoga do you specialize in?</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-medium">How do you approach teaching beginners vs. advanced students?</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-medium">What can I expect in a typical class with you?</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-medium">Do you offer modifications for injuries or limitations?</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-medium">What is your teaching philosophy?</p>
            </div>
          </div>
        </div>

        {/* Tips for First Class */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Your First Class</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-teal-600">1</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Arrive Early</h4>
                <p className="text-gray-600">Get there 10-15 minutes early to introduce yourself, fill out forms, and get settled.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-teal-600">2</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Communicate</h4>
                <p className="text-gray-600">Let the teacher know about any injuries, limitations, or concerns before class starts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-teal-600">3</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Listen to Your Body</h4>
                <p className="text-gray-600">It's okay to rest, modify, or skip poses. Good teachers encourage this!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-teal-600">4</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Ask Questions</h4>
                <p className="text-gray-600">Stay after class if you have questions about poses or the practice.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-teal-600">5</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Give It Time</h4>
                <p className="text-gray-600">Try 3-4 classes before deciding if a teacher is right for you.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Red Flags */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ Red Flags to Watch For</h2>
          <ul className="space-y-2">
            <li className="text-red-800">• Teacher pushes you into poses that cause pain</li>
            <li className="text-red-800">• No attention to safety or proper alignment</li>
            <li className="text-red-800">• Makes you feel uncomfortable with adjustments</li>
            <li className="text-red-800">• Dismisses your concerns or limitations</li>
            <li className="text-red-800">• Claims yoga can "cure" medical conditions</li>
            <li className="text-red-800">• Creates competitive or judgmental atmosphere</li>
          </ul>
          <p className="text-red-800 mt-4 font-medium">
            Trust your instincts. If something doesn't feel right, find a different teacher.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Teacher?</h2>
          <p className="text-xl mb-6 text-teal-50">
            Browse our directory of certified yoga instructors in the Cayman Islands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teachers"
              className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Browse All Teachers
            </Link>
            <Link
              href="/yoga-styles"
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Yoga Styles
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
                <li><Link href="/guide/finding-teacher" className="text-teal-600 font-medium">Finding a Teacher</Link></li>
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
