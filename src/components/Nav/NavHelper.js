import React from 'react';
import { Link } from 'react-router';

const style = {
  textDecoration: 'none',
  color: 'white'
}

function NavHelper(props) {
  return (
    <div className="Nav-btns">
      <button className={`Nav-btn ${props.class}`}>
        <Link to={props.linkTo} style={style}>
          {props.name}
        </Link>
      </button>
    </div>
  )
}

export default NavHelper;
