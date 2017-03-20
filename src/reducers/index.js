import { combineReducers } from 'redux';

import policeReports from './policeReportsReducer';
import signupReducer from './signupReducer';

export default combineReducers({
  policeReports,
  signupReducer
})
