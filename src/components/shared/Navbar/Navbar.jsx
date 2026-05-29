"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, Drawer } from "@heroui/react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import ProfileAvatar from "./ProfileAvatar";

const Navbar = () => {
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

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
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="md:hidden flex items-center">
            <Drawer>
              <Button isIconOnly variant="light" aria-label="Open Menu">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
              <Drawer.Backdrop>
                <Drawer.Content placement="left">
                  <Drawer.Dialog>
                    <Drawer.CloseTrigger />
                    <Drawer.Header>
                      <Drawer.Heading>Menu</Drawer.Heading>
                    </Drawer.Header>
                    <Drawer.Body className="flex flex-col gap-6 mt-4">
                      <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                          <Link
                            key={link.id}
                            href={link.href}
                            className={`${pathname === link.href ? "text-teal-600 hover:text-gray-800 font-medium transition-colors" : "text-gray-600 hover:text-gray-800 transition-colors"}`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>

                      <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                        <Link
                          href="/login"
                          className="text-teal-600 font-medium hover:text-teal-700 text-center py-2 border border-teal-600 rounded-md"
                        >
                          Login
                        </Link>
                        <Link
                          href="/register"
                          className="bg-teal-600 text-white text-center py-2 rounded-md font-medium hover:bg-teal-700"
                        >
                          Register
                        </Link>
                      </div>
                    </Drawer.Body>
                  </Drawer.Dialog>
                </Drawer.Content>
              </Drawer.Backdrop>
            </Drawer>
          </div>

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

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`${pathname === link.href ? "text-teal-600 hover:text-gray-800 font-medium transition-colors" : "text-gray-600 hover:text-gray-800 transition-colors"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {user ? (
            <ProfileAvatar user={user} />
          ) : (
            <div className="hidden md:flex items-center space-x-4">
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
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
