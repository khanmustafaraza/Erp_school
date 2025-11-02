import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, data, title }) => {
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "gray", // Tailwind: bg-gray-100
        fontWeight: "600",
        fontSize: "14px",
        color: "#ffffff",
        fontWeight: "bold",
        // fontSize: "23px",
      },
    },
    rows: {
      style: {
        minHeight: "50px",
        fontSize: "15px",
        "&:hover": {
          backgroundColor: "#f9fafb", // hover:bg-gray-50
        },
      },
    },
    pagination: {
      style: {
        borderTop: "1px solid #e5e7eb", // border-gray-200
      },
    },
  };

  return (
    <div className="bg-white rounded-sm shadow border border-gray-200 p-2">
      <DataTable
        title={
          <span className="text-2xl  text-gray-800 font-bold">{title}</span>
        }
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
        striped
        persistTableHead
        customStyles={customStyles}
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 15, 25, 100]}
        paginationComponentOptions={{
          rowsPerPageText: "Rows per page:",
          rangeSeparatorText: "of",
        }}
      />
    </div>
  );
};

export default Table;
