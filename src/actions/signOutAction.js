import axios from 'axios';
import { browserHistory } from 'react-router';

import { resetLocations } from './resetLocationsAction';

export function signOutUser() {
  return function(dispatch) {
    axios.delete('/api/token')
      .then((res) => {
        dispatch(resetLocations(true));
        browserHistory.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
