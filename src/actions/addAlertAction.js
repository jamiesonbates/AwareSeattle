import axios from 'axios';

import { getAlerts } from './alertsAction';

export function addNewAlert(user_id, user_alert_location_id, offense_type_id, range) {
  return function(dispatch) {
    axios.post(`https://awareseattle-backend.herokuapp.com/api/alerts`, {
      user_id,
      user_alert_location_id,
      offense_type_id,
      range
    })
    .then((res) => {
      dispatch(getAlerts(user_id));
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
