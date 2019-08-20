import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import { History } from 'history';
import { IRootState } from './appReducer';
import { Routes } from './Routes';

interface IAppComponentProps {
  store: Store<IRootState | undefined>;
  history: History;
}

export const App: React.FC<IAppComponentProps> = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter
      store={store}
      history={history}
    >
      <Routes/>
    </ConnectedRouter>
  </Provider>
);
