import React from 'react';
import Link from 'next/link';
import TutorCard from '../ui/TutorCard';

const MOCK_TUTORS = [
  {
    _id: '1',
    name: 'Andrew Eadie',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    subjects: ['Mathematics', 'Physics'],
    location: 'Knowledge City (Online)',
    rating: 5,
    reviews: 12,
    hourlyFee: 35,
  },
  {
    _id: '2',
    name: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    subjects: ['Chemistry', 'Biology'],
    location: 'ED 45678 (Offline)',
    rating: 4.8,
    reviews: 24,
    hourlyFee: 40,
  },
  {
    _id: '3',
    name: 'Dr. Marcus Webb',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    subjects: ['Advanced Mathematics'],
    location: 'Knowledge City (Both)',
    rating: 4.9,
    reviews: 18,
    hourlyFee: 45,
  },
  {
    _id: '4',
    name: 'Emily Chen',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    subjects: ['Physics', 'Computer Science'],
    location: 'Remote (Online)',
    rating: 5,
    reviews: 31,
    hourlyFee: 30,
  },
  {
    _id: '5',
    name: 'James Harrison',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    subjects: ['English Literature', 'History'],
    location: 'ED 45678 (Offline)',
    rating: 4.7,
    reviews: 9,
    hourlyFee: 25,
  },
  {
    _id: '6',
    name: 'Dr. Olivia Patel',
    image: 'https://images.unsplash.com/photo-1594824476961-43e808f01b08?auto=format&fit=crop&q=80&w=400',
    subjects: ['Biology', 'Anatomy'],
    location: 'Knowledge City (Both)',
    rating: 5,
    reviews: 42,
    hourlyFee: 50,
  }
];

const AvailableTutors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Available Tutors
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our top-rated educators and book your next session instantly.
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TUTORS.map((tutor) => (
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