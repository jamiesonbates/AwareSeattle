import axios from 'axios';

import { getAlerts } from './alertsAction';

export function deleteAlert(alert_id, user_id) {
  console.log(user_id);
  console.log(alert_id);
  return function(dispatch) {
    axios.delete(`/api/alerts/${alert_id}`)
      .then((res) => {
        dispatch(getAlerts(user_id))
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
