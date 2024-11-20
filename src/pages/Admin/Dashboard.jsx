import React from "react";
import { useInventory } from "../../context/InventoryContext";
import { useMahasiswa } from "../../context/MahasiswaContext"; // Import context

const Dashboard = () => {
  const { inventory } = useInventory();
  const { mahasiswaData } = useMahasiswa(); // Use context data

  const totalItems = inventory.length;
  const totalStock = inventory.reduce((acc, item) => acc + item.stock, 0);
  const totalValue = inventory.reduce(
    (acc, item) => acc + item.price * item.stock,
    0
  );
  const totalMahasiswa = mahasiswaData.length;

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">Total Items</h3>
          <p className="text-3xl font-semibold">{totalItems}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">Total Stock</h3>
          <p className="text-3xl font-semibold">{totalStock}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">Total Value</h3>
          <p className="text-3xl font-semibold">
            Rp {totalValue.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 mb-2">Total Mahasiswa</h3>
          <p className="text-3xl font-semibold">{totalMahasiswa}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
