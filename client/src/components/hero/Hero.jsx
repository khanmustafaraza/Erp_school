import React from "react";
import Btn from "../buttons/btn/Btn";
import { MdStart } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-8 py-24 text-center text-gray-800 bg-linear-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-white/80 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Build Beautiful School Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Simplify your school management with smart tools for students,
          teachers, and administrators—all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-[150px]">
            <Btn
              icon={<MdStart className="text-2xl text-white" />}
              text="Get Started"
            />
          </div>
          <button className="px-8 py-3 bg-white border border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-lg font-medium transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
