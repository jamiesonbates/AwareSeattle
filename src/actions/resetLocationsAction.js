import { combineLocations } from './combineLocationsAction';

export function resetLocations(signedOut) {
  return function(dispatch, getState) {
    const state = getState();
    const localLocations = state.locations.localLocations;
    const locationStats = state.locations.locationStats;

    if (!signedOut) {
      for (const location of localLocations) {
        if (Object.keys(locationStats[location.identity]).length) {
          delete locationStats[location.identity];
        }
      }

      dispatch({
        type: 'RESET_LOCAL_LOCATIONS',
        payload: []
      })

      dispatch(combineLocations());

      dispatch({
        type: 'RESET_SELECTED_LOCATION',
        payload: {}
      })

      dispatch({
        type: 'UPDATE_LOCATION_STATS',
        payload: locationStats
      })
    }

    if (signedOut) {
      dispatch({
        type: 'RESET_USER_LOCATIONS',
        payload: []
      })

      dispatch(combineLocations());

      dispatch({
        type: 'RESET_LOCATION_STATS',
        payload: {}
      })
    }
  }
}
