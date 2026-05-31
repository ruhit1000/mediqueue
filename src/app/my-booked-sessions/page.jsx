import { fetchBookedSessions } from "@/data/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { CalendarX2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { BookedSessionCard } from "@/components/ui/BookedSessionCard";

const MyBookedSessionsPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const userId = user?.id;

  const allBookedSessions = (await fetchBookedSessions(userId, token)) || [];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          My Booked Sessions
        </h1>

        {allBookedSessions.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center justify-center max-w-2xl mx-auto mt-10">
            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <CalendarX2 className="w-10 h-10 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              No Sessions Booked Yet
            </h2>
            <p className="text-slate-500 mb-8 max-w-md">
              You haven't booked any tutoring sessions yet. Browse our list of
              expert tutors and start learning today!
            </p>
            <Link href="/tutors">
              <Button className="bg-teal-600 text-white font-semibold px-8 py-6 rounded-xl hover:bg-teal-700">
                Find a Tutor
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBookedSessions.map((booking) => (
              <BookedSessionCard
                key={booking._id}
                booking={booking}
                token={token}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookedSessionsPage;
