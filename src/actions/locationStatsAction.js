import Moment from 'moment';

export function generateStats() {
  return function(dispatch, getState) {
    const state = getState();
    const combinedLocations = state.locations.combinedLocations;
    const reports = state.policeReports.reports;
    const offenseTypes = state.offenseTypes.offenseTypes;
    const timeFilter = state.timeFilter;
    const timeFilteredReports = {};

    for (const report in reports) {
      const newReports = reports[report].filter(report => {
        const occurredMilliseconds = Moment(report.date_occurred);

        return occurredMilliseconds.isBetween(timeFilter.startingMilliseconds, timeFilter.endingMilliseconds);
      });

      timeFilteredReports[report] = newReports;
    }

    const locationStats = combinedLocations.reduce((acc, location) => {
      const stats = {};

      stats.lat = location.lat;
      stats.lng = location.lng;
      stats.totalCrimes = timeFilteredReports[`'${location.identity}'`].length;
      stats.offenseBreakdown = [];
      stats.name = location.location_title;
      stats.address = location.location;

      for (const offense of offenseTypes) {
        const newOffense = {};

        newOffense.title = offense.offense_name;

        newOffense.totalOffenses = timeFilteredReports[`'${location.identity}'`].reduce((acc, report) => {
          if (report.offense_type_id === offense.id) {
            acc += 1;
          }

          return acc;
        }, 0);

        stats.offenseBreakdown.push(newOffense);
      }

      acc[location.identity] = stats;

      return acc;
    }, {});

    dispatch({
      type: 'GENERATE_LOCATION_STATS',
      payload: locationStats
    })
  }
}
