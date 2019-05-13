import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Driving from './containers/Driving/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Driving} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
