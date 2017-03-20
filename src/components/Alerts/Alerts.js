import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getAlerts } from '../../actions/alertsAction';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId))
  }
  render() {
    console.log(this.props);
    return (
      <h1>Aware Seattle</h1>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    userId: store.user.userId,
    alerts: store.alerts
  }
}

export default connect(mapStateToProps)(Alerts);
