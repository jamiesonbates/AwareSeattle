export default function reducer(state={
  userId: null,
  username: null,
  email: null,
  homeLat: null,
  homeLng: null,
  isAuthenticated: false
}, action) {

  switch(action.type) {
    case 'USER_LOGIN_SUCCESS':
      const isHomeLocation = false;

      if (action.payload.home_lat && action.payload.home_lng) {
        isHomeLocation = true;
      }
      
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        homeLat: action.payload.home_lat,
        homeLng: action.payload.home_lng,
        isHomeLocation,
        isAuthenticated: true
      }
    case 'USER_LOGIN_FAILURE':
      return {
        ...state
      }
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        homeLat: action.payload.home_lat,
        homeLng: action.payload.home_lng,
        isAuthenticated: true
      }
    case 'USER_SIGNUP_FAILURE':
      return {
        ...state
      }
    case 'USER_AUTHENTICATE_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        homeLat: action.payload.home_lat,
        homeLng: action.payload.home_lng,
        isAuthenticated: true

      }
    case 'USER_AUTHENTICATE_FAILURE':
      return {
        ...state
      }
  }

  return state;
}
