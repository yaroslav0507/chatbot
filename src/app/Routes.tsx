import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ChatContainer } from './Chat/ChatContainer';

export const Routes: React.FC = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ChatContainer}
    />
  </Switch>
);
