import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ChatBubble } from './components/ChatBubble/ChatBubble';
import { ChatBubblePopup } from './components/ChatBubble/ChatBubblePopup';
import { Header } from './components/Header';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer';
import { TypingIndicator } from './components/Body/TypingIndicator';
import { IChatDispatchProps } from './ChatContainer';
import { IChatState } from '../appReducer';

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

interface IChatProps extends IChatDispatchProps, IChatState {}

export const Chat: React.FC<IChatProps> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  // Called once, when component is mounted
  useEffect(() => {
    props.initialize(defaultSiteId);
    props.sendMessage('Hello');
  }, []);

  // Called when propertyId is changed
  useEffect(() => {
    if (props.config.propertyId) {
      setTimeout(() => {
        setPopupVisible(true);
      }, props.config.chatbotPopupNotificationTime || 300);
    }
  }, [props.config.propertyId]);

  const onChatButtonClick = () => {
    setIsOpened(true);
    setPopupVisible(false);
  };

  return props.config.propertyId ? (
    <Root>
      {!isOpened && (
        <>
          <ChatBubblePopup
            visible={popupVisible && !!props.config.chatbotPopupNotificationMessage}
            message={props.config.chatbotPopupNotificationMessage}
            onClose={() => setPopupVisible(false)}
          />

          <ChatBubble
            color={props.config.chatbotTriggerColor}
            image={props.config.chatbotTriggerIconUrl}
            onClick={onChatButtonClick}
          />
        </>
      )}

      <ChatComponent visible={isOpened}>
        <Header
          config={props.config}
          onClose={() => setIsOpened(false)}
        />

        <Body
          history={props.history}
          config={props.config}
          onQuickReply={(message) => props.sendMessage(message)}
        />

        <Footer
          loading={props.loading}
          onSubmit={(message) => props.sendMessage(message)}
        />

        <TypingIndicator visible={props.loading}/>
      </ChatComponent>
    </Root>
  ) : null;
};
