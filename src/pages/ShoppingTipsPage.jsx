// src/pages/ShoppingTipsPage.jsx
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ShoppingTipItem from '../components/ShoppingTipItem';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const shoppingTips = [
  {
    id: 1,
    title: 'Check the Certificate of Analysis (COA)',
    content: 'Before purchasing any CBD product, ensure the company provides a recent and comprehensive Certificate of Analysis (COA) from a third-party, accredited laboratory. This document verifies the cannabinoid content (including CBD and THC levels) and confirms the product is free from harmful contaminants like heavy metals, pesticides, and molds. For Panama, pay close attention to the THC content, which should be clearly stated and below 1% for hemp-derived products.',
    isImportant: true,
  },
  {
    id: 2,
    title: 'Verify the THC Content',
    content: 'Given Panama\'s regulations, it\'s crucial to confirm that any CBD product you consider purchasing has a Delta-9 THC concentration of less than 1% on a dry weight basis. This is especially important if you are importing products. The COA is the best way to verify this information.',
  },
  {
    id: 3,
    title: 'Understand the Source of the CBD',
    content: 'Reputable CBD companies will be transparent about where their hemp is grown. Look for products sourced from regions with established agricultural regulations.',
  },
  {
    id: 4,
    title: 'Consider the Type of CBD',
    content: 'Decide whether you are looking for CBD isolate (pure CBD, 0% THC), broad-spectrum (CBD with other cannabinoids and terpenes, but typically 0% THC), or full-spectrum (contains trace amounts of THC, but should be under the legal limit). For import into Panama, isolate and broad-spectrum options might be less concerning regarding THC content, provided they are accurately tested.',
  },
  {
    id: 5,
    title: 'Check for Clear Labeling',
    content: 'Product labels should clearly indicate the amount of CBD per serving, the total CBD content in the product, ingredients, and usage instructions.',
  },
  {
    id: 6,
    title: 'Research the Brand\'s Reputation',
    content: 'Look for customer reviews and third-party ratings to gauge the brand\'s quality, customer service, and transparency.',
  },
  {
    id: 7,
    title: 'Be Aware of Legal Restrictions in Panama',
    content: 'Remember that while hemp-derived CBD with under 1% THC is generally not considered a controlled substance, the over-the-counter sale for general consumption is still evolving. If you are importing for medical use, ensure you comply with Law 242 and any relevant licensing or registration requirements.',
  },
];

function ShoppingTipsPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
        <main className="w-full md:w-2/3">
          <Header title="Buying CBD in Panama" subtitle="Guidance on purchasing CBD products safely and legally." />
          <Navigation />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2 rounded-md">
              Key Considerations When Buying CBD
            </h2>
            {shoppingTips.map((tip) => (
              <ShoppingTipItem key={tip.id} tip={tip} />
            ))}
          </section>
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingTipsPage;