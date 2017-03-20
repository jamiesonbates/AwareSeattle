import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signupNewUser } from '../../actions/signupAction';

import './signup.css';

class Signup extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    this.props.dispatch(signupNewUser(username, email, password));
    this.refs.signupForm.reset();
  }

  render() {
    return (
      <div className="Signup-container">
        <h1>AwareSeattle</h1>
        <form onSubmit={this.handleSubmit.bind(this)} ref="signupForm" className="Signup-form">
          <div className="Signup-input-container">
            <label>Username</label>
            <input type="text" ref="username" />
          </div>

          <div className="Signup-input-container">
            <label>Email</label>
            <input type="text" ref="email" />
          </div>

          <div className="Signup-input-container">
            <label>Password</label>
            <input type="text" ref="password" />
          </div>

          <button type="submit">Signup</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {

  }
}

export default connect(mapStateToProps)(Signup);
