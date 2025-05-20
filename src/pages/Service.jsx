import React from 'react';
import './Service.css';

const Service = () => {
  const services = [
    {
      id: 1,
      icon: "🚚",
      title: "Fast Shipping",
      description: "Get your products delivered within 2-3 business days nationwide."
    },
    {
      id: 2,
      icon: "🔄",
      title: "Easy Returns",
      description: "Hassle-free 30-day return policy on all products."
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Warranty Protection",
      description: "All electronics come with a minimum 1-year warranty."
    },
    {
      id: 4,
      icon: "💬",
      title: "24/7 Support",
      description: "Our customer service team is available around the clock."
    }
  ];

  return (
    <div className="service-page">
      <div className="service-header">
        <h1 className='animate__animated animate__bounce'>Our Services</h1>
        <p>At DaxoMart, we're committed to providing exceptional service at every step</p>
      </div>

      <div className="service-grid">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="service-help">
        <h2>Need Help?</h2>
        <p>Our team is just a click away</p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Service;