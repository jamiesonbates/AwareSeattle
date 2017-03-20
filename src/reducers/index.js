import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import userLoginSignupReducer from './loginReducer';

export default combineReducers({
  policeReports,
  userLoginSignupReducer
})
