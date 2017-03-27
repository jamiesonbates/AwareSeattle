import axios from 'axios';

import { fetchPoliceReports } from './policeReportsAction';
import { combineLocations } from './combineLocationsAction';

export function getUserLocations(userId) {
  return function(dispatch) {
    axios.get(`/api/locations/${userId}`)
      .then((res) => {
        const locations = res.data;

        const identifiedLocations = locations.map(location => {
          location.identity = location.id;

          return location;
        })

        dispatch({
          type: 'FETCH_USER_LOCATIONS_SUCCESS',
          payload: locations
        })


        for (const location of locations) {
          const lat = location.lat;
          const lng = location.lng;
          const range = 500;
          const identity = location.identity;
          dispatch(fetchPoliceReports(lat, lng, range, identity));
        }

        dispatch(combineLocations());
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_USER_LOCATIONS_FAILURE',
          payload: err
        })
      })
  }
}
