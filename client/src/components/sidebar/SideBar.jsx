import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaIcons,
  MdIcons,
  PiIcons,
  SiIcons,
  GiIcons,
} from "../../utils/icons/Icons";

const SideBar = ({ data }) => {
  const { FaMoon, FaSun } = FaIcons;
  const { GiSunglasses } = GiIcons;

  return (
    <div className="w-[40%] xl:w-[13%] lg:w-[15%] md:w-[30%] sm:w-[30%]  shadow bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 ">
      {/* Header */}
      <div className="flex  items-center w-full border-b p-2 gap-2">
        <div className="w-[50px] h-[50px] bg-yellow-200 flex justify-center items-center rounded-md">
          <GiSunglasses className="text-4xl" />
        </div>
        <div>
          <strong className="">School Erp</strong>
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-px">
        {data?.map((curEle) => (
          <div
            key={curEle.id}
            className="transition-all duration-300 ease-in-out transform py-1 m-1 hover:bg-black hover:text-white px-0.5 rounded-md "
          >
            <NavLink to={`${curEle?.link}`}>
              {/* Section title */}
              {curEle.title && (
                <div className="   flex items-center gap-4 rounded-sm   ">
                  <div className="text-xl text-[#ff1f78] text-center pl-3">
                    {curEle.icon}
                  </div>
                  <div className="my-2">{curEle.title}</div>
                </div>
              )}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="btn">
        <strong>Theme</strong>
        <div className="flex justify-around p-2 cursor-pointer">
          <div className="w-[30px] h-[30px] bg-slate-800 rounded-md flex justify-center items-center border">
            <FaMoon className="text-white" />
          </div>
          <div className="w-[30px] h-[30px] bg-gray-300 rounded-md flex justify-center items-center border">
            <FaSun className="text-orange-500" />
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
