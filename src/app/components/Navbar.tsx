"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Correct way to get current route in App Router

  return (
    <nav className="bg-white p-4 shadow-lg mb-2">
      <div className="flex items-center justify-between">
        <div className="text-black text-2xl font-semibold">RealEstate Hub</div>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-black hover:text-gray-500 transition-colors ${
              pathname === "/" ? "text-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/properties"
            className={`text-black hover:text-gray-500 transition-colors ${
              pathname === "/properties" ? "text-blue-500" : ""
            }`}
          >
            Properties
          </Link>
          <Link
            href="/#contactMe"
            className={`text-black hover:text-gray-500 transition-colors ${
              pathname === "/#contactMe" ? "text-blue-500" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
