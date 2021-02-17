import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home';
import Story from './pages/story';
import Comment from './pages/comment';
import Ask from './pages/ask';
import Show from './pages/show';
import Jobs from './pages/jobs';
import NoMatch from './pages/no-match';

const Router = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/story/:id">
      <Story />
    </Route>
    <Route path="/comment/:id">
      <Comment />
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
