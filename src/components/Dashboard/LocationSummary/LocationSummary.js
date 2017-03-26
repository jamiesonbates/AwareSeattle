import React from 'react';

import './locationsummary.css';

function LocationSummary(props) {
  const locationIsSelected = props.locations.locationIsSelected;
  const areLocations = props.locations.areLocations;
  const selectedLocation = props.locations.selectedLocation;

  return (
    <div className="LocationSummary-container">
      <div className="LocationSummary-header">
        {
          locationIsSelected ?
            <h3>Metrics for "{selectedLocation.name}" Location on Map</h3>
          :
            <h3>Metrics for a Location on Map</h3>
        }
      </div>

      <div className="LocationSummary-stats-container">
        {
          areLocations ?
            locationIsSelected ?
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
            :
            <h4>Select a location on the map to see statistics about crime nearby</h4>
          :
            <h4>Add a location from the toolbar to see statistics about crime nearby</h4>
        }
      </div>
    </div>
  )
}

export default LocationSummary;
