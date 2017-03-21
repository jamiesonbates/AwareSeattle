export default function reducer(state={
  reports: [],
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
      const reports = state.reports;
      reports.push(action.payload);
      
      const nextReports = reports;
      const nextMergedReports = nextReports.reduce((acc, report) => {
        acc = acc.concat(report);

        return acc;
      }, []);

      return {
        ...state,
        reports: nextReports,
        mergedReports: nextMergedReports
      }
    }
  }

  return state;
}
