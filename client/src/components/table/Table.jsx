import React from "react";

const Table = ({ data = [], title, onEdit, onDelete, onView }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4">No records available.</div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm bg-white">
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 p-4 border-b">
          {title}
        </h2>
      )}
      <table className="min-w-full border-collapse">
        <thead className="bg-indigo-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="text-left text-sm font-semibold text-gray-700 px-4 py-2 border-b capitalize"
              >
                {header.replace(/_/g, " ")}
              </th>
            ))}
            {(onEdit || onDelete || onView) && (
              <th className="text-sm font-semibold text-gray-700 px-4 py-2 border-b">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-indigo-50 transition-all`}
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className="text-sm text-gray-700 px-4 py-2 border-b"
                >
                  {row[header] ?? "-"}
                </td>
              ))}

              {(onEdit || onDelete || onView) && (
                <td className="text-sm text-gray-700 px-4 py-2 border-b flex gap-2">
                  {onView && (
                    <button
                      onClick={() => onView(row)}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </button>
                  )}
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      className="text-green-600 hover:underline"
                    >
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(row)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
