import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import user from './userLoginSignupReducer';

export default combineReducers({
  policeReports,
  user
})
