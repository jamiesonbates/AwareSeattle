import React from 'react';

import './locationsummary.css';

function LocationSummary(props) {
  console.log(props);
  const locationStats = props.locations.locationStats;
  const identity = props.locations.selectedLocation;
  const selectedLocation = locationStats[identity];
  const areLocations = props.locations.areLocations;
  const locationIsSelected = props.locations.locationIsSelected;

  return (
    <div>
      {
        areLocations ?
          locationIsSelected ?
            <div>
              <h4>These stats detail crimes that occured near your {selectedLocation.name}</h4>
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
