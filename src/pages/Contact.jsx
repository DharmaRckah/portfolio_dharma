// components/Contact.js
import React from 'react';

export const Contact = () => (
  <div className="contact-section">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);
