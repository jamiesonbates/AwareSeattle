export default function reducer(state={
  userId: '',
  username: '',
  email: '',
  homeLat: '',
  homeLng: '',
  userLoggedIn: false
}, action) {

  const { id, username, email, homeLat, homeLng } = action.payload;

  switch(action.type) {
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        userId: id,
        username,
        email,
        homeLat,
        homeLng,
        userLoggedIn: true
      }
    case 'USER_SIGNUP_FAILURE':
      return {
        ...state,
      }
  }

  return state;
}
