import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import user from './userLoginSignupReducer';
import alerts from './alertsReducer';
import locations from './userLocationsReducer';
import offenseTypes from './offenseTypes';
import currentReport from './currentReportReducer';
import mapDetails from './mapDetailsReducer';
import offenseFilter from './filterByOffensesReducer';
import timeFilter from './setTimeFilterReducer';
import status from './updateMapStatusReducer';

export default combineReducers({
  policeReports,
  user,
  alerts,
  locations,
  offenseTypes,
  currentReport,
  mapDetails,
  offenseFilter,
  timeFilter,
  status
})
