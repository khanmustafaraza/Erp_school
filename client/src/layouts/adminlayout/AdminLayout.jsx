import { FaArrowAltCircleUp, FaEnvelopeOpenText, FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

import TopBar from "components/topbar/TopBar";
import SideBar from "components/sidebar/SideBar";
import { MdOutlineDashboard, MdOutlineClass } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";

const AdminLayout = ({ children }) => {
  const adminNavItems = [
    {
      id: 0,
      title: "Dashboard",
      icon: <MdOutlineDashboard />,
      link: "/admin/admin-dashboard",
    },
    {
      id: 1,
      title: "Enquiry",
      icon: <FaEnvelopeOpenText />,
      link: "/admin/enquiry-management",
    },
    {
      id: 2,
      title: "School",
      icon: <IoSchoolSharp />,
      link: "/admin/school-management",
    },
    {
      id: 3,
      title: "Classes",
      icon: <MdOutlineClass />,
      link: "/admin/class-management",
    },
    {
      id: 4,
      title: "User",
      icon: <FaUser />,
      link: "/admin/user-management",
    },
    {
      id: 5,
      title: "Student List",
      icon: <PiStudentBold />,
      link: "/admin/student-list",
    },
    {
      id: 6,
      title: "Class Teachers",
      icon: <SiGoogleclassroom />,
      link: "/admin/class-teacher-list",
    },
  ];
  return (
    <div className="flex min-h-screen transition-all">
      {/* ======================= Sidebar Navigation ====================================== */}

      <SideBar data={adminNavItems} />

      {/* ??????????????????????????? Main Content Area ????????????????????????????????? */}
      <div className="flex flex-col w-full sm:w-[70%] lg:w-[85%] xl:w-[87%]">
        {/* Top Navigation */}
        <header className="border-b shadow-sm py-2 px-4">
          <TopBar />
        </header>

        {/* !!!!!!!!!!!!!!!!!!!!!!!! Page Content !!!!!!!!!!!!!!!!!!!!!!!! */}
        <main className="flex-1  p-1.5 ">
          {children}
          {/* Back to Top Button */}
          {/* {showButton && (
            <>
              <button
                onClick={scrollToTop}
                data-tooltip-target="tooltip-top"
                data-tooltip-placement="left"
                className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex justify-center items-center shadow-lg transition-transform hover:scale-110 z-50"
              >
                <FaArrowAltCircleUp className="text-2xl" />
              </button>

              <div
                id="tooltip-top"
                role="tooltip"
                className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg opacity-0 tooltip dark:bg-gray-700"
              >
                Back to Top
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
          )} */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
