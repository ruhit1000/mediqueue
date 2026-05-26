import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Banner() {

  return (
    <div
      id="banner-static"
      className="relative h-120 sm:h-135 overflow-hidden bg-slate-900"
    >
      <Image
        src={"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"}
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />

      <div
        className='absolute inset-0 bg-linear-to-r from-emerald-700/60 to-slate-900/80 backdrop-brightness-[0.45]'
      />

      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-6 text-white z-10">
          <span
            className='inline-block px-3 py-1 rounded-full text-xs font-extrabold tracking-widest uppercase bg-teal-500/20 border border-teal-500/50 font-mono text-emerald-300'
          >
            Expert Tutors
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Find Your Perfect Tutor with MediQueue
          </h2>
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
            Browse available tutors and book online learning sessions based on your preferred subjects, such as Mathematics and Physics, and your time availability.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="/tutors"
              className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm"
            >
              Discover Tutors <ChevronRight className="h-4 w-4" />
            </Link>
            
            <a
              href="#academic-specialties"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 transition-all font-semibold rounded-xl text-sm"
            >
              Learn Specialties
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}