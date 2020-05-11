import React from 'react';
import { Suspense } from 'react';
import { Redirect } from 'react-router';
import { History } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

type Props = { routes: any[]; history?: History };

export const BASE_NAME = '';

export const AppRoutes = ({ routes }: Props) => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes && routes.length && routes.map(routeModule => <Route key={routeModule.url} exact path={routeModule.url} component={routeModule.component} />)}
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  );
};

export const AppRouter = ({ history, routes }: Props) => {
  return (
    <Router basename={BASE_NAME} >
      <AppRoutes routes={routes} />
    </Router>
  );
};

export default AppRouter;
