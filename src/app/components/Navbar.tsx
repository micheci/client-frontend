import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-black text-2xl">Micheci Properties</div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <a href="#home" className="text-black hover:text-gray-400">
            Home
          </a>
          <a href="#properties" className="text-black hover:text-gray-400">
            Properties
          </a>
          <a href="#contactMe" className="text-black hover:text-gray-400">
            Contact Me
          </a>
        </div>

        {/* Use Client Button */}
        <button className="text-black bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
          Use Client
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
