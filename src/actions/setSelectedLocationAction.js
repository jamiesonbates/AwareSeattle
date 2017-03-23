export function setSelectedLocation(identity) {
  return function(dispatch) {
    dispatch({
      type: 'SET_SELECTED_LOCATION',
      payload: `${identity}`
    })
  }
}
