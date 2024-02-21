// Contact.js
import React from 'react';
import './Contact.css'; // Import the Contact page styles

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="page-title">Contact Us</h2>
      
      <div className="contact-info">
        <p>If you have any questions or inquiries, please feel free to contact us using the form below or the information provided:</p>
        <ul>
          <li>Email: info@waystarrecords.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Music Avenue, New York, NY 10001</li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
