import axios from 'axios';

export function addNewAlert(user_id, user_alert_location_id, offense_type_id, range) {
  return function(dispatch) {
    axios.post('/api/alerts')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
