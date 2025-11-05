"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, Filter, X } from "lucide-react";
import TeacherCard from "./TeacherCard";
import { teachers, getAllYogaStyles, getAllLocations } from "@/data/teachers";
import type { Teacher } from "@/data/teachers";

export default function TeachersClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedStyle, setSelectedStyle] = useState(searchParams.get("style") || "");
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get("location") || "");
  const [showFilters, setShowFilters] = useState(false);

  const allStyles = useMemo(() => getAllYogaStyles(), []);
  const allLocations = useMemo(() => getAllLocations(), []);

  // Update state when URL params change
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
    setSelectedStyle(searchParams.get("style") || "");
    setSelectedLocation(searchParams.get("location") || "");
  }, [searchParams]);

  // Filter teachers based on search and filters
  const filteredTeachers = useMemo(() => {
    let results = teachers;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter((teacher) => {
        return (
          teacher.name.toLowerCase().includes(query) ||
          teacher.specialty.toLowerCase().includes(query) ||
          teacher.location.toLowerCase().includes(query) ||
          teacher.description.toLowerCase().includes(query) ||
          teacher.styles.some((style) => style.toLowerCase().includes(query))
        );
      });
    }

    // Style filter
    if (selectedStyle) {
      const styleQuery = selectedStyle.toLowerCase();
      results = results.filter((teacher) =>
        teacher.styles.some((style) => style.toLowerCase().includes(styleQuery))
      );
    }

    // Location filter
    if (selectedLocation) {
      const locationQuery = selectedLocation.toLowerCase();
      results = results.filter((teacher) =>
        teacher.location.toLowerCase().includes(locationQuery)
      );
    }

    return results;
  }, [searchQuery, selectedStyle, selectedLocation]);

  const updateFilters = (search?: string, style?: string, location?: string) => {
    const params = new URLSearchParams();

    const finalSearch = search !== undefined ? search : searchQuery;
    const finalStyle = style !== undefined ? style : selectedStyle;
    const finalLocation = location !== undefined ? location : selectedLocation;

    if (finalSearch) params.set("search", finalSearch);
    if (finalStyle) params.set("style", finalStyle);
    if (finalLocation) params.set("location", finalLocation);

    const queryString = params.toString();
    router.push(queryString ? `/teachers?${queryString}` : "/teachers", { scroll: false });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters(searchQuery, selectedStyle, selectedLocation);
  };

  const handleStyleChange = (style: string) => {
    const newStyle = style === selectedStyle ? "" : style;
    setSelectedStyle(newStyle);
    updateFilters(searchQuery, newStyle, selectedLocation);
  };

  const handleLocationChange = (location: string) => {
    const newLocation = location === selectedLocation ? "" : location;
    setSelectedLocation(newLocation);
    updateFilters(searchQuery, selectedStyle, newLocation);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedStyle("");
    setSelectedLocation("");
    router.push("/teachers");
  };

  const hasActiveFilters = searchQuery || selectedStyle || selectedLocation;

  return (
    <>
      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-4">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, style, or location..."
            className="w-full px-6 py-4 pr-14 text-lg border-2 border-teal-200 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </form>

        {/* Filter Toggle Button (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-teal-200 text-teal-800 rounded-lg hover:bg-teal-50 transition-colors"
        >
          <Filter size={20} />
          <span>Filters {hasActiveFilters && `(${[searchQuery, selectedStyle, selectedLocation].filter(Boolean).length})`}</span>
        </button>

        {/* Filters Container */}
        <div className={`${showFilters ? "block" : "hidden"} md:block space-y-4`}>
          {/* Yoga Styles Filter */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Yoga Style</h3>
            <div className="flex flex-wrap gap-2">
              {allStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => handleStyleChange(style)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    selectedStyle === style
                      ? "bg-teal-600 text-white"
                      : "bg-teal-50 text-teal-700 hover:bg-teal-100"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Location</h3>
            <div className="flex flex-wrap gap-2">
              {allLocations.map((location) => (
                <button
                  key={location}
                  onClick={() => handleLocationChange(location)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    selectedLocation === location
                      ? "bg-teal-600 text-white"
                      : "bg-teal-50 text-teal-700 hover:bg-teal-100"
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <X size={16} />
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-6 text-gray-600">
        {hasActiveFilters ? (
          <p>
            Found <span className="font-semibold text-gray-900">{filteredTeachers.length}</span> teacher{filteredTeachers.length !== 1 ? "s" : ""}
            {searchQuery && ` matching "${searchQuery}"`}
            {selectedStyle && ` in ${selectedStyle}`}
            {selectedLocation && ` near ${selectedLocation}`}
          </p>
        ) : (
          <p>Showing all <span className="font-semibold text-gray-900">{teachers.length}</span> teachers</p>
        )}
      </div>

      {/* Teachers Grid */}
      {filteredTeachers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-xl text-gray-600 mb-4">No teachers found matching your criteria</p>
          <button
            onClick={clearAllFilters}
            className="text-teal-600 hover:text-teal-700 font-semibold"
          >
            Clear filters and show all teachers
          </button>
        </div>
      )}
    </>
  );
}
