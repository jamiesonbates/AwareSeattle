export function setTimeFilter(startingMilliseconds, endingMilliseconds) {
  return function(dispatch) {
    dispatch({
      type: 'SET_TIME_FILTER',
      payload: { startingMilliseconds, endingMilliseconds }
    })
  }
}
