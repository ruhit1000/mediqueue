import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

const SearchAndFilterBar = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 mb-10">
      {/* Search Input */}
      <div className="relative grow">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Search by name, subject, or keywords..."
          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3">
        <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:outline-none focus:border-teal-500 cursor-pointer w-full md:w-auto">
          <option value="">All Subjects</option>
          <option value="physics">Physics</option>
          <option value="math">Mathematics</option>
          <option value="english">English</option>
          <option value="programming">Programming</option>
        </select>

        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shrink-0">
          <SlidersHorizontal className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
