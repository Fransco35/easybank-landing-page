import React, { useState } from "react";
import EasyLogo from "../images/logo.svg";

function Navbar() {
  // State to handle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-30">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <img src={EasyLogo} alt="company_logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a
            href="/"
            className="border-b-4 border-transparent hover:border-lime-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="border-b-4 border-transparent hover:border-lime-500 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="border-b-4 border-transparent hover:border-lime-500 transition-colors"
          >
            Contact
          </a>
          <a
            href="#blog"
            className="border-b-4 border-transparent hover:border-lime-500 transition-colors"
          >
            Blog
          </a>
          <a
            href="#careers"
            className="border-b-4 border-transparent hover:border-lime-500 transition-colors"
          >
            Careers
          </a>
        </div>

        {/* Request Invite Button */}
        <div className="hidden md:flex">
          <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Request Invite
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:text-limeGreen-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="/" className="text-gray-700 hover:text-limeGreen">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-limeGreen">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-limeGreen">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="text-gray-700 hover:text-limeGreen">
                Blog
              </a>
            </li>
            <li>
              <a href="#careers" className="text-gray-700 hover:text-limeGreen">
                Careers
              </a>
            </li>
            <li>
              <button className="bg-gradient-to-r from-limeGreen to-brightCyan text-white py-2 px-6 rounded-lg hover:opacity-80 transition-opacity duration-300">
                Request Invite
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
