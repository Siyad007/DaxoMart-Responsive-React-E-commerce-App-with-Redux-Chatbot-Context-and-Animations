import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you're looking for seems to have gone on vacation.
          <br />
          <h2 style={{color:"purple"}}>DaxoMart</h2>
        </p>
        <Link to="/" className="not-found-button">
          <Home size={20} />
          <span>Return Home</span>
          </Link>
        <p className="not-found-help">
          Lost? Try checking the navigation menu above.
        </p>
      </div>
    </div>
  );
}