import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import InventoryList from './pages/InventoryList';
import ItemDetail from './pages/ItemDetail';
import AddItem from './pages/AddItem';
import { InventoryProvider } from './context/InventoryContext';

function App() {
  return (
    <InventoryProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<InventoryList />} />
            <Route path="/inventory/:id" element={<ItemDetail />} />
            <Route path="/add" element={<AddItem />} />
          </Routes>
        </Layout>
      </Router>
    </InventoryProvider>
  );
}

export default App;