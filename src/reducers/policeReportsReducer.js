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

      const reportsAsArray = [];

      for (const identity in nextReports) {
        reportsAsArray.push(nextReports[identity]);
      }
      
      const nextMergedReports = reportsAsArray.reduce((acc, report) => {
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
