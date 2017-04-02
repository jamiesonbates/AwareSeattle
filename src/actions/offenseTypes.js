import axios from 'axios';

export function fetchOffenseTypes() {
  return function(dispatch) {
    axios.get('https://crime-watch-seattle.herokuapp.com/api/offenseTypes')
      .then((res) => {
        dispatch({
          type: 'FETCH_OFFENSE_TYPES_SUCCESS',
          payload: res.data
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_OFFENSE_TYPES_FAILURE',
          payload: err
        })
      })
  }
}
