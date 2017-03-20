import React, { Component } from 'react';
import { connect } from 'react-redux';

import './signup.css';

class Signup extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;

  }

  render() {
    return (
      <div className="Signup-container">
        <h1>AwareSeattle</h1>
        <form onSubmit={this.handleSubmit} ref="signupForm" className="Signup-form">
          <div className="Signup-input-container">
            <label for="username">Username</label>
            <input type="text" ref="username" id="username"/>
          </div>

          <div className="Signup-input-container">
            <label for="email">Email</label>
            <input type="text" ref="email" id="email"/>
          </div>

          <div className="Signup-input-container">
            <label for="password">Password</label>
            <input type="text" ref="password" id="password"/>
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

export default Signup;
