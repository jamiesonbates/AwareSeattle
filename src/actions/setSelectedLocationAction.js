export function setSelectedLocation(identity) {
  return function(dispatch, getState) {
    const state = getState();
    const locationStats = state.locations.locationStats;
    const selectedLocation = locationStats[identity];


    dispatch({
      type: 'SET_SELECTED_LOCATION',
      payload: selectedLocation
    })
  }
}
