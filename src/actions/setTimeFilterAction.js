import Moment from 'moment';

import { generateMarkersList } from './generateMarkersListAction';
import { generateStats } from './locationStatsAction';
import { updateMapStatus } from './updateMapStatus';
import { setSelectedLocation } from './setSelectedLocationAction';

export function setTimeFilter(startDate, endDate) {
  return function(dispatch, getState) {
    const state = getState();
    console.log(state.locations.selectedLocation);
    const identity = state.locations.selectedLocation.identity;
    console.log(identity);

    dispatch({
      type: 'SET_TIME_FILTER',
      payload: {
        startingMilliseconds: startDate.valueOf(),
        endingMilliseconds: endDate.valueOf()
      }
    })

    dispatch(generateMarkersList());
    dispatch(generateStats());

    if (identity) {
      console.log('here');
      dispatch(setSelectedLocation(identity));
    }

    dispatch(updateMapStatus());
  }
}
