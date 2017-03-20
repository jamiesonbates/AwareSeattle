import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import user from './userLoginSignupReducer';
import alerts from './alertsReducer';

export default combineReducers({
  policeReports,
  user,
  alerts
})
