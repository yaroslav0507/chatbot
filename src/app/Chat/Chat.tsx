import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChatBubble } from './components/ChatBubble/ChatBubble';
import { ChatBubblePopup } from './components/ChatBubble/ChatBubblePopup';
import { Header } from './components/Header';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer';
import { TypingIndicator } from './components/Body/TypingIndicator';
import { IChatDispatchProps, IChatStateProps } from './ChatContainer';
import { RouteComponentProps } from 'react-router';

const defaultSiteId = '99999';

const Root = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-height: 100%;
  max-width: 100%;
  
  @media (min-width: 576px) {
    right: 15px;
  }
`;

const ChatComponent = styled.div`
  width: 375px;
  max-width: 100%;
  max-height: 100%;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 3;
  
  transition: all .3s ease;
  transform: translateY(${props => props.visible ? 0 : '50px'});
  opacity: ${props => props.visible ? 1 : 0}; 
  height: ${props => props.visible ? '1020px' : '10px'}; 
`;

interface IChatProps extends IChatDispatchProps, IChatStateProps, RouteComponentProps<{siteId: string}> {}

export const Chat: React.FC<IChatProps> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    props.initialize(defaultSiteId);
  }, []);

  useEffect(() => {
    if (props.data.propertyId) {
      setTimeout(() => {
        setPopupVisible(true);
      }, props.data.chatbotPopupNotificationTime || 300);
    }

    const interval = setInterval(() => {
      setIsTyping(Math.random() > 0.5);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [props.data.propertyId]);

  const onChatButtonClick = () => {
    setIsOpened(true);
    setPopupVisible(false);
  };

  return props.data.propertyId ? (
    <Root>
      {!isOpened && (
        <>
          <ChatBubblePopup
            visible={popupVisible && !!props.data.chatbotPopupNotificationMessage}
            message={props.data.chatbotPopupNotificationMessage}
            onClose={() => setPopupVisible(false)}
          />

          <ChatBubble
            color={props.data.chatbotTriggerColor}
            image={props.data.chatbotTriggerIconUrl}
            onClick={onChatButtonClick}
          />
        </>
      )}

      <ChatComponent visible={isOpened}>
        <Header
          title={props.data.chatbotHeaderTitle}
          description={props.data.chatbotHeaderDescription}
          bgColor={props.data.chatbotHeaderColor}
          textColor={props.data.chatbotHeaderTextColor}
          image={props.data.chatbotHeaderIconUrl}
          onClose={() => setIsOpened(false)}
        />

        <Body
          botMessageBgColor={props.data.chatbotAceConversationBubbleColor}
          botMessageTextColor={props.data.chatbotAceConversationBubbleTextColor}
          userMessageBgColor={props.data.chatbotUserConversationBubbleColor}
          userMessageTextColor={props.data.chatbotUserConversationBubbleTexColor}
        />

        <Footer/>

        <TypingIndicator visible={isTyping}/>
      </ChatComponent>
    </Root>
  ) : null;
};
