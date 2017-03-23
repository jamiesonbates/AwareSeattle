export function combineLocations() {
  return function(dispatch, getState) {
    const state = getState();
    const userLocations = state.locations.userLocations;
    const localLocations = state.locations.localLocations;
    const nextCombinedLocations = userLocations.concat(localLocations);

    const areLocations = nextCombinedLocations.length > 0;

    dispatch({
      type: 'COMBINE_LOCATIONS',
      payload: nextCombinedLocations
    })

    dispatch({
      type: 'ARE_THERE_LOCATIONS',
      payload: areLocations
    })
  }
}
