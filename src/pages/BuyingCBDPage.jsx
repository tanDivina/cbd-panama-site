// src/pages/BuyingCBDPage.jsx
import React from 'react';

const BuyingCBDPage = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-teal text-center">Your Guide to Buying CBD in Panama</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-brand-teal">Understanding CBD Products</h2>
        <p className="mb-2 text-text-secondary leading-relaxed">When looking to buy CBD, you'll encounter various product types. Here's a quick rundown:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-4 mb-4 text-text-secondary leading-relaxed">
          <li><strong>CBD Oils & Tinctures:</strong> Taken sublingually (under the tongue) or added to food/drinks. Offer versatile dosing.</li>
          <li><strong>CBD Edibles:</strong> Gummies, chocolates, capsules. Offer pre-measured doses and longer-lasting effects.</li>
          <li><strong>CBD Topicals:</strong> Creams, balms, lotions. Applied directly to the skin for localized relief.</li>
          <li><strong>CBD Vape Products:</strong> Inhaled for fast-acting effects. Consider health implications of vaping.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-brand-teal">Key Factors to Consider</h2>
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-medium text-gray-800">1. Source of Hemp</h3>
            <p className="text-text-secondary leading-relaxed">Look for products made from organically grown hemp. The quality of the hemp directly impacts the quality of the CBD.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">2. CBD Spectrum</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-text-secondary leading-relaxed">
              <li><strong>Full-Spectrum:</strong> Contains all cannabinoids from the hemp plant, including trace amounts of THC (legally below 0.3% in many places, check Panamanian law). Offers the "entourage effect."</li>
              <li><strong>Broad-Spectrum:</strong> Contains multiple cannabinoids but THC is removed. Still provides some entourage benefits.</li>
              <li><strong>CBD Isolate:</strong> Pure CBD, with all other cannabinoids removed. THC-free.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">3. Third-Party Lab Testing (Certificate of Analysis - CoA)</h3>
            <p className="text-text-secondary leading-relaxed">This is crucial. Reputable brands provide CoAs from independent labs verifying the product's cannabinoid content (potency) and safety (absence of pesticides, heavy metals, solvents).</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">4. Potency</h3>
            <p className="text-text-secondary leading-relaxed">Check the amount of CBD per serving or per bottle. Start with a low dose if you're new to CBD and gradually increase as needed.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">5. Ingredients</h3>
            <p className="text-text-secondary leading-relaxed">Look for natural ingredients. Avoid products with excessive artificial additives, sweeteners, or fillers.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-brand-teal">Reading CBD Labels in Panama</h2>
        <p className="text-text-secondary leading-relaxed">Understanding labels is key. Look for:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-4 mb-4 text-text-secondary leading-relaxed">
          <li>Total CBD amount in the product.</li>
          <li>CBD amount per serving.</li>
          <li>Type of CBD (full-spectrum, broad-spectrum, isolate).</li>
          <li>List of ingredients.</li>
          <li>Batch number (for CoA lookup).</li>
          <li>Manufacturer/distributor information.</li>
          <li>Expiration date.</li>
        </ul>
        <p className="text-text-secondary leading-relaxed">Be wary of products making outlandish health claims. CBD is not a cure-all.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-brand-teal">Where to Buy CBD in Panama</h2>
        <p className="text-text-secondary leading-relaxed">CBD availability in Panama is evolving. Look for specialized stores, pharmacies (if permitted by local regulation), or reputable online vendors that ship to Panama (ensure compliance with import regulations). Prioritize vendors who are transparent about their sourcing and testing.</p>
        <p className="mt-4 font-semibold text-text-secondary leading-relaxed">Always research and ensure the vendor and product comply with current Panamanian regulations regarding CBD.</p>
      </section>
    </div>
  );
};

export default BuyingCBDPage;