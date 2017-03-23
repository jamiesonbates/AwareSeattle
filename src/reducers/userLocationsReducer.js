export default function reducer(state={
  userLocations: [],
  localLocations: [],
  combinedLocations: []
}, action) {

  switch(action.type) {
    case 'FETCH_USER_LOCATIONS_SUCCESS':
      return {
        ...state,
        userLocations: action.payload
      }
    case 'FETCH_USER_LOCATIONS_FAILURE':
      return {
        ...state
      }
    case 'CREATE_LOCAL_LOCATION':
      return {
        ...state,
        localLocations: action.payload
      }
    case 'COMBINE_LOCATIONS':
      return {
        ...state,
        combinedLocations: action.payload
      }
  }

  return state;
}
