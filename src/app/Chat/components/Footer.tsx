import React, { useState } from 'react';
import IconPlane from '../../../images/paper-plane-regular.svg';
import styled from 'styled-components';

const Root = styled.form`
  min-height: 60px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  background-color: #fff;
`;

const Input = styled.input`
  height: 42px;
  width: 300px;
  border-radius: 21px;
  background-color: #E5E5E5;
  padding: 12px 15px;
  color: #363636;
  outline: none;
  border: none;
  transition: box-shadow .3s ease;
  
  &:focus {
    box-shadow: inset 0 0 0 3px #dedede;
  }
`;

const IconSend = styled(IconPlane)`
  width: 24px;
  fill: #162A3F;
`;

const ButtonSend = styled.button`
  width: 50px;
  height: 50px;
  margin-top: -2px;
  margin-right: -7px;
  border-radius: 100%;
  transition: background .3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  
  &:hover {
    cursor: pointer;
    background: #eee;
  }
`;

interface IFooterProps {
  loading: boolean;
  onSubmit(message: string): void;
}

export const Footer: React.FC<IFooterProps> = (props) => {
  const [message, setMessage] = useState('');

  const onSubmit = (event) => {
    setMessage('');
    event.preventDefault();
    props.onSubmit(message);
  };

  return (
    <Root onSubmit={onSubmit}>
      <Input
        type="text"
        value={message}
        placeholder="Start Typing"
        onChange={({target: {value}}) => setMessage(value)}
      />

      <ButtonSend
        type="submit"
        disabled={props.loading}
      >
        <IconSend/>
      </ButtonSend>
    </Root>
  );
};
