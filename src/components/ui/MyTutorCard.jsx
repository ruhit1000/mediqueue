import React from "react";
import Image from "next/image";
import {
  BookOpen,
  MapPin,
  Star,
  Trash2,
  Edit,
  DollarSign,
  Users,
} from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";

export const MyTutorCard = ({ tutor }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={tutor.image || "/placeholder-avatar.png"}
          alt={tutor.name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-xl object-cover border border-slate-100 shadow-sm"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-900 leading-tight">
            {tutor.name}
          </h3>

          <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate max-w-37.5">{tutor.location}</span>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold">
              <Star className="w-4 h-4 fill-amber-500" />
              <span>{tutor.rating || 0}</span>
              <span className="text-slate-400 font-normal">
                ({tutor.reviews || 0})
              </span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-medium px-2 py-0.5 bg-teal-50 text-teal-700 rounded-md">
              {tutor.teachingMode}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6 flex-1">
        <div className="flex items-start gap-2 text-sm text-slate-600">
          <BookOpen className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
          <div className="flex flex-wrap gap-1">
            {tutor.subjects?.slice(0, 3).map((subject, idx) => (
              <span
                key={idx}
                className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-xs"
              >
                {subject}
              </span>
            ))}
            {tutor.subjects?.length > 3 && (
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-xs">
                +{tutor.subjects.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Hourly Fee</span>
              <span className="font-semibold text-slate-800">
                ${tutor.hourlyFee}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-400" />
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Available Slots</span>
              <span className="font-semibold text-slate-800">
                {tutor.totalSlot}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto">
        <Button
          variant="flat"
          className="w-full bg-teal-50 text-teal-700 hover:bg-teal-100 font-semibold flex items-center justify-center gap-2"
        >
          <Edit className="w-4 h-4" />
          Update
        </Button>

        <Button
          variant="flat"
          color="danger"
          className="w-full bg-red-50 text-red-600 hover:bg-red-100 font-semibold flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </Button>
      </div>
    </div>
  );
};
