import React from 'react';
import styled from 'styled-components';
import { AnswerTemplate } from './Message';
import { Slider } from './Slider';
import { IInfoCard } from '../../interfaces';

const Root = styled(AnswerTemplate)`
  height: auto;
  padding: 15px;
  min-height: 160px;
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
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
