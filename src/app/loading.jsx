import React from 'react';
import { GraduationCap, Loader2 } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      
      <div className="relative flex items-center justify-center mb-8">
        
        <div className="absolute inset-0 w-24 h-24 -m-4 rounded-full border-4 border-teal-100 border-t-teal-600 animate-spin"></div>
        
        <div className="bg-white p-4 rounded-full shadow-md z-10 animate-pulse relative">
          <GraduationCap className="w-8 h-8 text-teal-600" />
        </div>
        
      </div>

      <div className="text-center space-y-3">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          MediQueue
        </h2>
        
        <div className="flex items-center justify-center gap-2 text-slate-500 font-medium bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm text-sm">
          <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
          <span>Preparing your learning experience...</span>
        </div>
      </div>

    </div>
  );
};

export default LoadingPage;