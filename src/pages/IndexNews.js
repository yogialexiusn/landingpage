import React from 'react';
import FooterThree from '../section/footer/FooterThree';
import News from './page/News';
import BannerNews from '../section/banner/BannerNews';

const IndexNews = (props) => {
    return (
        <div className='nk-main'>
            <BannerNews className='header-32 has-header-main-s1 bg-dark' id='#' />
            <News className='section-service pb-0' id='#' />
            <FooterThree className=' bg-dark is-dark section section-sm' id='#footer' />
        </div>
    );
};

export default IndexNews;
