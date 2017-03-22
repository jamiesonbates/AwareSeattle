import { fetchPoliceReports } from './policeReportsAction';

export function addLocalLocation(locationName, lat, lng, length) {
  const location = {
    locationName,
    lat,
    lng,
    identity: `temp${length + 1}`
  }
  return function(dispatch) {
    dispatch({
      type: 'CREATE_LOCAL_LOCATION',
      payload: location
    })

    dispatch(fetchPoliceReports(lat, lng, 500));
  }
}
