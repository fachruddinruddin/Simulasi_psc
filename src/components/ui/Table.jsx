import React from "react";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Nama</th>
          <th className="py-2 px-4 border">NIM</th>
          <th className="py-2 px-4 border">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="py-2 px-4 border">{item.nama}</td>
            <td className="py-2 px-4 border">{item.nim}</td>
            <td className="py-2 px-4 border">
              <button
                className="text-blue-500 hover:underline mr-2"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline"
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
