import { IChatBotConfig, IChatBotResponse } from './interfaces';
import { createReducer } from '../../utils/reducerUtils';

export const CHAT_CONFIG_LOADED = 'CHAT_CONFIG_LOADED';
export const USER_MESSAGE_SENT = 'USER_MESSAGE_SENT';
export const CHAT_MESSAGE_RECEIVED = 'CHAT_MESSAGE_RECEIVED';
export const CHAT_MESSAGE_REQUEST_FAILED = 'CHAT_MESSAGE_REQUEST_FAILED';

export interface IChatState {
  config: IChatBotConfig;
  history: IChatBotResponse[];
  loading: boolean;
}

export const chatInitialState = {
  config: {},
  history: [],
  loading: false
};

const onConfigLoaded = (state: IChatState, action: {data: IChatBotConfig}) => ({
  ...state,
  config: action.data
});

const onUserMessageSent = (state: IChatState, action: {message: string}) => ({
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

const onChatMessageReceived = (state: IChatState, action: {data: IChatBotResponse}) => ({
  ...state,
  loading: false,
  history: [
    ...state.history,
    action.data
  ]
});

const onChatMessageRequestFailed = (state: IChatState) => ({
  ...state,
  loading: false
});

export const chatReducer = createReducer(chatInitialState, {
  [CHAT_CONFIG_LOADED]: onConfigLoaded,
  [USER_MESSAGE_SENT]: onUserMessageSent,
  [CHAT_MESSAGE_RECEIVED]: onChatMessageReceived,
  [CHAT_MESSAGE_REQUEST_FAILED]: onChatMessageRequestFailed,
});
