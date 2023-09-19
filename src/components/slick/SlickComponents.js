import React from 'react';
import { NioIcon } from '../icon/Icon';

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
        {...props}
        className={`slick-arrow-prev slick-arrow ${currentSlide === 0 ? ' slick-disabled' : ''}`}
        aria-hidden='true'
        aria-disabled={currentSlide === 0 ? true : false}
        type='button'>
        <a href='#prev' className='slick-prev' onClick={(ev) => ev.preventDefault()}>
            <em class='icon ni ni-chevron-left'></em>
        </a>
    </div>
);

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
        {...props}
        className={`slick-arrow-next slick-arrow ${currentSlide === slideCount - 3 ? ' slick-disabled' : ''}`}
        aria-hidden='true'
        aria-disabled={currentSlide === slideCount - 3 ? ' slick-disabled' : ''}
        type='button'>
        <a href='#next' className='slick-next' onClick={(ev) => ev.preventDefault()}>
            <em class='icon ni ni-chevron-right'></em>
        </a>
    </div>
);
