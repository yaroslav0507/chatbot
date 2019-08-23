import React from 'react';
import styled from 'styled-components';
import { styleHoverOpacity } from '../../../../styles/shared';

const Message = styled.div`
  clear: both;
  width: 300px;
  display: flex;
  padding: 15px;
  max-width: 87%;
  overflow: hidden;
  line-height: 18px;
  border-radius: 10px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: flex-start;
`;

export const BotMessage = styled(Message)`
  background-color: ${props => props.bgColor || '#E5E5E5'};
  color: ${props => props.textColor || '#000'};
`;

export const CustomerMessage = styled(Message)`
  background-color: ${props => props.bgColor || '#3D8FEE'};
  color: ${props => props.textColor || '#fff'};
  float: right;
`;

export const AnswerTemplate = styled(Message)`
  height: 40px;
  min-width: 40px;
  text-align: center;
  color: #4A90E2;
  border: 1px solid #CCCCCC;
  border-radius: 40px;
  justify-content: center;
  margin-top: -10px;
  
  display: ${props => props.inline ? 'inline-flex' : 'flex'};
  width: ${props => props.inline ? 'auto' : '300px'};
  margin-right: ${props => props.inline ? '4px' : '0'};

  ${styleHoverOpacity};
`;
