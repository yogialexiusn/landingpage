import React, { useState, useEffect } from 'react';
import HeaderImg from '../../images/header/business.jpg';
import LogoDrak2x from '../../images/logo-dark2x.png';
// import LogoLight2x from '../../images/logo2x.png';
import LogoLight2x from '../../images/logo-putih2x.png';
import Menu from '../../layout/menu/Menu';
import MobileMenu from '../../layout/menu/MobileMenu';
import { Logo } from '../../components/logo/Logo';
import { Col, Container, Row, Button } from 'reactstrap';
import { Header, HeaderWrap, HeaderContent, HeaderMain } from '../../layout/header/Header';
import { Link } from '../../components/button/Button';
import { HeaderCaption, HeaderText, HeaderTitle } from '../../components/headerCaption/HeaderCaption';
import { HeaderImage } from '../../components/images/Images';
import { BannerOneData } from '../../../src/section/banner/BannerData';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Business = (props) => {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const navigate = useNavigate();

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
            console.log(yOffset);
            // Adjust this value based on when you want the animation to trigger
            const triggerOffset = 7900;
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

    const routeChange = () => {
        let path = 'www.google.com';
        navigate(path);
    };

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
            <HeaderMain className={`header-main header-main-s1 is-sticky on-dark is-transparent ${offset > 0 ? 'has-fixed' : ''}`}>
                <Container className='header-container'>
                    <HeaderWrap>
                        <div className='header-logo'>
                            <Logo to='/' dark={LogoDrak2x} light={LogoLight2x} />
                        </div>
                        <div className='header-toggle' onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? 'active' : ''}`}>
                                <em className='menu-on icon ni ni-menu'></em>
                                <em className='menu-off icon ni ni-cross'></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? 'active' : ''} ${mobileView ? 'mobile-menu' : ''}`}>
                            {!mobileView ? <Menu className='ms-lg-auto' data={BannerOneData} /> : <MobileMenu data={BannerOneData} />}
                            <ul className='menu-btns'>
                                <li>
                                    <a href='http://localhost:3001/demo2/auth-login' class='btn btn-primary'>
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {toggle && window.innerWidth < 992 && <div className='header-overlay' onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>
            </HeaderMain>
            <HeaderContent className='py-6 is-dark mt-lg-n1 mt-n3'>
                <div className='container'>
                    <Row className='row justify-content-center text-center'>
                        <Col lg='10' md='1'>
                            <HeaderCaption>
                                <motion.h1
                                    style={{ fontFamily: 'fantasy' }}
                                    className='base container center mb-5'
                                    variants={containerVariants}
                                    initial='hidden'
                                    // animate="visible"
                                    animate={isVisible ? 'visible' : 'hidden'}>
                                    Business
                                </motion.h1>
                                <HeaderText>
                                    <h3 className='mb-5'>
                                        New Business Promotion Item : Retail & Service, Smart Building, Smart Office and Mobility
                                    </h3>
                                    <br></br>
                                </HeaderText>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </div>

                <HeaderImage>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col xl='30'>
                                <a href='/landing' target='_blank' rel='noreferrer' className='card card-shadow product product-s2'>
                                    <div className='card-inner product-img bg-black'>
                                        <img src={HeaderImg} alt='' />
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </HeaderImage>
            </HeaderContent>
        </Header>
    );
};

export default Business;
