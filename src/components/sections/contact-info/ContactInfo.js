import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="contact-info-container">
        <h2>Contact Information</h2>
        <div className="info">
          <p>
            <strong>Email:</strong> calebgdarling@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (763) 568-5101
          </p>
          <p>
            <strong>Address:</strong> 7104 Brockton Lane, Maple Grove, Minnesota
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
