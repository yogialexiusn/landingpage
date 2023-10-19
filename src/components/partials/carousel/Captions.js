import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import SlideA from '../../../images/slides/slide-a.jpg';
import SlideB from '../../../images/slides/slide-b.jpg';
import SlideC from '../../../images/slides/slide-c.jpg';

const items = [
    {
        src: SlideA,
        altText: 'Slide 1',
        captionHead: 'Digital Platform Leader for Intelligent Enterprise, build greater futures through innovation and collective knowledge.',
        captionText: '',
    },
    {
        src: SlideB,
        altText: 'Slide 2',
        captionHead:
            'With the extensive experience and expertise we’ve accumulated in numerous IT sectors, we remain one step ahead of the competition as we create values for the future.',
        captionText: '',
    },
    {
        src: SlideC,
        altText: 'Slide 3',
        captionHead:
            'Our cutting-edge IT competencies allow us to drive digital transformation in all industrial sectors, such as manufacturing, logistics, distribution, infrastructure, and more.',
        captionText: '',
    },
];

const BasicCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem className='text-white' onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.captionText} captionHeader={item.captionHead} />
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </Carousel>
    );
};

export default BasicCarousel;
