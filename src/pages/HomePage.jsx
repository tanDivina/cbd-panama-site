// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import MailerLiteApiForm from '../components/MailerLiteApiForm'; // <<< Import the new API form

const HomePage = () => {
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <div className="space-y-12 font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 px-6 bg-yellow-50 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-teal">Welcome to CBD Panama</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-text-secondary">
          Your trusted guide to understanding and navigating the world of CBD in Panama. Explore articles, tips, and local regulations.
        </p>
        <Link 
          to="/blog" 
          className="inline-block bg-brand-teal text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-opacity-80 transition-transform transform hover:scale-105 text-lg"
        >
          Explore Articles
        </Link>
      </section>
      
      {/* Introduction Section */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg font-sans">
        <h2 className="text-3xl font-semibold mb-4 text-brand-teal">What is CBD?</h2>
        <p className="text-text-secondary mb-2 leading-relaxed">
          Cannabidiol (CBD) is a natural compound found in cannabis plants. Unlike THC, it's non-psychoactive, meaning it doesn't produce a "high."
        </p>
        <p className="text-text-secondary mb-4 leading-relaxed">
          It's gaining popularity for its potential therapeutic benefits, including stress relief, pain management, and improved sleep. At CBD Panama, we aim to provide clear, accurate, and up-to-date information to help you make informed decisions about CBD.
        </p>
        <Link 
          to="/about" 
          className="inline-block bg-gray-100 text-brand-teal font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105 font-sans"
        >
          Learn More About Us
        </Link>
      </section>

      {/* Recent Blog Posts Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-brand-teal font-sans">Recent Insights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col font-sans transition-shadow hover:shadow-xl"
            >
              {post.imageUrl && (
                <Link to={`/blog/${post.slug}`} className="block mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <img 
                    src={post.imageUrl} 
                    alt={post.imageAlt || post.title} 
                    className="w-full h-52 object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </Link>
              )}
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 hover:text-brand-teal transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                By {post.author} on {post.date} - {post.category}
              </p>
              <p className="text-text-secondary mb-4 flex-grow text-base leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center bg-brand-teal text-white font-sans font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-opacity-75 transition-transform transform hover:scale-105 self-start"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1.5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {blogPosts.length > 2 && (
          <div className="text-center mt-10">
            <Link 
              to="/blog" 
              className="inline-block bg-gray-100 text-brand-teal font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105 text-lg font-sans"
            >
              View All Blog Posts
            </Link>
          </div>
        )}
      </section>

      {/* NEWSLETTER SIGNUP SECTION - Uses the new API form */}
      <section className="py-8 md:py-12">
        <MailerLiteApiForm /> {/* <<< Replaced the old NewsletterSignup with MailerLiteApiForm */}
      </section>

      {/* Call to Action for Buying Guide */}
      <section className="bg-brand-teal bg-opacity-10 p-6 sm:p-8 rounded-2xl font-sans text-center sm:text-left">
        <h2 className="text-3xl font-semibold mb-4 text-brand-teal">New to CBD?</h2>
        <p className="text-text-secondary mb-6 max-w-xl mx-auto sm:mx-0 leading-relaxed">
          Our comprehensive buying guide helps you understand product types, labeling, and how to choose quality CBD in Panama.
        </p>
        <Link 
          to="/buying-cbd" 
          className="inline-flex items-center bg-brand-teal text-white font-sans font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          Read Our Buying Guide
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
             <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;