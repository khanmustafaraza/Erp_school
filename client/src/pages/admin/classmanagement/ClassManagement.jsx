import React from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import Card from "../../../components/card/Card";
import { FaEdit, FaEye, FaUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import {
  MdOutlineRateReview,
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
  MdChecklistRtl,
} from "react-icons/md";
import { PiChalkboardTeacher, PiStudentFill } from "react-icons/pi";

const ClassManagement = () => {
  const data = [
    {
      id: 0,
      cardColor: "#ebfafa",
      link: "/admin/class-register",
      icon: <FaUser />,
      title: "Add Class",
      iconBgColor: "#ff6666",
      subIcon: <MdOutlineRateReview />,
    },
    {
      id: 1,
      cardColor: "#ffe6e6",
      link: "/admin/class-list",
      icon: <RiAdminFill />,
      title: "Class List",
      iconBgColor: "#476EAE",
      subIcon: <MdOutlinePlaylistAdd />,
    },
  ];
  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-2">
        {data?.map((curEle) => {
          return <Card key={curEle.id} curEle={curEle} />; // ✅ proper return
        })}
      </div>
    </AdminLayout>
  );
};

export default ClassManagement;
