import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/main';
import EventsList from './containers/EventsList/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EventsList} />
  </Route>
);
