export function setSelectedLocation(identity) {
  return function(dispatch, getState) {
    const state = getState();
    console.log(state);
    const locationStats = state.locations.locationStats;
    console.log(locationStats);
    console.log(locationStats[identity]);
    console.log(identity);
    const selectedLocation = locationStats[identity];
    console.log(selectedLocation);


    dispatch({
      type: 'SET_SELECTED_LOCATION',
      payload: selectedLocation
    })
  }
}
