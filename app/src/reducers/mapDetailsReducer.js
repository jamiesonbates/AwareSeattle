export default function reducer(state={
  mapZoom: 13,
  mapCenter: { lat: 47.6062, lng: -122.3321 }
}, action) {

  switch (action.type) {
    case 'SET_MAP_ZOOM':
      return {
        ...state,
        mapZoom: action.payload
      }
    case 'SET_MAP_CENTER':
      const lat = parseFloat(action.payload.lat);
      const lng = parseFloat(action.payload.lng);

      return {
        ...state,
        mapCenter: { lat, lng }
      }
  }

  return state;
}
