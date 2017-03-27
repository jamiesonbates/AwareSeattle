import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/loginAction';

import Nav from '../Nav/Nav';

import './login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      error: null
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    if (!email.includes('@')) {
      this.setState({
        error: 'Bad email or password.'
      })

      return;
    }

    if (password.length < 8) {
      this.setState({
        error: 'Bad email or password.'
      })

      return;
    }

    this.props.dispatch(loginUser(email, password));
    this.refs.loginForm.reset();
  }

  render() {
    return (
      <div className="Login-container">
        <Nav {...this.props} />

        <div className="Login-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} ref="loginForm" className="Login-form">
            <h2>Login</h2>
            <div className="Login-input-container">
              <input type="text" ref="email" placeholder="Email"/>
            </div>

            <div className="Login-input-container">
              <input type="text" ref="password" placeholder="Password"/>
            </div>

            {
              this.state.error || this.props.loginError ?
                <div className="Login-error">
                  <p>{this.state.error || this.props.loginError}</p>
                </div>
              : null
            }

            <button
              type="submit"
              className="Login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    isAuthenticated: store.user.isAuthenticated,
    loginError: store.user.loginError
  }
}

export default connect(mapStateToProps)(Login)
