import React from 'react';

import './locationsummary.css';

function LocationSummary(props) {
  const locationIsSelected = props.locations.locationIsSelected;
  const areLocations = props.locations.areLocations;

  return (
    <div className="LocationSummary-container">
      {
        areLocations ?
          locationIsSelected ?
            <div className="LocationSummary-stats-container">
              <div className="LocationSummary-stats-header">
                <h4>These stats detail crimes that occured near your {props.locations.selectedLocation.name} location within 500 meters in the last month</h4>
              </div>
              <div className="LocationSummary-stats">
                <div className="LocationSummary-single-stat-container">
                  <div className="LocationSummary-single-stat">
                    <h5>Total Crimes</h5>
                    <p>{props.locations.selectedLocation.totalCrimes}</p>
                  </div>
                </div>
                {
                  props.locations.selectedLocation.offenseBreakdown.map((offense, i) => (
                    <div key={i} className="LocationSummary-single-stat-container">
                      <div className="LocationSummary-single-stat">
                        <h5>{offense.title}</h5>
                        <p>{offense.totalOffenses}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          :
          <h4>Select a location to see statistics about crime nearby</h4>
        :
        <h4>Add a location to see statistics about crime nearby</h4>
      }
    </div>
  )
}

export default LocationSummary;
