export interface Teacher {
  id: number;
  slug: string;
  name: string;
  specialty: string;
  location: string;
  experience: string;
  image: string;
  website: string;
  description: string;
  styles: string[];
  email?: string;
  phone?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

// Real teacher data from Cayman Islands yoga community
export const teachers: Teacher[] = [
  {
    id: 1,
    slug: "danielle-gentilcore",
    name: "Danielle Gentilcore",
    specialty: "Vinyasa & Restorative Yoga",
    location: "Grand Cayman",
    experience: "13+ years",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    website: "https://gentilcoreyoga.com",
    description: "E-RYT 200 with 5000+ teaching hours. Born in New Jersey, elite gymnast turned yogi. Discovered yoga gazing at Caribbean horizons. Offers power vinyasa, beginner, restorative, private & group classes. Heart-centered teaching emphasizing breath, alignment & introspective journey. Red Cross certified Water Safety & CPR instructor. Philosophy: 'Breath, Live, Discover.'",
    styles: ["Power Vinyasa", "Restorative", "Hatha", "Private Sessions"]
  },
  {
    id: 2,
    slug: "janelle",
    name: "Janelle",
    specialty: "Baptiste Power Vinyasa",
    location: "Seven Mile Beach",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "E-RYT 200, Baptiste Certified. Director of Bliss Yoga with 10+ years teaching experience. Trained in Baptiste, Anusara, Hatha & Ashtanga systems. Specializes in dynamic, uplifting Baptiste Style Vinyasa. Active community volunteer supporting marathons, cancer foundations & local charities.",
    styles: ["Baptiste Vinyasa", "Hot Yoga", "Power Yoga"]
  },
  {
    id: 3,
    slug: "mirabelle-dcunha",
    name: "Mirabelle D'Cunha",
    specialty: "Pranayama & Bhakti Yoga",
    location: "Grand Cayman",
    experience: "19 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    website: "https://www.nationalgallery.org.ky/wellness/instructors/",
    description: "Yoga Alliance panelist & teacher with 19 years practice. Studied with gurus in the Himalayas & Mumbai University. Taught at ashrams & studios across India, USA, Canada, Bahamas, Bermuda & Cayman Islands. Specializes in pranayama, bhakti yoga, corporate breathwork & peak performance. Focuses on 'inner experience' helping clients find purpose & joy.",
    styles: ["Pranayama", "Bhakti Yoga", "Corporate Yoga", "Peak Performance"]
  },
  {
    id: 4,
    slug: "chantelle",
    name: "Chantelle",
    specialty: "Kripalu Vinyasa",
    location: "Grand Cayman",
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "E-RYT 200, 500-hour Professional Level certified from Kripalu Center for Yoga & Health (Massachusetts). Creates vinyasa flows linking breath with movement. Focuses on energy systems (prana) & healing. Known for creative sequencing that honors body's wisdom.",
    styles: ["Kripalu", "Vinyasa Flow", "Energy Work"]
  },
  {
    id: 5,
    slug: "rachel-whitfield",
    name: "Rachel Whitfield",
    specialty: "Power Vinyasa",
    location: "Grand Cayman",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "200-hour Hatha trained plus two 100-hour Power Vinyasa certifications. Moved to Grand Cayman in 2010 to teach yoga after discovering practice in NYC. Emphasizes strength & structure in dynamic Power Vinyasa style. Trained with master teachers in multiple workshops.",
    styles: ["Power Vinyasa", "Hatha", "Strength-Based"]
  },
  {
    id: 6,
    slug: "janine-martins",
    name: "Janine Martins",
    specialty: "Multi-Style Yoga & Reiki",
    location: "Grand Cayman",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
    website: "https://www.nationalgallery.org.ky/wellness/instructors/",
    description: "Cayman-born instructor with formal yoga & reiki training from Tirisula Yoga (Singapore & Bali). Discovered yoga's transformative effects during university. Teaches Hatha, Vinyasa, Kundalini, Yin & Restorative. Specializes in customized sessions helping clients 'slow down & breathe.'",
    styles: ["Hatha", "Vinyasa", "Kundalini", "Yin", "Restorative"]
  },
  {
    id: 7,
    slug: "jeri-bovell",
    name: "Jeri Bovell",
    specialty: "Holistic Wellness & Asana",
    location: "Grand Cayman",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    website: "https://www.nationalgallery.org.ky/wellness/instructors/",
    description: "Trained at White Lotus Foundation (San Diego) & Bliss Living Yoga (2013). Studies herbal medicine at master's level. Combines yoga practice with holistic wellness approach integrating asana practice with herbal wisdom.",
    styles: ["Hatha", "Holistic Wellness", "Herbal Medicine"]
  },
  {
    id: 8,
    slug: "nicki",
    name: "Nicki",
    specialty: "Jivamukti Yoga",
    location: "Grand Cayman",
    experience: "25+ years",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "Yoga Alliance 200-hour & 300-hour Jivamukti Yoga certified. Practicing since 1999. Trained with Sharon Gannon & David Life (workshops in Hong Kong). Emphasizes 'love, truth & compassion for all beings.' Advocates compassion as key to peaceful existence.",
    styles: ["Jivamukti", "Vinyasa", "Philosophy-Based"]
  },
  {
    id: 9,
    slug: "lindsay",
    name: "Lindsay",
    specialty: "Baptiste Power Yoga",
    location: "Grand Cayman",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "Baptiste Trained (200 hours), Baron Baptiste Level 1 (2006). Discovered yoga through surfing injury 7+ years ago. Mentored by Janelle. Specializes in Baptiste Power Yoga with focus on transformation & empowerment.",
    styles: ["Baptiste Power Yoga", "Athletic Yoga"]
  },
  {
    id: 10,
    slug: "mark",
    name: "Mark",
    specialty: "Baptiste Yoga",
    location: "Grand Cayman",
    experience: "28+ years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    website: "https://blissyogacayman.com",
    description: "Baptiste Trained (200 hours). Began yoga in 1996 for injury recovery from triathlons. Studied under Marni Task, Baron Baptiste, Manju Jois, David Belz & others. Values community connection & transformational power of practice.",
    styles: ["Baptiste", "Therapeutic Yoga", "Community-Focused"]
  }
];

// Helper functions for filtering and searching
export function searchTeachers(query: string): Teacher[] {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) return teachers;

  return teachers.filter((teacher) => {
    return (
      teacher.name.toLowerCase().includes(lowerQuery) ||
      teacher.specialty.toLowerCase().includes(lowerQuery) ||
      teacher.location.toLowerCase().includes(lowerQuery) ||
      teacher.description.toLowerCase().includes(lowerQuery) ||
      teacher.styles.some((style) => style.toLowerCase().includes(lowerQuery))
    );
  });
}

export function filterTeachersByStyle(style: string): Teacher[] {
  if (!style) return teachers;

  const lowerStyle = style.toLowerCase();

  return teachers.filter((teacher) =>
    teacher.styles.some((s) => s.toLowerCase().includes(lowerStyle))
  );
}

export function filterTeachersByLocation(location: string): Teacher[] {
  if (!location) return teachers;

  const lowerLocation = location.toLowerCase();

  return teachers.filter((teacher) =>
    teacher.location.toLowerCase().includes(lowerLocation)
  );
}

export function getTeacherBySlug(slug: string): Teacher | undefined {
  return teachers.find((teacher) => teacher.slug === slug);
}

export function getAllTeacherSlugs(): string[] {
  return teachers.map((teacher) => teacher.slug);
}

// Get all unique yoga styles across all teachers
export function getAllYogaStyles(): string[] {
  const stylesSet = new Set<string>();
  teachers.forEach((teacher) => {
    teacher.styles.forEach((style) => stylesSet.add(style));
  });
  return Array.from(stylesSet).sort();
}

// Get all unique locations
export function getAllLocations(): string[] {
  const locationsSet = new Set<string>();
  teachers.forEach((teacher) => locationsSet.add(teacher.location));
  return Array.from(locationsSet).sort();
}
