"use client";

import { useState, useMemo } from "react";
import { Filter, X } from "lucide-react";
import ClassCard from "./ClassCard";
import {
  classes,
  getAllClassStyles,
  getAllClassLocations,
  getClassesByDay,
  type DayOfWeek,
  type ClassLevel,
} from "@/data/classes";
import { teachers } from "@/data/teachers";

const DAYS_OF_WEEK: DayOfWeek[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const CLASS_LEVELS: ClassLevel[] = ["Beginner", "Intermediate", "Advanced", "All Levels"];
const TIME_FILTERS = [
  { label: "Morning (5am-12pm)", value: "morning" },
  { label: "Afternoon (12pm-5pm)", value: "afternoon" },
  { label: "Evening (5pm+)", value: "evening" },
];

export default function ScheduleClient() {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | "">("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const allStyles = useMemo(() => getAllClassStyles(), []);
  const allLocations = useMemo(() => getAllClassLocations(), []);

  // Filter classes based on selected filters
  const filteredClasses = useMemo(() => {
    let results = classes;

    if (selectedDay) {
      results = results.filter((c) => c.dayOfWeek === selectedDay);
    }

    if (selectedStyle) {
      results = results.filter((c) => c.style === selectedStyle);
    }

    if (selectedLocation) {
      results = results.filter((c) => c.location === selectedLocation);
    }

    if (selectedLevel) {
      results = results.filter((c) => c.level === selectedLevel);
    }

    if (selectedTeacher) {
      results = results.filter((c) => c.teacherId === parseInt(selectedTeacher));
    }

    if (selectedTime) {
      results = results.filter((c) => {
        const hour = parseInt(c.startTime.split(":")[0]);
        if (selectedTime === "morning") return hour >= 5 && hour < 12;
        if (selectedTime === "afternoon") return hour >= 12 && hour < 17;
        if (selectedTime === "evening") return hour >= 17 || hour < 5;
        return false;
      });
    }

    return results;
  }, [selectedDay, selectedStyle, selectedLocation, selectedLevel, selectedTeacher, selectedTime]);

  // Group filtered classes by day for calendar view
  const classesByDay = useMemo(() => {
    const grouped: Record<DayOfWeek, typeof classes> = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };

    filteredClasses.forEach((classItem) => {
      grouped[classItem.dayOfWeek].push(classItem);
    });

    // Sort by time within each day
    Object.keys(grouped).forEach((day) => {
      grouped[day as DayOfWeek].sort((a, b) => a.startTime.localeCompare(b.startTime));
    });

    return grouped;
  }, [filteredClasses]);

  const clearAllFilters = () => {
    setSelectedDay("");
    setSelectedStyle("");
    setSelectedLocation("");
    setSelectedLevel("");
    setSelectedTeacher("");
    setSelectedTime("");
  };

  const hasActiveFilters =
    selectedDay || selectedStyle || selectedLocation || selectedLevel || selectedTeacher || selectedTime;

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 bg-white rounded-lg p-1 border border-gray-200">
          <button
            onClick={() => setViewMode("calendar")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === "calendar"
                ? "bg-teal-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === "list"
                ? "bg-teal-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            List View
          </button>
        </div>

        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border-2 border-teal-200 text-teal-800 rounded-lg hover:bg-teal-50"
        >
          <Filter size={20} />
          Filters {hasActiveFilters && `(${[selectedDay, selectedStyle, selectedLocation, selectedLevel, selectedTeacher, selectedTime].filter(Boolean).length})`}
        </button>
      </div>

      {/* Filters */}
      <div className={`${showFilters ? "block" : "hidden"} md:block bg-white rounded-xl border border-gray-200 p-6 space-y-4`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Filter Classes</h3>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
            >
              <X size={16} />
              Clear all
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Day Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Day of Week</label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value as DayOfWeek | "")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">All Days</option>
              {DAYS_OF_WEEK.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          {/* Style Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Yoga Style</label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">All Styles</option>
              {allStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">All Locations</option>
              {allLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">All Levels</option>
              {CLASS_LEVELS.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Teacher Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Teacher</label>
            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">All Teachers</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </select>
          </div>

          {/* Time Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time of Day</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Any Time</option>
              {TIME_FILTERS.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-gray-600">
        <p>
          Showing <span className="font-semibold text-gray-900">{filteredClasses.length}</span> class
          {filteredClasses.length !== 1 ? "es" : ""}
          {hasActiveFilters && " matching your filters"}
        </p>
      </div>

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <div className="space-y-8">
          {DAYS_OF_WEEK.map((day) => {
            const dayClasses = classesByDay[day];
            if (dayClasses.length === 0 && hasActiveFilters) return null;

            return (
              <div key={day} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-900">{day}</h2>
                  <span className="text-sm text-gray-500">
                    ({dayClasses.length} class{dayClasses.length !== 1 ? "es" : ""})
                  </span>
                </div>
                {dayClasses.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dayClasses.map((classItem) => (
                      <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No classes scheduled</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <>
          {filteredClasses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-xl text-gray-600 mb-4">No classes found matching your criteria</p>
              <button
                onClick={clearAllFilters}
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                Clear filters and show all classes
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
