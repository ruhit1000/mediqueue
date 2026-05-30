"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { bannerData } from "@/data/data";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  return (
    <div className="relative h-120 sm:h-135 overflow-hidden bg-slate-900 group">
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div
            className={`absolute inset-0 bg-linear-to-r ${slide.gradient} backdrop-brightness-[0.45]`}
          />

          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div
              className={`max-w-2xl space-y-6 text-white transition-all duration-700 delay-300 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold tracking-widest uppercase border font-mono ${slide.badgeColor}`}
              >
                {slide.badge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {slide.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                {slide.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/tutors"
                  className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors flex items-center gap-2 text-sm"
                >
                  Discover Tutors <ChevronRight className="h-4 w-4" />
                </Link>

                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("how-it-works")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 transition-all font-semibold rounded-xl text-sm cursor-pointer"
                >
                  How it Works
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 z-20 pointer-events-none flex items-end justify-between">
        <div className="flex gap-2 pointer-events-auto pb-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-teal-500"
                  : "w-2 h-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3 pointer-events-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={prevSlide}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-xl bg-white/10 hover:bg-teal-600 border border-white/10 text-white backdrop-blur-md transition-all hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
