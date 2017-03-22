export function generateMarkersList() {
  return function(dispatch, getState) {
    const state = getState();
    const reports = state.policeReports.reports;
    const offenseFilter = state.offenseFilter.filterByOffenses;

    const reportsAsArray = [];

    for (const identity in reports) {
      reportsAsArray.push(reports[identity]);
    }

    const combinedReports = reportsAsArray.reduce((acc, report) => {
        acc = acc.concat(report);

        return acc;
    }, []);

    const markersList = combinedReports.filter(report => {
      if (offenseFilter.length) {
        return offenseFilter.includes(report.offense_type_id);
      }
      else {
        return true;
      }
    })

    dispatch({
      type: 'GENERATE_MARKERS_LIST',
      payload: markersList
    })
  }
}
