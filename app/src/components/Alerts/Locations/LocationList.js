import React from 'react';

import './locationlist.css';

function LocationsList(props) {
  return (
    <div className="LocationList-container">
      <div className="LocationList-titles">
        <div className="LocationList-locationtitle">
          <h3>Location</h3>
        </div>

        <div className="LocationList-addresstitle">
          <h3>Address</h3>
        </div>

        <div className="LocationList-deletetitle">
          <h3>Delete</h3>
        </div>
      </div>
      {
        props.locations.map(location => (
          <div className="Location" key={location.id}>
            <div className="Location-name">
              <p>
                {location.location_title}
              </p>
            </div>

            <div className="Location-address">
              <p>
                {location.location}
              </p>
            </div>

            <div className="Location-deletelocation">
              <button
                onClick={() => props.deleteLocation(location.id)}
                className="LocationList-delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default LocationsList;
