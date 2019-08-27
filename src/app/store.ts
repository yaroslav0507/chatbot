import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import { rootReducer, IRootState } from './appReducer';
import { persistStore, persistReducer } from 'redux-persist';
import { Persistor } from "redux-persist/es/types";
import { chatInitialState } from './Chat/chatReducer';

declare const window: {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};

export interface IConfiguredStore {
  store: Store<IRootState | undefined>;
  persistor: Persistor;
}

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  transforms: [
    // Create a transformer by passing the reducer key and configuration. Values
    // shown below are the available configurations with default values
    expireReducer('chat', {
      expireSeconds: 60*60*24,
      expiredState: chatInitialState,
      autoExpire: true
    })
    // You can add more `expireReducer` calls here for different reducers
    // that you may want to expire
  ]
};

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState?: IRootState): IConfiguredStore {
  // configure middlewares
  const middlewares = [thunk];

  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  // create store
  const store = createStore(persistedReducer, initialState, enhancer);

  // persist store
  const persistor = persistStore(store);

  return {
    store,
    persistor
  };
}

// pass an optional param to rehydrate state on app start
export const store = configureStore();
