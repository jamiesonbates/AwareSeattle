import React from 'react';

function AlertsList(props) {
  return (
    <div>
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
          <div className="Alerts-alert" key={alert.id}>
            <p>{alert.locationType}</p>
            <p>{alert.offense_name}</p>
            <p>{alert.range}</p>
            <button onClick={() => props.deleteAlert(alert.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default AlertsList;
