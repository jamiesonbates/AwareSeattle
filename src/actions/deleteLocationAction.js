import axios from 'axios';

import { getUserLocations } from './userLocationsAction';

export function deleteLocation(location_id, user_id) {
  return function(dispatch) {
    axios.delete(`https://awareseattle-backend.herokuapp.com/api/locations/${location_id}`)
      .then((res) => {
        dispatch(getUserLocations(user_id))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
