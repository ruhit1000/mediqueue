import { CalendarCheck, Search, Video, ShieldCheck, Clock, Ticket, GraduationCap, Target, BookOpen, Award } from "lucide-react";

export const howItWorksSteps = [
    {
      id: 1,
      icon: <Search className="w-8 h-8 text-teal-600" />,
      title: 'Find Your Tutor',
      description: 'Search our database of qualified tutors by subject, availability, and teaching mode.'
    },
    {
      id: 2,
      icon: <CalendarCheck className="w-8 h-8 text-teal-600" />,
      title: 'Book a Session',
      description: 'Select an available time slot. Our system ensures no double-booking conflicts.'
    },
    {
      id: 3,
      icon: <Video className="w-8 h-8 text-teal-600" />,
      title: 'Start Learning',
      description: 'Receive your digital session token and join your tutor online or in-person.'
    }
  ];

export const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      title: 'Verified Educators',
      description: 'Every tutor on our platform is vetted for academic excellence and teaching capability.'
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      title: 'Conflict-Free Scheduling',
      description: 'Our automated system updates slot availability in real-time to prevent overlapping bookings.'
    },
    {
      icon: <Ticket className="w-6 h-6 text-teal-600" />,
      title: 'Digital Session Tokens',
      description: 'Instant, secure digital tokens are generated for every confirmed class you book.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
      title: 'Flexible Learning',
      description: 'Choose between fully remote online sessions or offline, in-person mentoring.'
    }
  ];

export const stats = [
    { id: 1, label: 'Active Tutors', value: '500+' },
    { id: 2, label: 'Happy Students', value: '10,000+' },
    { id: 3, label: 'Sessions Completed', value: '50k+' },
    { id: 4, label: 'Subjects Covered', value: '120+' },
  ];

 export const values = [
    {
      id: 1,
      icon: <Target className="w-6 h-6 text-teal-600" />,
      title: 'Our Mission',
      description: 'To democratize access to high-quality education by connecting eager learners with expert educators seamlessly.'
    },
    {
      id: 2,
      icon: <BookOpen className="w-6 h-6 text-teal-600" />,
      title: 'Our Vision',
      description: 'A world where scheduling conflicts and geographical barriers no longer stand in the way of academic excellence.'
    },
    {
      id: 3,
      icon: <Award className="w-6 h-6 text-teal-600" />,
      title: 'Our Promise',
      description: 'We guarantee a secure, conflict-free booking experience with verified professionals who are passionate about teaching.'
    }
  ];