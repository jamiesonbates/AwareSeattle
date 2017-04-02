import axios from 'axios';

import { getUserLocations } from './userLocationsAction';
import { addLocalLocation } from './addLocalLocationAction';

export function authenticateUser() {
  return function(dispatch) {
    axios.get('https://crime-watch-seattle.herokuapp.com/api/users')
      .then((res) => {
        dispatch({
          type: 'USER_AUTHENTICATE_SUCCESS',
          payload: res.data
        })

        dispatch(getUserLocations(res.data.id));
      })
      .catch((err) => {
        let lat;
        let lng;

        navigator.geolocation.getCurrentPosition((position) => {
          lat = position.coords.latitude;
          lng = position.coords.longitude;

          dispatch(addLocalLocation(lat, lng, 0));
        })

        dispatch({
          type: 'USER_AUTHENTICATE_FAILURE',
          payload: err
        })
      })
  }
}
