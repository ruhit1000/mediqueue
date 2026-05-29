import { MapPin, Star, Award, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TutorCard = ({ tutor }) => {
  return (
    <div
      key={tutor._id}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group"
    >
      <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
        <Image
          src={tutor.image}
          alt={tutor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 line-clamp-1">
            {tutor.name}
          </h3>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md shrink-0">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-amber-700">
              {tutor.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
          <MapPin className="w-4 h-4 text-teal-500 shrink-0" />
          <span className="truncate">{tutor.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
          <div className="flex items-center gap-1.5 border-r border-slate-200 pr-4">
            <Award className="w-4 h-4 text-teal-600" />
            <span className="font-medium">{tutor.experience}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-teal-600" />
            <span className="font-medium">{tutor.totalSlot} Slots left</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tutor.subjects.slice(0, 3).map((subject, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
            >
              {subject}
            </span>
          ))}
          {tutor.subjects.length > 3 && (
            <span className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-200">
              +{tutor.subjects.length - 3}
            </span>
          )}
        </div>

        <div className="grow"></div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-black text-slate-900">
              ${tutor.hourlyFee}
            </span>
            <span className="text-slate-500 text-sm">/hr</span>
          </div>

          <Link
            href={`/tutors/${tutor._id}`}
            className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-sm"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
