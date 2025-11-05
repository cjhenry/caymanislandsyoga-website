"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Link from "next/link";

const POPULAR_STYLES = ["Hatha", "Vinyasa", "Yin", "Ashtanga", "Restorative", "Hot Yoga"];

export default function SearchHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/teachers?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/teachers");
    }
  };

  const handleStyleClick = (style: string) => {
    router.push(`/teachers?style=${encodeURIComponent(style)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e as any);
    }
  };

  return (
    <div className="text-center space-y-8">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
        Find Your Perfect
        <span className="block text-teal-600">Yoga Teacher</span>
        in Cayman Islands
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
        Connect with certified yoga instructors offering personalized classes
        across Grand Cayman, Cayman Brac, and Little Cayman
      </p>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mt-12">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search by style, location, or teacher name..."
            className="w-full px-6 py-4 pr-14 text-lg border-2 border-teal-200 rounded-full focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors"
            aria-label="Search"
          >
            <Search size={24} />
          </button>
        </form>
      </div>

      {/* Popular Styles */}
      <div className="flex flex-wrap gap-3 justify-center mt-8">
        {POPULAR_STYLES.map((style) => (
          <button
            key={style}
            onClick={() => handleStyleClick(style)}
            className="px-6 py-2 bg-white border-2 border-teal-200 text-teal-800 rounded-full hover:bg-teal-50 hover:border-teal-400 transition-all"
          >
            {style}
          </button>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
        <Link
          href="/schedule"
          className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
        >
          View Class Schedule
        </Link>
        <Link
          href="/teachers"
          className="px-8 py-4 bg-white text-teal-700 text-lg font-semibold rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-colors"
        >
          Browse Teachers
        </Link>
      </div>
    </div>
  );
}
