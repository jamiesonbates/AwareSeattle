import React from 'react';
import { Link } from 'react-router';

import './footer.css';

function Footer(props) {
  return (
    <div className="Footer-container">
      <Link
        to='/'
        className="Footer-btn">
        AwareSeattle
      </Link>
      </div>
  )
}

export default Footer;
