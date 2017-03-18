import React from 'react';
import { Link } from 'react-router';

import './nav.css';

function Nav(props) {
  return (
    <nav className="Nav-container">
      <h1 className="Nav-title">AwareSeattle</h1>
      <div className="Nav-btn-container">
        <button className="Nav-btn">Login</button>
        <button className="Nav-btn">
          <Link to="/signup">
          Sign Up
          </Link>
        </button>
      </div>
    </nav>
  )
}

export default Nav;
