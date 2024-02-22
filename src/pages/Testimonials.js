// Testimonials.js
import React from 'react';
import './Testimonials.css'; // Import the Testimonials page styles
import KendallPhoto from '../assets/Kendall3.webp';
import ShivPhoto from '../assets/shivtest.avif';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="page-title">Testimonials</h2>
      
      <div className="testimonial">
        <img src={KendallPhoto} alt="Testimonial 1" className="testimonial-image" />
        <div className="testimonial-details">
          <p className="quote">"Waystar Records has been instrumental in launching my music career. Their team is professional, dedicated, and truly passionate about their work."</p>
          <p className="source">- Kendall Roy, CEO of Waystar Records</p>
        </div>
      </div>

      <div className="testimonial">
        <img src={ShivPhoto} alt="Testimonial 2" className="testimonial-image" />
        <div className="testimonial-details">
          <p className="quote">"Working with Waystar Records was a dream come true. Their expertise and guidance helped me achieve my musical goals faster than I ever imagined."</p>
          <p className="source">- Shiv Roy, Artist</p>
        </div>
      </div>

      {/* Add more testimonials here */}
      
    </div>
  );
}

export default Testimonials;
