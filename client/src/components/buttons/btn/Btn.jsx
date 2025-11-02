import React from "react";
import { FaHome } from "react-icons/fa";

const Btn = ({ icon, text }) => {
  return (
    <button className="px-2 py-2.5 bg-[#ff0569] text-white flex items-center gap-2 w-full cursor-pointer m-1 rounded-md  hover:opacity-90 transition-all duration-200 justify-center">
      {icon && icon} {text}
    </button>
  );
};

export default Btn;
