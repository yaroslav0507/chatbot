import { createReducer } from '../../utils/reducerUtils';
import { IChatState } from '../appReducer';
import { IChatBotConfig, IChatBotResponse } from './interfaces';

export const CHAT_CONFIG_LOADED = 'CHAT_CONFIG_LOADED';
export const USER_MESSAGE_SENT = 'USER_MESSAGE_SENT';
export const CHAT_MESSAGE_RECEIVED = 'CHAT_MESSAGE_RECEIVED';

const onConfigLoaded = (state: IChatState, action: {data: IChatBotConfig}) => ({
  ...state,
  config: action.data
});

const onUserMessageSent = (state: IChatState, action: {message: string}) => ({
  ...state,
  loading: true,
  history: [
    ...state.history,
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

export const chatReducer = createReducer({
  config: {},
  history: [],
  loading: false,
}, {
  [CHAT_CONFIG_LOADED]: onConfigLoaded,
  [USER_MESSAGE_SENT]: onUserMessageSent,
  [CHAT_MESSAGE_RECEIVED]: onChatMessageReceived
});
