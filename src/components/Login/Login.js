import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginUser from '../../actions/loginAction';

import './login.css';

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    this.props.dispatch(loginUser(email, password));
    this.refs.loginForm.reset();
  }

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

const mapStateToProps = function(store) {
  return {

  }
}

export default connect(mapStateToProps)(Login)
