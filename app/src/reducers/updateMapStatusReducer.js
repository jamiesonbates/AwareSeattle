export default function reducer(state={
  name: 'N/A',
  lat: 'N/A',
  lng: 'N/A',
  locationCount: 0,
  diff: 'N/A'
}, action) {

  switch (action.type) {
    case 'UPDATE_MAP_STATUS':
      return {
        ...state,
        name: action.payload.name,
        lat: action.payload.lat,
        lng: action.payload.lng,
        locationCount: action.payload.locationCount,
        diff: action.payload.diff
      }
  }

  return state;
}
