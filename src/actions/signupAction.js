import axios from 'axios';

export function signupNewUser(username, email, password) {
  return function(dispatch) {
    axios.post('https://awareseattle-backend.herokuapp.com/api/users', {
      username,
      email,
      password
    })
    .then((res) => {
      dispatch({
        type: 'USER_SIGNUP_SUCCESS',
        payload: res.data
      })
    })
    .catch((err) => {
      dispatch({
        type: 'USER_SIGNUP_FAILURE',
        payload: err
      })
    })
  }
}
