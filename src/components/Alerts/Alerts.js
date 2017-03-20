import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';

import { getAlerts } from '../../actions/alertsAction';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId))
  }
  render() {
    console.log(this.props);
    return (
      <div className="Alerts-container">
        <h1>Aware Seattle</h1>
        <div className="Alerts-location-container">
          {
            
          }
        </div>
        <div>
          This is where a list of alerts will go
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    locations: store.user.locations,
    areLocations: store.user.areLocations,
    userId: store.user.userId,
    alerts: store.alerts
  }
}

export default connect(mapStateToProps)(Alerts);
