import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import user from './userLoginSignupReducer';
import alerts from './alertsReducer';
import locations from './userLocationsReducer';
import offenseTypes from './offenseTypes';

export default combineReducers({
  policeReports,
  user,
  alerts,
  locations,
  offenseTypes
})
