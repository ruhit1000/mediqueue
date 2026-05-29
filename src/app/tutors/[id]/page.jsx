import React from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Clock,
  GraduationCap,
  Award,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@heroui/react";

// Fake Data Object
const tutorData = {
  _id: "tutor_001",
  name: "Dr. Sarah Jenkins",
  image:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  subjects: ["Physics", "Advanced Mathematics", "Quantum Mechanics"],
  location: "Knowledge City (Online & Offline)",
  rating: 4.9,
  reviews: 128,
  hourlyFee: 45,
  sessionDate: "2026-06-15",
  totalSlot: 5,
  experience: "10+ Years",
  languages: ["English (Native)", "Spanish (Fluent)"],
  about:
    "With over 10 years of experience in higher education, I specialize in breaking down complex physical concepts into intuitive, easy-to-understand lessons. My goal is to foster a deep understanding and appreciation for the sciences, helping students not just pass their exams, but truly master the material. I believe in interactive, problem-based learning customized to each student's pace.",
  education: [
    {
      degree: "Ph.D. in Theoretical Physics",
      institution: "Massachusetts Institute of Technology",
      year: "2018",
    },
    {
      degree: "M.S. in Applied Mathematics",
      institution: "Stanford University",
      year: "2014",
    },
    {
      degree: "B.S. in Physics",
      institution: "University of California, Berkeley",
      year: "2012",
    },
  ],
};

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const handleBookSession = () => {
    // TODO: Add booking logic here
    console.log("Booking session for:", tutorData._id);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-7xl mx-auto w-full grow flex flex-col lg:flex-row gap-8">
        {/* Left Column: Tutor Information (Scrollable/Main Content) */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-teal-50 shrink-0">
              <Image
                src={tutorData.image}
                alt={tutorData.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>

            <div className="grow text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center sm:justify-start gap-2">
                    {tutorData.name}
                    <ShieldCheck
                      className="w-6 h-6 text-teal-500"
                      title="Verified Tutor"
                    />
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{tutorData.location}</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 shrink-0 mx-auto sm:mx-0">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-amber-700">
                    {tutorData.rating}
                  </span>
                  <span className="text-amber-600/70 text-sm">
                    ({tutorData.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium">
                    {tutorData.experience} Exp.
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium">
                    {tutorData.languages[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">
              About the Tutor
            </h2>
            <p className="text-slate-600 leading-relaxed">{tutorData.about}</p>
          </div>

          {/* Subjects Expertise */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" /> Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {tutorData.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-teal-50 text-teal-700 font-medium rounded-xl border border-teal-100"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Education Background */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-600" /> Education
              Background
            </h2>
            <div className="space-y-6">
              {tutorData.education.map((edu, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
                    {index !== tutorData.education.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {edu.degree}
                    </h3>
                    <p className="text-teal-700 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                      Class of {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-teal-100 p-8 sticky top-25">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Book a Session
            </h2>

            {/* Price */}
            <div className="mb-8">
              <p className="text-sm text-slate-500 font-medium mb-1">
                Hourly Rate
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">
                  ${tutorData.hourlyFee}
                </span>
                <span className="text-slate-500 font-medium">/hr</span>
              </div>
            </div>

            {/* Session Info Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Next Session Date
                  </p>
                  <p className="font-bold text-slate-900">
                    {tutorData.sessionDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Available Slots
                  </p>
                  <p className="font-bold text-slate-900">
                    {tutorData.totalSlot} remaining
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              className="w-full bg-teal-600 text-white font-semibold py-7 rounded-xl hover:bg-teal-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg"
            >
              <Clock className="w-5 h-5" />
              Book Now
            </Button>

            <p className="text-center text-xs text-slate-400 mt-4">
              You won't be charged yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;
