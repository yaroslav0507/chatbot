import React, {Fragment, RefObject, useEffect } from 'react';
import styled from 'styled-components';
import { AnswerTemplate, BotMessage, CustomerMessage } from './Message';
import { IChatBotConfig, IChatBotResponse } from '../../interfaces';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { InfoCard } from './InfoCard';

const Root = styled.div`
  flex: 1;
  overflow-x: hidden;
  position: relative;
  overflow-y: scroll;
  background-color: #fff;
  padding: 15px 15px 65px;
`;

const MessageEnd = styled.div`
  float: left;
  clear: both;
`;

interface IBodyProps {
  history: IChatBotResponse[];
  config: IChatBotConfig;
  onQuickReply(message: string): void;
}

export const Body: React.FC<IBodyProps> = ({config, history, onQuickReply}) => {
  const chatBodyRef: RefObject<HTMLDivElement> = React.createRef();

  const scrollToBottom = () => {
    const bottom = document.getElementById('chat-body-bottom');

    if (bottom) {
      scrollIntoView(bottom, {
        scrollMode: 'if-needed',
        block: 'center',
        inline: 'center',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const renderMessage = (message: IChatBotResponse, index: number) => message.payload ? (
    <Fragment key={index}>
      <BotMessage
        bgColor={config.chatbotAceConversationBubbleColor}
        textColor={config.chatbotAceConversationBubbleTextColor}
      >
        {message.result}
      </BotMessage>

      {message.payload.infoCard && <InfoCard data={message.payload.infoCard}/>}

      {message.payload.quickReply.map((reply) => (
        <AnswerTemplate
          key={reply.value}
          inline={reply.display !== 'block'}
          onClick={() => onQuickReply(reply.value)}
        >
          {reply.text}
        </AnswerTemplate>
      ))}
    </Fragment>
  ) : (
      <CustomerMessage
        key={index}
        bgColor={config.chatbotUserConversationBubbleColor}
        textColor={config.chatbotUserConversationBubbleTexColor}
      >
        {message.result}
      </CustomerMessage>
  );

  return (
    <Root ref={chatBodyRef}>
      {history.map((record, index) => renderMessage(record, index))}

      <MessageEnd id="chat-body-bottom"/>
    </Root>
  );
};
