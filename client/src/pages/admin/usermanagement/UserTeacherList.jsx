import React, { useEffect } from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import { useAuth } from "store/authcontext/AuthContext";
import Table from "components/datatable/Table";
import { FaEdit, FaEye, FaList, FaSearch, FaTrash } from "react-icons/fa";
import MainHeading from "../../../components/heading/mainheading/MainHeading";
import { NavLink } from "react-router-dom";
import Btn from "../../../components/buttons/btn/Btn";

const UserTeacherList = () => {
  const { state, getTeacherList } = useAuth();
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
      name: "User Name",
      selector: (row) => row.userName,
      sortable: true,
      cell: (row) => (
        <span className="font-semibold text-gray-700 hover:text-blue-600 transition-colors">
          {row.userName}
        </span>
      ),
    },
    {
      name: "Phone",
      selector: (row) => row.email,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.email}</span>
      ),
    },

    {
      name: "Role",
      selector: (row) => row.role,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.role}</span>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-1  flex-1">
          {/* View */}

          {/* Edit */}
          <NavLink
            to={`/admin/class-teacher-register/${row._id}`}
            className="bg-linear-to-r from-green-400 to-green-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-3 py-2 rounded-sm shadow-md hover:scale-105 transition-transform"
            title="Add Class Teacher"
          >
            <FaEdit />
          </NavLink>

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
    getTeacherList();
  }, []);
  return (
    <AdminLayout>
      <div className="bg-white overflow-x-auto transition-all duration-300">
        <MainHeading title="User Management" />
        <div className="p-1">
          <NavLink to="/admin/user-management">
            <div className="w-[150px] ml-auto">
              <Btn text="All  List" icon={<FaList />} />
            </div>
          </NavLink>
          <div className="p-1">
            <Table
              title="Enquiry List"
              columns={columns}
              data={state?.teacherList}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserTeacherList;
