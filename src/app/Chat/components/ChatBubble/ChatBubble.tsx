import React from 'react';
import styled from 'styled-components';

import ChatBotIcon from '../../../../images/Chatbot-icon.svg';
import { styleHoverOpacity } from '../../../../styles/shared';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-color: ${props => props.color || '#3D8FEE'};
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);
  margin-right: 15px;
  z-index: 2;
  
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
