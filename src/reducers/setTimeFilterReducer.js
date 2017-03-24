export default funciton reducer(state={
  timeFilter: {}
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
