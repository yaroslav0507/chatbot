import React, { useState } from 'react';
import styled from 'styled-components';
import IconArrowLeft from '../../../../images/outline-arrow_back_ios-24px.svg';
import IconArrowRight from '../../../../images/outline-arrow_forward_ios-24px.svg';
import { IInfoCard } from '../../interfaces';

const Carousel = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  color: #363636;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
`;

const SlideWrapper = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const CarouselNav = styled.div`
  height: 100%;
  display: flex;
  transition: opacity 
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? '.3' : '1'};
  
  &:hover {
    opacity: ${props => props.disabled ? '.3' : '.9'};
  }
`;

const SlideDescription = styled.div`
  color: #363636;
  font-size: 14px;
`;

interface ISliderProps {
  data: IInfoCard[];
}

export const Slider: React.FC<ISliderProps> = ({data}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === data.length - 1;

  const onPrev = () => {
    if (!isFirstSlide) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const onNext = () => {
    if (!isLastSlide) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const slide = data[currentSlideIndex];

  return (
    <Carousel>
      <CarouselNav
        disabled={isFirstSlide}
        onClick={onPrev}
      >
        <IconArrowLeft/>
      </CarouselNav>

      <div>
        <Header>{slide.title}</Header>
        <SlideWrapper href={slide.image.imageUri} target="_blank">
          <img src={slide.image.imageUri}/>
        </SlideWrapper>
        <SlideDescription>{slide.description}</SlideDescription>
      </div>

      <CarouselNav
        disabled={isLastSlide}
        onClick={onNext}
      >
        <IconArrowRight/>
      </CarouselNav>
    </Carousel>
  );
};
