import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Moment from 'moment';

import './status.css';

class Status extends Component {
  render() {
    return (
      <div className="Status-container">
        <h3>What's in this map?</h3>
        <p>Police incident reports from the last <span className="Status-diff">{this.state.diff}</span> within 500 meters of <span className="Status-location">{this.props.combinedLocations.length} locations</span> in Seattle, WA.
        </p>
        {
          this.props.locationIsSelected ?
            <Link
              to={`/reports/${this.props.status.state.lat}/${this.props.status.state.lng}/500/false`}
              className="Status-btn">
              See Incidents Near {this.props.status.name}
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
    timeFilter: store.timeFilter,
    offenses: store.offenseFilter.fitlerByOffenses,
    status: store.status
  }
}

export default connect(mapStateToProps)(Status);
