import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import ScheduleClient from "@/components/ScheduleClient";

export const metadata: Metadata = {
  title: "Class Schedule - Weekly Yoga Classes",
  description: "Browse our complete weekly yoga class schedule. Find classes by style, teacher, location, and time. Book your spot today.",
};

export default function SchedulePage() {
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
          <Link href="/blog" className="text-teal-700 hover:text-teal-900 font-medium">
            Blog
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Weekly Class Schedule
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete weekly schedule of yoga classes across the Cayman Islands. Filter by style, teacher, location, and time to find your perfect class.
          </p>
        </div>
      </header>

      {/* Schedule Content */}
      <main className="px-6 pb-20 max-w-7xl mx-auto">
        <Suspense fallback={<div className="text-center py-12">Loading schedule...</div>}>
          <ScheduleClient />
        </Suspense>
      </main>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Practice?</h2>
          <p className="text-xl mb-6 text-teal-50">
            Join our community of yogis and experience the transformative power of yoga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Book Your First Class
            </button>
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
                <li><Link href="/schedule" className="text-teal-600 font-medium">Schedule</Link></li>
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
