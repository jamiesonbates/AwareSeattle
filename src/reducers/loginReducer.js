export default function reducer(state={
  userId: '',
  username: '',
  email: '',
  homeLat: '',
  homeLng: '',
  userLoggedIn: false
}, action) {

  switch(action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        homeLat: action.payload.home_lat,
        homeLng: action.payload.home_lng,
        userLoggedIn: true
      }
    case 'USER_LOGIN_FAILURE':
      return {
        ...state
      }
  }

  return state;
}
