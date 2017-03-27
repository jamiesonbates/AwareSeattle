import axios from 'axios';
import Moment from 'moment';

export function getReportsList(lat, lng, range, defaultTime, offenseList) {
  return function(dispatch) {
    axios.get(`https://awareseattle-backend.herokuapp.com/api/police_reports/${lat}/${lng}/${range}`)
    .then((res) => {
      const reports = res.data;
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

      nextReports = nextReports.sort((a, b) => {
        const aVal = parseFloat(Moment(a.date_occurred).valueOf());
        const bVal = parseFloat(Moment(b.date_occurred).valueOf());

        if (aVal < bVal) {
          return 1;
        }
        if (aVal > bVal) {
          return -1;
        }
        return 0;
      });

      dispatch({
        type: 'SET_ACTIVE_REPORT_FOR_LIST',
        payload: nextReports
      })
    })
  }
}
