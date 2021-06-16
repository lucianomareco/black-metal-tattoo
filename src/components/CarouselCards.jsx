import React, { useState } from 'react';
import Card from "./Card";
import tattooersList from '../../tattooersList.js';
import '../assets/styles/components/CarouselCards.scss';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';



const CarouselCards = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === tattooersList.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? tattooersList.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = tattooersList.map((tattooer) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={tattooer.name}
      >
          <Card phoneNumber={tattooer.phoneNumber} imageSource={tattooer.image} name={tattooer.name} instagram={tattooer.instagram}/>
        </CarouselItem>
    );
  });

  return (
    <div className="d-lg-none">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default CarouselCards;