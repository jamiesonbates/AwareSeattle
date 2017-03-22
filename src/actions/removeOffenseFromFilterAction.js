import { generateMarkersList } from './generateMarkersListAction';

export function removeOffenseFromFilter(offense_id) {
  return function(dispatch) {
    dispatch({
      type: 'REMOVE_OFFENSE_FROM_FILTER',
      payload: offense_id
    })

    dispatch(generateMarkersList());
  }
}
