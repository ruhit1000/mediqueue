import { features } from '@/data/data';
import Link from 'next/link';
import React from 'react';

const Features = () => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text content */}
          <div>
            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Why Choose MediQueue</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              A Smarter Way to Manage Your Education
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We eliminate the friction of traditional tutoring. No more back-and-forth emails, missed messages, or scheduling headaches. Just seamless connections between eager students and expert tutors.
            </p>
            <Link href="/about-us" className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition-colors">
              Learn More About Us
            </Link>
          </div>

          {/* Right Side: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-teal-100 hover:bg-teal-50/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;