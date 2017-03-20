import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import userLoginSignupReducer from './userLoginSignupReducer';

export default combineReducers({
  policeReports,
  userLoginSignupReducer
})
