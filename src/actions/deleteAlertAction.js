import axios from 'axios';

export function deleteAlert(alert_id) {
  console.log(alert_id);
  return function(dispatch) {
    axios.delete(`/api/alerts/${alert_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
