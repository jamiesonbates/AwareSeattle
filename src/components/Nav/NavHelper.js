import React from 'react';
import { Link } from 'react-router';

const style = {
  textDecoration: 'none',
  color: 'white'
}

function NavHelper(props) {
  return (
    <Link
      to={props.linkTo}
      style={style}
      className={`Nav-btn ${props.class}`}>
      {props.name}
    </Link>
  )
}

export default NavHelper;
