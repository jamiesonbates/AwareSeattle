import axios from 'axios';
import { browserHistory } from 'react-router';

import { authenticateUser } from './authenticateAction';

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

      console.log('res cookie', res);

      console.log('cookie /token', document.cookie);
      dispatch(authenticateUser());

      browserHistory.push('/');
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: 'USER_LOGIN_FAILURE',
        payload: 'Bad email or password.'
      })
    })
  }
}
