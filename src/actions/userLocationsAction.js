import axios from 'axios';

import { fetchPoliceReports } from './policeReportsAction';
import { combineLocations } from './combineLocationsAction';
import { setMapCenter } from './mapCenterAction';

export function getUserLocations(userId) {
  return function(dispatch) {
    axios.get(`https://crime-watch-seattle.herokuapp.com/api/locations/${userId}`)
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

        dispatch(setMapCenter({ lat: locations[0].lat, lng: locations[0].lng }))

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
