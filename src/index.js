import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Root from './components/Root';
import store from './store';

const app = document.getElementById('root');

ReactDOM.render(
  <Root store={store}/>,
  app
);
