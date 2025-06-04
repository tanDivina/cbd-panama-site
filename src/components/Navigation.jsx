// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2.5 rounded-lg text-base font-semibold transition-colors duration-200 font-sans ${ 
          isActive
            ? 'bg-white text-brand-teal shadow-sm' 
            : 'text-white hover:bg-white hover:bg-opacity-20'
        }`
      }
    >
      {children}
    </NavLink>
  </li>
);

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-wrap justify-center sm:justify-end space-x-1 sm:space-x-2 md:space-x-3">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/blog">Blog</NavItem>
        <NavItem to="/buying-cbd">Buying CBD</NavItem>
        <NavItem to="/regulation">Regulation</NavItem>
        <NavItem to="/about">About Us</NavItem>
      </ul>
    </nav>
  );
};

export default Navigation;