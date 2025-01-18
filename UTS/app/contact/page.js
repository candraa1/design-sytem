'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been sent!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out using the form below or through our contact details.</p>
      </header>

      <div className="contact-info">
        <div className="info-box">
          <h2>Our Location</h2>
          <p>123 Motorbike Street, Jakarta, Indonesia</p>
        </div>
        <div className="info-box">
          <h2>Contact Details</h2>
          <p>Email: info@cbmotorclub.com</p>
          <p>Phone: +62 812 3456 7890</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
