// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Waystar Records. All rights reserved.</p>
      <p>Disclaimer: This is a fictional website created for demonstration purposes only. Any resemblance to actual persons, living or dead, or actual events is purely coincidental.</p>
    </footer>
  );
}

export default Footer;
