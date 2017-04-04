import React from 'react';
import { Link } from 'react-router';

import NavHelper from './NavHelper';
import SignOut from './SignOut';

import './nav.css';

function Nav(props) {
  const isAuthenticated = props.isAuthenticated;
  const currentPath = window.location.pathname;
  const onMap = currentPath === '/';
  const onAlerts = currentPath === '/alerts';
  const onSignup = currentPath === '/signup';
  const onLogin = currentPath === '/login';
  const onReports = currentPath.includes('reports');

  return (
    <nav className="Nav-container">
      <h1 className="Nav-title">Aware Seattle</h1>
      <div className="Nav-btn-container">
        {
          props.isAuthenticated ?
            onMap ?
              <div className="Nav-btns">
                <NavHelper
                  linkTo={'/Alerts'}
                  name="Alerts"
                  class="Nav-Alerts-btn"/>
                <SignOut />
              </div>
            :
              onAlerts ?
                <div className="Nav-btns">
                  <NavHelper
                    linkTo={'/'}
                    name="Map"
                    class="Nav-Map-btn"/>
                  <SignOut />
                </div>
              :
                onLogin ?
                  <div className="Nav-btns">
                    <NavHelper
                      linkTo={'/signup'}
                      name="Sign Up"
                      class="Nav-Signup-btn"/>
                    <NavHelper
                      linkTo={'/'}
                      name="Map"
                      class="Nav-Map-btn"/>
                  </div>
                :
                  onSignup ?
                    <div className="Nav-btns">
                      <NavHelper
                        linkTo={'/login'}
                        name="Login"
                        class="Nav-Login-btn"/>
                      <NavHelper
                        linkTo={'/'}
                        name="Map"
                        class="Nav-Map-btn"/>
                    </div>
                  :
                    onReports ?
                      <div className="Nav-btns">
                        <NavHelper
                          linkTo={'/'}
                          name="Map"
                          class="Nav-Map-btn"
                        />
                        <NavHelper
                          linkTo={'/alerts'}
                          name="Alerts"
                          class="Nav-Alerts-btn"
                        />
                        <SignOut />
                      </div>
                    :
                      <div className="Nav-btns">
                        <NavHelper
                          linkTo={'/'}
                          name="Map"
                          class="Nav-Map-btn"/>
                        <SignOut />
                      </div>
          :
            onReports ?
              <div className="Nav-btns">
                <NavHelper
                  linkTo={'/'}
                  name="Map"
                  class="Nav-Map-btn"/>
                <NavHelper
                  linkTo={'/login'}
                  name="Login"
                  class="Nav-Login-btn"/>
                <NavHelper
                  linkTo={'/signup'}
                  name="Sign Up"
                  class="Nav-Signup-btn"/>
              </div>
            :
              onSignup ?
                <div className="Nav-btns">
                  <NavHelper
                    linkTo={'/login'}
                    name="Login"
                    class="Nav-Login-btn"/>
                  <NavHelper
                    linkTo={'/'}
                    name="Map"
                    class="Nav-Map-btn"/>
                </div>
              :
               onLogin ?
                 <div className="Nav-btns">
                   <NavHelper
                     linkTo={'/signup'}
                     name="Sign Up"
                     class="Nav-Signup-btn"/>
                   <NavHelper
                     linkTo={'/'}
                     name="Map"
                     class="Nav-Map-btn"/>
                 </div>
               :
                <div className="Nav-btns">
                  <NavHelper
                    linkTo={'/login'}
                    name="Login"
                    class="Nav-Login-btn"/>

                  <NavHelper
                    linkTo={'/signup'}
                    name="Sign Up"
                    class="Nav-Signup-btn"/>
                </div>
        }
      </div>
    </nav>
  )
}

export default Nav;
