import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Moment from 'moment';

import './status.css';

class Status extends Component {
  render() {
    const name = this.props.selectedLocation.name;
    const lat = this.props.selectedLocation.lat;
    const lng = this.props.selectedLocation.lng;
    let locationCount = this.props.combinedLocations.length;
    const start = Moment(this.props.timeFilter.startingMilliseconds);
    const end = Moment(this.props.timeFilter.endingMilliseconds);
    let diff = Math.round(end.diff(start, 'months', true));

    if (this.props.locationIsSelected) {
      locationCount = 1;
    }

    if (diff > 1) {
      diff += ' months';
    }
    else {
      diff += ' month';
    }

    return (
      <div className="Status-container">
        <h3>What's in this map?</h3>
        <p>Police incident reports from the last <span className="Status-diff">{diff}</span> within 500 meters of <span className="Status-location">{locationCount} locations</span> in Seattle, WA.
        </p>
        {
          this.props.locationIsSelected ?
            <Link
              to={`/reports/${lat}/${lng}/500/false`}
              className="Status-btn">
              See Incidents Near {name}
           </Link>
          :
          <div></div>
        }
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    selectedLocation: store.locations.selectedLocation,
    combinedLocations: store.locations.combinedLocations,
    locationIsSelected: store.locations.locationIsSelected,
    timeFilter:   store.timeFilter
  }
}

export default connect(mapStateToProps)(Status);
