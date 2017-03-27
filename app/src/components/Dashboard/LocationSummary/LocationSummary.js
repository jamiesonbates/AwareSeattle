import React, { Component } from 'react';
import { connect } from 'react-redux';

import './locationsummary.css';

class LocationSummary extends Component {
  render() {
    return (
      <div className="LocationSummary-container">
        <div className="LocationSummary-header">
          {
            this.props.locationIsSelected ?
            <h3>Metrics for "{this.props.selectedLocation.name}" Location on Map</h3>
            :
            <h3>Metrics for a Location on Map</h3>
          }
        </div>

        <div className="LocationSummary-stats-container">
          {
            this.props.areLocations ?
              this.props.locationIsSelected ?
                <div className="LocationSummary-stats">
                  <div className="LocationSummary-single-stat-container">
                    <div className="LocationSummary-single-stat">
                      <h5>Total Crimes</h5>
                      <p>{this.props.selectedLocation.totalCrimes}</p>
                    </div>
                  </div>
                  {
                    this.props.selectedLocation.offenseBreakdown.map((offense, i) => (
                      <div key={i} className="LocationSummary-single-stat-container">
                        <div className="LocationSummary-single-stat">
                          <h5>{offense.title}</h5>
                          <p>{offense.totalOffenses}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              :
                <h4>Select a location on the map to see statistics about crime nearby</h4>
            :
              <h4>Add a location from the toolbar to see statistics about crime nearby</h4>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    selectedLocation: store.locations.selectedLocation,
    areLocations: store.locations.areLocations,
    locationIsSelected: store.locations.locationIsSelected
  }
}

export default connect(mapStateToProps)(LocationSummary);
