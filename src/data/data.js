import {
  CalendarCheck,
  Search,
  Video,
  ShieldCheck,
  Clock,
  Ticket,
  GraduationCap,
  Target,
  BookOpen,
  Award,
} from "lucide-react";

export const howItWorksSteps = [
  {
    id: 1,
    icon: <Search className="w-8 h-8 text-teal-600" />,
    title: "Find Your Tutor",
    description:
      "Search our database of qualified tutors by subject, availability, and teaching mode.",
  },
  {
    id: 2,
    icon: <CalendarCheck className="w-8 h-8 text-teal-600" />,
    title: "Book a Session",
    description:
      "Select an available time slot. Our system ensures no double-booking conflicts.",
  },
  {
    id: 3,
    icon: <Video className="w-8 h-8 text-teal-600" />,
    title: "Start Learning",
    description:
      "Receive your digital session token and join your tutor online or in-person.",
  },
];

export const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
    title: "Verified Educators",
    description:
      "Every tutor on our platform is vetted for academic excellence and teaching capability.",
  },
  {
    icon: <Clock className="w-6 h-6 text-teal-600" />,
    title: "Conflict-Free Scheduling",
    description:
      "Our automated system updates slot availability in real-time to prevent overlapping bookings.",
  },
  {
    icon: <Ticket className="w-6 h-6 text-teal-600" />,
    title: "Digital Session Tokens",
    description:
      "Instant, secure digital tokens are generated for every confirmed class you book.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
    title: "Flexible Learning",
    description:
      "Choose between fully remote online sessions or offline, in-person mentoring.",
  },
];

export const stats = [
  { id: 1, label: "Active Tutors", value: "500+" },
  { id: 2, label: "Happy Students", value: "10,000+" },
  { id: 3, label: "Sessions Completed", value: "50k+" },
  { id: 4, label: "Subjects Covered", value: "120+" },
];

export const values = [
  {
    id: 1,
    icon: <Target className="w-6 h-6 text-teal-600" />,
    title: "Our Mission",
    description:
      "To democratize access to high-quality education by connecting eager learners with expert educators seamlessly.",
  },
  {
    id: 2,
    icon: <BookOpen className="w-6 h-6 text-teal-600" />,
    title: "Our Vision",
    description:
      "A world where scheduling conflicts and geographical barriers no longer stand in the way of academic excellence.",
  },
  {
    id: 3,
    icon: <Award className="w-6 h-6 text-teal-600" />,
    title: "Our Promise",
    description:
      "We guarantee a secure, conflict-free booking experience with verified professionals who are passionate about teaching.",
  },
];

export const bannerData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
    badge: "Expert Tutors",
    title: "Find Your Perfect Tutor with MediQueue",
    description:
      "Browse available tutors and book online learning sessions based on your preferred subjects, such as Mathematics and Physics, and your time availability.",
    gradient: "from-emerald-700/60 to-slate-900/80",
    badgeColor: "text-emerald-300 bg-teal-500/20 border-teal-500/50",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&q=80&w=1200",
    badge: "Flexible Learning",
    title: "Choose Your Preferred Learning Mode",
    description:
      "Whether you thrive in online virtual classrooms or prefer traditional offline, in-person sessions, easily filter tutors to match your learning style.",
    gradient: "from-sky-700/60 to-slate-900/80",
    badgeColor: "text-sky-300 bg-sky-500/20 border-sky-500/50",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200",
    badge: "Smart Booking",
    title: "Conflict-Free Scheduling System",
    description:
      "Our automated platform ensures you never double-book. Secure your time slots instantly and receive digital session tokens for confirmed classes.",
    gradient: "from-indigo-700/60 to-slate-900/80",
    badgeColor: "text-indigo-300 bg-indigo-500/20 border-indigo-500/50",
  },
];

export const featuredTutors = async (token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/featured-tutors`,
      {
        cache: "no-store",
      },
    );
    if (!res.ok) {
      console.error("Failed to fetch featured tutors");
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching featured tutors:", error);
    return [];
  }
};

export const allTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
    cache: "no-store",
  });
  const data = (await res.json()) || [];
  return data;
};

export const selectedTutor = async (id, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      console.error(`Failed to fetch tutor with id ${id}`);
      return {};
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching selected tutor:", error);
    return {};
  }
};
