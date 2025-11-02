import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaUserAlt,
} from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Btn from "../../buttons/btn/Btn";

const HomeFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-gray-900 to-blue-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
        {/* -------- Top Section -------- */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-16">
          {/* School Info */}
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-3xl font-bold text-yellow-400 tracking-tight">
              Krishna Public School
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Nurturing excellence in every child through knowledge, values, and
              innovation. Together, we shape bright futures with care and
              purpose.
            </p>
          </div>

          {/* Quick Links */}

          {/* CTA Button */}
          <NavLink to="/enquiry">
            <div className="w-25">
              <Btn
                text="Enquiry"
                icon={<IoIosContacts className="text-white text-xl" />}
              ></Btn>
            </div>
          </NavLink>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* -------- Bottom Section -------- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-6 md:space-y-0">
          {/* Copyright */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Krishna Public School. All rights
            reserved.
          </p>

          {/* Links */}
          <div className="flex space-x-6">
            <a
              href="/privacy-policy"
              className="hover:text-yellow-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-yellow-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
