import { updateMapStatus } from './updateMapStatus';

export function setSelectedLocation(identity) {
  return function(dispatch, getState) {
    if (identity === 'clear') {
      dispatch({
        type: 'CLEAR_SELECTED_LOCATION',
        payload: {}
      })

      dispatch(updateMapStatus());

      return;
    }
    const state = getState();
    const locationStats = state.locations.locationStats;
    const selectedLocation = locationStats[identity];
    selectedLocation.identity = identity;

    dispatch({
      type: 'SET_SELECTED_LOCATION',
      payload: selectedLocation
    })

    dispatch(updateMapStatus());
  }
}
