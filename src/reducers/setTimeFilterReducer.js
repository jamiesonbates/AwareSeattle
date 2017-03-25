import Moment from 'moment';

export default function reducer(state={
  startingMilliseconds: Moment().subtract(30, 'days').valueOf(),
  endingMilliseconds: Moment().valueOf()
}, action) {
  switch (action.type) {
    case 'SET_TIME_FILTER':
      return {
        ...state,
        startingMilliseconds: action.payload.startingMilliseconds,
        endingMilliseconds: action.payload.endingMilliseconds
      }
  }

  return state;
}
