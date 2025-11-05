import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ExternalLink, Clock, ArrowLeft, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import { getTeacherBySlug, getAllTeacherSlugs, teachers } from "@/data/teachers";

interface TeacherProfileProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllTeacherSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: TeacherProfileProps): Promise<Metadata> {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);

  if (!teacher) {
    return {
      title: "Teacher Not Found",
    };
  }

  return {
    title: `${teacher.name} - ${teacher.specialty} | Cayman Yoga`,
    description: teacher.description.slice(0, 160),
    openGraph: {
      title: `${teacher.name} - ${teacher.specialty}`,
      description: teacher.description.slice(0, 160),
      images: [teacher.image],
    },
  };
}

export default async function TeacherProfile({ params }: TeacherProfileProps) {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);

  if (!teacher) {
    notFound();
  }

  // Find related teachers (same location or similar styles)
  const relatedTeachers = teachers
    .filter((t) => {
      if (t.id === teacher.id) return false;
      const hasCommonStyle = t.styles.some((style) => teacher.styles.includes(style));
      const sameLocation = t.location === teacher.location;
      return hasCommonStyle || sameLocation;
    })
    .slice(0, 3);

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": teacher.name,
    "jobTitle": teacher.specialty,
    "description": teacher.description,
    "image": teacher.image,
    "url": teacher.website,
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": teacher.location,
        "addressRegion": "Cayman Islands"
      }
    },
    "knowsAbout": teacher.styles,
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
            <Link
              href="/teachers"
              className="text-teal-700 hover:text-teal-900 font-medium"
            >
              All Teachers
            </Link>
            <Link
              href="/blog"
              className="text-teal-700 hover:text-teal-900 font-medium"
            >
              Blog
            </Link>
          </div>
        </nav>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium"
          >
            <ArrowLeft size={20} />
            Back to All Teachers
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {teacher.name}
                </h1>
                <p className="text-2xl text-teal-600 font-medium">
                  {teacher.specialty}
                </p>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-teal-600" />
                  <span>{teacher.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-teal-600" />
                  <span>{teacher.experience} experience</span>
                </div>
              </div>

              {/* Yoga Styles */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.styles.map((style) => (
                    <span
                      key={style}
                      className="px-4 py-2 bg-teal-50 text-teal-700 font-medium rounded-full"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info (if available) */}
              {(teacher.email || teacher.phone) && (
                <div className="space-y-2">
                  {teacher.email && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={20} className="text-teal-600" />
                      <a href={`mailto:${teacher.email}`} className="hover:text-teal-600">
                        {teacher.email}
                      </a>
                    </div>
                  )}
                  {teacher.phone && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={20} className="text-teal-600" />
                      <a href={`tel:${teacher.phone}`} className="hover:text-teal-600">
                        {teacher.phone}
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={teacher.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-lg"
                >
                  Visit Website
                  <ExternalLink size={20} />
                </a>
                <button className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors">
                  Book a Class
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {teacher.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>{teacher.description}</p>
            </div>
          </div>
        </div>

        {/* Related Teachers */}
        {relatedTeachers.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Teachers You May Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedTeachers.map((relatedTeacher) => (
                <Link
                  key={relatedTeacher.id}
                  href={`/teachers/${relatedTeacher.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedTeacher.image}
                      alt={relatedTeacher.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {relatedTeacher.name}
                    </h3>
                    <p className="text-teal-600 text-sm mb-3">{relatedTeacher.specialty}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={14} />
                      <span>{relatedTeacher.location}</span>
                    </div>
                  </div>
                </Link>
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
    </>
  );
}
