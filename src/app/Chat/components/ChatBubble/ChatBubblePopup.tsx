import React from 'react';
import styled from 'styled-components';
import IconClose from '../../../../images/outline-clear-24px.svg';
import { styleHoverOpacity } from '../../../../styles/shared';

const Root = styled.div`
  position: relative;
  display: flex;
  width: 245px;
  padding: 14px 15px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);
  margin-bottom: 15px;
  letter-spacing: .2px;
  z-index: 1;
  
  transition: all .3s ease;
  transform: translateY(${props => props.visible ? 0 : '50px'});
  opacity: ${props => props.visible ? 1 : 0}; 
`;

const Triangle = styled.div`
  position: absolute;
  bottom: -32px;
  right: 30px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  
  &:after {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    background: #fff;
    transform: rotate(-45deg);
    top: -32px;
    left: 0;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Text = styled.div`
  color: ${props => props.textColor || '#4A4A4A'};
  font-size: 13px;
  line-height: 16px;
`;

const CloseBubble = styled(IconClose)`
  fill: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  transition: fill .3s ease;
  
  &:hover {
    fill: #363636;
    cursor: pointer;
  }
`;

interface IChatBubblePopup {
  visible: boolean;
  message: string;
  onClose(): void;
}

export const ChatBubblePopup: React.FC<IChatBubblePopup> = ({visible, message, onClose}) => (
  <Root visible={visible}>
    <CloseBubble onClick={onClose}/>

    <Text>
      {message}
    </Text>

    <Triangle/>
  </Root>
);
