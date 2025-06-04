// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // For social media

// Heroicons (Outline Style for UI consistency)
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);
const NewspaperIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V6.375c0-.621.504-1.125 1.125-1.125H9.375m3-3v1.5m0 15V18" />
  </svg>
);
const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);
const ScaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.286-1.002a2.25 2.25 0 00-1.002-4.454l-1.284.57M3 7.5l2.286-1.002a2.25 2.25 0 011.002-4.454L5.25 2.586m13.5 0c-1.01.143-2.01.317-3 .52m3-.52l-2.286 1.002a2.25 2.25 0 011.002 4.454l1.284-.57M3 7.5l-2.286 1.002a2.25 2.25 0 00-1.002 4.454L5.25 13.5m0-6c-1.01.143-2.01.317-3 .52" />
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const SidebarLinkItem = ({ to, href, icon, children, isExternal = false }) => {
  const commonClasses = "flex items-center px-3 py-2.5 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-brand-teal transition-colors duration-150 font-sans";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={commonClasses}>
      {icon}
      {children}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-8 font-sans">
      
      <div>
        <h3 className="text-xl font-semibold mb-4 text-brand-teal">Quick Links</h3>
        <nav className="space-y-2">
          <SidebarLinkItem to="/" icon={<HomeIcon />}>Home</SidebarLinkItem>
          <SidebarLinkItem to="/blog" icon={<NewspaperIcon />}>Latest Articles</SidebarLinkItem>
          <SidebarLinkItem to="/buying-cbd" icon={<ShoppingBagIcon />}>CBD Buying Guide</SidebarLinkItem>
          <SidebarLinkItem to="/regulation" icon={<ScaleIcon />}>Panama CBD Laws</SidebarLinkItem>
        </nav>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-brand-teal">Connect With Us</h3>
        <nav className="space-y-2">
          <SidebarLinkItem href="#" isExternal={true} icon={<FaFacebookF className="w-5 h-5 mr-2 flex-shrink-0" />}>Facebook</SidebarLinkItem>
          <SidebarLinkItem href="#" isExternal={true} icon={<FaInstagram className="w-5 h-5 mr-2 flex-shrink-0" />}>Instagram</SidebarLinkItem>
          <SidebarLinkItem href="#" isExternal={true} icon={<FaTwitter className="w-5 h-5 mr-2 flex-shrink-0" />}>Twitter (X)</SidebarLinkItem>
          <SidebarLinkItem href="mailto:info@cbdpanama.com" isExternal={true} icon={<MailIcon />}>Email Us</SidebarLinkItem>
        </nav>
      </div>

      <div className="bg-brand-teal bg-opacity-10 p-4 rounded-xl">
        <h4 className="font-semibold text-brand-teal mb-2">Did you know?</h4>
        <p className="text-sm text-gray-700">
          CBD is one of over 100 cannabinoids found in the cannabis plant. Unlike THC, it is not psychoactive.
        </p>
      </div>

       <div className="bg-primary bg-opacity-10 p-4 rounded-xl">
        <h4 className="font-semibold text-primary mb-2">Featured Product (Example)</h4>
        <img 
            src="https://placehold.co/300x200/A9D0A9/333333?text=Featured+CBD+Oil"
            alt="Featured CBD Product" 
            className="rounded-lg mb-2 w-full h-auto shadow-sm"
        />
        <p className="text-sm text-gray-700">
          Explore our recommended full-spectrum CBD oil for daily wellness.
        </p>
        <a href="#" className="text-primary font-semibold hover:underline text-sm mt-2 block">Learn More &rarr;</a>
      </div>
    </div>
  );
};

export default Sidebar;