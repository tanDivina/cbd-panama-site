// src/components/BlogPost.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        <Link to={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors duration-300">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 text-sm mb-2">Published: {post.date}</p>
      <p className="text-gray-700">{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`} className="inline-block mt-3 text-green-600 hover:text-green-800 transition-colors duration-300">
        Read More
      </Link>
    </div>
  );
}

export default BlogPost;