import React, { useState } from 'react';
import styled from 'styled-components';
import IconArrowLeft from '../../../../images/outline-arrow_back_ios-24px.svg';
import IconArrowRight from '../../../../images/outline-arrow_forward_ios-24px.svg';

const Carousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Slide = styled.img`
  height: 200px;
`;

const CarouselNav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 
  opacity: ${props => props.disabled ? '.3' : '1'};
  
  &:hover {
    opacity: ${props => props.disabled ? '.3' : '.9'};
  }
`;

const SlideDescription = styled.div`
  color: #363636;
  font-size: 14px;
`;

interface ISlide {
  img: string;
  desc: string;
}

interface ISliderProps {
  data: ISlide[];
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

  return (
    <Carousel>
      <CarouselNav
        disabled={isFirstSlide}
        onClick={onPrev}
      >
        <IconArrowLeft/>
      </CarouselNav>

      <div>
        <a href={data[currentSlideIndex].img} target="_blank">
          <Slide src={data[currentSlideIndex].img}/>
        </a>
        <SlideDescription>{data[currentSlideIndex].desc}</SlideDescription>
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
