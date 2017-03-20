export default function reducer(state={
  reports: []
}, action) {

  switch (action.type) {
    case 'FETCH_POLICE_REPORTS': {
      return {
        ...state
      }
    }
    case 'FETCH_POLICE_REPORTS_REJECTED': {
      return {
        ...state
      }
    }
    case 'FETCH_POLICE_REPORTS_FULFILLED': {
      return {
        ...state,
        reports: action.payload
      }
    }
  }

  return state;
}
