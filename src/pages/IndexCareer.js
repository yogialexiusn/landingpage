import React from 'react';
import FooterThree from '../section/footer/FooterThree';
import Career from './page/Career';
import BannerCareer from '../section/banner/BannerCareer';

const IndexCareer = (props) => {
    return (
        <div className='nk-main'>
            <BannerCareer className='header-32 has-header-main-s1 bg-dark' id='#' />
            <Career className='section-service pb-0' id='#' />
            <FooterThree className=' bg-dark is-dark section section-sm' id='#footer' />
        </div>
    );
};

export default IndexCareer;
