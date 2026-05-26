import { howItWorksSteps } from '@/data/data';
import React from 'react';

const HowItWorks = () => {

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How MediQueue Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your journey to better grades and deeper understanding is just three simple steps away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-teal-100 z-0"></div>

          {howItWorksSteps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shadow-teal-500/10 mb-6 border border-teal-50">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;