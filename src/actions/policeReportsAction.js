import axios from 'axios';

import { generateMarkersList } from './generateMarkersListAction';

export function fetchPoliceReports(lat, lng, range, identity) {
  return function(dispatch, getState) {
    axios.get(`/api/police_reports/${lat}/${lng}/${range}`)
      .then((res) => {
        const nextReports = getState().policeReports.reports;

        nextReports[`'${identity}'`] = res.data;

        dispatch({
          type: 'FETCH_POLICE_REPORTS_FULFILLED',
          payload: nextReports
        })

        dispatch(generateMarkersList());
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_POLICE_REPORTS_REJECTED',
          payload:err
        })
      })
  }
}
