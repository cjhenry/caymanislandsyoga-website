import Link from "next/link";
import { Clock, MapPin, Users, DollarSign, TrendingUp } from "lucide-react";
import type { YogaClass } from "@/data/classes";
import { getTeacherForClass, formatTime } from "@/data/classes";

interface ClassCardProps {
  classItem: YogaClass;
}

export default function ClassCard({ classItem }: ClassCardProps) {
  const teacher = getTeacherForClass(classItem);
  const spotsLeft = classItem.availableSpots;
  const isAlmostFull = spotsLeft <= 5 && spotsLeft > 0;
  const isFull = spotsLeft === 0;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{classItem.title}</h3>
            <p className="text-teal-600 font-medium text-sm">{classItem.style}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            classItem.level === "Beginner" ? "bg-green-100 text-green-700" :
            classItem.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
            classItem.level === "Advanced" ? "bg-purple-100 text-purple-700" :
            "bg-gray-100 text-gray-700"
          }`}>
            {classItem.level}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">{classItem.description}</p>

        {/* Teacher */}
        {teacher && (
          <Link
            href={`/teachers/${teacher.slug}`}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-teal-600 transition-colors"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-medium">{teacher.name}</span>
          </Link>
        )}

        {/* Class Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} className="text-teal-600" />
            <span>{formatTime(classItem.startTime)} • {classItem.duration} min</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-teal-600" />
            <span className="truncate">{classItem.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} className="text-teal-600" />
            <span>
              {isFull ? (
                <span className="text-red-600 font-semibold">Full</span>
              ) : isAlmostFull ? (
                <span className="text-orange-600 font-semibold">{spotsLeft} spots left</span>
              ) : (
                <span>{spotsLeft} spots available</span>
              )}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign size={16} className="text-teal-600" />
            <span className="font-semibold text-gray-900">${classItem.price} KYD</span>
          </div>
        </div>

        {/* Venue */}
        <div className="text-sm text-gray-500 italic border-t pt-3">
          📍 {classItem.venue}
        </div>

        {/* Action Button */}
        <button
          disabled={isFull}
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            isFull
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
        >
          {isFull ? "Class Full" : "Book This Class"}
        </button>
      </div>
    </div>
  );
}
