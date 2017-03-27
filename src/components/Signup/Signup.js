import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signupNewUser } from '../../actions/signupAction';

import './signup.css';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      error: null
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(password.length);

    if (username.length > 15) {
      this.setState({
        error: 'Username must be less than 15 characters.'
      });

      return;
    }

    if (password.length < 8) {
      this.setState({
        error: 'Password must be longer than 8 characters.'
      });

      return;
    }

    if (!email.includes('@')) {
      this.setState({
        error: 'Must use valid email.'
      })

      return;
    }

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

          {
            this.state.error ?
              <div className="Signup-error">
                <p>{this.state.error}</p>
              </div>
            :
              null
          }

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
