import { fetchPoliceReports } from './policeReportsAction';

import { combineLocations } from './combineLocationsAction';

export function addLocalLocation(locationName, lat, lng, length) {
  const location = {
    location_title: locationName,
    lat,
    lng,
    identity: `temp${length + 1}`
  }
  return function(dispatch, getState) {
    const state = getState();
    const localLocations = state.locations.localLocations;

    localLocations.push(location);

    const nextLocalLocations = localLocations;

    dispatch({
      type: 'CREATE_LOCAL_LOCATION',
      payload: nextLocalLocations
    })

    dispatch(combineLocations());

    dispatch(fetchPoliceReports(lat, lng, 500, location.identity));
  }
}
