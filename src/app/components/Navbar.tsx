"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl">MyApp</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            &#9776;
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8">
            <li>
              <a href="#home" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
