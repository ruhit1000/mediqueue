import React from "react";
import TutorCard from "@/components/ui/TutorCard";
import SearchAndFilterBar from "@/components/ui/SearchAndFilterBar";
import { allTutors } from "@/data/data";

const TutorsPage = async () => {

  const tutors = await allTutors();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Find Your Perfect Tutor
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Browse our verified educators, filter by subject or availability,
            and book your next learning session instantly.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <SearchAndFilterBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorsPage;
