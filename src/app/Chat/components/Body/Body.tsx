import React, { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import { AnswerTemplate, BotMessage, CustomerMessage } from './Message';
import { InfoCard } from './InfoCard';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';

const Root = styled.div`
  position: relative;
  padding: 15px 15px 65px;
  overflow-x: hidden;
  overflow-y: scroll;
  flex: 1;
  background-color: #fff;
`;

const MessageEnd = styled.div`
  float: left;
  clear: both;
`;

interface IBodyProps {
  botMessageBgColor: string;
  botMessageTextColor: string;
  userMessageBgColor: string;
  userMessageTextColor: string;
}

export const Body: React.FC<IBodyProps> = (props) => {
  const chatBodyRef: RefObject<HTMLDivElement> = React.createRef();

  const scrollToBottom = () => {
    const bottom = document.getElementById('chat-body-bottom');

    if (bottom) {
      setTimeout(() => {
        scrollIntoView(bottom, {
          scrollMode: 'if-needed',
          block: 'center',
          inline: 'center',
        });
      }, 100);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Root ref={chatBodyRef}>
      <BotMessage
        bgColor={props.botMessageBgColor}
        textColor={props.botMessageTextColor}
      >
        Hi! I'm ACE, your virtual leasing assistant.
        Thank you for contacting Scottsdale Park Place.
        I can help schedule a tour, check availability,
        and answer common leasing questions.
        What can I get you information on?
      </BotMessage>

      <AnswerTemplate>Check pricing and availability </AnswerTemplate>
      <AnswerTemplate>Schedule a tour</AnswerTemplate>
      <AnswerTemplate>Apartment amenities</AnswerTemplate>

      <CustomerMessage
        bgColor={props.userMessageBgColor}
        textColor={props.userMessageTextColor}
      >
        Check pricing and availability
      </CustomerMessage>

      <BotMessage
        bgColor={props.botMessageBgColor}
        textColor={props.botMessageTextColor}
      >
        How many bedrooms do you need?
      </BotMessage>

      {
        [0, 1, 2, 3].map(i => (
          <AnswerTemplate inline key={i}>{i}</AnswerTemplate>
        ))
      }

      <CustomerMessage
        bgColor={props.userMessageBgColor}
        textColor={props.userMessageTextColor}
      >
        I would like a one bedroom next month
      </CustomerMessage>

      <BotMessage
        bgColor={props.botMessageBgColor}
        textColor={props.botMessageTextColor}
      >
        Okay! Pricing and availability are subject to change.
        We do have a 1 bedroom available on Thursday, August 1st starting at $1,062.
        Would you like to come in to see one?
      </BotMessage>

      <InfoCard/>
      <AnswerTemplate inline>Take a Tour</AnswerTemplate>
      <AnswerTemplate inline>No Thanks</AnswerTemplate>

      <MessageEnd id="chat-body-bottom"/>
    </Root>
  );
};
