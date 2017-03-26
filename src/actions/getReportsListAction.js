import axios from 'axios';
import Moment from 'moment';

export function getReportsList(lat, lng, range, defaultTime, offenseList) {
  return function(dispatch) {
    axios.get(`/api/police_reports/${lat}/${lng}/${range}`)
    .then((res) => {
      const reports = res.data;
      console.log(reports);
      const startingMilliseconds = defaultTime.startingMilliseconds;
      const endingMilliseconds = defaultTime.endingMilliseconds;
      let nextReports = [];

      if (typeof offenseList === 'object' && offenseList.length) {
        for (const offense of offenseList) {
          const filteredReports = reports.filter(report => {
            return report.offense_type_id === offense;
          })

          nextReports = nextReports.concat(filteredReports);
        }
      }
      else if (typeof offenseList === 'object' && !offenseList.length) {
        nextReports = nextReports.concat(reports);
        console.log(nextReports);
      }
      else {
        const filteredReports = reports.filter(report => {
          const reportOffenseId = parseInt(report.offense_type_id);
          const offenseId = parseInt(offenseList);

          return reportOffenseId === offenseId;
        })

        nextReports = nextReports.concat(filteredReports);
      }

      nextReports = nextReports.filter(report => {
        const occurredMilliseconds = Moment(report.date_occurred);

        return occurredMilliseconds.isBetween(startingMilliseconds, endingMilliseconds);
      })

      console.log(nextReports);

      dispatch({
        type: 'SET_ACTIVE_REPORT_FOR_LIST',
        payload: nextReports
      })
    })
  }
}
