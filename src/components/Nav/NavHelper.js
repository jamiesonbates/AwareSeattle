import React from 'react';
import { Link } from 'react-router';

function NavHelper(props) {
  return (
    <div className="Nav-btns">
      <button className="Nav-btn">
        <Link to={props.linkTo}>
          {props.name}
        </Link>
      </button>
    </div>
  )
}

export default NavHelper;
