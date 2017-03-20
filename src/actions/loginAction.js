import axios from 'axios';
import { browserHistory } from 'react-router';

export function loginUser(email, password) {
  return function(dispatch) {
    axios.post('/api/token', {
      email,
      password
    })
    .then((res) => {
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: res.data
      })

      browserHistory.push('/alerts');
    })
    .catch((err) => {
      dispatch({
        type: 'USER_LOGIN_FAILURE',
        payload: err
      })
    })
  }
}
