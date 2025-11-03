import React, { useEffect } from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import { useAuth } from "store/authcontext/AuthContext";
import Table from "components/datatable/Table";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import { useSchool } from "store/admincontext/schoolcontext/SchoolContext";
import MainHeading from "../../../components/heading/mainheading/MainHeading";

const SchoolList = () => {
  const { state, schoolList } = useSchool();
  // todo ===================== tables columns name

  const handleEdit = (row) => alert(`Edit ${row.name}`);
  const handleDelete = (row) =>
    setUsers(users.filter((user) => user.id !== row.id));
  const handleView = (row) => alert(`Viewing ${row.name}`);

  const columns = [
    {
      name: "S.No",
      selector: (row, index) => index + 1,

      sortable: true,
      width: "90px",
      // center: "true",
    },
    {
      name: "Name Of School",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => (
        <span className="font-semibold text-gray-700 hover:text-blue-600 transition-colors">
          {row.name}
        </span>
      ),
    },
    {
      name: "Photo",
      sortable: false,
      cell: () => (
        <img
          src={`https://www.shutterstock.com/image-vector/back-school-cartoon-vector-kids-260nw-2493305457.jpg`}
          alt="student"
          className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
        />
      ),
    },
    {
      name: "Sub Name",
      selector: (row) => row.subName,
      sortable: true,
      cell: (row) => (
        <span className="font-semibold text-gray-700 hover:text-blue-600 transition-colors">
          {row.subName}
        </span>
      ),
    },
    {
      name: "Code",
      selector: (row) => row.code,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.code}</span>
      ),
    },
    {
      name: "Affiliaton Code",
      selector: (row) => row.affiCode,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.affiCode}</span>
      ),
    },
    {
      name: "Board",
      selector: (row) => row.board,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.board}</span>
      ),
    },
    {
      name: "Address",
      selector: (row) => row.address,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.address}</span>
      ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.email}</span>
      ),
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.contact}</span>
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

  // todo ===================== tables columns name

  useEffect(() => {
    schoolList();
  }, []);
  return (
    <AdminLayout>
      <div>
        <div className="bg-white overflow-x-auto transition-all duration-300">
          <div className="flex justify-between">
          <MainHeading title = "School management"/>
          </div>
          <div className="p-1">
            <Table
              title="School List"
              columns={columns}
              data={state?.schoolList}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolList;
