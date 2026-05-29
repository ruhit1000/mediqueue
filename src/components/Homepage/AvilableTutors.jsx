import React from 'react';
import Link from 'next/link';
import TutorCard from '../ui/TutorCard';
import { tutors } from '@/data/data';

const AvailableTutors = () => {

  const avilableTutors = tutors.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Available Tutors
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our top-rated educators and book your next session instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {avilableTutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/tutors"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-900 text-slate-900 font-semibold rounded-xl hover:bg-slate-900 hover:text-white transition-colors"
          >
            View All Tutors
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AvailableTutors;