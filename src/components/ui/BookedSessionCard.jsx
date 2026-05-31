'use client';
import React from "react";
import Image from "next/image";
import { CalendarDays, Mail, Phone, Trash2, User } from "lucide-react";
import { CancelSessionAlert } from "./CancelSessionAlert";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const BookedSessionCard = ({ booking, token }) => {
  const router = useRouter();
  const formattedDate = new Date(booking.bookingDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const formattedSessionDate = new Date(booking.sessionDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const handleCancelBooking = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings/${booking._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();

      if (res.ok && data.deletedCount > 0) {
        toast.success("Session cancelled successfully!");
        setTimeout(() => {
          router.refresh();
        }, 1500);
      } else {
        toast.error(data.error || "Failed to cancel session.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while canceling.");
    }
  };

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
          <Link href={`/tutors/${booking.tutorId}`}>
            <h3 className="font-bold text-lg text-slate-900">
              {booking.tutorName}
            </h3>
          </Link>
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
          <CalendarDays className="w-4 h-4 text-slate-400" />
          <span>
            Session Date:{" "}
            <span className="font-medium text-slate-800">{formattedSessionDate}</span>
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
        <CancelSessionAlert tutorName={booking.tutorName} onConfirm={handleCancelBooking} />
      </div>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};
