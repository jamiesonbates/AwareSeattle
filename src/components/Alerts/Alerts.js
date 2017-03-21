import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';

import { getAlerts } from '../../actions/alertsAction';

import LocationList from './Locations/LocationList';
import AlertsList from './AlertsList/AlertsList';
import AddLocation from './AddLocation/AddLocation';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId))
  }

  deleteLocation() {
    console.log('delete location');
  }

  deleteAlert() {
    console.log('delete alert');
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
          <h2>Locations</h2>
          {
            areLocations ?
              <LocationList deleteLocation={this.deleteLocation} {...this.props} />
            :
              <AddLocation {...this.props} />
          }
        </div>
        <div className="Alerts-list-container">
          <h2>Alerts</h2>
          <AlertsList deleteAlert={this.deleteAlert} {...this.props} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    locations: store.locations.locations,
    userId: store.user.userId,
    alerts: store.alerts.alerts,
    offenseTypes: store.offenseTypes.offenseTypes
  }
}

export default connect(mapStateToProps)(Alerts);
