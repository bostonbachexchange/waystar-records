// src/pages/Testimonials.js
import React from 'react';
import kendallImage from '../assets/kendall.jpg';

const Testimonials = () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <div className="testimonial">
        <img src={kendallImage} alt="Kendall Roy" />
        <p>"Kendall Roy is not only a visionary CEO but also an unparalleled artist. His music touches the soul and his leadership inspires greatness."</p>
        <p>- Famous Music Producer</p>
      </div>
      {/* Repeat the above for each testimonial */}
    </div>
  );
}

export default Testimonials;
