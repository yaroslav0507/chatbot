import { combineReducers } from 'redux';
import { chatReducer } from './Chat/chatReducer';
import { IChatBotConfig, IChatBotResponse } from './Chat/interfaces';

export interface IChatState {
  config: IChatBotConfig;
  history: IChatBotResponse[];
  loading: boolean;
}

export interface IRootState {
  chat: IChatState;
}

const appReducer = combineReducers<IRootState>({
  chat: chatReducer
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
