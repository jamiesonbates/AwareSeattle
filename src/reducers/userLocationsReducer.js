export default function reducer(state={
  userLocations: [],
  localLocations: [],
  combinedLocations: [],
  locationStats: {},
  areStats: false,
  areLocations: false,
  selectedLocation: {},
  locationIsSelected: false
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
    case 'ARE_THERE_LOCATIONS':
      return {
        ...state,
        areLocations: action.payload
      }
    case 'GENERATE_LOCATION_STATS':
      return {
        ...state,
        locationStats: action.payload,
        areStats: true
      }
    case 'SET_SELECTED_LOCATION':
      return {
        ...state,
        selectedLocation: action.payload,
        locationIsSelected: true
      }
    case 'RESET_LOCAL_LOCATIONS':
      return {
        ...state,
        localLocations: action.payload,
      }
    case 'RESET_SELECTED_LOCATION':
      return {
        ...state,
        selectedLocation: action.payload,
        locationIsSelected: false
      }
    case 'UPDATE_LOCATION_STATS':
      return {
        ...state,
        locationStats: action.payload
      }
  }

  return state;
}
