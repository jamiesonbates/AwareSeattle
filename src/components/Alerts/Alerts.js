import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';

import { getAlerts } from '../../actions/alertsAction';

import LocationList from './Locations/LocationList';
import AlertsList from './AlertsList/AlertsList';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId))
  }

  render() {
    let areLocations = false;

    if (this.props.locations.length) {
      areLocations = true;
    }

    console.log(this.props);
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
        <div className="Alerts-list-container">
          <AlertsList {...this.props} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    locations: store.locations.locations,
    userId: store.user.userId,
    alerts: store.alerts.alerts
  }
}

export default connect(mapStateToProps)(Alerts);
