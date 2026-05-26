import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TutorCard = ({ tutor }) => {
  return (
    <div
      key={tutor._id}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Tutor Image */}
      <div className="relative h-64 w-full bg-slate-200">
        <Image
          src={tutor.image}
          alt={tutor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Body (flex-grow keeps footer at the bottom) */}
      <div className="p-6 flex flex-col grow">
        {/* Header: Name & Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900">{tutor.name}</h3>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-amber-700">
              {tutor.rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
          <MapPin className="w-4 h-4 text-teal-500" />
          <span>{tutor.location}</span>
        </div>

        {/* Subjects Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tutor.subjects.map((subject, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
            >
              {subject}
            </span>
          ))}
        </div>

        {/* Spacer to push footer to bottom */}
        <div className="grow"></div>

        {/* Footer: Price & Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div>
            <span className="text-2xl font-black text-slate-900">
              ${tutor.hourlyFee}
            </span>
            <span className="text-slate-500 text-sm">/hr</span>
          </div>

          <Link
            href={`/tutors/${tutor._id}`}
            className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
          >
            Book Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
