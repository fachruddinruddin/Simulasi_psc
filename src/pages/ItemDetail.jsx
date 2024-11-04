import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useInventory } from "../context/InventoryContext";
import Button from "../components/ui/Button";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { inventory } = useInventory();

  const item = inventory.find((item) => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Item tidak tersedia
        </h2>
        <p className="mt-2 text-gray-600">
          Item yang ingin kamu lihat sudah tidak tersedia.
        </p>
        <Button
          variant="secondary"
          className="mt-4"
          onClick={() => navigate("/inventory")}
        >
          Kembali ke Inventory
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Item Details</h2>
        <Button variant="secondary" onClick={() => navigate("/inventory")}>
          Kembali ke List
        </Button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <div>
          <h3 className="text-gray-500">Name</h3>
          <p className="text-xl font-semibold">{item.name}</p>
        </div>
        <div>
          <h3 className="text-gray-500">Category</h3>
          <p>{item.category}</p>
        </div>
        <div>
          <h3 className="text-gray-500">Stock</h3>
          <p>{item.stock} units</p>
        </div>  
        <div>
            <h3 className="text-gray-500">Price</h3>
            <p>Rp {item.price.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-gray-500">Description</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
