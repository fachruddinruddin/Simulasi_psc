import React, { useState } from "react";
import Swal from "sweetalert2";
import Button from "../components/ui/Button";
import Table from "../components/ui/Table";


const Modal = ({ onClose, onSubmit, mahasiswa }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
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
              Nama:
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
              NIM:
            </label>
            <input
              type="text"
              name="nim"
              defaultValue={mahasiswa ? mahasiswa.nim : ""}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-end">
            <Button
              style="danger"
              text="Batal"
              onClick={onClose}
              className="mr-2"
            />
            <Button style="primary" text="Simpan" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

const Mahasiswa = () => {
  const [mahasiswaData, setMahasiswaData] = useState([
    { id: 1, nama: "Muhammad Fachruddin", nim: "A11.2022.14476" },
    { id: 2, nama: "Johan Ridho", nim: "A11.2022.12345" },
    { id: 3, nama: "Reza Aufa", nim: "A11.2022.09876" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentMahasiswa, setCurrentMahasiswa] = useState(null);
  const toggleModal = () => setModalVisible((prev) => !prev);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { id, nama, nim } = Object.fromEntries(new FormData(e.target));
    const existingMahasiswa = mahasiswaData.find((m) => m.nim === nim);

    if (existingMahasiswa && existingMahasiswa.id !== Number(id)) {
      Swal.fire("Gagal", "NIM sudah terdaftar", "error");
      return;
    }

    if (id) {
      setMahasiswaData((prev) =>
        prev.map((m) => (m.id === Number(id) ? { ...m, nama, nim } : m))
      );
      Swal.fire("Berhasil", "Data mahasiswa berhasil diperbarui", "success");
    } else {
      setMahasiswaData((prev) => [...prev, { id: prev.length + 1, nama, nim }]);
      Swal.fire("Berhasil", "Mahasiswa baru berhasil ditambahkan", "success");
    }
    toggleModal();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswaData((prev) => prev.filter((m) => m.id !== id));
        Swal.fire("Dihapus!", "Mahasiswa telah dihapus.", "success");
      }
    });
  };

  const handleEdit = (mahasiswa) => {
    setCurrentMahasiswa(mahasiswa);
    toggleModal();
  };

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Daftar Mahasiswa
      </h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <Button
          style="success"
          text="Tambah Mahasiswa"
          onClick={toggleModal}
          className="mb-5"
        />
        <Table
          data={mahasiswaData}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      {modalVisible && (
        <Modal
          onClose={toggleModal}
          onSubmit={handleFormSubmit}
          mahasiswa={currentMahasiswa}
        />
      )}
    </div>
    </div>
  );
};

export default Mahasiswa;
