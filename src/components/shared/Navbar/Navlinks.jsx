"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = () => {
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      href: "/",
      name: "Home",
    },
    {
      id: 2,
      href: "/tutors",
      name: "Tutors",
    },
    {
      id: 3,
      href: "/about-us",
      name: "About Us",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
        key={link.id}
          href={link.href}
          className={`${pathname === link.href ? "text-teal-600 hover:text-gray-800 font-medium transition-colors" : "text-gray-600 hover:text-gray-800 transition-colors"}`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navlinks;
