import React from 'react';
import styled from 'styled-components';
import IconClose from '../../../../images/outline-clear-24px.svg';

const Root = styled.div`
  z-index: 1;
  width: 245px;
  display: flex;
  border-radius: 4px;
  position: relative;
  padding: 14px 15px;
  margin-bottom: 15px;
  align-items: center;
  letter-spacing: .2px;
  background-color: #fff;
  justify-content: center;
  transition: all .3s ease;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);
  opacity: ${props => props.visible ? 1 : 0}; 
  transform: translateY(${props => props.visible ? 0 : '50px'});
`;

const Triangle = styled.div`
  right: 30px;
  width: 32px;
  height: 32px;
  bottom: -32px;
  overflow: hidden;
  position: absolute;
  
  &:after {
    content: "";
    left: 0;
    top: -32px;
    width: 32px;
    height: 32px;
    background: #fff;
    position: absolute;
    transform: rotate(-45deg);
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Text = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: ${props => props.textColor || '#4A4A4A'};~
`;

const CloseBubble = styled(IconClose)`
  top: 0;
  right: 0;
  fill: #ccc;
  width: 16px;
  height: 16px;
  position: absolute;
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
