import React from 'react';
import { Link } from 'react-router';

import NavHelper from './NavHelper';

import './nav.css';

function Nav(props) {
  const isAuthenticated = props.isAuthenticated;
  const currentPath = window.location.pathname;
  const onDashboard = currentPath === '/';
  const onAlerts = currentPath === '/alerts';
  const onSignup = currentPath === '/signup';
  const onLogin = currentPath === './login'

  return (
    <nav className="Nav-container">
      <h1 className="Nav-title">AwareSeattle</h1>
      <div className="Nav-btn-container">
        {
          props.isAuthenticated ?
            onDashboard ?
              <NavHelper linkTo={'/Alerts'} name="Alerts" />
            :
              onAlerts ?
                <NavHelper linkTo={'/'} name="Dashboard" />
              :
                onLogin ?
                  <NavHelper linkTo={'/signup'} name="Sign Up" />
                :
                  onSignup ?
                    <NavHelper linkTo={'/login'} name="Login" />
                  :
                    <NavHelper linkTo={'/'} name="Dashboard" />
          :
            <div className="Nav-btns">
              <NavHelper linkTo={'/login'} name="Login" />

              <NavHelper linkTo={'/signup'} name="Sign Up" />
            </div>
        }
      </div>
    </nav>
  )
}

export default Nav;
