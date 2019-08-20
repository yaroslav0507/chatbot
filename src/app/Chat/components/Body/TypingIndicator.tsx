import React from 'react';
import styled, { keyframes } from 'styled-components';

const typeAnimationKeyFrame = keyframes`
  0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-5px);
	}
`;

const Root = styled.div`
  height: 49px;
  width: 90px;
  border-radius: 10px;
  background-color: #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px;
  position: absolute;
  bottom: 70px;
  left: 15px;
  transition: all .3s ease;
  
  transform: translateY(${props => props.visible ? 0 : '50px'});
  opacity: ${props => props.visible ? 1 : 0};  
`;

const Dot = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #aaaaaa;
  animation: ${typeAnimationKeyFrame} 1.3s linear infinite;

  &:nth-child(2) {
    animation-delay: -1.1s;
  }

  &:nth-child(3) {
    animation-delay: -0.9s;
  }
`;

interface ITypingIndicatorProps {
  visible: boolean;
}

export const TypingIndicator: React.FC<ITypingIndicatorProps> = ({visible}) => (
  <Root visible={visible}>
    <Dot/>
    <Dot/>
    <Dot/>
  </Root>
);
