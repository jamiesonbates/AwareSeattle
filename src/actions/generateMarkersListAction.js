import Moment from 'moment';

export function generateMarkersList() {
  return function(dispatch, getState) {
    const state = getState();
    const reports = state.policeReports.reports;
    const offenseFilter = state.offenseFilter.filterByOffenses;
    const startingMilliseconds = state.timeFilter.milliseconds.startingMilliseconds;
    const endingMilliseconds = state.timeFilter.milliseconds.endingMilliseconds;

    const reportsAsArray = [];

    for (const identity in reports) {
      reportsAsArray.push(reports[identity]);
    }

    const combinedReports = reportsAsArray.reduce((acc, report) => {
        acc = acc.concat(report);

        return acc;
    }, []);

    const offenseFiltered = combinedReports.filter(report => {
      if (offenseFilter.length) {
        return offenseFilter.includes(report.offense_type_id);
      }
      else {
        return true;
      }
    });

    const markersList = offenseFiltered.filter(report => {
      const occurredMilliseconds = Moment(report.date_occurred);

      return occurredMilliseconds.isBetween(startingMilliseconds, endingMilliseconds);
    })



    dispatch({
      type: 'GENERATE_MARKERS_LIST',
      payload: markersList
    })
  }
}
