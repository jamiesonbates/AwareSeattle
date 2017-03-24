import axios from 'axios';
import { browserHistory } from 'react-router';

export function signOutUser() {
  return function() {
    axios.delete('/api/token')
      .then((res) => {
        console.log('logged out');
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
