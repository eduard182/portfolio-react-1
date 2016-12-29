import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './views/App';
import { routePaths } from './constants';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Home } from './views/Home';
import { Projects } from './views/Projects';
import { Skills } from './views/Skills';
import { NotFound } from './views/NotFound';

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path={routePaths.HOME} component={App}>
      <IndexRoute component={Home} />
      <Route path={routePaths.SKILLS} component={Skills} />
      <Route path={routePaths.PROJECTS} component={Projects} />
      <Route path={routePaths.ABOUT} component={About} />
      <Route path={routePaths.CONTACT} component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default AppRouter;
