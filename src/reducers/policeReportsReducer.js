export default function reducer(state={
  reports: {},
  mergedReports: [],
  activeReportsForList: []
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
    case 'UPDATE_REPORTS_SET': {
      return {
        ...state,
        reports: action.payload
      }
    }
    case 'SET_ACTIVE_REPORT_FOR_LIST': {
      return {
        ...state,
        activeReportsForList: action.payload
      }
    }
  }

  return state;
}
