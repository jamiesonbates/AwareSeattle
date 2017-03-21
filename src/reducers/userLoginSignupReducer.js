export default function reducer(state={
  userId: null,
  username: null,
  email: null
}, action) {

  switch(action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        email: action.payload.email
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
        email: action.payload.email
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
        email: action.payload.email

      }
    case 'USER_AUTHENTICATE_FAILURE':
      return {
        ...state
      }
  }

  return state;
}
