// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:flex lg:space-x-8"> 
          <main className="lg:w-3/4"> 
            {children}
          </main>
          <aside className="lg:w-1/4 mt-8 lg:mt-0">
            <Sidebar />
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;