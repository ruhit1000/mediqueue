import React from "react";
import Image from "next/image";
import { CalendarDays, Mail, Phone, Trash2, User } from "lucide-react"; // Added User icon
import { Button } from "@heroui/react";

export const BookedSessionCard = ({ booking }) => {
  const formattedDate = new Date(booking.bookingDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-5 pb-5 border-b border-slate-100">
        <Image
          src={booking.tutorImage}
          alt={booking.tutorName}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover border-2 border-teal-50"
        />
        <div>
          <h3 className="font-bold text-lg text-slate-900">
            {booking.tutorName}
          </h3>
          <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full mt-1">
            {booking.status}
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <User className="w-4 h-4 text-slate-400" />
          <span>
            Student:{" "}
            <span className="font-medium text-slate-800">
              {booking.studentName}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <CalendarDays className="w-4 h-4 text-slate-400" />
          <span>
            Booked on:{" "}
            <span className="font-medium text-slate-800">{formattedDate}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <Phone className="w-4 h-4 text-slate-400" />
          <span>{booking.phone}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <Mail className="w-4 h-4 text-slate-400" />
          <span className="truncate">{booking.studentEmail}</span>
        </div>
      </div>

      <div className="pt-2">
        <Button
          variant="flat"
          color="danger"
          className="w-full bg-red-50 text-red-600 hover:bg-red-100 font-semibold"
        >
          <Trash2 className="w-4 h-4" />
          Cancel Session
        </Button>
      </div>
    </div>
  );
};
