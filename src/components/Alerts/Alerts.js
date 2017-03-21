import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getAlerts } from '../../actions/alertsAction';
import { deleteLocation } from '../../actions/deleteLocationAction';
import { deleteAlert } from '../../actions/deleteAlertAction';

import LocationList from './Locations/LocationList';
import AlertsList from './AlertsList/AlertsList';
import AddLocation from './AddLocation/AddLocation';
import AddAlert from './AddAlert/AddAlert';
import Nav from '../Nav/Nav';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId))
  }

  deleteLocation(location_id) {
    console.log(location_id);
    this.props.dispatch(deleteLocation(location_id));
  }

  deleteAlert(alert_id) {
    this.props.dispatch(deleteAlert(alert_id))
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
      <div>
        <Nav />
        <div className="Alerts-container">
          <div className="Alerts-location-container">
            <div className="Alerts-location-title">
              <h2>Locations</h2>
            </div>
            {
              areLocations ?
                <div className="Alerts-wrapper">
                  <AddLocation {...this.props} />
                  <LocationList
                    deleteLocation={this.deleteLocation.bind(this)}
                    {...this.props}
                  />
                </div>
              :
                <AddLocation {...this.props} />
            }
          </div>
          <div className="Alerts-list-container">
            <div className="Alerts-list-title">
              <h2>Alerts</h2>
            </div>
            {
              areAlerts ?
                <div className="Alerts-wrapper">
                  <AddAlert />
                  <AlertsList
                    deleteAlert={this.deleteAlert.bind(this)}
                    {...this.props}
                  />
                </div>
              :
                <AddAlert />
            }
          </div>
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
