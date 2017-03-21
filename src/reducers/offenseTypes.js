export default function reducer(state={
  offenseTypes: []
}, action) {

  switch (action.type) {
    case 'FETCH_OFFENSE_TYPES_SUCCESS':
      return {
        ...state,
        offenseTypes: action.payload
      }
    case 'FETCH_OFFENSE_TYPES_FAILURE':
      return {
        ...state
      }
  }

  return state;
}
