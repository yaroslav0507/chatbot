import React from 'react';
import ChatBotIcon from '../../../images/Chatbot-icon.svg';
import IconClose from '../../../images/outline-clear-24px.svg';
import styled from 'styled-components';
import { styleHoverOpacity } from '../../../styles/shared';
import { IChatBotConfig } from '../interfaces';

const Root = styled.div`
  position: relative;
  height: 82px;
  width: 100%;
  background-color: ${props => props.background || '#162A3F'};
  padding: 16px;
  color: ${props => props.color || '#fff'};
  display: flex;
  align-items: center;
`;

const SiteName = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CloseChat = styled(IconClose)`
  position: absolute;
  top: 12px;
  right: 14px;
  opacity: .7;
  width: 20px;
  fill: #fff;
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
