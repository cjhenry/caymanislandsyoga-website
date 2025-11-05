import type { Teacher } from "./teachers";
import { teachers } from "./teachers";

export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export type ClassLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface YogaClass {
  id: number;
  title: string;
  description: string;
  teacherId: number;
  style: string;
  level: ClassLevel;
  dayOfWeek: DayOfWeek;
  startTime: string; // Format: "HH:MM" (24-hour)
  duration: number; // in minutes
  location: string;
  venue: string;
  price: number; // in KYD
  maxCapacity: number;
  availableSpots: number;
  isRecurring: boolean;
  startDate?: string; // Format: "YYYY-MM-DD"
  endDate?: string; // Format: "YYYY-MM-DD"
}

// Sample class schedule data
export const classes: YogaClass[] = [
  // Danielle Gentilcore Classes
  {
    id: 1,
    title: "Morning Power Vinyasa",
    description: "Start your day with an energizing power vinyasa flow. Build strength and flexibility while connecting breath to movement.",
    teacherId: 1,
    style: "Power Vinyasa",
    level: "All Levels",
    dayOfWeek: "Monday",
    startTime: "06:30",
    duration: 60,
    location: "Grand Cayman",
    venue: "Camana Bay Waterfront",
    price: 25,
    maxCapacity: 20,
    availableSpots: 15,
    isRecurring: true,
  },
  {
    id: 2,
    title: "Restorative Evening Yoga",
    description: "Unwind from your day with gentle restorative poses. Perfect for stress relief and deep relaxation.",
    teacherId: 1,
    style: "Restorative",
    level: "All Levels",
    dayOfWeek: "Wednesday",
    startTime: "18:00",
    duration: 75,
    location: "Grand Cayman",
    venue: "Yoga Studio Seven Mile",
    price: 25,
    maxCapacity: 15,
    availableSpots: 8,
    isRecurring: true,
  },
  {
    id: 3,
    title: "Saturday Morning Flow",
    description: "Weekend vinyasa flow to energize your Saturday. All levels welcome.",
    teacherId: 1,
    style: "Vinyasa",
    level: "All Levels",
    dayOfWeek: "Saturday",
    startTime: "09:00",
    duration: 60,
    location: "Grand Cayman",
    venue: "Seven Mile Beach",
    price: 30,
    maxCapacity: 25,
    availableSpots: 20,
    isRecurring: true,
  },
  // Janelle Classes
  {
    id: 4,
    title: "Baptiste Power Yoga",
    description: "Dynamic, challenging power yoga in the Baptiste tradition. Build heat, strength, and mental focus.",
    teacherId: 2,
    style: "Baptiste Power Yoga",
    level: "Intermediate",
    dayOfWeek: "Monday",
    startTime: "18:30",
    duration: 90,
    location: "Seven Mile Beach",
    venue: "Bliss Yoga Studio",
    price: 28,
    maxCapacity: 30,
    availableSpots: 22,
    isRecurring: true,
  },
  {
    id: 5,
    title: "Hot Yoga Flow",
    description: "Heated vinyasa flow in 95°F room. Bring a towel and water. Detoxify and strengthen.",
    teacherId: 2,
    style: "Hot Yoga",
    level: "Intermediate",
    dayOfWeek: "Wednesday",
    startTime: "12:00",
    duration: 60,
    location: "Seven Mile Beach",
    venue: "Bliss Yoga Studio",
    price: 30,
    maxCapacity: 20,
    availableSpots: 12,
    isRecurring: true,
  },
  {
    id: 6,
    title: "Friday Power Flow",
    description: "End your work week strong with an empowering power yoga session.",
    teacherId: 2,
    style: "Power Yoga",
    level: "All Levels",
    dayOfWeek: "Friday",
    startTime: "17:30",
    duration: 75,
    location: "Seven Mile Beach",
    venue: "Bliss Yoga Studio",
    price: 28,
    maxCapacity: 30,
    availableSpots: 25,
    isRecurring: true,
  },
  // Mirabelle D'Cunha Classes
  {
    id: 7,
    title: "Pranayama & Meditation",
    description: "Learn powerful breathing techniques and meditation practices for stress reduction and peak performance.",
    teacherId: 3,
    style: "Pranayama",
    level: "All Levels",
    dayOfWeek: "Tuesday",
    startTime: "07:00",
    duration: 45,
    location: "Grand Cayman",
    venue: "National Gallery Wellness Center",
    price: 20,
    maxCapacity: 15,
    availableSpots: 10,
    isRecurring: true,
  },
  {
    id: 8,
    title: "Corporate Yoga & Breathwork",
    description: "Desk-friendly yoga and breathing exercises designed for workplace wellness. Great for stress management.",
    teacherId: 3,
    style: "Corporate Yoga",
    level: "Beginner",
    dayOfWeek: "Thursday",
    startTime: "12:30",
    duration: 45,
    location: "Grand Cayman",
    venue: "Camana Bay Office Space",
    price: 22,
    maxCapacity: 20,
    availableSpots: 18,
    isRecurring: true,
  },
  {
    id: 9,
    title: "Bhakti Yoga Experience",
    description: "Devotional yoga combining asana, chanting, and philosophy. Connect with the spiritual side of yoga.",
    teacherId: 3,
    style: "Bhakti Yoga",
    level: "All Levels",
    dayOfWeek: "Saturday",
    startTime: "16:00",
    duration: 90,
    location: "Grand Cayman",
    venue: "National Gallery Wellness Center",
    price: 25,
    maxCapacity: 25,
    availableSpots: 20,
    isRecurring: true,
  },
  // Chantelle Classes
  {
    id: 10,
    title: "Kripalu Vinyasa Flow",
    description: "Compassionate vinyasa flow honoring your body's wisdom. Focus on breath, alignment, and self-acceptance.",
    teacherId: 4,
    style: "Kripalu",
    level: "All Levels",
    dayOfWeek: "Tuesday",
    startTime: "18:00",
    duration: 75,
    location: "Grand Cayman",
    venue: "Bliss Yoga Studio",
    price: 25,
    maxCapacity: 20,
    availableSpots: 14,
    isRecurring: true,
  },
  {
    id: 11,
    title: "Energy Work & Yoga",
    description: "Combine asana practice with energy healing techniques. Learn to work with prana for vitality.",
    teacherId: 4,
    style: "Energy Work",
    level: "Intermediate",
    dayOfWeek: "Thursday",
    startTime: "19:00",
    duration: 60,
    location: "Grand Cayman",
    venue: "Private Studio",
    price: 28,
    maxCapacity: 12,
    availableSpots: 8,
    isRecurring: true,
  },
  // Rachel Whitfield Classes
  {
    id: 12,
    title: "Power Vinyasa Strength",
    description: "Build serious strength with this challenging power vinyasa class. Expect arm balances and inversions.",
    teacherId: 5,
    style: "Power Vinyasa",
    level: "Advanced",
    dayOfWeek: "Monday",
    startTime: "17:00",
    duration: 75,
    location: "Grand Cayman",
    venue: "Bliss Yoga Studio",
    price: 28,
    maxCapacity: 20,
    availableSpots: 16,
    isRecurring: true,
  },
  {
    id: 13,
    title: "Hatha Fundamentals",
    description: "Learn proper alignment and foundational poses. Perfect for beginners or those wanting to refine their practice.",
    teacherId: 5,
    style: "Hatha",
    level: "Beginner",
    dayOfWeek: "Wednesday",
    startTime: "10:00",
    duration: 60,
    location: "Grand Cayman",
    venue: "Bliss Yoga Studio",
    price: 22,
    maxCapacity: 15,
    availableSpots: 12,
    isRecurring: true,
  },
  // Janine Martins Classes
  {
    id: 14,
    title: "Kundalini Awakening",
    description: "Experience the powerful practice of Kundalini yoga. Dynamic breathwork, meditation, and kriyas.",
    teacherId: 6,
    style: "Kundalini",
    level: "All Levels",
    dayOfWeek: "Tuesday",
    startTime: "19:30",
    duration: 75,
    location: "Grand Cayman",
    venue: "Private Wellness Space",
    price: 30,
    maxCapacity: 15,
    availableSpots: 10,
    isRecurring: true,
  },
  {
    id: 15,
    title: "Yin Yoga & Reiki",
    description: "Deep stretching combined with reiki energy healing. Hold poses for 3-5 minutes for fascia release.",
    teacherId: 6,
    style: "Yin",
    level: "All Levels",
    dayOfWeek: "Friday",
    startTime: "18:30",
    duration: 90,
    location: "Grand Cayman",
    venue: "National Gallery Wellness Center",
    price: 32,
    maxCapacity: 12,
    availableSpots: 7,
    isRecurring: true,
  },
  {
    id: 16,
    title: "Sunday Restorative Yoga",
    description: "Gentle restorative practice with props. Perfect way to end your weekend.",
    teacherId: 6,
    style: "Restorative",
    level: "All Levels",
    dayOfWeek: "Sunday",
    startTime: "17:00",
    duration: 75,
    location: "Grand Cayman",
    venue: "Yoga Studio Seven Mile",
    price: 25,
    maxCapacity: 15,
    availableSpots: 11,
    isRecurring: true,
  },
  // Jeri Bovell Classes
  {
    id: 17,
    title: "Holistic Hatha Yoga",
    description: "Traditional hatha yoga integrated with herbal wisdom and holistic wellness principles.",
    teacherId: 7,
    style: "Hatha",
    level: "All Levels",
    dayOfWeek: "Monday",
    startTime: "09:00",
    duration: 75,
    location: "Grand Cayman",
    venue: "National Gallery Wellness Center",
    price: 25,
    maxCapacity: 18,
    availableSpots: 14,
    isRecurring: true,
  },
  // Nicki Classes
  {
    id: 18,
    title: "Jivamukti Yoga Class",
    description: "Vigorous vinyasa with Sanskrit chanting, spiritual teachings, and music. A complete yoga experience.",
    teacherId: 8,
    style: "Jivamukti",
    level: "Intermediate",
    dayOfWeek: "Thursday",
    startTime: "17:00",
    duration: 90,
    location: "Grand Cayman",
    venue: "Bliss Yoga Studio",
    price: 30,
    maxCapacity: 25,
    availableSpots: 18,
    isRecurring: true,
  },
  {
    id: 19,
    title: "Sunday Morning Vinyasa",
    description: "Start your Sunday with a flowing vinyasa practice. All levels welcome, modifications offered.",
    teacherId: 8,
    style: "Vinyasa",
    level: "All Levels",
    dayOfWeek: "Sunday",
    startTime: "08:00",
    duration: 75,
    location: "Grand Cayman",
    venue: "Seven Mile Beach",
    price: 28,
    maxCapacity: 30,
    availableSpots: 22,
    isRecurring: true,
  },
  // Lindsay Classes
  {
    id: 20,
    title: "Baptiste Power Yoga",
    description: "Transformational power yoga in the Baptiste tradition. Expect to sweat, grow, and empower yourself.",
    teacherId: 9,
    style: "Baptiste Power Yoga",
    level: "All Levels",
    dayOfWeek: "Tuesday",
    startTime: "06:00",
    duration: 75,
    location: "Grand Cayman",
    venue: "Bliss Yoga Studio",
    price: 28,
    maxCapacity: 30,
    availableSpots: 24,
    isRecurring: true,
  },
  {
    id: 21,
    title: "Athletic Yoga for Athletes",
    description: "Yoga designed specifically for athletes. Improve flexibility, prevent injury, and enhance performance.",
    teacherId: 9,
    style: "Athletic Yoga",
    level: "All Levels",
    dayOfWeek: "Saturday",
    startTime: "07:00",
    duration: 60,
    location: "Grand Cayman",
    venue: "Camana Bay Fitness",
    price: 25,
    maxCapacity: 20,
    availableSpots: 17,
    isRecurring: true,
  },
  // Mark Classes
  {
    id: 22,
    title: "Therapeutic Yoga for Healing",
    description: "Gentle therapeutic yoga for injury recovery and pain management. Individualized attention given.",
    teacherId: 10,
    style: "Therapeutic Yoga",
    level: "Beginner",
    dayOfWeek: "Wednesday",
    startTime: "14:00",
    duration: 60,
    location: "Grand Cayman",
    venue: "Bliss Yoga Studio",
    price: 30,
    maxCapacity: 10,
    availableSpots: 7,
    isRecurring: true,
  },
  {
    id: 23,
    title: "Community Baptiste Class",
    description: "Donation-based community class. All levels welcome. Pay what you can - nobody turned away.",
    teacherId: 10,
    style: "Baptiste",
    level: "All Levels",
    dayOfWeek: "Sunday",
    startTime: "10:00",
    duration: 60,
    location: "Grand Cayman",
    venue: "Public Beach Park",
    price: 15,
    maxCapacity: 50,
    availableSpots: 45,
    isRecurring: true,
  },
  // Beach Yoga Classes
  {
    id: 24,
    title: "Sunrise Beach Yoga",
    description: "Watch the sunrise while practicing yoga on Seven Mile Beach. Bring your own mat or towel.",
    teacherId: 1,
    style: "Vinyasa",
    level: "All Levels",
    dayOfWeek: "Thursday",
    startTime: "06:00",
    duration: 60,
    location: "Seven Mile Beach",
    venue: "Seven Mile Beach (Public Access)",
    price: 20,
    maxCapacity: 30,
    availableSpots: 25,
    isRecurring: true,
  },
  {
    id: 25,
    title: "Sunset Beach Meditation",
    description: "End your day with meditation and gentle stretching as the sun sets over the Caribbean.",
    teacherId: 3,
    style: "Meditation",
    level: "All Levels",
    dayOfWeek: "Friday",
    startTime: "17:45",
    duration: 45,
    location: "Seven Mile Beach",
    venue: "Seven Mile Beach (Public Access)",
    price: 18,
    maxCapacity: 40,
    availableSpots: 35,
    isRecurring: true,
  },
];

// Helper function to get teacher for a class
export function getTeacherForClass(classItem: YogaClass): Teacher | undefined {
  return teachers.find((teacher) => teacher.id === classItem.teacherId);
}

// Get classes by day of week
export function getClassesByDay(day: DayOfWeek): YogaClass[] {
  return classes.filter((c) => c.dayOfWeek === day).sort((a, b) => a.startTime.localeCompare(b.startTime));
}

// Get classes by teacher
export function getClassesByTeacher(teacherId: number): YogaClass[] {
  return classes.filter((c) => c.teacherId === teacherId);
}

// Get classes by style
export function getClassesByStyle(style: string): YogaClass[] {
  return classes.filter((c) => c.style.toLowerCase().includes(style.toLowerCase()));
}

// Get classes by location
export function getClassesByLocation(location: string): YogaClass[] {
  return classes.filter((c) => c.location.toLowerCase().includes(location.toLowerCase()));
}

// Get classes by time of day
export function getClassesByTimeOfDay(timeOfDay: "morning" | "afternoon" | "evening"): YogaClass[] {
  return classes.filter((c) => {
    const hour = parseInt(c.startTime.split(":")[0]);
    if (timeOfDay === "morning") return hour >= 5 && hour < 12;
    if (timeOfDay === "afternoon") return hour >= 12 && hour < 17;
    if (timeOfDay === "evening") return hour >= 17 || hour < 5;
    return false;
  });
}

// Get all unique styles from classes
export function getAllClassStyles(): string[] {
  return Array.from(new Set(classes.map((c) => c.style))).sort();
}

// Get all unique venues
export function getAllVenues(): string[] {
  return Array.from(new Set(classes.map((c) => c.venue))).sort();
}

// Get all unique locations from classes
export function getAllClassLocations(): string[] {
  return Array.from(new Set(classes.map((c) => c.location))).sort();
}

// Format time from 24h to 12h format
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

// Get class by ID
export function getClassById(id: number): YogaClass | undefined {
  return classes.find((c) => c.id === id);
}
