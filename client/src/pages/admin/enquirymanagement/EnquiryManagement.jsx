import React, { useState } from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import { FaEdit, FaTrash, FaEye, FaUser } from "react-icons/fa";
import Table from "../../../components/datatable/Table";
import Card from "../../../components/card/Card";

const EnquiryManagement = () => {
  const data = [
    {
      id: 0,
      cardColor: "#FFBDBD",
      link: "/admin/enquiry-list",
      icon: <FaUser />,
      title: "Enquiry List",
      iconBgColor: "#476EAE",
      subIcon: <FaEdit />,
    },
  ];
  return (
    <AdminLayout>
      <div className="flex flex-wrap gap-4">
        {data?.map((curEle) => {
          return <Card key={curEle.id} curEle={curEle} />; // ✅ proper return
        })}
      </div>
    </AdminLayout>
  );
};

export default EnquiryManagement;
