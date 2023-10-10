import React from 'react';
import './ContactInfo.css'; // Import your CSS file

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="contact-info-container">
        <h2>Contact Information</h2>
        <div className="info">
          <p>
            <strong>Email:</strong> example@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, City, Country
          </p>
          {/* Add more contact details as needed */}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
