import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticateUser } from '../../actions/authenticateAction';
import { fetchOffenseTypes } from '../../actions/offenseTypes';
import { addLocalLocation } from '../../actions/addLocalLocationAction';
import { resetOffenseFilter } from '../../actions/resetOffenseFilterAction';
import { resetLocations } from '../../actions/resetLocationsAction';
import { resetMarkers } from '../../actions/resetReportsAction';

import Map from '../Map/Map';
import Nav from '../Nav/Nav';
import NewLocation from './NewLocation/NewLocation';
import LocationsOnMap from './LocationsOnMap/LocationsOnMap';
import ReportInfo from './ReportInfo/ReportInfo';
import OffenseTypeFilter from './OffenseTypeFilter/OffenseTypeFilter';
import LocationSummary from './LocationSummary/LocationSummary';
import TimeFilter from './TimeFilter/TimeFilter';

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
    this.props.dispatch(resetLocations(false));
    this.props.dispatch(resetMarkers());
    this.props.dispatch(fetchOffenseTypes());
    this.props.dispatch(resetOffenseFilter());
    this.props.dispatch(authenticateUser());

    setTimeout(() => {
      if (!this.props.isAuthenticated) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          this.props.dispatch(addLocalLocation(lat, lng, 0));
        })
      }
    }, 2000);
  }

  render() {
    return (
      <div className="Dashboard-container">
        <div className="Dashboard-nav-container">
          <Nav {...this.props}/>
        </div>

        <div className="Dashboard-main-container">
          <div className="Dashboard-features-container">
            <div className="Dashboard-map-container">
              <Map
                reports={this.props.policeReports}
                mergedReports={this.props.mergedReports}
              />
              <LocationsOnMap />
            </div>

            <div className="Dashboard-location-summary-container">
              {
                this.props.areStats ?
                  <LocationSummary {...this.props} />
                :
                <h4>Waiting...</h4>
              }
            </div>
          </div>

          <div className="Dashboard-tools-container">
            <div className="Dashboard-tools-reportinfo">
              <ReportInfo report={this.props.currentReport}/>
            </div>

            <div className="Dashboard-tools-newlocation">
              <NewLocation />
            </div>

            <div className="Dashboard-tools-offensetype">
              <OffenseTypeFilter />
            </div>

            <div className="Dashboard-tools-timefilter">
              <TimeFilter />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    policeReports: store.policeReports.reports,
    mergedReports: store.policeReports.mergedReports,
    currentReport: store.currentReport.currentReports,
    areStats: store.locations.areStats,
    locations: store.locations,
    combinedLocations: store.locations.combineLocations,
    isAuthenticated: store.user.isAuthenticated
  };
};

export default connect(mapStateToProps)(Dashboard);
