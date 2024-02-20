// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>For inquiries, bookings, and collaborations, please contact us using the form below:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
