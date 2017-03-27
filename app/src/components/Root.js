import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Dashboard from './Dashboard/Dashboard';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Alerts from './Alerts/Alerts';
import ReportsList from './ReportsList/ReportsList';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/alerts" component={Alerts} />
      <Route path="/reports/:lat/:lng/:range/:offenseId" component={ReportsList} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
