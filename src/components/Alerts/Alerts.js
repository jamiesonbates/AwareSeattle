import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getAlerts } from '../../actions/alertsAction';
import { deleteLocation } from '../../actions/deleteLocationAction';
import { deleteAlert } from '../../actions/deleteAlertAction';
import { authenticateUser } from '../../actions/authenticateAction';
import { fetchOffenseTypes } from '../../actions/offenseTypes';

import LocationList from './Locations/LocationList';
import AlertsList from './AlertsList/AlertsList';
import AddLocation from './AddLocation/AddLocation';
import AddAlert from './AddAlert/AddAlert';
import Nav from '../Nav/Nav';

import './alerts.css';

class Alerts extends Component {
  componentWillMount() {
    this.props.dispatch(getAlerts(this.props.userId));

    setTimeout(() => {
      if (!this.props.isAuthenticated) {
        // this.props.dispatch(authenticateUser());
      }
    }, 1000);
  }

  deleteLocation(location_id) {
    const userId = this.props.userId;

    this.props.dispatch(deleteLocation(location_id, userId));
  }

  deleteAlert(alert_id) {
    const userId = this.props.userId;

    this.props.dispatch(deleteAlert(alert_id, userId))
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Nav {...this.props}/>
        <div className="Alerts-container">
          <div className="Alerts-location-container">
            <div className="Alerts-location-title">
              <h2>Locations</h2>
            </div>
            {
              this.props.areLocations ?
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
              this.props.hasAlerts ?
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
    locations: store.locations.userLocations,
    userId: store.user.userId,
    isAuthenticated: store.user.isAuthenticated,
    alerts: store.alerts.alerts,
    offenseTypes: store.offenseTypes.offenseTypes,
    areLocations: store.locations.areLocations,
    hasAlerts: store.alerts.hasAlerts
  }
}

export default connect(mapStateToProps)(Alerts);
