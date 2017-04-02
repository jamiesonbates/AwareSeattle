import axios from 'axios';
import { browserHistory } from 'react-router';

import { resetLocations } from './resetLocationsAction';

export function signOutUser() {
  return function(dispatch) {
    axios.delete('https://crime-watch-seattle.herokuapp.com/api/token')
      .then((res) => {
        browserHistory.push('/');
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
