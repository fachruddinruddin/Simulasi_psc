// context/MahasiswaContext.js
import React, { createContext, useState, useContext } from "react";
import { initialMahasiswa } from "../data/initialData";

const MahasiswaContext = createContext();

export const useMahasiswa = () => {
  return useContext(MahasiswaContext);
};

export const MahasiswaProvider = ({ children }) => {
  const [mahasiswaData, setMahasiswaData] = useState(initialMahasiswa);

  const addMahasiswa = (newMahasiswa) => {
    setMahasiswaData([
      ...mahasiswaData,
      { ...newMahasiswa, id: Date.now() },
    ]);
  };

  const value = {
    mahasiswaData,
    addMahasiswa,
  };

  return (
    <MahasiswaContext.Provider value={value}>
      {children}
    </MahasiswaContext.Provider>
  );
};
