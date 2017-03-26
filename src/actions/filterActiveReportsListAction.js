// import Moment from 'moment';
//
// export function filterActiveReportsList(property, direction) {
//   return function(dispatch, getState) {
//     const state = getState();
//     const activeReportsForList = state.policeReports.activeReportsForList;
// 
//     const nextActiveReportsForList = activeReportsForList.sort(function(a, b) {
//       if (property === 'date_occurred') {
//         const aVal = parseFloat(Moment(a.date_occurred).valueOf());
//         const bVal = parseFloat(Moment(b.date_occurred).valueOf());
//
//         if (aVal < bVal) {
//           return -1;
//         }
//         if (aVal > bVal) {
//           return 1;
//         }
//         return 0;
//       }
//       else if (property === 'offense_name') {
//         const aVal = a[property].toUpperCase();
//         const bVal = b[property].toUpperCase();
//
//         if (aVal < bVal) {
//           return -1;
//         }
//         if (aVal > bVal) {
//           return 1
//         }
//         return 0;
//       }
//       return a[property] < b[property];
//     });
//
//     dispatch({
//       type: 'SORT_REPORTS_LIST',
//       payload: nextActiveReportsForList
//     })
//   }
// }
