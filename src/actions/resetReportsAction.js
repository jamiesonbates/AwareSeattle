import { generateMarkersList } from './generateMarkersListAction';

export function resetMarkers() {
  return function(dispatch, getState) {
    const state = getState();
    const reports = state.policeReports.reports;
    const combinedLocations = state.locations.combinedLocations;
    const nextReports = {};

    for (const location of combinedLocations) {
      if (Object.keys(reports[`'${location.identity}'`]).length) {
        nextReports[`'${location.identity}'`] = reports[`'${location.identity}'`];
      }
    }

    dispatch({
      type: 'UPDATE_REPORTS_SET',
      payload: nextReports
    })

    dispatch(generateMarkersList())
  }
}
