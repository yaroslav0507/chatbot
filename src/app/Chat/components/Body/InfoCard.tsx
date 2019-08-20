import React from 'react';
import styled from 'styled-components';
import { AnswerTemplate } from './Message';
import { Slider } from './Slider';

const Root = styled(AnswerTemplate)`
  height: auto;
  position: relative;
  padding: 15px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 160px;
`;

const Header = styled.div`
  font-size: 18px;
  color: #363636;
  font-weight: 500;
  line-height: 23px;
`;

const mockApartments = [{
  img: 'https://www.lymebayholidays.co.uk/wp-content/uploads/2017/11/B4931.jpg',
  desc: '2 bed / 1 bath / 900 sqft. from $900.00 monthly'
}, {
  img: 'https://www.lymebayholidays.co.uk/wp-content/uploads/2017/11/B4912.jpg',
  desc: '2 bed / 2 bath / 1200 sqft. from $1500.00 monthly'
}, {
  img: 'https://www.fairingway.org/sites/FairingWay/uploads/Floor-Plans/Azalea_FW_900.jpg',
  desc: '1 bed / 1 bath / 1000 sqft. from $1200.00 monthly'
}];

export const InfoCard: React.FC = () => {
  return (
    <Root>
      <Header>Available {'{Date i.e.May 15th}'}</Header>
      <Slider data={mockApartments}/>
    </Root>
  );
};
