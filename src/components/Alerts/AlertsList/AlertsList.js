import React from 'react';

function AlertsList(props) {
  return (
    <div>
      {
        props.alerts.map(alert => {
          for (const location of props.locations) {
            console.log(location);
            if (alert.user_alert_location_id === location.id) {
              alert.locationType = location.location_title;
              return alert;
            }
          }
        })
        .map(alert => (
          <div className="Alerts-alert" key={alert.id}>
            <p>{alert.locationType}</p>
            <p>{alert.offense_name}</p>
            <p>{alert.range}</p>
          </div>
        ))
      }
    </div>
  )
}

export default AlertsList;
