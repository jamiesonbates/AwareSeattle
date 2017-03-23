export function combineLocations() {
  return function(dispatch, getState) {
    const state = getState();
    console.log(state);
    const userLocations = state.locations.userLocations;
    console.log(userLocations);
    const localLocations = state.locations.localLocations;
    console.log(localLocations);

    const nextCombinedLocations = userLocations.concat(localLocations);
    console.log(nextCombinedLocations);

    dispatch({
      type: 'COMBINE_LOCATIONS',
      payload: nextCombinedLocations
    })
  }
}
