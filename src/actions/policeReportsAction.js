import axios from 'axios';

export function fetchPoliceReports() {
  return function(dispatch) {
    axios.get('https://awareseattle-backend.herokuapp.com/api/police_reports/47.617756/-122.326560/500')
      .then((response) => {
        dispatch({
          type: 'FETCH_POLICE_REPORTS_FULFILLED',
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_POLICE_REPORTS_REJECTED',
          payload:err
        })
      })
  }
}
