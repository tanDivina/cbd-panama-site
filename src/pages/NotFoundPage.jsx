import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = ({ message }) => {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-text-primary mb-6">
        {message || "Oops! Page Not Found."}
      </h2>
      <p className="text-text-secondary mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="button-primary text-lg"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;