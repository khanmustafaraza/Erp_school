import React from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import Card from "components/card/Card";
import { FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import {
  MdOutlineRateReview,
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
  MdChecklistRtl,
} from "react-icons/md";
import { PiChalkboardTeacher, PiStudentFill } from "react-icons/pi";

const UserManagement = () => {
  const data = [
    {
      id: 0,
      cardColor: "#ebfafa",
      link: "/admin/user-register",
      icon: <FaUser />,
      title: "Add User",
      iconBgColor: "#ff6666",
      subIcon: <MdOutlineRateReview />,
    },
    {
      id: 1,
      cardColor: "#ffe6e6",
      link: "/admin/user-admin-list",
      icon: <RiAdminFill />,
      title: "Admin List",
      iconBgColor: "#476EAE",
      subIcon: <MdOutlinePlaylistAdd />,
    },
    {
      id: 2,
      cardColor: "white",
      link: "/admin/user-teacher-list",
      icon: <PiChalkboardTeacher />,
      title: "Teacher List",
      iconBgColor: "#ffcc66",
      subIcon: <MdOutlinePlaylistAddCheck />,
    },
    {
      id: 3,
      cardColor: "#b3d9ff",
      link: "/admin/user-student-list",
      icon: <PiStudentFill />,
      title: "Student List",
      iconBgColor: "#c2f0f0",
      subIcon: <MdChecklistRtl />,
    },
  ];
  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-2 ">
        {data?.map((curEle) => {
          return <Card key={curEle.id} curEle={curEle} />; // ✅ proper return
        })}
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
