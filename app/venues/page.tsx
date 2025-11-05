import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Building2, Waves, Hotel, Heart, Dumbbell, Users, Coffee } from "lucide-react";
import VenueCard from "@/components/VenueCard";
import { venues, getVenuesByCategory, type VenueCategory } from "@/data/venues";

export const metadata: Metadata = {
  title: "Yoga Studios & Venues in Cayman Islands | Complete Guide",
  description: "Discover the best yoga studios, wellness centers, beach locations, hotels, and yoga-friendly spaces across the Cayman Islands. Find your perfect place to practice.",
};

const categoryInfo: Record<VenueCategory, { icon: any; description: string; color: string }> = {
  "Yoga Studio": {
    icon: Building2,
    description: "Dedicated yoga studios offering regular classes and workshops",
    color: "teal",
  },
  "Beach Location": {
    icon: Waves,
    description: "Beautiful beaches perfect for outdoor yoga and meditation",
    color: "blue",
  },
  "Hotel & Resort": {
    icon: Hotel,
    description: "Luxury resorts with wellness programs and yoga facilities",
    color: "purple",
  },
  "Wellness Center": {
    icon: Heart,
    description: "Holistic wellness centers offering yoga and complementary practices",
    color: "pink",
  },
  "Fitness Club": {
    icon: Dumbbell,
    description: "Gyms and fitness centers with yoga class offerings",
    color: "orange",
  },
  "Community Space": {
    icon: Users,
    description: "Public spaces hosting free and donation-based community yoga",
    color: "green",
  },
  "Restaurant & Cafe": {
    icon: Coffee,
    description: "Wellness-focused eateries popular with the yoga community",
    color: "amber",
  },
};

export default function VenuesPage() {
  const categories = Object.keys(categoryInfo) as VenueCategory[];

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
            Yoga Venues & Studios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best places to practice yoga across the Cayman Islands - from dedicated studios to beachfront locations, luxury resorts to community spaces.
          </p>
        </div>
      </header>

      {/* Stats */}
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">{venues.length}</div>
            <div className="text-gray-600">Total Venues</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              {getVenuesByCategory("Yoga Studio").length}
            </div>
            <div className="text-gray-600">Yoga Studios</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              {getVenuesByCategory("Beach Location").length}
            </div>
            <div className="text-gray-600">Beach Locations</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              {venues.filter(v => v.yogaClasses).length}
            </div>
            <div className="text-gray-600">Offer Classes</div>
          </div>
        </div>
      </div>

      {/* Category Quick Links */}
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const info = categoryInfo[category];
              const Icon = info.icon;
              const count = getVenuesByCategory(category).length;

              return (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-${info.color}-500 hover:bg-${info.color}-50 transition-all group`}
                >
                  <div className={`w-10 h-10 bg-${info.color}-100 rounded-lg flex items-center justify-center group-hover:bg-${info.color}-200 transition-colors`}>
                    <Icon className={`text-${info.color}-600`} size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">{category}</div>
                    <div className="text-xs text-gray-500">{count} venues</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Venues by Category */}
      <main className="px-6 pb-20 max-w-7xl mx-auto space-y-16">
        {categories.map((category) => {
          const categoryVenues = getVenuesByCategory(category);
          if (categoryVenues.length === 0) return null;

          const info = categoryInfo[category];
          const Icon = info.icon;

          return (
            <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-20">
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 bg-${info.color}-100 rounded-xl flex items-center justify-center`}>
                    <Icon className={`text-${info.color}-600`} size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{category}s</h2>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                </div>
              </div>

              {/* Venues Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryVenues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            </div>
          );
        })}
      </main>

      {/* CTA */}
      <div className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Practicing?</h2>
          <p className="text-xl mb-6 text-teal-50">
            Explore our class schedule and find the perfect time and place for your practice
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
              Meet Our Teachers
            </Link>
          </div>
        </div>
      </div>

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
                <li><Link href="/venues" className="text-teal-600 font-medium">Venues</Link></li>
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
  );
}
