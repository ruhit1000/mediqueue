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

export const tutors = [
  {
    _id: "tutor_001",
    name: "Dr. Marcus Webb",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    subjects: ["Calculus", "Linear Algebra", "Statistics"],
    location: "Knowledge City (Online & Offline)",
    rating: 4.8,
    reviews: 210,
    hourlyFee: 50,
    sessionDate: "2026-06-16",
    totalSlot: 3,
    experience: "12+ Years",
    languages: ["English (Native)", "French (Conversational)"],
    about:
      "I focus on making higher mathematics accessible and logical. With a background in applied math, I help students bridge the gap between theoretical concepts and real-world applications.",
    education: [
      {
        degree: "Ph.D. in Applied Mathematics",
        institution: "Princeton University",
        year: "2015",
      },
      {
        degree: "B.S. in Mathematics",
        institution: "University of Michigan",
        year: "2009",
      },
    ],
  },
  {
    _id: "tutor_002",
    name: "Emily Chen",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    subjects: ["Computer Science", "JavaScript", "React"],
    location: "Remote (Online)",
    rating: 5.0,
    reviews: 342,
    hourlyFee: 40,
    sessionDate: "2026-06-18",
    totalSlot: 8,
    experience: "6 Years",
    languages: ["English (Fluent)", "Mandarin (Native)"],
    about:
      "Former software engineer turned full-time educator. I specialize in modern web technologies and love helping beginners build their first full-stack applications.",
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Georgia Tech",
        year: "2020",
      },
      {
        degree: "B.S. in Software Engineering",
        institution: "Tsinghua University",
        year: "2018",
      },
    ],
  },
  {
    _id: "tutor_003",
    name: "James Harrison",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    subjects: ["English Literature", "Creative Writing", "History"],
    location: "ED 45678 (Offline)",
    rating: 4.7,
    reviews: 89,
    hourlyFee: 35,
    sessionDate: "2026-06-15",
    totalSlot: 2,
    experience: "8 Years",
    languages: ["English (Native)"],
    about:
      "Passionate about classic literature and effective communication. I guide students through literary analysis, essay structuring, and historical context with engaging, discussion-based sessions.",
    education: [
      {
        degree: "M.A. in English Literature",
        institution: "Oxford University",
        year: "2016",
      },
      {
        degree: "B.A. in History",
        institution: "King's College London",
        year: "2014",
      },
    ],
  },
  {
    _id: "tutor_004",
    name: "Dr. Olivia Patel",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=800",
    subjects: ["Biology", "Anatomy", "Chemistry"],
    location: "Knowledge City (Both)",
    rating: 4.9,
    reviews: 412,
    hourlyFee: 55,
    sessionDate: "2026-06-17",
    totalSlot: 1,
    experience: "15 Years",
    languages: ["English (Native)", "Hindi (Fluent)"],
    about:
      "I utilize visual aids and practical examples to simplify complex biological systems. Preparing pre-med students for rigorous academic challenges is my specialty.",
    education: [
      { degree: "M.D.", institution: "Johns Hopkins University", year: "2011" },
      { degree: "B.S. in Biochemistry", institution: "UCLA", year: "2007" },
    ],
  },
  {
    _id: "tutor_005",
    name: "Carlos Mendez",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    subjects: ["Spanish", "Linguistics", "World History"],
    location: "Remote (Online)",
    rating: 4.6,
    reviews: 156,
    hourlyFee: 30,
    sessionDate: "2026-06-19",
    totalSlot: 6,
    experience: "5 Years",
    languages: [
      "Spanish (Native)",
      "English (Fluent)",
      "Portuguese (Conversational)",
    ],
    about:
      "Learning a language should be immersive and fun. My classes focus heavily on conversational practice, cultural context, and building confidence in real-world speaking scenarios.",
    education: [
      {
        degree: "M.A. in Applied Linguistics",
        institution: "University of Barcelona",
        year: "2021",
      },
      {
        degree: "B.A. in Education",
        institution: "University of Madrid",
        year: "2019",
      },
    ],
  },
  {
    _id: "tutor_006",
    name: "Anita Desai",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    subjects: ["Economics", "Business Studies", "Finance"],
    location: "Knowledge City (Offline)",
    rating: 4.9,
    reviews: 280,
    hourlyFee: 60,
    sessionDate: "2026-06-20",
    totalSlot: 4,
    experience: "9 Years",
    languages: ["English (Native)", "Gujarati (Native)"],
    about:
      "I bring corporate experience into the classroom, helping students understand macroeconomic trends and financial modeling through real-time market data and case studies.",
    education: [
      { degree: "MBA", institution: "Harvard Business School", year: "2018" },
      {
        degree: "B.S. in Economics",
        institution: "London School of Economics",
        year: "2014",
      },
    ],
  },
  {
    _id: "tutor_007",
    name: "David Kim",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    subjects: ["Physics", "Robotics", "Python"],
    location: "Remote (Online)",
    rating: 4.8,
    reviews: 195,
    hourlyFee: 45,
    sessionDate: "2026-06-16",
    totalSlot: 5,
    experience: "7 Years",
    languages: ["English (Fluent)", "Korean (Native)"],
    about:
      "I integrate programming with physics concepts. Students don't just learn formulas; they write Python scripts to simulate the physical systems we study.",
    education: [
      {
        degree: "M.S. in Mechanical Engineering",
        institution: "KAIST",
        year: "2019",
      },
      {
        degree: "B.S. in Physics",
        institution: "Seoul National University",
        year: "2017",
      },
    ],
  },
  {
    _id: "tutor_008",
    name: "Sophie Laurent",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    subjects: ["Art History", "Fine Arts", "Design"],
    location: "ED 45678 (Both)",
    rating: 4.7,
    reviews: 112,
    hourlyFee: 35,
    sessionDate: "2026-06-21",
    totalSlot: 7,
    experience: "11 Years",
    languages: ["English (Fluent)", "French (Native)"],
    about:
      "Art is a reflection of society. I teach students how to critically analyze visual mediums, understand historical movements, and develop their own artistic portfolios.",
    education: [
      {
        degree: "MFA in Fine Arts",
        institution: "École des Beaux-Arts",
        year: "2015",
      },
      {
        degree: "B.A. in Art History",
        institution: "Sorbonne University",
        year: "2012",
      },
    ],
  },
  {
    _id: "tutor_009",
    name: "Ahmed Al-Farsi",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    subjects: ["Organic Chemistry", "Biochemistry"],
    location: "Knowledge City (Online & Offline)",
    rating: 4.9,
    reviews: 305,
    hourlyFee: 50,
    sessionDate: "2026-06-17",
    totalSlot: 2,
    experience: "14 Years",
    languages: ["English (Fluent)", "Arabic (Native)"],
    about:
      "Organic chemistry is like solving a puzzle. I teach students how to recognize patterns in molecular structures and reaction mechanisms rather than relying on pure memorization.",
    education: [
      {
        degree: "Ph.D. in Organic Chemistry",
        institution: "University of Cambridge",
        year: "2013",
      },
      {
        degree: "B.S. in Chemistry",
        institution: "American University of Beirut",
        year: "2008",
      },
    ],
  },
  {
    _id: "tutor_010",
    name: "Rachel Green",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
    subjects: ["Psychology", "Sociology", "Research Methods"],
    location: "Remote (Online)",
    rating: 4.8,
    reviews: 175,
    hourlyFee: 40,
    sessionDate: "2026-06-18",
    totalSlot: 10,
    experience: "6 Years",
    languages: ["English (Native)"],
    about:
      "I help students understand human behavior and societal structures. My tutoring focuses heavily on applying research methodologies to real-world social phenomena.",
    education: [
      {
        degree: "M.A. in Clinical Psychology",
        institution: "NYU",
        year: "2020",
      },
      {
        degree: "B.A. in Psychology",
        institution: "Boston University",
        year: "2018",
      },
    ],
  },
];
