import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  policeReports,
  signupReducer,
  loginReducer
})
