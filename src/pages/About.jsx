import React from 'react';
import { ShoppingBag, Users, Globe, Award } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>Welcome to DaxoMart</h1>
        <p className="tagline">Your Premier Shopping Destination</p>
      </section>

      <section className="about-story">
        <div className="content-wrapper">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, DaxoMart has revolutionized the online shopping experience
            by bringing together quality products, competitive prices, and exceptional
            customer service. Our journey began with a simple mission: to make premium
            shopping accessible to everyone.
          </p>
        </div>
      </section>
      <section className="founder-section">
        <div className="content-wrapper">
          <h2>Meet Our Founder</h2>
          <div className="founder-card">
            <div className="founder-content">
              <h3>Siyad Daxo</h3>
              <p className="founder-title">Founder & CEO</p>
              <p className="founder-quote">
                "Our vision at DaxoMart is to revolutionize the way people shop online,
                making quality products accessible to everyone while delivering an
                exceptional customer experience."
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="stats-section">
        <div className="stat-card">
          <ShoppingBag className="stat-icon" />
          <h3>10K+</h3>
          <p>Products</p>
        </div>
        <div className="stat-card">
          <Users className="stat-icon" />
          <h3>50K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <Globe className="stat-icon" />
          <h3>25+</h3>
          <p>Countries Served</p>
        </div>
        <div className="stat-card">
          <Award className="stat-icon" />
          <h3>15+</h3>
          <p>Awards Won</p>
        </div>
      </section>

      <section className="values-section">
        <div className="content-wrapper">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our products and services.</p>
            </div>
            <div className="value-card">
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our top priority in everything we do.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly evolving to provide the best shopping experience.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Building trust through honest and transparent practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}