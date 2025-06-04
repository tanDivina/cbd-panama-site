// src/components/ShoppingTipItem.jsx
import React from 'react';

function ShoppingTipItem({ tip }) {
  return (
    <div className="shopping-tip">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">
        {tip.isImportant && <span className="important">Always</span>} {tip.title}
      </h3>
      <p className="text-gray-700">{tip.content}</p>
    </div>
  );
}

export default ShoppingTipItem;
