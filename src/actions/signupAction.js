import axios from 'axios';
import { browserHistory } from 'react-router';

export function signupNewUser(username, email, password) {
  return function(dispatch) {
    axios.post('/api/users', {
      username,
      email,
      password
    })
    .then((res) => {
      dispatch({
        type: 'USER_SIGNUP_SUCCESS',
        payload: res.data
      })
      browserHistory.push('/alerts');
    })
    .catch((err) => {
      dispatch({
        type: 'USER_SIGNUP_FAILURE',
        payload: err
      })
    })
  }
}
