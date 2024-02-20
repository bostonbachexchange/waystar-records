// src/pages/Merchandise.js
import React from 'react';

const Merchandise = () => {
  return (
    <div>
      <h2>Official Merchandise</h2>
      <p>Get your hands on exclusive merchandise featuring Kendall Roy and other Waystar Records artists!</p>
      <div className="merchandise-item">
        <img src="[Merchandise Image]" alt="Merchandise" />
        <h3>[Merchandise Name]</h3>
        <p>Price: $[Price]</p>
        <button>Add to Cart</button>
      </div>
      {/* Repeat the above for each merchandise item */}
    </div>
  );
}

export default Merchandise;
