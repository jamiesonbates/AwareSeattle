import axios from 'axios';

import { getUserLocations } from './userLocationsAction';

export function addNewLocation(user_id, location_title, location, lat, lng) {
  return function(dispatch) {
    axios.post('https://crime-watch-seattle.herokuapp.com/api/locations', {
      user_id,
      location_title,
      location,
      lat,
      lng
    })
    .then((res) => {
      console.log('got here');
      dispatch(getUserLocations(user_id));
    })
    .catch((err) => {
      console.log('Failure');
    })
  }
}
