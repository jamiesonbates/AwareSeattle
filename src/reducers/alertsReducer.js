export default function reducer(state={
  alerts: [],
  hasAlerts: false
}, action) {

  switch (action.type) {
    case 'FETCH_USER_ALERTS_SUCCESS':
      return {
        ...state,
        alerts: action.payload
      }
    case 'FETCH_USER_ALERTS_FAILURE':
      return {
        ...state
      }
    case 'USER_HAS_ALERTS_SET':
      return {
        ...state,
        hasAlerts: action.payload
      }
    case 'USER_HAS_NO_ALERTS_SET':
      return {
        ...state,
        hasAlerts: action.payload
      }
  }

  return state;
}
