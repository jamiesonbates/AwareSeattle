export default function reducer(state={
  reports: {},
  mergedReports: []
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
      const nextReports = state.reports;

      nextReports[`'${action.identity}'`] = action.payload;

      const nextMergedReports = [];

      for (const identity in nextReports) {
        nextMergedReports.push(nextReports[identity]);
      }

      return {
        ...state,
        reports: nextReports,
        mergedReports: nextMergedReports
      }
    }
  }

  return state;
}
