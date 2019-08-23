export interface IChatBotConfig {
  propertyId: number;
  propertyName: string;
  chatbotPopupNotificationMessage: string;
  chatbotPopupNotificationTime: number;
  chatbotHeaderTitle: string;
  chatbotHeaderDescription: string;
  chatbotTriggerIconUrl: string;
  chatbotTriggerColor: string;
  chatbotHeaderIconUrl: string;
  chatbotHeaderColor: string;
  chatbotHeaderTextColor: string;
  chatbotAceConversationBubbleColor: string;
  chatbotAceConversationBubbleTextColor: string;
  chatbotUserConversationBubbleColor: string;
  chatbotUserConversationBubbleTexColor: string;
}

export interface IImage {
  imageUri: string;
  accessibilityText: string;
}

export interface IInfoCard {
  title: string;
  description: string;
  image: IImage;
}

export interface IQuickReply {
  display: string;
  text: string;
  value: string;
}

export interface IChatBotResponsePayload {
  platform: string;
  infoCard: IInfoCard[];
  quickReply: IQuickReply[];
}

export interface IChatBotResponse {
  result: string;
  payload: IChatBotResponsePayload;
}
