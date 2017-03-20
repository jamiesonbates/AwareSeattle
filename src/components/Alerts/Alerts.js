import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';

import { getAlerts } from '../../actions/alertsAction';

import LocationList from './Locations/LocationList';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId))
  }

  mapLocationsToAlerts(alert) {
    for (const location of this.props.locations) {
      if (location.id === alert.user_alert_location_id) {
        alert.location = location;

        return alert;
      }
    }

    return alert;
  }

  render() {
    let areLocations = false;

    if (this.props.locations.length) {
      areLocations = true;
    }

    return (
      <div className="Alerts-container">
        <h1>Aware Seattle</h1>
        <div className="Alerts-location-container">
          {
            areLocations ?
              <LocationList {...this.props} />
            :
              <Geosuggest />
          }
        </div>
        <div>
        
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    locations: store.locations.locations,
    userId: store.user.userId,
    alerts: store.alerts
  }
}

export default connect(mapStateToProps)(Alerts);
