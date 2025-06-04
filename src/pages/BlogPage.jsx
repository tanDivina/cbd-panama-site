// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const BlogPage = () => {
  return (
    <div className="font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-teal">CBD Panama Blog</h1>
        <p className="text-lg text-text-secondary mt-2 max-w-xl mx-auto">
          Insights, tips, and news about CBD in Panama and beyond.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
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
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found"; }}
                />
              </Link>
            )}
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 hover:text-brand-teal transition-colors">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-500 mb-1">By {post.author} - {post.date}</p>
            <p className="text-sm text-gray-500 mb-3">Category: {post.category}</p>
            <p className="text-text-secondary mb-4 flex-grow text-base">
              {post.excerpt}
            </p>
            <div className="mt-auto pt-4">
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center bg-brand-teal text-white font-sans font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-opacity-75 transition-transform transform hover:scale-105"
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
    </div>
  );
};

export default BlogPage;