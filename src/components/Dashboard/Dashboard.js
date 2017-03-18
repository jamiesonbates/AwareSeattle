import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPoliceReports } from '../../actions/policeReportsAction';

import Map from '../Map/Map';
import Nav from '../Nav/Nav';

import './dashboard.css';

class Dashboard extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPoliceReports());
  }

  render() {
    console.log(this.props);
    return (
      <div className="Dashboard-container">
        <div>
          <Nav />
        </div>

        <Map
          reports={this.props.policeReports.policeReports}
          className="Dashboard-Map"
        />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    policeReports: store.policeReports
  };
};

export default connect(mapStateToProps)(Dashboard);
