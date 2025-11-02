import React from "react";
import { FaHome } from "react-icons/fa";

const HandleBtnSubmit = ({ icon, text, onSubmit }) => {
  return (
    <button
      className="px-2 py-3 bg-[#ff0569] text-white flex items-center gap-2 w-full cursor-pointer m-1 rounded-md  hover:opacity-90 transition-all duration-200 justify-center"
      type="submit"
    >
      {icon && icon} {text}
    </button>
  );
};

export default HandleBtnSubmit;
