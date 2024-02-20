// src/components/Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <form>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
