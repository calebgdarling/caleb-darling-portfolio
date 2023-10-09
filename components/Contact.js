import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
        <h2>Contact Information</h2>
        <p>
          <strong>Name:</strong> Caleb Darling
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:calebgdarling@gmail.com">calebgdarling@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:763-568-5101">763-568-5101</a>
        </p>
        <p>
          <strong>Location:</strong> Twin Cities, MN
        </p>
      </div>
    );
};

export default Contact;