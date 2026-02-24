import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yzregui', 
      'template_01yv1vi', 
      form.current, 
      'OBjciQl1lwE8F29Xc'
    )
    .then((result) => {
        alert("Message Sent Successfully!");
        e.target.reset(); 
    }, (error) => {
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-main">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;