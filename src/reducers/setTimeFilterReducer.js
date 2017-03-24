import Moment from 'moment';

export default function reducer(state={
  timeFilter: {
    startingMilliseconds: Moment().subtract(30, 'days').valueOf(),
    endingMilliseconds: Moment().subtract(0, 'days').valueOf()
  }
}, action) {
  switch (action.type) {
    case 'SET_TIME_FILTER':
      return {
        ...state,
        timeFilter: action.payload
      }
  }

  return state;
}
