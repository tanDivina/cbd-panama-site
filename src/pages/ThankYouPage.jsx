// src/pages/ThankYouPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LeafIcon = () => ( // Simple leaf icon
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 text-brand-teal mb-4">
    <path d="M10 2.5a.75.75 0 00-1.5 0V6c-1.091.286-2.094.77-2.943 1.422A7.991 7.991 0 003.5 10.5a.75.75 0 001.5 0 6.495 6.495 0 011.006-3.442A6.54 6.54 0 0110 6.088V17.5a.75.75 0 001.5 0V6.088a6.54 6.54 0 014.494.97 6.495 6.495 0 011.006 3.442.75.75 0 001.5 0 7.991 7.991 0 00-2.057-3.078A7.493 7.493 0 0011.5 6V2.5a.75.75 0 00-1.5 0z" />
    <path d="M8.5 6V2.5a.75.75 0 00-1.5 0V6c-1.091.286-2.094.77-2.943 1.422A7.991 7.991 0 002.057 10.5a.75.75 0 001.5 0A6.495 6.495 0 014.563 7.06 6.54 6.54 0 018.5 6.088V6z" />
  </svg>
);


const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4 font-sans py-12"> {/* Adjust min-h as needed */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <LeafIcon />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-teal mb-4">
          Thank You for Subscribing!
        </h1>
        <p className="text-lg text-text-secondary mb-3 leading-relaxed">
          You've successfully joined our newsletter.
        </p>
        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
          Your <strong className="font-semibold text-gray-700">5 FREE CBD Recipes for Better Sleep</strong> are on their way to your inbox. Please check your email (and spam folder, just in case!).
        </p>
        <Link
          to="/"
          className="inline-block bg-brand-teal text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-opacity-80 transition-colors duration-200 text-lg"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;