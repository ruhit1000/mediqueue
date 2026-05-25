import Link from "next/link";
import Image from "next/image";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="MediQueue Logo"
                width={160}
                height={50}
                className="object-contain cursor-pointer h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Middle: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Navlinks />
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-teal-600 font-medium hover:text-teal-700 transition-colors px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
