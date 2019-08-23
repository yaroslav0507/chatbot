import React from 'react';
import styled from 'styled-components';
import { AnswerTemplate } from './Message';
import { Slider } from './Slider';
import { IInfoCard } from '../../interfaces';

const Root = styled(AnswerTemplate)`
  height: auto;
  position: relative;
  padding: 15px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 160px;
`;

interface IInfoCardProps {
  data: IInfoCard[];
}

export const InfoCard: React.FC<IInfoCardProps> = ({data}) => {
  return (
    <Root>
      <Slider data={data}/>
    </Root>
  );
};
