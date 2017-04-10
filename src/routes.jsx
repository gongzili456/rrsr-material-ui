import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import {
  App,
  Dashboard
} from './containers'

export default (history) => (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='dashboard' component={Dashboard} />
    </Route>
  </Router>
)
