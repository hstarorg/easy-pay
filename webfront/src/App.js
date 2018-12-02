import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import * as historyLib from 'history';
import { routes } from './router';
const history = historyLib.createBrowserHistory({
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

export class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router history={history}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props => <route.component {...props} routes={route.routes} parentRoute={route} />}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}
