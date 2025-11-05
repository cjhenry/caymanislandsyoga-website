import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Instagram,
  Facebook,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { getVenueBySlug, getAllVenueSlugs, venues, type Venue } from "@/data/venues";
import VenueCard from "@/components/VenueCard";

interface VenueDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllVenueSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: VenueDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    return {
      title: "Venue Not Found",
    };
  }

  return {
    title: `${venue.name} - ${venue.category} | Cayman Yoga`,
    description: venue.description,
    openGraph: {
      title: `${venue.name} - ${venue.tagline}`,
      description: venue.description,
      images: [venue.image],
    },
  };
}

export default async function VenueDetail({ params }: VenueDetailProps) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    notFound();
  }

  // Find related venues (same category or location)
  const relatedVenues = venues
    .filter((v) => {
      if (v.id === venue.id) return false;
      return v.category === venue.category || v.location === venue.location;
    })
    .slice(0, 3);

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": venue.category === "Restaurant & Cafe" ? "Restaurant" : venue.category === "Hotel & Resort" ? "Hotel" : "LocalBusiness",
    "name": venue.name,
    "description": venue.description,
    "image": venue.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": venue.address,
      "addressLocality": venue.location,
      "addressRegion": "Cayman Islands"
    },
    ...(venue.phone && { "telephone": venue.phone }),
    ...(venue.website && { "url": venue.website }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <Link href="/" className="text-2xl font-bold text-teal-900 hover:text-teal-700 transition-colors">
            Cayman Yoga
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/venues" className="text-teal-700 hover:text-teal-900 font-medium">
              All Venues
            </Link>
            <Link href="/schedule" className="text-teal-700 hover:text-teal-900 font-medium">
              Schedule
            </Link>
          </div>
        </nav>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <Link
            href="/venues"
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium"
          >
            <ArrowLeft size={20} />
            Back to All Venues
          </Link>
        </div>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                {venue.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{venue.name}</h1>
              <p className="text-xl text-teal-100">{venue.tagline}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {venue.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{venue.description}</p>
              </div>

              {/* Yoga Classes Info */}
              {venue.yogaClasses && venue.yogaStyles && (
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Yoga Classes Offered</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venue.yogaStyles.map((style) => (
                      <span
                        key={style}
                        className="px-4 py-2 bg-teal-50 text-teal-700 font-medium rounded-full"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                  {venue.instructors && venue.instructors.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Instructors at This Venue</h3>
                      <div className="flex flex-wrap gap-2">
                        {venue.instructors.map((instructor) => (
                          <span
                            key={instructor}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {instructor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes This Place Special</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {venue.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Features</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {venue.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                      <span className="text-gray-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact & Info */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Information</h3>

                {/* Location */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-gray-900">{venue.location}</div>
                      <div className="text-sm text-gray-600">{venue.address}</div>
                    </div>
                  </div>

                  {/* Hours */}
                  {venue.hours && (
                    <div className="flex items-start gap-3">
                      <Clock className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-gray-900">Hours</div>
                        <div className="text-sm text-gray-600">{venue.hours}</div>
                      </div>
                    </div>
                  )}

                  {/* Phone */}
                  {venue.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <a
                          href={`tel:${venue.phone}`}
                          className="text-sm text-teal-600 hover:text-teal-700"
                        >
                          {venue.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  {venue.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <a
                          href={`mailto:${venue.email}`}
                          className="text-sm text-teal-600 hover:text-teal-700"
                        >
                          {venue.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Pricing */}
                  {venue.pricing && (
                    <div className="border-t pt-4">
                      <div className="flex items-start gap-3 mb-3">
                        <DollarSign className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                        <div className="font-medium text-gray-900">Pricing</div>
                      </div>
                      <div className="space-y-2 text-sm">
                        {venue.pricing.dropIn && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Drop-in:</span>
                            <span className="font-medium text-gray-900">{venue.pricing.dropIn}</span>
                          </div>
                        )}
                        {venue.pricing.classPass && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Class Pass:</span>
                            <span className="font-medium text-gray-900">{venue.pricing.classPass}</span>
                          </div>
                        )}
                        {venue.pricing.membership && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Membership:</span>
                            <span className="font-medium text-gray-900">{venue.pricing.membership}</span>
                          </div>
                        )}
                        {venue.pricing.other && (
                          <div className="text-gray-600">{venue.pricing.other}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  {venue.website && (
                    <a
                      href={venue.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Visit Website
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {venue.yogaClasses && (
                    <Link
                      href="/schedule"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors"
                    >
                      <Calendar size={18} />
                      View Class Schedule
                    </Link>
                  )}
                </div>

                {/* Social Links */}
                {(venue.instagram || venue.facebook) && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="font-medium text-gray-900 mb-3">Follow</div>
                    <div className="flex gap-3">
                      {venue.instagram && (
                        <a
                          href={`https://instagram.com/${venue.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                        >
                          <Instagram size={16} />
                          Instagram
                        </a>
                      )}
                      {venue.facebook && (
                        <a
                          href={venue.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <Facebook size={16} />
                          Facebook
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Venues */}
        {relatedVenues.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar Venues You May Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedVenues.map((relatedVenue) => (
                <VenueCard key={relatedVenue.id} venue={relatedVenue} />
              ))}
            </div>
          </div>
        )}

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
                  <li><Link href="/venues" className="text-gray-600 hover:text-teal-600">Venues</Link></li>
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
    </>
  );
}
