// Services.js
import React from 'react';
import './Services.css'; // Import the Services page styles

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="page-title">Our Services</h2>
      
      <div className="service">
        <img src="./assets/service1.jpg" alt="Service 1" className="service-image" />
        <div className="service-details">
          <h3 className="service-title">Music Production</h3>
          <p className="service-description">From recording to mastering, Waystar Records provides top-notch music production services to bring your creative vision to life. Our state-of-the-art studios and experienced engineers ensure that your music sounds its best.</p>
        </div>
      </div>

      <div className="service">
        <img src="./assets/service2.jpg" alt="Service 2" className="service-image" />
        <div className="service-details">
          <h3 className="service-title">Artist Development</h3>
          <p className="service-description">Our artist development program offers guidance and support to emerging artists, helping them navigate the complexities of the music industry and build successful careers. From branding to marketing, Kendall Roy and our team at Waystar Records have got you covered.</p>
        </div>
      </div>

      {/* Add more services here */}
      
    </div>
  );
}

export default Services;
