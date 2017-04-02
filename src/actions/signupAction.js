import axios from 'axios';
import { browserHistory } from 'react-router';

import { authenticateUser } from './authenticateAction';

export function signupNewUser(username, email, password) {
  return function(dispatch) {
    axios.post('https://crime-watch-seattle.herokuapp.com/api/users', {
      username,
      email,
      password
    })
    .then((res) => {
      dispatch({
        type: 'USER_SIGNUP_SUCCESS',
        payload: res.data
      })

      dispatch(authenticateUser());

      browserHistory.push('/alerts');
    })
    .catch((err) => {
      dispatch({
        type: 'USER_SIGNUP_FAILURE',
        payload: err.response.data
      })
    })
  }
}
