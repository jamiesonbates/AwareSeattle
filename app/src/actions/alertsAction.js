import axios from 'axios';

export function getAlerts(userId) {
  return function(dispatch) {
    axios.get(`/api/alerts/${userId}`)
      .then((res) => {
        dispatch({
          type: 'FETCH_USER_ALERTS_SUCCESS',
          payload: res.data
        })

        if (res.data.length > 0) {
          dispatch({
            type: 'USER_HAS_ALERTS_SET',
            payload: true
          })
        }
        else {
          dispatch({
            type: 'USER_HAS_NO_ALERTS_SET',
            payload: false
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_ALERTS_FAILURE',
          payload: err
        })
      })
  }
}
