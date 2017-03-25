import Moment from 'moment';
import { generateMarkersList } from './generateMarkersListAction';

export function setTimeFilter(startDate, endDate) {
  return function(dispatch) {
    dispatch({
      type: 'SET_TIME_FILTER',
      payload: {
        startingMilliseconds: startDate.valueOf(),
        endingMilliseconds: endDate.valueOf()
      }
    })

    dispatch(generateMarkersList());
  }
}
