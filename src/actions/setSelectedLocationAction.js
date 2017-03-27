import { updateMapStatus } from './updateMapStatus';

export function setSelectedLocation(identity) {
  return function(dispatch, getState) {
    const state = getState();
    const locationStats = state.locations.locationStats;
    const selectedLocation = locationStats[identity];
    selectedLocation.identity = identity;
    console.log(selectedLocation);


    dispatch({
      type: 'SET_SELECTED_LOCATION',
      payload: selectedLocation
    })

    dispatch(updateMapStatus());
  }
}
