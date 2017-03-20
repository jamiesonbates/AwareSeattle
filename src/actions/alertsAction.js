import axios from 'axios';

export function getAlerts(userId) {
  return function(dispatch) {
    axios.get(`/api/alerts/${userId}`)
      .then((res) => {
        dispatch({
          type: 'FETCH_USER_ALERTS_SUCCESS',
          payload: res.data
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_ALERTS_FAILURE',
          payload: err
        })
      })
  }
}
