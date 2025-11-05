import React, { useEffect } from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import Table from "components/datatable/Table";
import { FaEdit, FaList, FaTrash } from "react-icons/fa";
import MainHeading from "components/heading/mainheading/MainHeading";
import { NavLink } from "react-router-dom";
import Btn from "components/buttons/btn/Btn";
import { useClassTeacher } from "store/admincontext/classteachercontext/ClassTeacherContext";

const ClassTeacherList = () => {
  const { state, getClassTeacherList, getClassTeacherDetail } =
    useClassTeacher();

  useEffect(() => {
    getClassTeacherList();
  }, []);

  // --- Handlers ---
  const handleEdit = (row) => getClassTeacherDetail(row._id);
  const handleDelete = (row) => alert(`Delete ${row.fullName}`);
  const handleView = (row) => alert(`View ${row.fullName}`);

  // --- Table Columns ---
  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,
      width: "70px",
      sortable: true,
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
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.email}</span>
      ),
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      cell: (row) => <span className="text-gray-600">{row.mobile}</span>,
    },
    {
      name: "Class Name",
      selector: (row) => row.name || "N/A",
      sortable: true,
      cell: (row) => (
        <span className="text-gray-700 font-medium">
          {row.name ? row.name.toUpperCase() : "—"}
        </span>
      ),
    },
    {
      name: "Section",
      selector: (row) => row.section,
      sortable: true,
      cell: (row) => (
        <span className="uppercase text-gray-600">{row.section || "—"}</span>
      ),
    },
    {
      name: "Qualification",
      selector: (row) => row.qualification,
      sortable: true,
      cell: (row) => <span className="text-gray-600">{row.qualification}</span>,
    },
    {
      name: "Experience (yrs)",
      selector: (row) => row.experience,
      sortable: true,
      cell: (row) => <span className="text-gray-600">{row.experience}</span>,
    },
    {
      name: "Salary (₹)",
      selector: (row) => row.salary,
      sortable: true,
      cell: (row) => (
        <span className="text-green-600 font-semibold">{row.salary}</span>
      ),
    },
    {
      name: "Subjects",
      selector: (row) => row.subjects,
      cell: (row) => (
        <span className="text-gray-500 text-sm">
          {Array.isArray(row.subjects)
            ? row.subjects.join(", ")
            : row.subjects || "—"}
        </span>
      ),
    },
    {
      name: "Aadhaar",
      selector: (row) => row.aadhaar,
      sortable: true,
      cell: (row) => <span className="text-gray-600">{row.aadhaar}</span>,
    },
    {
      name: "Marital Status",
      selector: (row) => row.marital,
      sortable: true,
      cell: (row) => (
        <span className="capitalize text-gray-600">{row.marital}</span>
      ),
    },
    {
      name: "Address",
      selector: (row) => row.address,
      cell: (row) => (
        <span className="text-gray-600 truncate max-w-[150px] block">
          {row.address}
        </span>
      ),
    },
    {
      name: "Admin?",
      selector: (row) => row.isAdmin,
      sortable: true,
      cell: (row) => (
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            row.isAdmin
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {row.isAdmin ? "Yes" : "No"}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2 justify-center">
          {/* Edit */}
          <button
            onClick={() => handleEdit(row)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded shadow-md hover:scale-105 transition-transform"
            title="Edit"
          >
            <FaEdit />
          </button>

          {/* Delete */}
          <button
            onClick={() => handleDelete(row)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded shadow-md hover:scale-105 transition-transform"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowoverflow: true,
    },
  ];

  return (
    <AdminLayout>
      <div className="bg-white p-4 rounded-md shadow-sm">
        <MainHeading title="Class Teacher Management" />
        <div className="flex justify-end mb-3">
          <NavLink to="/admin/class-teacher-register">
            <Btn text="Add Teacher" icon={<FaList />} />
          </NavLink>
        </div>
        <Table
          title="Class Teacher List"
          columns={columns}
          data={state?.classTeacherList || []}
        />
      </div>
    </AdminLayout>
  );
};

export default ClassTeacherList;
