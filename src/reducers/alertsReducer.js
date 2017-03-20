export default function reducer(state={
  alerts: []
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
  }

  return state;
}
