export function resetOffenseFilter() {
  return function(dispatch) {
    dispatch({
      type:'RESET_OFFENSE_TO_FILTER',
      payload: []
    })
  }
}
