// src/components/Accordion.jsx
import React, { useState } from 'react';

function Accordion({ title, content, bgColor, borderColor }) {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamically apply Tailwind classes for background and border colors
  const summaryBgClass = `${bgColor.replace('-50', '-100')} hover:${bgColor.replace('-50', '-200')} transition-colors duration-200`;
  const detailsBgClass = bgColor;

  return (
    <div className={`mb-6 ${detailsBgClass} rounded-lg shadow-md overflow-hidden accordion-item`}>
      <div
        className={`text-2xl md:text-3xl font-bold text-gray-800 p-4 cursor-pointer flex justify-between items-center ${summaryBgClass} border-b-2 ${borderColor} rounded-t-lg accordion-summary`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="font-bold">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="p-6">{content}</div>}
    </div>
  );
}

export default Accordion;