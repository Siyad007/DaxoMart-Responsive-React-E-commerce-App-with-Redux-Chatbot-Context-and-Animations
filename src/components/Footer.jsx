import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 footer-section">
            <h5 className="footer-heading">About</h5>
            <p className='footer-para'>
              Welcome to DaxoMart, your go-to store for premium products at unbeatable prices. Shop with confidence and style!
            </p>
          </div>
        
          <div className="col-md-4 footer-section">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>
          </div>
      
          <div className="col-md-4 footer-section">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-icons">
              <a href="#facebook" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#twitter" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#instagram" className="social-icon"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copy">
          &copy; 2025 DaxoMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer