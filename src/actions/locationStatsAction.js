export function generateStats() {
  return function(dispatch, getState) {
    const state = getState();
    const combinedLocations = state.locations.combinedLocations;
    console.log(combinedLocations);
    const reports = state.policeReports.reports;
    console.log(reports);
    const offenseTypes = state.offenseTypes.offenseTypes;
    console.log(offenseTypes);

    const locationStats = combinedLocations.reduce((acc, location) => {
      const stats = {};

      stats.totalCrimes = reports[`'${location.identity}'`].length;
      stats.offenseBreakdown = {};
      stats.name = location.location_title;
      stats.address = location.location;

      for (const offense of offenseTypes) {
        stats.offenseBreakdown[offense.offense_name] = reports[`'${location.identity}'`].reduce((acc, report) => {
          if (report.offense_type_id === offense.id) {
            acc += 1;
          }

          return acc;
        }, 0);

      }

      acc[location.identity] = stats;

      return acc;
    }, {});

    console.log(locationStats);

    dispatch({
      type: 'GENERATE_LOCATION_STATS',
      payload: locationStats
    })
  }
}
