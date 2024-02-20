// src/components/SocialMedia.js
import React from 'react';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="[Link to Facebook]"><i className="fab fa-facebook-f"></i></a>
        <a href="[Link to Twitter]"><i className="fab fa-twitter"></i></a>
        <a href="[Link to Instagram]"><i className="fab fa-instagram"></i></a>
        {/* Include additional social media icons */}
      </div>
    </div>
  );
}

export default SocialMedia;
