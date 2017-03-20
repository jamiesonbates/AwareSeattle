import axios from 'axios';

export function getUserLocations(userId) {
  return function(dispatch) {
    axios.get(`/api/locations/${userId}`)
      .then((res) => {
        dispatch({
          type: 'FETCH_USER_LOCATIONS_SUCCESS',
          payload: res.data
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_LOCATIONS_FAILURE',
          payload: err
        })
      })
  }
}
