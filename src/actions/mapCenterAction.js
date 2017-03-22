export function setMapCenter(location) {
  return function(dispatch) {
    dispatch({
      type: 'SET_MAP_CENTER',
      payload: location
    })
  }
}
