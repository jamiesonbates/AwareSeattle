import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPoliceReports } from '../../actions/policeReportsAction';
import { authenticateUser } from '../../actions/authenticateAction';
import { fetchOffenseTypes } from '../../actions/offenseTypes';

import Map from '../Map/Map';
import Nav from '../Nav/Nav';

import './dashboard.css';

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      defaultCircle: {
        lat: 47.617756,
        lng: -122.326560,
        range: 5000
      }
    }
  }
  componentWillMount() {
    const lat = this.state.defaultCircle.lat;
    const lng = this.state.defaultCircle.lng;
    const range = this.state.defaultCircle.range;

    this.props.dispatch(fetchPoliceReports(lat, lng, range));
    this.props.dispatch(authenticateUser());
    this.props.dispatch(fetchOffenseTypes());
  }

  render() {
    return (
      <div className="Dashboard-container">
        <div>
          <Nav />
        </div>

        <Map
          reports={this.props.policeReports}
          mergedReports={this.props.mergedReports}
          className="Dashboard-Map"
        />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    policeReports: store.policeReports.reports,
    mergedReports: store.policeReports.mergedReports
  };
};

export default connect(mapStateToProps)(Dashboard);
