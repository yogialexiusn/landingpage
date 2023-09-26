import React from 'react';
import FooterThree from '../section/footer/FooterThree';
import BannerNews from '../section/banner/BannerNews';
import NewsDetail from './page/News/NewsDetail';

const IndexNewsDetail = (props) => {
    return (
        <div className='nk-main'>
            <BannerNews className='header-32 has-header-main-s1 bg-dark' id='#' />
            <NewsDetail className='section-service pb-0' id='#' />
            <FooterThree className=' bg-dark is-dark section section-sm' id='#footer' />
        </div>
    );
};

export default IndexNewsDetail;
