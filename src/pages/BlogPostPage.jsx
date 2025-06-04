// src/pages/BlogPostPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import NotFoundPage from './NotFoundPage';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [currentHeroSrc, setCurrentHeroSrc] = useState('');
  const [attemptedPrimary, setAttemptedPrimary] = useState(false);
  const [attemptedFallback, setAttemptedFallback] = useState(false);
  const [displayImage, setDisplayImage] = useState(false);

  useEffect(() => {
    if (post) {
      const primarySrc = `/images/blog/${post.slug}.png`;
      setCurrentHeroSrc(primarySrc);
      setAttemptedPrimary(false);
      setAttemptedFallback(false);
      setDisplayImage(true); 
    } else {
      setDisplayImage(false);
    }
  }, [post]); 

  if (!post) {
    return <NotFoundPage message="Blog post not found." />;
  }

  const handleImageError = () => {
    if (!attemptedPrimary) {
      setAttemptedPrimary(true);
      if (post.imageUrl) { 
        setCurrentHeroSrc(post.imageUrl);
      } else {
        setDisplayImage(false);
      }
    } else if (!attemptedFallback) {
      setAttemptedFallback(true);
      setDisplayImage(false); 
    }
  };
  
  return (
    <div className="font-sans">
      {displayImage && (
        <div className="mb-6 md:mb-8 -mx-4 sm:-mx-6 lg:-mx-8"> 
          <img
            key={currentHeroSrc} 
            src={currentHeroSrc}
            alt={post.imageAlt || post.title}
            className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] object-cover rounded-none sm:rounded-xl shadow-lg"
            onError={handleImageError}
          />
        </div>
      )}

      <article className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-brand-teal">{post.title}</h1>
        <div className="mb-4 text-sm text-gray-500">
          <span>By {post.author}</span>
          <span className="mx-2">|</span>
          <span>{post.date}</span>
          <span className="mx-2">|</span>
          <span>Category: {post.category}</span>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mb-6">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="inline-block bg-gray-100 text-gray-700 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        <div 
            className="prose prose-lg max-w-none text-text-secondary prose-headings:text-brand-teal prose-a:text-brand-teal hover:prose-a:text-opacity-80"
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 px-6 py-3 rounded-lg shadow-sm transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.638l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.638 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;