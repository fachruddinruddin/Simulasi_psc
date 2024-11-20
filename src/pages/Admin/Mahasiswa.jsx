import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";
import Button from "../../components/ui/Button.jsx";
import Table from "../../components/ui/Table.jsx";
import { useMahasiswa } from "../../context/MahasiswaContext.jsx"; // Import context

const Modal = ({ onClose, onSubmit, mahasiswa }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
        <h3 className="text-lg font-bold mb-4">
          {mahasiswa ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
        </h3>
        <form onSubmit={onSubmit}>
          <input
            type="hidden"
            name="id"
            defaultValue={mahasiswa ? mahasiswa.id : ""}
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nama
            </label>
            <input
              type="text"
              name="nama"
              defaultValue={mahasiswa ? mahasiswa.nama : ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              NIM
            </label>
            <input
              type="text"
              name="nim"
              defaultValue={mahasiswa ? mahasiswa.nim : ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="danger" onClick={onClose}>
              Batal
            </Button>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Mahasiswa = () => {
  const { mahasiswaData, addMahasiswa, updateMahasiswa, deleteMahasiswa } =
    useMahasiswa(); // Access context

  const [modalVisible, setModalVisible] = useState(false);
  const [currentMahasiswa, setCurrentMahasiswa] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleModal = () => setModalVisible((prev) => !prev);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { id, nama, nim } = Object.fromEntries(new FormData(e.target));
    const isDuplicate = mahasiswaData.some(
      (m) => m.nim === nim && m.id !== Number(id)
    );

    if (isDuplicate) {
      Swal.fire("Error", "NIM sudah terdaftar", "error");
      return;
    }

    if (id) {
      updateMahasiswa({ id: Number(id), nama, nim });
      Swal.fire("Success", "Data berhasil diperbarui", "success");
    } else {
      const newId = mahasiswaData.length > 0 ? Math.max(...mahasiswaData.map(m => m.id)) + 1 : 1;
      addMahasiswa({ id: newId, nama, nim });
      Swal.fire("Success", "Mahasiswa baru berhasil ditambahkan", "success");
    }
    toggleModal();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Konfirmasi Hapus",
      text: "Yakin ingin menghapus data ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMahasiswa(id);
        Swal.fire("Deleted", "Data berhasil dihapus", "success");
      }
    });
  };

  const handleEdit = (mahasiswa) => {
    setCurrentMahasiswa(mahasiswa);
    setModalVisible(true);
  };

  const handleAdd = () => {
    setCurrentMahasiswa(null);
    setModalVisible(true);
  };

  const filteredMahasiswaData = mahasiswaData.filter(
    (m) =>
      m.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.nim.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-semibold">Daftar Mahasiswa</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <Button variant="primary" onClick={handleAdd}>
            Tambah Mahasiswa
          </Button>
        </div>
      </div>
      <Table
        data={filteredMahasiswaData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {modalVisible && (
        <Modal
          onClose={toggleModal}
          onSubmit={handleFormSubmit}
          mahasiswa={currentMahasiswa}
        />
      )}
    </div>
  );
};

export default Mahasiswa;
