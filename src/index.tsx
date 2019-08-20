import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// tslint:disable:no-import-side-effect
// side-effect imports here
import 'babel-polyfill';
import 'url-search-params-polyfill';
import 'formdata-polyfill';
import 'moment-timezone';
import './styles/main.scss';
// tslint:enable:no-import-side-effect

import { App } from './app/App';
import { store, browserHistory } from './app/store';

declare const System: {
  import<T = any>(module: string): Promise<T>;
};

export const BASE_URL = '/';

axios.defaults.baseURL = BASE_URL;

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('root'));
};

if (process.env.NODE_ENV === 'production') {
  renderRoot(<App store={store} history={browserHistory} />);
} else {
  // removed in production, hot-reload config
  // tslint:disable-next-line:no-var-requires
  const AppContainer = require('react-hot-loader').AppContainer;

  renderRoot(
    <AppContainer warnings={false}>
      <App store={store} history={browserHistory} />
    </AppContainer>
  );

  if (module.hot) {
    // app
    module.hot.accept('./app/App', async () => {
      // const NextApp = require('./app').App;
      const NextApp = (await System.import('./app/App')).App;
      renderRoot(
        <AppContainer>
          <NextApp store={store} history={browserHistory} />
        </AppContainer>
      );
    });

    // reducers
    module.hot.accept('./app/appReducer', () => {
      const newRootReducer = require('./app/appReducer').default;
      store.replaceReducer(newRootReducer);
    });
  }
}
