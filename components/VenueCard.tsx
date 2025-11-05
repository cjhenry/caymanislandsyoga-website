import Link from "next/link";
import { MapPin, ExternalLink, Phone, Instagram } from "lucide-react";
import type { Venue } from "@/data/venues";

interface VenueCardProps {
  venue: Venue;
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <Link
      href={`/venues/${venue.slug}`}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-teal-700 text-xs font-semibold rounded-full shadow-md">
            {venue.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
            {venue.name}
          </h3>
          <p className="text-sm text-teal-600 font-medium">{venue.tagline}</p>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {venue.description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} className="text-teal-600" />
          <span>{venue.location}</span>
        </div>

        {/* Yoga Classes Badge */}
        {venue.yogaClasses && venue.yogaStyles && venue.yogaStyles.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {venue.yogaStyles.slice(0, 3).map((style) => (
              <span
                key={style}
                className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full"
              >
                {style}
              </span>
            ))}
            {venue.yogaStyles.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{venue.yogaStyles.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Quick Info */}
        <div className="pt-2 flex items-center justify-between border-t border-gray-100">
          <div className="flex gap-2">
            {venue.website && (
              <div className="w-6 h-6 flex items-center justify-center">
                <ExternalLink size={14} className="text-gray-400" />
              </div>
            )}
            {venue.instagram && (
              <div className="w-6 h-6 flex items-center justify-center">
                <Instagram size={14} className="text-gray-400" />
              </div>
            )}
            {venue.phone && (
              <div className="w-6 h-6 flex items-center justify-center">
                <Phone size={14} className="text-gray-400" />
              </div>
            )}
          </div>
          <span className="text-teal-600 text-sm font-medium group-hover:gap-2 transition-all">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}
