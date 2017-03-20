import React, { Component } from 'react';

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

            <button onClick={props.deleteLocation}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default LocationsList;
