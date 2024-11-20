import React, { createContext, useState, useContext } from "react";

const MahasiswaContext = createContext();

export const useMahasiswa = () => {
  return useContext(MahasiswaContext);
};

export const MahasiswaProvider = ({ children }) => {
  const initialData = [
    { id: 1, nama: "Muhammad Fachruddin", nim: "A11.2022.14476" },
    { id: 2, nama: "Johan Ridho", nim: "A11.2022.12345" },
    { id: 3, nama: "Reza Aufa", nim: "A11.2022.09876" },
  ];

  const [mahasiswaData, setMahasiswaData] = useState(initialData);

  const addMahasiswa = (newMahasiswa) => {
    setMahasiswaData((prev) => [...prev, newMahasiswa]);
  };

  const updateMahasiswa = (updatedMahasiswa) => {
    setMahasiswaData((prev) =>
      prev.map((m) => (m.id === updatedMahasiswa.id ? updatedMahasiswa : m))
    );
  };

  const deleteMahasiswa = (id) => {
    setMahasiswaData((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <MahasiswaContext.Provider
      value={{
        mahasiswaData,
        addMahasiswa,
        updateMahasiswa,
        deleteMahasiswa,
      }}
    >
      {children}
    </MahasiswaContext.Provider>
  );
};
