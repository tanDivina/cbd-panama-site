// src/pages/RegulationPage.jsx
import React from 'react';

const RegulationPage = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg font-sans">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-teal text-center">CBD Regulation in Panama</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">Current Legal Status of CBD in Panama</h2>
        <p className="mb-2 text-text-secondary leading-relaxed">
          Understanding the legal landscape for CBD in Panama is crucial for consumers, businesses, and travelers. As of our latest update (June 2025), the regulation of cannabis and its derivatives, including CBD, has been a topic of discussion and legislative action in Panama.
        </p>
        
        <div 
          className="flex items-start p-4 my-6 text-sm rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
          role="alert"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-500 dark:text-yellow-400"
          >
            <path 
              fillRule="evenodd" 
              d="M9.401 3.003c1.155-2.01 4.904-2.01 6.059 0l8.997 15.596c1.155 2.01-.309 4.597-3.007 4.597H4.01c-2.699 0-4.163-2.587-3.007-4.597L9.401 3.003zM12 8a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 8zm-1.5 15h3a.75.75 0 010 1.5h-3a.75.75 0 010-1.5z" 
              clipRule="evenodd" 
            />
          </svg>
          <div className="leading-relaxed">
            <strong className="font-semibold">Important Disclaimer:</strong> The information provided here is for general guidance only and should not be considered legal advice. Laws and regulations can change. Always consult with a legal professional in Panama for the most current and specific advice.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">Key Legislative Developments</h2>
        <p className="mb-2 text-text-secondary leading-relaxed">
          Panama has taken steps towards regulating medicinal cannabis. For example, Law 242 of October 2021 legalized the medicinal and therapeutic use of cannabis and its derivatives. However, the specifics of how this law applies to CBD products, particularly those sold over-the-counter or derived from hemp with low THC content, require careful attention to the detailed regulations (decretos ejecutivos) that implement the law.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 mb-4 text-text-secondary leading-relaxed">
          <li><strong>Medicinal Use:</strong> Products intended for medicinal use typically require a prescription and must be registered with the Ministry of Health (MINSA).</li>
          <li><strong>Hemp-Derived CBD:</strong> The distinction between marijuana-derived CBD (higher THC potential) and hemp-derived CBD (typically low THC, often defined as less than 0.3% THC by dry weight) is critical. Regulations may differ.</li>
          <li><strong>THC Limits:</strong> Pay close attention to the maximum allowable THC content in CBD products. Products exceeding this limit may be considered illegal.</li>
          <li><strong>Importation and Sale:</strong> Specific licenses and permits are generally required for the importation, distribution, and sale of CBD products.</li>
        </ul>
         {/* "Panama Legal Documents" placeholder image REMOVED from here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">What Consumers Should Know</h2>
        <ul className="list-disc list-inside space-y-2 pl-4 text-text-secondary leading-relaxed">
          <li><strong>Source Verification:</strong> Ensure any CBD product you consider purchasing has clear labeling regarding its CBD and THC content, and preferably, a Certificate of Analysis (CoA) from a third-party lab.</li>
          <li><strong>Permitted Products:</strong> Be aware of which types of CBD products (e.g., oils, topicals, edibles) are permitted for sale and consumption under current Panamanian law.</li>
          <li><strong>Traveling with CBD:</strong> Exercise extreme caution when traveling internationally with CBD products. Even if legal in one jurisdiction, they may be illegal in another. Check the laws of your destination and any transit countries.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-brand-teal">Staying Updated</h2>
        <p className="text-text-secondary leading-relaxed">
          The regulatory environment for CBD can change. We recommend checking official sources for the latest information:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-4 text-text-secondary leading-relaxed">
          <li><a href="https://www.minsa.gob.pa/" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">Ministry of Health of Panama (MINSA)</a></li>
          <li>Official Gazette of Panama (Gaceta Oficial) for new laws and decrees.</li>
          <li>Consultations with legal professionals specializing in Panamanian commercial and health law.</li>
        </ul>
        <p className="mt-4 text-text-secondary leading-relaxed">
          CBD Panama will strive to provide updates on significant regulatory changes as they occur.
        </p>
      </section>
    </div>
  );
};

export default RegulationPage;