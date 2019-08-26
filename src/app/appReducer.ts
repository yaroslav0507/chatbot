import { createReducer } from '../utils/reducerUtils';
import { IChatBotConfig, IChatBotResponse } from './Chat/interfaces';

export const CHAT_CONFIG_LOADED = 'CHAT_CONFIG_LOADED';
export const USER_MESSAGE_SENT = 'USER_MESSAGE_SENT';
export const CHAT_MESSAGE_RECEIVED = 'CHAT_MESSAGE_RECEIVED';
export const CHAT_MESSAGE_REQUEST_FAILED = 'CHAT_MESSAGE_REQUEST_FAILED';

export interface IRootState {
  config: IChatBotConfig;
  history: IChatBotResponse[];
  loading: boolean;
}

const onConfigLoaded = (state: IRootState, action: {data: IChatBotConfig}) => ({
  ...state,
  config: action.data
});

const onUserMessageSent = (state: IRootState, action: {message: string}) => ({
  ...state,
  loading: true,
  history: [
    ...state.history.map(item => item.payload ? {
      ...item,
      payload: {
        ...item.payload,
        quickReply: []
      }
    } : item),
    {
      result: action.message
    }
  ]
});

const onChatMessageReceived = (state: IRootState, action: {data: IChatBotResponse}) => ({
  ...state,
  loading: false,
  history: [
    ...state.history,
    action.data
  ]
});

const onChatMessageRequestFailed = (state: IRootState) => ({
  ...state,
  loading: false
});

export const rootReducer = createReducer({
  config: {},
  history: [],
  loading: false
}, {
  [CHAT_CONFIG_LOADED]: onConfigLoaded,
  [USER_MESSAGE_SENT]: onUserMessageSent,
  [CHAT_MESSAGE_RECEIVED]: onChatMessageReceived,
  [CHAT_MESSAGE_REQUEST_FAILED]: onChatMessageRequestFailed,
});
