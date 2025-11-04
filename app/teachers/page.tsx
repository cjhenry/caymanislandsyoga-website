import Link from "next/link";
import { MapPin, Star, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Yoga Teachers Directory",
  description: "Browse certified yoga instructors across the Cayman Islands. Find experienced teachers specializing in Hatha, Vinyasa, Yin, Ashtanga, Hot Yoga, and more. Read reviews and visit teacher websites.",
};

// Sample teacher data - in production this would come from a database
const teachers = [
  {
    id: 1,
    name: "Sarah Martinez",
    specialty: "Vinyasa Flow & Hot Yoga",
    location: "Seven Mile Beach",
    experience: "15 years",
    rating: 4.9,
    reviews: 127,
    image: "🧘‍♀️",
    website: "https://example.com/sarah",
    description: "Certified 500-hour RYT specializing in dynamic flow sequences and hot yoga. Offering private sessions and group classes with a focus on breath-work and mindfulness.",
    styles: ["Vinyasa", "Hot Yoga", "Power Yoga"]
  },
  {
    id: 2,
    name: "Michael Chen",
    specialty: "Hatha & Meditation",
    location: "George Town",
    experience: "12 years",
    rating: 4.8,
    reviews: 94,
    image: "🧘",
    website: "https://example.com/michael",
    description: "Traditional Hatha yoga instructor with extensive training in India. Focuses on alignment, meditation, and pranayama techniques for holistic wellness.",
    styles: ["Hatha", "Meditation", "Pranayama"]
  },
  {
    id: 3,
    name: "Lisa Thompson",
    specialty: "Yin Yoga & Restorative",
    location: "Bodden Town",
    experience: "10 years",
    rating: 5.0,
    reviews: 83,
    image: "🧘‍♀️",
    website: "https://example.com/lisa",
    description: "Specialized in gentle, therapeutic yoga practices. Perfect for stress relief, injury recovery, and deep relaxation. Also offers prenatal yoga classes.",
    styles: ["Yin Yoga", "Restorative", "Prenatal"]
  },
  {
    id: 4,
    name: "David Kumar",
    specialty: "Ashtanga & Advanced Practice",
    location: "East End",
    experience: "18 years",
    rating: 4.9,
    reviews: 156,
    image: "🧘",
    website: "https://example.com/david",
    description: "Ashtanga authorized teacher trained in Mysore, India. Leads traditional Mysore-style classes and workshops for intermediate to advanced practitioners.",
    styles: ["Ashtanga", "Mysore", "Advanced"]
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    specialty: "Beach Yoga & Wellness",
    location: "West Bay",
    experience: "8 years",
    rating: 4.8,
    reviews: 72,
    image: "🧘‍♀️",
    website: "https://example.com/emma",
    description: "Outdoor yoga specialist offering sunrise and sunset beach sessions. Combines yoga with meditation and wellness coaching for holistic health.",
    styles: ["Beach Yoga", "Vinyasa", "Wellness Coaching"]
  },
  {
    id: 6,
    name: "James Wilson",
    specialty: "Corporate & Private Sessions",
    location: "Cayman Brac",
    experience: "11 years",
    rating: 4.7,
    reviews: 58,
    image: "🧘",
    website: "https://example.com/james",
    description: "Brings yoga to your workplace or home. Specializes in stress management, flexibility training, and customized programs for busy professionals.",
    styles: ["Hatha", "Corporate Yoga", "Private Sessions"]
  }
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <Link href="/" className="text-2xl font-bold text-teal-900 hover:text-teal-700 transition-colors">
          Cayman Yoga
        </Link>
        <Link
          href="/"
          className="text-teal-700 hover:text-teal-900 font-medium"
        >
          Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="px-6 py-16 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Certified Yoga Teachers
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our curated directory of experienced yoga instructors across the Cayman Islands
        </p>
      </header>

      {/* Teachers Grid */}
      <main className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-6 text-center">
                <div className="text-6xl mb-3">{teacher.image}</div>
                <h2 className="text-2xl font-bold text-white">{teacher.name}</h2>
                <p className="text-teal-50 text-sm">{teacher.specialty}</p>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                {/* Location & Experience */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    <span>{teacher.location}</span>
                  </div>
                  <span className="text-gray-500">{teacher.experience} exp</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="currentColor" />
                    <span className="font-semibold text-gray-900">{teacher.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({teacher.reviews} reviews)</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {teacher.description}
                </p>

                {/* Styles */}
                <div className="flex flex-wrap gap-2">
                  {teacher.styles.map((style) => (
                    <span
                      key={style}
                      className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
                    >
                      {style}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={teacher.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Are You a Yoga Teacher?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our directory and connect with students across the Cayman Islands.
            List your classes and grow your yoga business today.
          </p>
          <button className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg">
            List Your Classes
          </button>
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
                <li><Link href="/teachers" className="text-teal-600 font-medium">Teachers</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Yoga Styles Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Finding a Teacher</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Wellness Tips</a></li>
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
