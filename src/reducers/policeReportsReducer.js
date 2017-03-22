export default function reducer(state={
  reports: {},
  mergedReports: []
}, action) {

  switch (action.type) {
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
    case 'GENERATE_MARKERS_LIST': {
      return {
        ...state,
        mergedReports: action.payload
      }
    }
  }

  return state;
}
