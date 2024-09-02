// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                    <p>Email: info@gmail.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
