import { generateMarkersList } from './generateMarkersListAction';

export function setTimeFilter(startingMilliseconds, endingMilliseconds, startDate, endDate, timeBetween) {
  return function(dispatch) {
    dispatch({
      type: 'SET_TIME_FILTER',
      payload: {
        milliseconds: {
          startingMilliseconds,
          endingMilliseconds
        },
        startDate,
        endDate,
        timeBetween
      }
    })

    dispatch(generateMarkersList());
  }
}
