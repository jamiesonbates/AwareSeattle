import axios from 'axios';

import { getAlerts } from './alertsAction';

export function deleteAlert(alert_id, user_id) {
  return function(dispatch) {
    axios.delete(`https://awareseattle-backend.herokuapp.com/api/alerts/${alert_id}`)
      .then((res) => {
        dispatch(getAlerts(user_id))
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
