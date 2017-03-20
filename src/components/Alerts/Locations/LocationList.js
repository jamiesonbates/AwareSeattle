import React, { Component } from 'react';

import './locationList.css';

function LocationsList(props) {
  return (
    <div>
      {
        props.locations.map(location => (
          <div className="Alerts-location" key={location.id}>
            <p className="Alerts-location-data">
              {location.location_title}
            </p>

            <p className="Alerts-location-data">
              {location.location}
            </p>

            <p className="Alerts-location-data">
              {location.lat}, {location.lng}
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default LocationsList;
