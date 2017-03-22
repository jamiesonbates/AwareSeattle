export function addOffenseToFilter(offense_id) {
  return function(dispatch) {
    dispatch({
      type: 'ADD_OFFENSE_TO_FILTER',
      payload: offense_id
    })
  }
}
