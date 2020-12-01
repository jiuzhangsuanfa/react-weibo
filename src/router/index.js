import Loading from 'components/Loading';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const New = lazy(() => import('../pages/New'));
const Demo = lazy(() => import('../pages/Demo'));

const Router = () => (
  <Suspense
    fallback={<Loading />}
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/new" component={New} />
      <Route exact path="/comments/:id" component={New} />
      <Route exact path="/demo" component={Demo} />
    </Switch>
  </Suspense>
);

export default Router;
