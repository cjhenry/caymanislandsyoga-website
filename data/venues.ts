export type VenueCategory =
  | "Yoga Studio"
  | "Beach Location"
  | "Hotel & Resort"
  | "Wellness Center"
  | "Fitness Club"
  | "Community Space"
  | "Restaurant & Cafe";

export interface Venue {
  id: number;
  slug: string;
  name: string;
  category: VenueCategory;
  tagline: string;
  description: string;
  location: string;
  address: string;
  image: string;
  gallery?: string[];

  // Yoga-specific info
  yogaClasses: boolean;
  yogaStyles?: string[];
  instructors?: string[];

  // Amenities
  amenities: string[];

  // Contact & Social
  phone?: string;
  email?: string;
  website?: string;
  instagram?: string;
  facebook?: string;

  // Operational Info
  hours?: string;
  pricing?: {
    dropIn?: string;
    classPass?: string;
    membership?: string;
    other?: string;
  };

  // Special Features
  highlights: string[];

  // Map coordinates (for future map integration)
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const venues: Venue[] = [
  // YOGA STUDIOS
  {
    id: 1,
    slug: "bliss-yoga-cayman",
    name: "Bliss Yoga",
    category: "Yoga Studio",
    tagline: "Cayman's Premier Yoga Studio",
    description: "Bliss Yoga is one of Cayman's most established yoga studios, offering a wide variety of classes from beginner-friendly Hatha to challenging Baptiste Power Yoga. With multiple experienced teachers and a welcoming community atmosphere, Bliss Yoga has been serving the island for over 10 years.",
    location: "Seven Mile Beach",
    address: "West Bay Road, Grand Cayman",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Baptiste", "Power Vinyasa", "Hot Yoga", "Hatha", "Vinyasa Flow"],
    instructors: ["Janelle", "Rachel Whitfield", "Nicki", "Lindsay", "Mark"],
    amenities: [
      "Climate-controlled studio",
      "Hot yoga room (95°F)",
      "Changing rooms & showers",
      "Mat & prop rentals",
      "Retail boutique",
      "Free parking",
      "Water refill station",
    ],
    phone: "(345) 943-YOGA",
    website: "https://blissyogacayman.com",
    instagram: "@blissyogacayman",
    hours: "Mon-Sat: 6am-8pm, Sun: 8am-6pm",
    pricing: {
      dropIn: "$28 KYD",
      classPass: "5 classes $120 / 10 classes $200",
      membership: "$150/month unlimited",
    },
    highlights: [
      "Largest selection of class times on island",
      "Experienced, certified instructors",
      "Welcoming community for all levels",
      "Air-conditioned and heated yoga rooms",
      "Workshops and special events",
      "Teacher training programs available",
    ],
  },
  {
    id: 2,
    slug: "yoga-studio-seven-mile",
    name: "Yoga Studio Seven Mile",
    category: "Yoga Studio",
    tagline: "Boutique Yoga in Paradise",
    description: "An intimate boutique studio specializing in Hatha and Restorative practices. Perfect for those seeking a quieter, more meditative yoga experience with smaller class sizes and personalized attention.",
    location: "Seven Mile Beach",
    address: "Queens Court, West Bay Road",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Hatha", "Restorative", "Yin", "Gentle Flow"],
    instructors: ["Danielle Gentilcore", "Janine Martins"],
    amenities: [
      "Small class sizes (max 12)",
      "Premium mat rentals",
      "Tea lounge",
      "Changing facilities",
      "Props provided",
      "Meditation space",
    ],
    phone: "(345) 916-5050",
    website: "https://yogastudiosevenmile.com",
    hours: "Mon-Fri: 7am-7pm, Sat-Sun: 8am-5pm",
    pricing: {
      dropIn: "$25 KYD",
      classPass: "5 classes $110 / 10 classes $190",
    },
    highlights: [
      "Intimate, boutique atmosphere",
      "Focus on alignment and mindfulness",
      "Personalized attention from instructors",
      "Beautiful ocean-view studio",
      "Regular workshops and retreats",
    ],
  },

  // WELLNESS CENTERS
  {
    id: 3,
    slug: "national-gallery-wellness-center",
    name: "National Gallery Wellness Center",
    category: "Wellness Center",
    tagline: "Art Meets Wellness",
    description: "Located within the National Gallery of the Cayman Islands, this unique wellness center combines art appreciation with holistic health practices. Offering yoga, meditation, and wellness programs in a culturally rich environment.",
    location: "Grand Cayman",
    address: "Esterley Tibbetts Highway, Camana Bay",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Hatha", "Pranayama", "Bhakti Yoga", "Meditation"],
    instructors: ["Mirabelle D'Cunha", "Jeri Bovell", "Janine Martins"],
    amenities: [
      "Gallery access before/after class",
      "Meditation garden",
      "Herbal tea bar",
      "Wellness library",
      "Workshop spaces",
      "Free parking",
      "Art-inspired yoga sessions",
    ],
    website: "https://www.nationalgallery.org.ky/wellness/",
    hours: "Tue-Sat: 10am-6pm",
    pricing: {
      dropIn: "$20 KYD",
      other: "Members receive discounted rates",
    },
    highlights: [
      "Unique art & wellness combination",
      "Cultural enrichment programs",
      "Focus on mindfulness and spirituality",
      "Pranayama and breathwork specialists",
      "Community wellness events",
      "Support local arts while practicing",
    ],
  },

  // BEACH LOCATIONS
  {
    id: 4,
    slug: "seven-mile-beach-public-access",
    name: "Seven Mile Beach - Public Access Points",
    category: "Beach Location",
    tagline: "World-Famous Beach Yoga",
    description: "Seven Mile Beach is consistently ranked among the world's best beaches. Multiple public access points offer perfect settings for sunrise and sunset yoga sessions. The soft white sand provides natural resistance training, while the sound of waves creates the ultimate meditation soundtrack.",
    location: "Seven Mile Beach",
    address: "West Bay Road (Multiple Public Access Points)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Vinyasa", "Hatha", "Meditation", "Sunrise Yoga", "Sunset Yoga"],
    instructors: ["Danielle Gentilcore", "Mirabelle D'Cunha"],
    amenities: [
      "Free access",
      "Public restrooms nearby",
      "Parking available",
      "Shower facilities at some points",
      "Stunning ocean views",
      "Soft sand",
    ],
    highlights: [
      "World-class beach setting",
      "Free outdoor yoga sessions",
      "Sunrise classes available (6am)",
      "Sunset meditation sessions (5:45pm)",
      "Bring your own mat or towel",
      "Connect with nature while practicing",
      "Perfect for all skill levels",
    ],
  },
  {
    id: 5,
    slug: "rum-point-beach",
    name: "Rum Point Beach",
    category: "Beach Location",
    tagline: "Tranquil North Shore Paradise",
    description: "Located on the calmer North Shore, Rum Point offers shallow, crystal-clear waters and a more peaceful atmosphere than Seven Mile Beach. The hammocks and casual vibe make it perfect for restorative yoga and meditation.",
    location: "North Side",
    address: "Rum Point Drive, North Side",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Restorative", "Yin", "Beach Meditation"],
    amenities: [
      "Calm, shallow waters",
      "Beach restaurant nearby",
      "Hammocks",
      "Restroom facilities",
      "Parking",
      "Shade from trees",
    ],
    highlights: [
      "Peaceful, less crowded setting",
      "Shallow water perfect for water yoga",
      "Natural shade from trees",
      "Great for morning or afternoon practice",
      "Family-friendly environment",
    ],
  },
  {
    id: 6,
    slug: "spotts-beach",
    name: "Spotts Beach",
    category: "Beach Location",
    tagline: "Local's Favorite for Sunrise Yoga",
    description: "A favorite among locals, Spotts Beach on the South Sound offers a quieter alternative for beach yoga. Known for sea turtle sightings, this beach provides an authentic Caymanian experience away from tourist crowds.",
    location: "South Sound",
    address: "Spotts Beach, South Sound",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&h=600&fit=crop",
    yogaClasses: false,
    amenities: [
      "Free parking",
      "Less crowded",
      "Sea turtle viewing",
      "Local atmosphere",
    ],
    highlights: [
      "Authentic local beach",
      "Often see sea turtles",
      "Great for solo practice",
      "Beautiful sunrise views",
      "Quiet and peaceful",
    ],
  },

  // HOTELS & RESORTS
  {
    id: 7,
    slug: "kimpton-seafire-resort",
    name: "Kimpton Seafire Resort + Spa",
    category: "Hotel & Resort",
    tagline: "Luxury Wellness Retreat",
    description: "This 5-star resort on Seven Mile Beach features a world-class spa and wellness program, including daily yoga classes, wellness workshops, and personalized wellness consultations. The oceanfront yoga pavilion offers breathtaking views for your practice.",
    location: "Seven Mile Beach",
    address: "West Bay Road, Grand Cayman",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Vinyasa", "Hatha", "Restorative", "Private Sessions"],
    amenities: [
      "Oceanfront yoga pavilion",
      "Full-service spa",
      "Fitness center",
      "Infinity pools",
      "Wellness consultations",
      "Healthy dining options",
      "Private beach access",
      "Complimentary yoga for guests",
    ],
    phone: "(345) 746-0000",
    website: "https://www.seafireresortandspa.com",
    pricing: {
      other: "Complimentary for hotel guests, $35 for non-guests",
    },
    highlights: [
      "Resort-quality yoga instruction",
      "Stunning oceanfront location",
      "Combine yoga with spa treatments",
      "Wellness packages available",
      "Private sessions can be arranged",
      "Perfect for yoga retreats",
    ],
  },
  {
    id: 8,
    slug: "the-ritz-carlton-grand-cayman",
    name: "The Ritz-Carlton, Grand Cayman",
    category: "Hotel & Resort",
    tagline: "Five-Star Wellness Experience",
    description: "The Ritz-Carlton offers an elevated wellness program with La Prairie Spa, beachside yoga, and curated wellness experiences. Their signature Sunrise Yoga sessions on Seven Mile Beach are legendary.",
    location: "Seven Mile Beach",
    address: "West Bay Road, Grand Cayman",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Sunrise Yoga", "Vinyasa", "Beach Yoga"],
    amenities: [
      "Beach yoga platform",
      "La Prairie Spa",
      "Fitness center",
      "Personal training",
      "Nutrition consultations",
      "Luxury amenities",
    ],
    phone: "(345) 943-9000",
    website: "https://www.ritzcarlton.com/grandcayman",
    pricing: {
      other: "Complimentary for guests, day passes available",
    },
    highlights: [
      "Legendary sunrise beach yoga",
      "World-class spa facilities",
      "Professional wellness staff",
      "Luxury resort experience",
      "Wellness packages and retreats",
    ],
  },

  // FITNESS CLUBS
  {
    id: 9,
    slug: "camana-bay-fitness",
    name: "Camana Bay Fitness",
    category: "Fitness Club",
    tagline: "Complete Wellness Facility",
    description: "Modern fitness club in the heart of Camana Bay offering yoga classes alongside full gym facilities. Perfect for those who want to combine yoga with strength training and cardio workouts.",
    location: "Camana Bay",
    address: "Market Street, Camana Bay",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Power Yoga", "Vinyasa", "Athletic Yoga"],
    instructors: ["Lindsay", "Mark"],
    amenities: [
      "Full gym equipment",
      "Yoga studio",
      "Group fitness classes",
      "Personal training",
      "Locker rooms",
      "Smoothie bar",
      "Free parking",
    ],
    hours: "Mon-Fri: 5am-10pm, Sat-Sun: 7am-8pm",
    pricing: {
      membership: "$120/month full access",
      other: "Yoga included with membership",
    },
    highlights: [
      "Combine yoga with gym workouts",
      "Athletic-focused yoga classes",
      "Convenient Camana Bay location",
      "Full fitness facility",
      "Group exercise classes",
    ],
  },

  // COMMUNITY SPACES
  {
    id: 10,
    slug: "camana-bay-waterfront",
    name: "Camana Bay Waterfront",
    category: "Community Space",
    tagline: "Free Community Yoga",
    description: "The scenic Camana Bay waterfront hosts free community yoga sessions, outdoor movie nights, and wellness events. It's a beautiful public space perfect for morning yoga with views of the harbor.",
    location: "Camana Bay",
    address: "Waterfront Promenade, Camana Bay",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Vinyasa", "Community Classes"],
    instructors: ["Danielle Gentilcore"],
    amenities: [
      "Free classes",
      "Scenic waterfront views",
      "Public restrooms",
      "Nearby cafes and restaurants",
      "Free parking",
      "Family-friendly",
    ],
    highlights: [
      "Completely free yoga sessions",
      "Beautiful waterfront setting",
      "Community atmosphere",
      "Regular weekly classes",
      "All levels welcome",
      "Great for beginners",
    ],
  },
  {
    id: 11,
    slug: "public-beach-park",
    name: "Public Beach Park (Governor's Beach)",
    category: "Community Space",
    tagline: "Donation-Based Beach Yoga",
    description: "Popular Sunday morning community yoga sessions at this public park. Donation-based classes welcome everyone, with all proceeds supporting local charities and beach conservation.",
    location: "West Bay",
    address: "West Bay Road, near Governor's Residence",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop",
    yogaClasses: true,
    yogaStyles: ["Baptiste", "Community Yoga", "All Levels"],
    instructors: ["Mark"],
    amenities: [
      "Beachfront location",
      "Free parking",
      "Restrooms",
      "Donation-based (pay what you can)",
      "Shaded areas",
    ],
    highlights: [
      "Pay-what-you-can donations",
      "Nobody turned away",
      "Supports local charities",
      "Sunday morning tradition",
      "Family and kid-friendly",
      "Build community connections",
    ],
  },

  // RESTAURANTS & CAFES
  {
    id: 12,
    slug: "fresh-cayman",
    name: "FRESH by Marissa",
    category: "Restaurant & Cafe",
    tagline: "Healthy Eating for Yogis",
    description: "Popular health-focused cafe offering fresh smoothie bowls, cold-pressed juices, and nutritious meals. A favorite post-yoga spot for the wellness community. Often hosts wellness workshops and yoga brunches.",
    location: "Camana Bay",
    address: "Market Street, Camana Bay",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop",
    yogaClasses: false,
    amenities: [
      "Healthy menu options",
      "Vegan & vegetarian friendly",
      "Smoothie bowls",
      "Cold-pressed juices",
      "Outdoor seating",
      "Wellness products",
    ],
    phone: "(345) 640-FOOD",
    instagram: "@freshcayman",
    hours: "Mon-Sat: 7am-7pm, Sun: 8am-4pm",
    highlights: [
      "Post-yoga fuel station",
      "Nutrient-dense meals",
      "Wellness-focused menu",
      "Popular with yoga community",
      "Occasional yoga brunch events",
      "Grab-and-go options",
    ],
  },
];

// Helper functions
export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find((venue) => venue.slug === slug);
}

export function getAllVenueSlugs(): string[] {
  return venues.map((venue) => venue.slug);
}

export function getVenuesByCategory(category: VenueCategory): Venue[] {
  return venues.filter((venue) => venue.category === category);
}

export function getVenuesByLocation(location: string): Venue[] {
  return venues.filter((venue) =>
    venue.location.toLowerCase().includes(location.toLowerCase())
  );
}

export function getAllCategories(): VenueCategory[] {
  return Array.from(new Set(venues.map((venue) => venue.category)));
}

export function getVenuesWithYogaClasses(): Venue[] {
  return venues.filter((venue) => venue.yogaClasses);
}

export function searchVenues(query: string): Venue[] {
  const lowerQuery = query.toLowerCase();
  return venues.filter((venue) =>
    venue.name.toLowerCase().includes(lowerQuery) ||
    venue.description.toLowerCase().includes(lowerQuery) ||
    venue.location.toLowerCase().includes(lowerQuery) ||
    venue.category.toLowerCase().includes(lowerQuery) ||
    venue.amenities.some(a => a.toLowerCase().includes(lowerQuery))
  );
}
