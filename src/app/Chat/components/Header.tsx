import React from 'react';
import ChatBotIcon from '../../../images/Chatbot-icon.svg';
import IconClose from '../../../images/outline-clear-24px.svg';
import styled from 'styled-components';
import { styleHoverOpacity } from '../../../styles/shared';
const Root = styled.div`
  width: 100%;
  height: 82px;
  padding: 16px;
  display: flex;
  position: relative;
  align-items: center;
  color: ${props => props.color || '#fff'};
  background-color: ${props => props.background || '#162A3F'};
`;

import { IChatBotConfig } from '../interfaces';

const SiteName = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CloseChat = styled(IconClose)`
  top: 12px;
  fill: #fff;
  right: 14px;
  opacity: .7;
  width: 20px;
  position: absolute;
  ${styleHoverOpacity};
`;

const iconStyle = `
  width: 40px;
  margin: 5px 15px 5px 5px;
`;

const Icon = styled(ChatBotIcon)`${iconStyle}`;
const Image = styled.img`${iconStyle}`;

interface IHeaderProps {
  config: IChatBotConfig;
  onClose(): void;
}

export const Header: React.FC<IHeaderProps> = ({config, onClose}) => {
  return (
    <Root
      color={config.chatbotHeaderTextColor}
      background={config.chatbotHeaderColor}
    >
      {config.chatbotHeaderIconUrl ? <Image src={config.chatbotHeaderIconUrl}/> : <Icon/>}

      <div>
        <SiteName>{config.chatbotHeaderTitle || '{Site Name}'}</SiteName>
        {config.chatbotHeaderDescription}
      </div>

      <CloseChat onClick={onClose}/>
    </Root>
  );
};
