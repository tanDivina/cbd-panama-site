// src/components/MailerLiteApiForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailerLiteApiForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' }); // type can be 'success' or 'error'
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' }); // Clear previous messages

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      setIsLoading(false);
      return;
    }

    try {
      // This endpoint needs to be adjusted based on your deployment platform (Netlify/Vercel)
      // For Netlify: '/.netlify/functions/subscribe-newsletter'
      // For Vercel: '/api/subscribe-newsletter'
      const apiEndpoint = '/.netlify/functions/subscribe-newsletter'; // Defaulting to Netlify, adjust if needed

      const response = await fetch(apiEndpoint, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          // The Group ID is handled by the backend serverless function using environment variables
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage({ type: 'success', text: data.message || 'Subscription successful! Redirecting...' });
        setEmail(''); // Clear the input field
        // Redirect to thank you page after a short delay
        setTimeout(() => {
          navigate('/thank-you');
        }, 1500); // 1.5 second delay
      } else {
        setMessage({ 
          type: 'error', 
          text: data.message || 'Subscription failed. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Subscription API error:', error);
      setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-brand-teal bg-opacity-10 p-6 py-8 sm:p-8 md:p-10 rounded-2xl shadow-lg text-center font-sans my-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal mb-3">
        Unlock Better Sleep Tonight!
      </h2>
      <p className="text-text-secondary text-lg mb-6 max-w-md mx-auto leading-relaxed">
        Subscribe and instantly receive <strong className="font-semibold text-gray-700">5 FREE CBD Recipes</strong> specially crafted for a more restful night's sleep.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <label htmlFor="email-newsletter-api" className="sr-only">Email address</label>
          <input
            id="email-newsletter-api" // Unique ID for the input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-5 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-colors"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto flex-shrink-0 bg-brand-teal text-white font-sans font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-opacity-75 transition-all duration-200 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center" // Added flex for spinner
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Get My Free Recipes!"
            )}
          </button>
        </div>
        {message.text && (
          <p className={`mt-4 text-sm font-medium ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            {message.text}
          </p>
        )}
      </form>
      <p className="text-xs text-gray-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default MailerLiteApiForm;