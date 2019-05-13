import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Driving from './containers/Driving/index';
import  Question from './containers/questions/questions';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Driving} />
        <Route path="/question" exact component={Question} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
