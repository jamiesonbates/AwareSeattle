import axios from 'axios';

import { generateMarkersList } from './generateMarkersListAction';
import { generateStats } from './locationStatsAction';

export function fetchPoliceReports(lat, lng, range, identity, milliseconds) {
  return function(dispatch, getState) {
    axios.get(`https://awareseattle.herokuapp.com/api/police_reports/${lat}/${lng}/${range}`)
      .then((res) => {
        const nextReports = getState().policeReports.reports;

        nextReports[`'${identity}'`] = res.data;

        dispatch({
          type: 'FETCH_POLICE_REPORTS_FULFILLED',
          payload: nextReports
        });

        dispatch(generateMarkersList());
        dispatch(generateStats());
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_POLICE_REPORTS_REJECTED',
          payload:err
        })
      })
  }
}
