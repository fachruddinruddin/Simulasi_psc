import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import InventoryList from "./pages/Admin/InventoryList";
import ItemDetail from "./pages/Admin/ItemDetail";
import AddItem from "./pages/Admin/AddItem";
import { InventoryProvider } from "./context/InventoryContext";
import { MahasiswaProvider } from "./context/MahasiswaContext";
import Mahasiswa from "./pages/Admin/Mahasiswa";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <InventoryProvider>
      <MahasiswaProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes wrapped in Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/admin" replace />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/mahasiswa" element={<Mahasiswa />} />
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/inventory/:id" element={<ItemDetail />} />
              <Route path="/add" element={<AddItem />} />
            </Route>

            {/* Catch all route - redirect to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </MahasiswaProvider>
    </InventoryProvider>
  );
}

export default App;