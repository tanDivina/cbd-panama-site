// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-text-secondary py-8 mt-auto font-sans border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <a 
            href="#" // Replace with your actual Facebook link
            aria-label="CBD Panama on Facebook"
            className="inline-block text-gray-500 hover:text-brand-teal p-2 transition-colors duration-200"
          >
            <FaFacebookF size={24} />
          </a>
          <a 
            href="#" // Replace with your actual Instagram link
            aria-label="CBD Panama on Instagram"
            className="inline-block text-gray-500 hover:text-brand-teal p-2 transition-colors duration-200 mx-2 sm:mx-4"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="#" // Replace with your actual Twitter link
            aria-label="CBD Panama on Twitter"
            className="inline-block text-gray-500 hover:text-brand-teal p-2 transition-colors duration-200"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        <p className="text-sm">&copy; {currentYear} CBD Panama. All rights reserved.</p>
        <div 
          className="mt-3 text-xs max-w-2xl mx-auto text-gray-500 leading-relaxed p-3 bg-gray-50 rounded-md border border-gray-200"
        >
          <strong className="font-semibold">Important Disclaimer:</strong> The information provided here is for general guidance only and should not be considered legal advice. Laws and regulations can change. Always consult with a legal professional in Panama for the most current and specific advice.
        </div>
      </div>
    </footer>
  );
};

export default Footer;