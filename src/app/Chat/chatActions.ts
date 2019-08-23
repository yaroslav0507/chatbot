import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IRootState } from '../appReducer';
import { IChatBotConfig, IChatBotResponse } from './interfaces';
import { createAction } from 'typesafe-actions';
import { CHAT_CONFIG_LOADED, CHAT_MESSAGE_RECEIVED, USER_MESSAGE_SENT } from './chatReducer';
import uuid from 'uuid';

const initializationQuery = 'Hello';
const getStoredSiteId = () => sessionStorage.getItem('siteId');
const getStoredSessionId = () => sessionStorage.getItem('sessionId');

export const loadInitialConfiguration = (siteId: string) => (dispatch: Dispatch<IRootState>) => {
  const onDataLoadedAction = createAction(CHAT_CONFIG_LOADED, (data: IChatBotConfig) => ({
    type: CHAT_CONFIG_LOADED,
    data,
  }));

  if (!getStoredSiteId()) {
    sessionStorage.setItem('siteId', siteId);
  }

  if (!getStoredSessionId()) {
    const sessionId = uuid.v4();
    sessionStorage.setItem('sessionId', sessionId);
  }

  axios.get(`https://aceai-dev.leasehawk.com/api/AceChatbotStyle`, {
    params: {
      siteId
    }
  }).then((response: AxiosResponse<IChatBotConfig>) => {
    dispatch(onDataLoadedAction(response.data));
  });
};

export const sendMessage = (query: string = initializationQuery) => (dispatch: Dispatch<IRootState>) => {
  const onUserMessageSent = createAction(USER_MESSAGE_SENT, (message: string) => ({
    type: USER_MESSAGE_SENT,
    message
  }));

  const onMessageReceived = createAction(CHAT_MESSAGE_RECEIVED, (data: IChatBotResponse) => ({
    type: CHAT_MESSAGE_RECEIVED,
    data
  }));

  if (query !== initializationQuery) {
    dispatch(onUserMessageSent(query));
  }

  return axios.get(`https://aceai-dev.leasehawk.com/api/acechatbot`, {
    params: {
      query,
      siteId: getStoredSiteId(),
      sessionId: getStoredSessionId(),
    }
  }).then(({data}: {data: IChatBotResponse}) => {
    dispatch(onMessageReceived(data));
  });
};
