import React from 'react';
import styled from 'styled-components';

import ChatBotIcon from '../../../../images/Chatbot-icon.svg';
import { styleHoverOpacity } from '../../../../styles/shared';

const Root = styled.div`
  z-index: 2;
  width: 60px;
  height: 60px;
  display: flex;
  margin-right: 15px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);
  background-color: ${props => props.color || '#3D8FEE'};  
  ${styleHoverOpacity};
`;

const Icon = styled(ChatBotIcon)`
  width: 30px;
`;

const Image = styled.img`
  width: 30px;
`;

interface IChatBubbleProps {
  color: string;
  image: string;
  onClick(): void;
}

export const ChatBubble: React.FC<IChatBubbleProps> = ({color, image, onClick}) => (
  <Root
    color={color}
    onClick={onClick}
  >
    {image ? <Image src={image}/> : <Icon/>}
  </Root>
);
