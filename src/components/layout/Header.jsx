import React from 'react';
import { Menu, LogOut, User } from 'lucide-react';

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <User size={20} />
            <span>Admin</span>
          </div>
          <button 
            className="p-2 hover:bg-gray-100 rounded-lg" 
            onClick={() => { window.location.href = '/login'; }}
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
