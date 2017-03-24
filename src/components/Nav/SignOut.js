import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { signOutUser } from '../../actions/signOutAction';

const style = {
  textDecoration: 'none',
  color: 'white'
}

class SignOut extends Component {

  render() {
    return (
      <Link
        to='/'
        style={style}
        className="Nav-btn Nav-Signout-btn"
        onClick={this.props.dispatch(signOutUser())}>
        Sign Out
      </Link>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    
  }
}

export default connect(mapStateToProps)(SignOut);
