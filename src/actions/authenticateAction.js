import axios from 'axios';

export function authenticateUser() {
  return function(dispatch) {
    axios.get('/api/users')
      .then((res) => {
        dispatch({
          type: 'USER_AUTHENTICATE_SUCCESS',
          payload: res.data
        })
      })
      .catch((err) => {
        dispatch({
          type: 'USER_AUTHENTICATE_FAILURE',
          payload: err
        })
      })
  }
}
