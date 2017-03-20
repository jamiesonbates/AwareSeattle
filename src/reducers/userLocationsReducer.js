export default function reducer(state={
  locations: []
}, action) {

  switch(action.type) {
    case 'FETCH_USER_LOCATIONS_SUCCESS':
    console.log(action.payload);
      return {
        ...state,
        locations: action.payload
      }
    case 'FETCH_USER_LOCATIONS_FAILURE':
      return {
        ...state
      }
  }

  return state;
}
