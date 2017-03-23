import React from 'react';

import './locationsummary.css';

function LocationSummary(props) {
  return (
    <div>
      {
        locationSelected ?
          <h4>Select a location to see statistics about crime nearby</h4>
        :
          <div>
            <h4>Stats</h4>
          </div>
      }
    </div>
  )
}

export default LocationSummary;
