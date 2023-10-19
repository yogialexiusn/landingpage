import React, { useState, useEffect } from 'react';
import LogoDrak2x from '../../images/logo-dark2x.png';
import LogoLight2x from '../../images/logo2x.png';
import Menu from '../../layout/menu/Menu';
import MobileMenu from '../../layout/menu/MobileMenu';
import { Logo } from '../../components/logo/Logo';
import { Col, Container, Row } from 'reactstrap';
import { Header, HeaderContent, HeaderMain, HeaderWrap } from '../../layout/header/Header';
import { Link } from '../../components/button/Button';
import { HeaderCaption, HeaderTitle } from '../../components/headerCaption/HeaderCaption';
import { BannerFourData } from './BannerData';
import { PreviewCard, CodeBlock } from '../../components/preview/Preview';
import news_img from '../../images/news/news01.jpeg';
import { BannerFourAdd } from './BannerData';
import { motion } from 'framer-motion';

const BannerNews = (props) => {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw',
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                delay: 0.5,
            },
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.scrollY;
           
            // Adjust this value based on when you want the animation to trigger
            const triggerOffset = -100;
            setIsVisible(yOffset > triggerOffset);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
        window.scrollTo(0, 0);
        viewChange();
        window.addEventListener('resize', viewChange);
        return () => {
            window.removeEventListener('resize', viewChange);
        };
    }, []);

    // function to change the design view under 1200 px
    const viewChange = () => {
        if (window.innerWidth < 992) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    };

    return (
        <Header className={props.className && props.className} id={props.id && props.id}>
            <HeaderContent className='py-6 is-dark mt-lg-n1 mt-n3'>
                <Container>
                    <Row className='row justify-content-center text-center g-gs'>
                        <Col lg='10' md='7'>
                            <HeaderCaption>
                                <motion.h1
                                    style={{ fontFamily: 'fantasy' }}
                                    className='base container center mb-5'
                                    variants={containerVariants}
                                    initial='hidden'
                                    // animate="visible"
                                    animate={isVisible ? 'visible' : 'hidden'}>
                                    NEWS
                                </motion.h1>
                                <h3 className='mb-5'>
                                    Information about a recently changed situation or a recent event in Lotte Data Communication Indonesia{' '}
                                </h3>
                                {/* <PreviewCard> */}
                                <img src={news_img} />
                                {/* </PreviewCard> */}
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
        </Header>
    );
};

export default BannerNews;
