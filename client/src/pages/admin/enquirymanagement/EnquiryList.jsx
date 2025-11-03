import React, { useEffect } from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import { useAuth } from "store/authcontext/AuthContext";
import Table from "components/datatable/Table";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import MainHeading from "../../../components/heading/mainheading/MainHeading";

const EnquiryList = () => {
  const { state, enquiryList } = useAuth();
  // todo ===================== tables columns name


  // =============fun to handle enquiry later they will come form context ===============

  const handleEdit = (row) => alert(`Edit ${row.name}`);
  const handleDelete = (row) =>
    setUsers(users.filter((user) => user.id !== row.id));
  const handleView = (row) => alert(`Viewing ${row.name}`);

    // =============fun to handle enquiry later the ywill come form context =====================



  //  todo =============== table colums name for enquiry =========================
  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,

      sortable: true,
      width: "90px",
      // center: "true",
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
      sortable: true,
      cell: (row) => (
        <span className="font-semibold text-gray-700 hover:text-blue-600 transition-colors">
          {row.fullName}
        </span>
      ),
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.phone}</span>
      ),
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.subject}</span>
      ),
    },
    {
      name: "Message",
      selector: (row) => row.message,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.message}</span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-1  flex-1">
          {/* View */}

          {/* Edit */}
          <button
            onClick={() => handleEdit(row)}
            className="bg-linear-to-r from-green-400 to-green-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-3 py-2 rounded-sm shadow-md hover:scale-105 transition-transform"
            title="Edit"
            >
            <FaEdit />
          </button>

          {/* Delete */}
          <button
            onClick={() => handleDelete(row)}
            className="bg-linear-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white p-2 rounded-md shadow-md hover:rotate-3 transition-all"
            title="Delete"
            >
            <FaTrash />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowoverflow: true,
      // button: `true`,
    },
  ];
  //  todo =============== table colums name for enquiry =========================

 


  //  ============= side effects for get enquiry list ============
  useEffect(() => {
    enquiryList();
  }, []);
  //  ============= side effects for get enquiry list ============
  return (
    <AdminLayout>
        <div className="bg-white overflow-x-auto transition-all duration-300">

          {/* =============heading of  page ============== */}
         <MainHeading title =" Enquiry Mangement" />
                    {/* =============heading of  page ============== */}


          {/* =========== tables of enquiry */}
          <div className="p-1">
            <Table
              title="Enquiry List"
              columns={columns}
              data={state?.enquiryList}
              />
          </div>
              {/* =========== tables of enquiry */}
        </div>
      
    </AdminLayout>
  );
};

export default EnquiryList;
