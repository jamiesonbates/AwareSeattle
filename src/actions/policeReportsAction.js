import axios from 'axios';

export function fetchPoliceReports(lat, lng, range, identity) {
  return function(dispatch) {
    axios.get(`/api/police_reports/${lat}/${lng}/${range}`)
      .then((res) => {
        dispatch({
          type: 'FETCH_POLICE_REPORTS_FULFILLED',
          payload: res.data,
          identity
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
