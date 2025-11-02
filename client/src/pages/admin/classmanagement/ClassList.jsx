import React, { useEffect } from "react";
import AdminLayout from "layouts/adminlayout/AdminLayout";
import Table from "components/datatable/Table";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import { useClass } from "store/admincontext/classcontext/ClassContext";

const ClassList = () => {
  const { state, classList } = useClass();
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
      name: "Class Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => (
        <span className="font-semibold text-gray-700 hover:text-blue-600 transition-colors">
          {row.name}
        </span>
      ),
    },
    {
      name: "Section Name",
      selector: (row) => row.section,
      cell: (row) => (
        <span className="text-gray-600 font-medium">{row.section}</span>
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
    classList();
  }, []);
  return (
    <AdminLayout>
      <div>
        <div className="bg-white overflow-x-auto transition-all duration-300">
          <div className="flex justify-between">
            <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-1 rounded-md">
              <h2 className="text-lg font-semibold">🎯 Enquiry Management</h2>
              <p className="text-sm opacity-90">
                Manage all user enquiries with ease and style.
              </p>
            </div>
            <div className="border-2 border-gray-100 gap-3 flex items-center w-[350px] px-2 rounded-md">
              <FaSearch />
              <input
                type="text"
                className="py-0 bg-transparent border-0 outline-0"
                placeholder="Search Name,phone"
                onChange={(e) => enquiryList(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1">
            <Table
              title="Class List"
              columns={columns}
              data={state?.classList}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClassList;
