import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <div>Contact Us: info@waystarrecords.com | 123-456-7890</div>
          <div>Follow Us: <a href="https://twitter.com/WaystarRecords" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://www.facebook.com/WaystarRecords" target="_blank" rel="noopener noreferrer">Facebook</a></div>
        </div>
        <div className="quote">
          <p>"Music is the language of the soul, and Waystar Records is its ultimate translator."</p>
        <div className="signature">
          <p>Signed,</p>
          <p>Kendall Roy</p>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Waystar Records. All rights reserved.</p>
      </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
