import React from "react";
import Button from "./Button";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              No
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              NIM
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4">
                {index + 1}
              </td>
              <td className="px-6 py-4">{item.nama}</td>
              <td className="px-6 py-4">{item.nim}</td>
              <td className="px-6 py-4 space-x-2">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(item.id)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
