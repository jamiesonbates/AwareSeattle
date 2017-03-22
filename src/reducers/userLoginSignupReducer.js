export default function reducer(state={
  userId: null,
  username: null,
  email: null,
  isAuthenticated: false
}, action) {

  switch(action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        isAuthenticated: true
      }
    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false
      }
    case 'USER_SIGNUP_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        isAuthenticated: true
      }
    case 'USER_SIGNUP_FAILURE':
      return {
        ...state,
        isAuthenticated: false
      }
    case 'USER_AUTHENTICATE_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        isAuthenticated: true

      }
    case 'USER_AUTHENTICATE_FAILURE':
      return {
        ...state,
        isAuthenticated: false
      }
  }

  return state;
}
