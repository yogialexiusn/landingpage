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
import UserAvatar from '../../components/user/UserAvatar';

const Business = (props) => {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);

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
                                    <Button
                                        to='https://1.envato.market/reactdashlite'
                                        target='_blank'
                                        rel='noreferrer'
                                        className='btn-primary btn-lg'>
                                        Login
                                    </Button>
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
                        <Col lg='7' md='1'>
                            <HeaderCaption>
                                <HeaderTitle>Business</HeaderTitle>
                                <HeaderText>
                                    <p>New Business Promotion Item : Retail & Service, Smart Building, Smart Office and Mobility</p>
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
                                <a
                                    href='https://react.dashlite.net/demo6/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='card card-shadow product product-s2'>
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
