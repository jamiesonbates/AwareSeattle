import React from 'react';

import './alertslist.css';

function AlertsList(props) {
  return (
    <div className="AlertsList-container">
      <div className="AlertsList-titles">
        <div className="AlertsList-locationtitle">
          <h3>Location</h3>
        </div>

        <div className="AlertsList-crimetitle">
          <h3>Crime</h3>
        </div>

        <div className="AlertsList-distancetitle">
          <h3>Range</h3>
        </div>

        <div className="AlertsList-deletetitle">
          <h3>Delete</h3>
        </div>
      </div>
      {
        props.alerts.map(alert => {
          console.log(alert);
          for (const location of props.locations) {
            if (alert.user_alert_location_id === location.id) {
              alert.locationType = location.location_title;
              console.log(location);
              console.log(alert);
              return alert;
            }
          }
        })
        .map(alert => (
          <div className="Alerts" key={alert.id}>
            <div className="AlertsList-locationtype">
              <p>{alert.locationType}</p>
            </div>

            <div className="AlertsList-offensename">
              <p>{alert.offense_name}</p>
            </div>

            <div className="AlertsList-range">
              <p>{alert.range}</p>
            </div>

            <div className="AlertsList-deletealert">
              <button
                onClick={() => props.deleteAlert(alert.id)}
                className="AlertsList-delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AlertsList;
