import React from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  GraduationCap,
  Award,
  Globe,
  ShieldCheck,
  User as UserIcon,
  Laptop,
  CalendarDays,
  Clock3,
  Clock,
} from "lucide-react";
import { fetchSingleTutor } from "@/data/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { TutorBookingModal } from "@/components/ui/TutorBookingModal";
import { Button } from "@heroui/react";

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const tutorData = await fetchSingleTutor(id, token);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-7xl mx-auto w-full grow flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-teal-50 shrink-0 bg-slate-100 flex items-center justify-center">
              {tutorData?.image ? (
                <Image
                  src={tutorData.image}
                  alt={tutorData?.name || "Tutor Profile"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              ) : (
                <UserIcon className="w-20 h-20 text-slate-300" />
              )}
            </div>

            <div className="grow text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center sm:justify-start gap-2">
                    {tutorData?.name || "Unknown Tutor"}
                    <ShieldCheck
                      className="w-6 h-6 text-teal-500"
                      title="Verified Tutor"
                    />
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>
                      {tutorData?.location || "Location not provided"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100 shrink-0 mx-auto sm:mx-0">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-amber-700">
                    {tutorData?.rating || "N/A"}
                  </span>
                  <span className="text-amber-600/70 text-sm">
                    ({tutorData?.reviews || 0} reviews)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg">
                  <Award className="w-5 h-5 text-teal-600 shrink-0" />
                  <span className="text-sm font-medium">
                    {tutorData?.experience || "Exp. unlisted"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg">
                  <Globe className="w-5 h-5 text-teal-600 shrink-0" />
                  <span className="text-sm font-medium line-clamp-1">
                    {tutorData?.languages?.[0] || "Language unlisted"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg col-span-2 sm:col-span-1">
                  <Laptop className="w-5 h-5 text-teal-600 shrink-0" />
                  <span className="text-sm font-medium">
                    {tutorData?.teachingMode || "Mode unlisted"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">
              About the Tutor
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {tutorData?.about ||
                "This tutor hasn't added an about section yet."}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" /> Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {tutorData?.subjects && tutorData.subjects.length > 0 ? (
                tutorData.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-teal-50 text-teal-700 font-medium rounded-xl border border-teal-100"
                  >
                    {subject}
                  </span>
                ))
              ) : (
                <span className="text-slate-500 italic">
                  No specific subjects listed.
                </span>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-teal-600" /> Availability &
              Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Days */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Available Days
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tutorData?.availableDays &&
                  tutorData.availableDays.length > 0 ? (
                    tutorData.availableDays.map((day, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200"
                      >
                        {day}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">
                      Days not specified.
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Time Slots
                </h3>
                <div className="flex flex-col gap-3">
                  {tutorData?.availableTimeSlots &&
                  tutorData.availableTimeSlots.length > 0 ? (
                    tutorData.availableTimeSlots.map((time, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-slate-700 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium"
                      >
                        <Clock3 className="w-4 h-4 text-teal-500" />
                        {time}
                      </div>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">
                      Time slots not specified.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-600" /> Education
              Background
            </h2>
            <div className="space-y-6">
              {tutorData?.education && tutorData.education.length > 0 ? (
                tutorData.education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mt-2"></div>
                      {index !== tutorData.education.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">
                        {edu?.degree || "Degree not specified"}
                      </h3>
                      <p className="text-teal-700 font-medium">
                        {edu?.institution || "Institution not specified"}
                      </p>
                      {edu?.year && (
                        <p className="text-slate-500 text-sm mt-1">
                          Class of {edu.year}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">
                  No education history has been added yet.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-teal-100 p-8 sticky top-25">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Book a Session
            </h2>

            <div className="mb-8">
              <p className="text-sm text-slate-500 font-medium mb-1">
                Hourly Rate
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">
                  ${tutorData?.hourlyFee || "0"}
                </span>
                <span className="text-slate-500 font-medium">/hr</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Next Session Date
                  </p>
                  <p className="font-bold text-slate-900 line-clamp-1">
                    {tutorData?.sessionDate || "Not scheduled"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Available Slots
                  </p>
                  <p className="font-bold text-slate-900">
                    {tutorData?.totalSlot !== undefined
                      ? tutorData.totalSlot
                      : "0"}{" "}
                    remaining
                  </p>
                </div>
              </div>
            </div>

            {tutorData?.totalSlot === 0 ? (
              <Button
                isDisabled
                className="w-full bg-teal-600 text-white font-semibold py-7 rounded-xl hover:bg-teal-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                <Clock className="w-5 h-5" />
                No Slots Available
              </Button>
            ) : (
              <TutorBookingModal
                tutorId={tutorData?._id}
                tutorName={tutorData?.name}
                tutorImage={tutorData?.image}
                sessionDate={tutorData?.sessionDate}
                studentEmail={session?.user.email}
                userId={session?.user.id}
              />
            )}

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
