import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getAlerts } from '../../actions/alertsAction';
import { deleteLocation } from '../../actions/deleteLocationAction';

import LocationList from './Locations/LocationList';
import AlertsList from './AlertsList/AlertsList';
import AddLocation from './AddLocation/AddLocation';
import AddAlert from './AddAlert/AddAlert';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId))
  }

  deleteLocation(location_id) {
    console.log(location_id);
    this.props.dispatch(deleteLocation(location_id));
  }

  deleteAlert() {
  }

  render() {
    let areLocations = false;

    if (this.props.locations.length) {
      areLocations = true;
    }

    let areAlerts = false;

    if (this.props.alerts.length) {
      areAlerts = true;
    }

    console.log(this.props);
    return (
      <div className="Alerts-container">
        <h1>Aware Seattle</h1>
        <div className="Alerts-location-container">
          <h2>Locations</h2>
          {
            areLocations ?
              <LocationList
                deleteLocation={this.deleteLocation.bind(this)}
                {...this.props}
              />
            :
              <AddLocation {...this.props} />
          }
        </div>
        <div className="Alerts-list-container">
          <h2>Alerts</h2>
          {
            areAlerts ?
              <AlertsList deleteAlert={this.deleteAlert} {...this.props} />
            :
              <AddAlert />
          }
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
