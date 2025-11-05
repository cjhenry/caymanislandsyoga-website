import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Yoga Teachers Directory",
  description: "Browse certified yoga instructors across the Cayman Islands. Find experienced teachers specializing in Hatha, Vinyasa, Yin, Ashtanga, Hot Yoga, and more. Read reviews and visit teacher websites.",
};

// Real teacher data from Cayman Islands yoga community
const teachers = [
  {
    id: 1,
    name: "Danielle Henry",
    specialty: "Vinyasa & Restorative Yoga",
    location: "Grand Cayman - Seven Mile Beach",
    experience: "13+ years",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    website: "https://www.gentilcoreyoga.com",
    description: "⭐ TOP RATED INSTRUCTOR ⭐ E-RYT 200 with 5000+ teaching hours. Born in New Jersey, elite gymnast turned yogi. Discovered yoga gazing at Caribbean horizons. Offers power vinyasa, beginner, restorative, private & group classes. Heart-centered teaching emphasizing breath, alignment & introspective journey. Red Cross certified Water Safety & CPR instructor. 5.0 rating from 150+ students. Philosophy: 'Breath, Live, Discover.'",
    styles: ["Power Vinyasa", "Restorative", "Hatha", "Private Sessions", "Beach Yoga", "Online Classes"],
    featured: true,
    rating: 5.0,
    reviewCount: 150
  },
  {
    id: 2,
    name: "Janelle",
    specialty: "Baptiste Power Vinyasa",
    location: "Seven Mile Beach",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "E-RYT 200, Baptiste Certified. Director of Bliss Yoga with 10+ years teaching experience. Trained in Baptiste, Anusara, Hatha & Ashtanga systems. Specializes in dynamic, uplifting Baptiste Style Vinyasa. Active community volunteer supporting marathons, cancer foundations & local charities.",
    styles: ["Baptiste Vinyasa", "Hot Yoga", "Power Yoga"]
  },
  {
    id: 3,
    name: "Mirabelle D'Cunha",
    specialty: "Pranayama & Bhakti Yoga",
    location: "Grand Cayman",
    experience: "19 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    website: "https://www.nationalgallery.org.ky/wellness/instructors/",
    description: "Yoga Alliance panelist & teacher with 19 years practice. Studied with gurus in the Himalayas & Mumbai University. Taught at ashrams & studios across India, USA, Canada, Bahamas, Bermuda & Cayman Islands. Specializes in pranayama, bhakti yoga, corporate breathwork & peak performance. Focuses on 'inner experience' helping clients find purpose & joy.",
    styles: ["Pranayama", "Bhakti Yoga", "Corporate Yoga", "Peak Performance"]
  },
  {
    id: 4,
    name: "Chantelle",
    specialty: "Kripalu Vinyasa",
    location: "Grand Cayman",
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "E-RYT 200, 500-hour Professional Level certified from Kripalu Center for Yoga & Health (Massachusetts). Creates vinyasa flows linking breath with movement. Focuses on energy systems (prana) & healing. Known for creative sequencing that honors body's wisdom.",
    styles: ["Kripalu", "Vinyasa Flow", "Energy Work"]
  },
  {
    id: 5,
    name: "Rachel Whitfield",
    specialty: "Power Vinyasa",
    location: "Grand Cayman",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "200-hour Hatha trained plus two 100-hour Power Vinyasa certifications. Moved to Grand Cayman in 2010 to teach yoga after discovering practice in NYC. Emphasizes strength & structure in dynamic Power Vinyasa style. Trained with master teachers in multiple workshops.",
    styles: ["Power Vinyasa", "Hatha", "Strength-Based"]
  },
  {
    id: 6,
    name: "Janine Martins",
    specialty: "Multi-Style Yoga & Reiki",
    location: "Grand Cayman",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    website: "https://www.nationalgallery.org.ky/wellness/instructors/",
    description: "Cayman-born instructor with formal yoga & reiki training from Tirisula Yoga (Singapore & Bali). Discovered yoga's transformative effects during university. Teaches Hatha, Vinyasa, Kundalini, Yin & Restorative. Specializes in customized sessions helping clients 'slow down & breathe.'",
    styles: ["Hatha", "Vinyasa", "Kundalini", "Yin", "Restorative"]
  },
  {
    id: 7,
    name: "Jeri Bovell",
    specialty: "Holistic Wellness & Asana",
    location: "Grand Cayman",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    website: "https://www.nationalgallery.org.ky/wellness/instructors/",
    description: "Trained at White Lotus Foundation (San Diego) & Bliss Living Yoga (2013). Studies herbal medicine at master's level. Combines yoga practice with holistic wellness approach integrating asana practice with herbal wisdom.",
    styles: ["Hatha", "Holistic Wellness", "Herbal Medicine"]
  },
  {
    id: 8,
    name: "Nicki",
    specialty: "Jivamukti Yoga",
    location: "Grand Cayman",
    experience: "25+ years",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "Yoga Alliance 200-hour & 300-hour Jivamukti Yoga certified. Practicing since 1999. Trained with Sharon Gannon & David Life (workshops in Hong Kong). Emphasizes 'love, truth & compassion for all beings.' Advocates compassion as key to peaceful existence.",
    styles: ["Jivamukti", "Vinyasa", "Philosophy-Based"]
  },
  {
    id: 9,
    name: "Lindsay",
    specialty: "Baptiste Power Yoga",
    location: "Grand Cayman",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "Baptiste Trained (200 hours), Baron Baptiste Level 1 (2006). Discovered yoga through surfing injury 7+ years ago. Mentored by Janelle. Specializes in Baptiste Power Yoga with focus on transformation & empowerment.",
    styles: ["Baptiste Power Yoga", "Athletic Yoga"]
  },
  {
    id: 10,
    name: "Mark",
    specialty: "Baptiste Yoga",
    location: "Grand Cayman",
    experience: "28+ years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "Baptiste Trained (200 hours). Began yoga in 1996 for injury recovery from triathlons. Studied under Marni Task, Baron Baptiste, Manju Jois, David Belz & others. Values community connection & transformational power of practice.",
    styles: ["Baptiste", "Therapeutic Yoga", "Community-Focused"]
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
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col ${
                teacher.featured
                  ? 'border-4 border-amber-400 ring-4 ring-amber-200 relative'
                  : 'border border-gray-100'
              }`}
            >
              {teacher.featured && (
                <div className="absolute top-4 right-4 z-10 bg-amber-400 text-amber-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                  <span>⭐</span>
                  <span>TOP RATED</span>
                </div>
              )}
              {/* Card Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-center">
                  <h2 className="text-2xl font-bold text-white">{teacher.name}</h2>
                  <p className="text-teal-50 text-sm">{teacher.specialty}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                {/* Location & Experience */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    <span>{teacher.location}</span>
                  </div>
                  <span className="text-gray-500">{teacher.experience} exp</span>
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
                  className="flex items-center justify-center gap-2 w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors mt-auto"
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
