"use client";

import React, { useState } from "react";
import {
  User,
  BookOpen,
  CalendarDays,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  DollarSign,
  Image as ImageIcon,
  Languages,
  FileText,
  LayoutDashboard,
} from "lucide-react";
import { Button, Spinner } from "@heroui/react";
import { toast, ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";

const AddTutorPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic State for Education
  const [educationList, setEducationList] = useState([
    { degree: "", institution: "", year: "" },
  ]);

  // --- Education Handlers ---
  const handleAddEducation = () =>
    setEducationList([
      ...educationList,
      { degree: "", institution: "", year: "" },
    ]);
  const handleRemoveEducation = (index) =>
    setEducationList(educationList.filter((_, i) => i !== index));
  const handleEducationChange = (index, field, value) => {
    const newList = [...educationList];
    newList[index][field] = value;
    setEducationList(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    // Merging the flat form data with our dynamic arrays and specific data types
    const newTutorData = {
      name: userData.name,
      image: userData.image,
      location: userData.location,
      teachingMode: userData.teachingMode,
      sessionDate: userData.sessionDate,
      hourlyFee: Number(userData.hourlyFee),
      totalSlot: Number(userData.totalSlot),
      experience: userData.experience,
      about: userData.about,

      // Formatting specific fields (Splitting by comma and removing extra spaces/empty strings)
      subjects: userData.subjects
        .split(",")
        .map((sub) => sub.trim())
        .filter(Boolean),
      languages: userData.languages
        .split(",")
        .map((lang) => lang.trim())
        .filter(Boolean),
      availableTimeSlots: [userData.timeSlot],

      // Object.fromEntries destroys checkbox arrays, so we must use getAll()
      availableDays: formData.getAll("availableDays"),

      // Pulling from React State (filtering out empty ones just in case)
      education: educationList.filter((edu) => edu.degree.trim() !== ""),

      // Default Stats for a new tutor
      rating: 0,
      reviews: 0,
    };

    setTimeout(() => {
      toast.success("Tutor added successfully!");
      setIsSubmitting(false);
      e.target.reset();
      redirect("/tutors");
      setEducationList([{ degree: "", institution: "", year: "" }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-3">
            <LayoutDashboard className="w-8 h-8 text-teal-600" />
            Add New Tutor
          </h1>
          <p className="text-slate-500 mt-2">
            Create a new tutor profile to offer learning sessions to students.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
              <User className="w-5 h-5 text-teal-600" /> Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tutor Name *
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="e.g. Dr. Sarah Jenkins"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Photo URL *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <ImageIcon className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    required
                    name="image"
                    type="url"
                    placeholder="https://..."
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Location (City/Area) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    required
                    name="location"
                    type="text"
                    placeholder="e.g. Dhaka, Chittagong"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subjects (Comma separated) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <BookOpen className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    required
                    name="subjects"
                    type="text"
                    placeholder="e.g. Mathematics, Physics, Chemistry"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Scheduling & Fees */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-teal-600" /> Schedule &
              Booking Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Teaching Mode *
                </label>
                <select
                  required
                  name="teachingMode"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-700 appearance-none"
                >
                  <option value="">Select mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Both">Both (Online & Offline)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Session Start Date *
                </label>
                <input
                  required
                  name="sessionDate"
                  type="date"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-700"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Available Time Slot *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    required
                    name="timeSlot"
                    type="text"
                    placeholder="e.g. 5:00 PM - 8:00 PM"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Available Days *
                </label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {[
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ].map((day) => (
                    <label
                      key={day}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="availableDays"
                        value={day}
                        className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
                      />
                      <span className="text-sm text-slate-700">
                        {day.slice(0, 3)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Hourly Fee ($) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    required
                    name="hourlyFee"
                    type="number"
                    min="0"
                    placeholder="e.g. 40"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Total Slots Available *
                </label>
                <input
                  required
                  name="totalSlot"
                  type="number"
                  min="1"
                  placeholder="e.g. 10"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Professional Details */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-teal-600" /> Professional
              Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Experience *
                </label>
                <input
                  required
                  name="experience"
                  type="text"
                  placeholder="e.g. 5+ Years"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Languages (Comma separated) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Languages className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    required
                    name="languages"
                    type="text"
                    placeholder="e.g. English, Bengali"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              {/* Dynamic Education Section */}
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-slate-400" />{" "}
                    Education History
                  </label>
                  <button
                    type="button"
                    onClick={handleAddEducation}
                    className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg hover:bg-teal-100 transition-colors"
                  >
                    + Add Another Degree
                  </button>
                </div>

                {educationList.map((edu, index) => (
                  <div
                    key={`edu-${index}`}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl relative"
                  >
                    {educationList.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveEducation(index)}
                        className="absolute -top-2 -right-2 bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold hover:bg-red-200"
                      >
                        ✕
                      </button>
                    )}

                    <div className="md:col-span-5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Degree *
                      </label>
                      <input
                        required
                        value={edu.degree}
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                        type="text"
                        placeholder="e.g. B.S. in Computer Science"
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Institution *
                      </label>
                      <input
                        required
                        value={edu.institution}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "institution",
                            e.target.value,
                          )
                        }
                        type="text"
                        placeholder="e.g. Dhaka University"
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Year *
                      </label>
                      <input
                        required
                        value={edu.year}
                        onChange={(e) =>
                          handleEducationChange(index, "year", e.target.value)
                        }
                        type="text"
                        placeholder="e.g. 2020"
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-400" /> About the
                  Tutor *
                </label>
                <textarea
                  required
                  name="about"
                  rows="4"
                  placeholder="Write a short biography..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="bg-teal-600 text-white font-bold text-lg px-10 py-6 rounded-xl hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <Spinner color="current" />
                  <p>Submitting...</p>
                </div>
              ) : (
                "Add Tutor Profile"
              )}
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default AddTutorPage;
