import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Check if current route is login or register
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  // If we're on an auth page, don't show the admin layout
  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <main 
        className={`
          pt-16 
          transition-all 
          duration-300 
          ${isSidebarOpen ? 'ml-64' : 'ml-20'}
        `}
      >
        <div className="p-6">
          <Outlet /> {/* Replace children with Outlet */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;