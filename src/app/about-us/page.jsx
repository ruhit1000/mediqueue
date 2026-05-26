import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { stats, values } from '@/data/data';

const AboutUsPage = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Empowering Education <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-sky-400">
              Through Technology
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            MediQueue was built to solve a simple problem: finding and booking the right tutor shouldn't be harder than the subject you're trying to learn.
          </p>
        </div>
      </section>

      {/* Story & Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Bridging the Gap Between <span className="text-teal-600">Students and Experts</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Before MediQueue, students struggled with scattered directories, unverified tutors, and endless email chains just to find a time to meet. We set out to change that.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By integrating a smart scheduling system, digital session tokens, and a rigorous vetting process, we've created a platform where the only thing you have to focus on is learning.
              </p>
              <div className="pt-4">
                <Link 
                  href="/tutors" 
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  Meet Our Tutors <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-100 lg:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Students collaborating" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-teal-500/30">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The core principles that guide our platform and our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;