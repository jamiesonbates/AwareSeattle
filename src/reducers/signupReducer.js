export default function reducer(state={
  userId: '',
  username: '',
  email: '',
  homeLat: '',
  homeLng: '',
  userLoggedIn: false
}, action) {

  // const { userId, username, email, homeLat, homeLng } = action.payload;

  switch(action.type) {
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        homeLat: action.payload.home_lat,
        homeLng: action.payload.home_lng,
        userLoggedIn: true
      }
    case 'USER_SIGNUP_FAILURE':
      return {
        ...state,
      }
  }

  return state;
}
