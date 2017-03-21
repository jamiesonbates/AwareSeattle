import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPoliceReports } from '../../actions/policeReportsAction';
import { authenticateUser } from '../../actions/authenticateAction';
import { fetchOffenseTypes } from '../../actions/offenseTypes';

import Map from '../Map/Map';
import Nav from '../Nav/Nav';

import './dashboard.css';

class Dashboard extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPoliceReports());
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
          className="Dashboard-Map"
        />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    policeReports: store.policeReports.reports
  };
};

export default connect(mapStateToProps)(Dashboard);
