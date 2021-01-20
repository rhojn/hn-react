import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './pages/home';
import Ask from './pages/ask';
import Show from './pages/show';
import Jobs from './pages/jobs';
import NoMatch from './pages/no-match';

const Router = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/ask">
      <Ask />
    </Route>
    <Route path="/show">
      <Show />
    </Route>
    <Route path="/jobs">
      <Jobs />
    </Route>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
)

export default Router;
