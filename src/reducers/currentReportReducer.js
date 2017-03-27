export default function reducer(state={
  currentReports: {}
}, action) {

  switch (action.type) {
    case 'SET_CURRENT_REPORT':
      return {
        currentReports: action.payload
      }
  }

  return state;
}
