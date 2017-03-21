import axios from 'axios';

export function deleteLocation(location_id) {
  console.log(location_id);
  return function(dispatch) {
    axios.delete(`/api/locations/${location_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
