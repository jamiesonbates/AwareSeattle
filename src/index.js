'use strict';

// Import react dependencies
import React from 'react';
import { render } from 'react-dom';

// Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Import css


// Import components
import App from './components/App';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
