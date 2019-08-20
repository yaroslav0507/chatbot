import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';
import { chatReducer } from './Chat/chatReducer';
import { IChatBotInitialConfig } from './Chat/interfaces';

export interface IAppReducers {
  config: IChatBotInitialConfig;
}

export interface IRootState {
  router: RouterState;
  app: IAppReducers;
}

const appReducer = combineReducers<IRootState>({
  router,
  app: combineReducers({
    config: chatReducer
  })
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
