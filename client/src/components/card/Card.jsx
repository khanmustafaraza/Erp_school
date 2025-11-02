import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ curEle }) => {
  const { cardColor, icon, link, title, subIcon, iconBgColor } = curEle;

  return (
    <NavLink to={link}>
      <div
        className="flex flex-col items-center justify-center w-[250px] h-[130px] p-2 shadow-sm border border-gray-100  rounded-sm  hover:bg-gray-50 transition-colors duration-200 hover:opacity-90 "
        style={{ backgroundColor: cardColor }}
      >
        {/* ??????????????????????????? Left Section ???????????????????????? */}
        <div className="flex items-center gap-4">
          {/* ======================= Main Icon ============================= */}
          <div
            className="w-[50px] h-[50px] flex justify-center items-center rounded-md text-white text-2xl"
            style={{ backgroundColor: iconBgColor }}
          >
            {icon}
          </div>

          {/* ********************** Text  ************************ */}
          <div>
            <h5 className="text-xl font-bold  capitalize">
              <strong>{title}</strong>
            </h5>
          </div>
        </div>

        {/* !!!!!!!!!!!!!!!!!!!!!!!! Right Sub Icon !!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        {subIcon && (
          <div
            title="View"
            className="w-10 h-10 flex justify-center items-center text-center rounded-full text-xl font-bold"
            style={{
              backgroundColor: "#f3f4f6",
              color: `gray`,
            }}
          >
            {subIcon}
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default Card;
