// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-teal text-center">About CBD Panama</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">Our Mission</h2>
        <p className="text-text-secondary leading-relaxed">
          At CBD Panama, our mission is to be the leading source of reliable, accurate, and easy-to-understand information about CBD (Cannabidiol) for residents and visitors in Panama. We aim to demystify CBD, educate our audience on its potential benefits and responsible usage, and keep them informed about the evolving legal landscape in Panama.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">Who We Are</h2>
        <p className="text-text-secondary leading-relaxed">
          We are a team of wellness enthusiasts, researchers, and writers passionate about the potential of CBD. We believe in the importance of informed choices when it comes to health and well-being. While we are not medical professionals, we are dedicated to curating and creating content based on scientific research, expert opinions, and user experiences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 pl-4 text-text-secondary leading-relaxed">
          <li><strong>Educational Articles:</strong> In-depth guides on what CBD is, how it works, its various forms, and potential benefits.</li>
          <li><strong>Buying Guides:</strong> Tips on how to choose high-quality CBD products, understand labels, and identify reputable brands.</li>
          <li><strong>Regulatory Updates:</strong> Information on the current laws and regulations regarding CBD in Panama.</li>
          <li><strong>Lifestyle Integration:</strong> Ideas on how CBD can be incorporated into a healthy lifestyle for relaxation, sleep support, and general wellness.</li>
          <li><strong>Product Reviews (Future):</strong> Unbiased reviews of CBD products available or accessible in Panama.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">Our Commitment to Accuracy</h2>
        <p className="text-text-secondary leading-relaxed">
          The world of CBD is constantly evolving. We are committed to staying updated with the latest research and regulatory changes to ensure the information we provide is as accurate and current as possible. We encourage our readers to always consult with healthcare professionals for medical advice.
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Thank you for visiting CBD Panama. We hope you find our resources helpful on your wellness journey!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;