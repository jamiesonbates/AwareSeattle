import axios from 'axios';

export function addNewLocation(user_id, location_title, location, lat, lng) {
  return function(dispatch) {
    axios.post('/api/locations', {
      user_id,
      location_title,
      location,
      lat,
      lng
    })
    .then((res) => {
      console.log('Success');
    })
    .then((err) => {
      console.log('Failure');
    })
  }
}
