import Moment from 'moment';

export default function reducer(state={
  milliseconds: {
    startingMilliseconds: Moment().subtract(30, 'days').valueOf(),
    endingMilliseconds: Moment().subtract(0, 'days').valueOf()
  },
  startDate: Moment().subtract(30, 'days').format('MM-DD-YYYY'),
  endDate: Moment().format('MM-DD-YYYY'),
  timeBetween: '1 month'
}, action) {
  switch (action.type) {
    case 'SET_TIME_FILTER':
      return {
        ...state,
        milliseconds: action.payload.milliseconds,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        timeBetween: action.payload.timeBetween
      }
  }

  return state;
}
