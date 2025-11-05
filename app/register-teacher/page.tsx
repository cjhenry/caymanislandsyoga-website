"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Upload, Check } from "lucide-react";

export default function RegisterTeacherPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    certifications: "",
    styles: [] as string[],
    bio: "",
    website: "",
    instagram: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const yogaStyles = [
    "Hatha", "Vinyasa", "Power Vinyasa", "Yin", "Restorative", "Hot Yoga",
    "Ashtanga", "Baptiste", "Jivamukti", "Kundalini", "Pranayama",
    "Therapeutic", "Prenatal", "Kids Yoga", "Corporate Yoga"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    // TODO: Implement actual form submission
    // In production, this would send to an API endpoint or email service
    console.log("Teacher registration:", formData);

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for your interest! We'll review your application and get back to you within 2-3 business days.");
    }, 1500);
  };

  const handleStyleToggle = (style: string) => {
    setFormData(prev => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter(s => s !== style)
        : [...prev.styles, style]
    }));
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
          <p className="text-lg text-gray-600 mb-8">{message}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/teachers"
              className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors"
            >
              Browse Teachers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm">
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
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Join Our Community of Teachers
        </h1>
        <p className="text-xl text-gray-600">
          Share your practice and connect with students across the Cayman Islands
        </p>
      </header>

      {/* Form */}
      <main className="px-6 pb-20 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Personal Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="(345) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Location *</label>
              <select
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select location</option>
                <option value="Grand Cayman">Grand Cayman</option>
                <option value="Seven Mile Beach">Seven Mile Beach</option>
                <option value="George Town">George Town</option>
                <option value="Bodden Town">Bodden Town</option>
                <option value="East End">East End</option>
                <option value="Cayman Brac">Cayman Brac</option>
                <option value="Little Cayman">Little Cayman</option>
              </select>
            </div>
          </div>

          {/* Professional Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Professional Background</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Teaching Experience *</label>
              <input
                type="text"
                required
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g., 5+ years"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Certifications *</label>
              <textarea
                required
                value={formData.certifications}
                onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="List your yoga certifications (e.g., RYT-200, E-RYT 500, etc.)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Yoga Styles You Teach *</label>
              <div className="flex flex-wrap gap-2">
                {yogaStyles.map(style => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => handleStyleToggle(style)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      formData.styles.includes(style)
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
              {formData.styles.length === 0 && (
                <p className="text-sm text-red-600 mt-2">Please select at least one style</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio / Teaching Philosophy *</label>
              <textarea
                required
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Tell us about your yoga journey, teaching style, and what makes your classes unique..."
              />
              <p className="text-sm text-gray-500 mt-1">This will appear on your teacher profile</p>
            </div>
          </div>

          {/* Online Presence */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Online Presence</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="https://your-website.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Instagram Handle</label>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="@yourusername"
              />
            </div>
          </div>

          {/* Photo Upload Info */}
          <div className="bg-teal-50 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Upload className="text-teal-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Profile Photo</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Once your application is approved, we'll contact you to collect a professional profile photo and any additional information needed.
                </p>
                <p className="text-sm text-gray-600">
                  Photo requirements: High-quality headshot, professional appearance, 400x400px minimum
                </p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "submitting" || formData.styles.length === 0}
              className="w-full px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting..." : "Submit Application"}
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              We review all applications within 2-3 business days
            </p>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
          <ol className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="font-bold text-teal-600">1.</span>
              <span>We review your application and verify your credentials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-teal-600">2.</span>
              <span>You'll receive an email within 2-3 business days with next steps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-teal-600">3.</span>
              <span>Once approved, we'll help you set up your profile and class schedule</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-teal-600">4.</span>
              <span>Start connecting with students across the Cayman Islands!</span>
            </li>
          </ol>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-600 text-sm">
            <p>© 2024 Cayman Yoga. Connecting wellness seekers with certified yoga instructors.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
