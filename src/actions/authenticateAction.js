import axios from 'axios';

import { getUserLocations } from './userLocationsAction';

export function authenticateUser() {
  return function(dispatch) {
    axios.get('/api/users')
      .then((res) => {
        dispatch({
          type: 'USER_AUTHENTICATE_SUCCESS',
          payload: res.data
        })

        dispatch(getUserLocations(res.data.id));
      })
      .catch((err) => {
        dispatch({
          type: 'USER_AUTHENTICATE_FAILURE',
          payload: err
        })
      })
  }
}
