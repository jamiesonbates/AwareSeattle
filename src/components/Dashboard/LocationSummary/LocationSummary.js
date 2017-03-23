import React from 'react';

import './locationsummary.css';

function LocationSummary(props) {
  const locationIsSelected = props.locations.locationIsSelected;
  const areLocations = props.locations.areLocations;

  return (
    <div>
      {
        areLocations ?
          locationIsSelected ?
            <div>
              <h4>These stats detail crimes that occured near your {props.locations.selectedLocation.name} location within 500 meters in the last month</h4>
              <div>
                <div>
                  <h5>Total Crimes</h5>
                  <p>{props.locations.selectedLocation.totalCrimes}</p>
                </div>
                {
                  props.locations.selectedLocation.offenseBreakdown.map((offense, i) => (
                    <div key={i}>
                      <h5>{offense.title}</h5>
                      <p>{offense.totalOffenses}</p>
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
