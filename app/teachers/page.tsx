import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import TeachersClient from "@/components/TeachersClient";

export const metadata: Metadata = {
  title: "Certified Yoga Teachers Directory",
  description: "Browse certified yoga instructors across the Cayman Islands. Find experienced teachers specializing in Hatha, Vinyasa, Yin, Ashtanga, Hot Yoga, and more. Read reviews and visit teacher websites.",
};

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
        <Suspense fallback={<div className="text-center py-12">Loading teachers...</div>}>
          <TeachersClient />
        </Suspense>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Are You a Yoga Teacher?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our directory and connect with students across the Cayman Islands.
            List your classes and grow your yoga business today.
          </p>
          <Link
            href="/register-teacher"
            className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg inline-block"
          >
            List Your Classes
          </Link>
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
