import React, { Component } from 'react';
import { connect } from 'react-redux';

import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login-container">
        <h1>AwareSeattle</h1>
        <form onSubmit={this.handleSubmit} ref="loginForm" className="Login-form">
          <div className="Login-input-container">
            <label>Email</label>
            <input type="text" ref="email" />
          </div>

          <div className="Login-input-container">
            <label>password</label>
            <input type="text" ref="password" />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps(store) {
  return {

  }
}

export default connect(mapStateToProps)(Login)
