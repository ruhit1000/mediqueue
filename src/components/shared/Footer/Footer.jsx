import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center shrink-0 bg-white p-2 rounded-md w-fit">
              <Image 
                src="/images/logo.png" 
                alt="MediQueue Logo" 
                width={140} 
                height={40} 
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              MediQueue simplifies the tutor booking process, eliminating manual scheduling and preventing time slot conflicts for a smooth learning experience.
            </p>
          </div>

          {/* Learning Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Learning Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tutors?subject=mathematics" className="hover:text-teal-400 transition-colors text-sm">
                  Mathematics Tutors
                </Link>
              </li>
              <li>
                <Link href="/tutors?subject=physics" className="hover:text-teal-400 transition-colors text-sm">
                  Physics Tutors
                </Link>
              </li>
              <li>
                <Link href="/tutors?mode=online" className="hover:text-teal-400 transition-colors text-sm">
                  Online Sessions
                </Link>
              </li>
              <li>
                <Link href="/tutors?mode=offline" className="hover:text-teal-400 transition-colors text-sm">
                  In-Person Sessions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0" />
                <span>123 Education Lane, Knowledge City, ED 45678</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <span>support@mediqueue.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              
              {/* Facebook SVG */}
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              
              {/* X / Twitter SVG */}
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram SVG */}
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} MediQueue - Tutor Booking System. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;