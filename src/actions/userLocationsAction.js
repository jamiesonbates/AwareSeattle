import axios from 'axios';

import { fetchPoliceReports } from './policeReportsAction';

export function getUserLocations(userId) {
  return function(dispatch) {
    axios.get(`/api/locations/${userId}`)
      .then((res) => {
        const locations = res.data;

        dispatch({
          type: 'FETCH_USER_LOCATIONS_SUCCESS',
          payload: locations
        })

        for (const location of locations) {
          const lat = location.lat;
          const lng = location.lng;
          const range = 500;
          dispatch(fetchPoliceReports(lat, lng, range));
        }
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_LOCATIONS_FAILURE',
          payload: err
        })
      })
  }
}
