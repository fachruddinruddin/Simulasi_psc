import React, { createContext, useState, useContext } from "react";
import { initialInventory } from "../data/initialData";

const InventoryContext = createContext();

export const useInventory = () => {
  return useContext(InventoryContext);
};

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchQuery, setSearchQuery] = useState("");

  const addItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: Date.now() }]);
  };

  const value = {
    inventory,
    searchQuery,
    setSearchQuery,
    addItem,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};
