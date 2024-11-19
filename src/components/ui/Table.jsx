import React from "react";
import Button from "./Button";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              NIM
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.nama}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.nim}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
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
