import React from 'react';
import { Link } from 'react-router-dom';
import { Package, LayoutDashboard, PlusCircle } from 'lucide-react';
import { FaUserGraduate } from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`fixed left-0 top-0 pt-16 h-full bg-white shadow-sm transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <LayoutDashboard size={20} />
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/mahasiswa" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <FaUserGraduate size={20} />
              {isOpen && <span>Mahasiswa</span>}
            </Link>
          </li>
          <li>
            <Link to="/inventory" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <Package size={20} />
              {isOpen && <span>Inventory List</span>}
            </Link>
          </li>
          <li>
            <Link to="/add" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <PlusCircle size={20} />
              {isOpen && <span>Add Item</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;