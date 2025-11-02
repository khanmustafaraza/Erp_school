import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Btn from "../buttons/btn/Btn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `transition-all duration-300 font-medium ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
        : "text-gray-800 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent tracking-tight"
          >
            Krishna Public School
          </NavLink>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-hidden p-2 rounded-md transition-all duration-300"
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-base">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/login">
              <div className="w-23">
                <Btn
                  text="Login"
                  icon={<FaUserAlt className="text-white" />}
                ></Btn>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-inner transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <NavLink
            to="/"
            className={linkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink to="/login">
            <div className="w-23">
              <Btn
                text="Login"
                icon={<FaUserAlt className="text-white" />}
              ></Btn>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
