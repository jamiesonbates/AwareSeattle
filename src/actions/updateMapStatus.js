import Moment from 'moment';

export function updateMapStatus() {
  return function(dispatch, getState) {
    const state = getState();
    const locationIsSelected = state.locations.locationIsSelected;
    const selectedLocation = state.locations.selectedLocation;
    const name = selectedLocation.name || '';
    const lat = selectedLocation.lat || '';
    const lng = selectedLocation.lng || '';
    let locationCount = state.locations.combinedLocations.length;
    const offenses = state.offenseFilter.filterByOffenses;
    const start = Moment(state.timeFilter.startingMilliseconds);
    const end = Moment(state.timeFilter.endingMilliseconds);
    let diff = Math.round(end.diff(start, 'months', true));

    if (locationIsSelected) {
      locationCount = 1;
    }

    if (diff > 1) {
      diff += ' months';
    }
    else {
      diff += ' month';
    }

    dispatch({
      type: 'UPDATE_MAP_STATUS',
      payload: {
        name,
        lat,
        lng,
        locationCount,
        diff
      }
    })
  }
}
