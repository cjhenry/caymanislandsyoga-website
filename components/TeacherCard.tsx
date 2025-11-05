import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import type { Teacher } from "@/data/teachers";

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 flex flex-col">
      {/* Card Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-center">
          <h2 className="text-2xl font-bold text-white">{teacher.name}</h2>
          <p className="text-teal-50 text-sm">{teacher.specialty}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4 flex flex-col flex-grow">
        {/* Location & Experience */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin size={16} />
            <span>{teacher.location}</span>
          </div>
          <span className="text-gray-500">{teacher.experience} exp</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
          {teacher.description}
        </p>

        {/* Styles */}
        <div className="flex flex-wrap gap-2">
          {teacher.styles.map((style) => (
            <span
              key={style}
              className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full"
            >
              {style}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/teachers/${teacher.slug}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-teal-50 text-teal-700 font-semibold rounded-lg hover:bg-teal-100 transition-colors"
          >
            View Profile
          </Link>
          <a
            href={teacher.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            title="Visit Website"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
