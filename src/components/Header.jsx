// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import siteLogo from '../assets/Panama CBD Logo with Blue Tones.png'; // Ensure this filename and path are correct

const Header = () => {
  return (
    <header className="bg-brand-teal text-white shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/" className="flex items-center mb-3 sm:mb-0">
          <img
            src={siteLogo}
            alt="CBD Panama Logo"
            className="h-14 sm:h-16 md:h-20 w-auto" // Logo height
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;