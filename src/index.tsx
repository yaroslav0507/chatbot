import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// tslint:disable:no-import-side-effect
// side-effect imports here
import 'babel-polyfill';
// tslint:enable:no-import-side-effect

import { App } from './app/App';
import { store } from './app/store';

declare const System: {
  import<T = any>(module: string): Promise<T>;
};

export const BASE_URL = 'https://aceai-dev.leasehawk.com/api';

axios.defaults.baseURL = BASE_URL;

const renderRoot = (app: JSX.Element) => {
  const rootElement = document.createElement('div');
  document.body.appendChild(rootElement);
  ReactDOM.render(app, rootElement);
};

if (process.env.NODE_ENV === 'production') {
  renderRoot(<App store={store} />);
} else {
  // removed in production, hot-reload config
  // tslint:disable-next-line:no-var-requires
  const AppContainer = require('react-hot-loader').AppContainer;

  renderRoot(
    <AppContainer warnings={false}>
      <App store={store} />
    </AppContainer>
  );

  if (module.hot) {
    module.hot.accept('./app/App', async () => {
      const NextApp = (await System.import('./app/App')).App;
      renderRoot(
        <AppContainer>
          <NextApp store={store} />
        </AppContainer>
      );
    });

    // reducers
    module.hot.accept('./app/appReducer', () => {
      const newRootReducer = require('./app/appReducer').default;
      store.store.replaceReducer(newRootReducer);
    });
  }
}
