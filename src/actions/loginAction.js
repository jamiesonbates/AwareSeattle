import axios from 'axios';

export function loginUser(email, password) {
  return function(dispatch) {
    axios.post('https://awareseattle-backend.herokuapp.com/api/token', {
      email,
      password
    })
    .then((res) => {
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: 'USER_LOGIN_FAILURE',
        payload: err
      })
    })
  }
}
