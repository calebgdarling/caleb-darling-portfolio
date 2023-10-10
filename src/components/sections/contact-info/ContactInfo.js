import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="contact-info-container">
        <h2>Contact Information</h2>
        <div className="info">
          <div className="info-item">
            <strong>Email:</strong> calebgdarling@gmail.com
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +1 (763) 568-5101
          </div>
          <div className="info-item">
            <strong>Address:</strong> 7104 Brockton Lane, Maple Grove, Minnesota
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
