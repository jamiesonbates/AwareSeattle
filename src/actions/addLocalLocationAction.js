import { fetchPoliceReports } from './policeReportsAction';

import { combineLocations } from './combineLocationsAction';
import { setMapCenter } from './mapCenterAction';

export function addLocalLocation(lat, lng, length) {
  const location = {
    location_title: `Sample ${length + 1}`,
    lat,
    lng,
    identity: `Sample ${length + 1}`
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

    if (length === 0) {
      dispatch(setMapCenter({ lat: location.lat, lng: location.lng }));
    }

    dispatch(fetchPoliceReports(lat, lng, 500, location.identity));
  }
}
