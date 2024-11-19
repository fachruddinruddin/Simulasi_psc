import React from "react";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">No</th>
          <th className="border border-gray-300 px-4 py-2">Nama</th>
          <th className="border border-gray-300 px-4 py-2">NIM</th>
          <th className="border border-gray-300 px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {index + 1}
            </td>
            <td className="border border-gray-300 px-4 py-2">{item.nama}</td>
            <td className="border border-gray-300 px-4 py-2">{item.nim}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              <button
                className="bg-yellow-400 text-black px-2 py-1 mr-2 rounded"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => onDelete(item.id)}
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
