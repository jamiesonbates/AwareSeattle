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
            this.props.isHomeLocation ?
            'There is a location' :
            (<h2>Enter a location to track</h2>
            <Geosuggest
              placeholder=""
            />)

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
    homeLocation: {
      lat: store.user.homeLat,
      lng: store.user.homeLng
    },
    isHomeLocation: store.user.isHomeLocation,
    userId: store.user.userId,
    alerts: store.alerts
  }
}

export default connect(mapStateToProps)(Alerts);
