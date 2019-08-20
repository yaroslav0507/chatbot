import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IRootState } from '../appReducer';
import { IChatBotInitialConfig } from './interfaces';
import { createAction } from 'typesafe-actions';
import { CHAT_CONFIG_LOADED } from './chatReducer';

const mockResponse = {
  'propertyId': 99999,
  'propertyName': 'Scottsdale Park Place',
  'chatbotPopupNotificationMessage': 'Ask me a common leasing question!',
  'chatbotPopupNotificationTime': 300,
  'chatbotHeaderTitle': 'Scottsdale Park Place',
  'chatbotHeaderDescription': 'Your virtual leasing assistant.',
  'chatbotTriggerIconUrl': 'https://lh-int-ace-ai.s3.amazonaws.com/dist/assets/header-icon.png',
  'chatbotTriggerColor': '#F37A1F',
  'chatbotHeaderIconUrl': 'https://lh-int-ace-ai.s3.amazonaws.com/dist/assets/trigger-icon.png',
  'chatbotHeaderColor': '#162A3F',
  'chatbotHeaderTextColor': '#FFFFFF',
  'chatbotAceConversationBubbleColor': '#E5E5E5',
  'chatbotAceConversationBubbleTextColor': '#363636',
  'chatbotUserConversationBubbleColor': '#3D8FEE',
  'chatbotUserConversationBubbleTexColor': '#FFFFFF'
};

export const loadInitialConfiguration = (siteId: string) => (dispatch: Dispatch<IRootState>) => {
  const onDataLoadedAction = createAction(CHAT_CONFIG_LOADED, (data: IChatBotInitialConfig) => ({
    type: CHAT_CONFIG_LOADED,
    data,
  }));

  axios.get(`https://aceai-dev.leasehawk.com/api/AceChatbotStyle`, {
    data: {
      siteId
    }
  }).then((response: AxiosResponse<IChatBotInitialConfig>) => {
    dispatch(onDataLoadedAction(response.data));
  }).catch(() => {
    dispatch(onDataLoadedAction(mockResponse));
  });
};
