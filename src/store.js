'use strict';

// Import dependencies
import { createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import route reducer
import rootReducer from './reducers/index';

// Create an object for default data
const defaultState = {

}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
