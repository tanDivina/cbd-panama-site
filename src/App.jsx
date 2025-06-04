// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import BuyingCBDPage from "./pages/BuyingCBDPage";
import AboutPage from "./pages/AboutPage";
import RegulationPage from "./pages/RegulationPage";
import ThankYouPage from "./pages/ThankYouPage"; // <<< Import ThankYouPage
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/buying-cbd" element={<BuyingCBDPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/regulation" element={<RegulationPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} /> {/* <<< Add this route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;