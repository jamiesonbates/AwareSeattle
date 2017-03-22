export function setMapZoom(zoom) {
  return function(dispatch) {
    dispatch({
      type: 'SET_MAP_ZOOM',
      payload: zoom
    })
  }
}
