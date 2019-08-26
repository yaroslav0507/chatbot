import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IRootState } from '../appReducer';
import { IChatBotConfig, IChatBotResponse } from './interfaces';
import { createAction } from 'typesafe-actions';
import {
  CHAT_CONFIG_LOADED,
  CHAT_MESSAGE_RECEIVED,
  CHAT_MESSAGE_REQUEST_FAILED,
  USER_MESSAGE_SENT
} from '../appReducer';
import uuid from 'uuid';

export const initializationQuery = 'Hello';

const getStoredSiteId = () => sessionStorage.getItem('siteId');
const getStoredSessionId = () => sessionStorage.getItem('sessionId');

export const loadInitialConfiguration = (siteId: string) => (dispatch: Dispatch<IRootState>) => {
  if (!getStoredSiteId()) {
    sessionStorage.setItem('siteId', siteId);
  }

  if (!getStoredSessionId()) {
    const sessionId = uuid.v4();
    sessionStorage.setItem('sessionId', sessionId);
  }

  dispatch(sendMessage(initializationQuery));

  const onDataLoadedAction = createAction(CHAT_CONFIG_LOADED, (data: IChatBotConfig) => ({
    type: CHAT_CONFIG_LOADED,
    data,
  }));

  axios.get(`/AceChatbotStyle`, {
    params: {
      siteId
    }
  }).then((response: AxiosResponse<IChatBotConfig>) => {
    dispatch(onDataLoadedAction(response.data));
  });
};

export const sendMessage = (query: string) => (dispatch: Dispatch<IRootState>) => {
  const onUserMessageSent = createAction(USER_MESSAGE_SENT, (message: string) => ({
    type: USER_MESSAGE_SENT,
    message
  }));

  const onMessageReceived = createAction(CHAT_MESSAGE_RECEIVED, (data: IChatBotResponse) => ({
    type: CHAT_MESSAGE_RECEIVED,
    data
  }));

  const onMessageFailed = createAction(CHAT_MESSAGE_REQUEST_FAILED);

  if (query !== initializationQuery) {
    dispatch(onUserMessageSent(query));
  }

  return axios.get(`/acechatbot`, {
    params: {
      query,
      siteId: getStoredSiteId(),
      sessionId: getStoredSessionId(),
    }
  }).then(({data}: {data: IChatBotResponse}) => {
    dispatch(onMessageReceived(data));
  }).catch(() => {
    dispatch(onMessageFailed());
  });
};
