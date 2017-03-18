export default function reducer(state={
  policeReports: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_POLICE_REPORTS': {
      return {...state, fetching: true}
    }
    case 'FETCH_POLICE_REPORTS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_POLICE_REPORTS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        policeReports: action.payload
      }
    }
  }

  return state;
}
