import { fetchPoliceReports } from './policeReportsAction';

export function addLocalLocation(locationName, lat, lng) {
  const location = {
    locationName,
    lat,
    lng
  }
  return function(dispatch) {
    dispatch({
      type: 'CREATE_LOCAL_LOCATION',
      payload: location
    })

    dispatch(fetchPoliceReports(lat, lng, 500));
  }
}
