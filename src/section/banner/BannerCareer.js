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
import { BannerFourAdd } from './BannerData';
import career from '../../images/career.jpg';

const BannerCareer = (props) => {
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
            <HeaderContent className='py-6 is-dark mt-lg-n1 mt-n3'>
                <Container>
                    <Row className='row justify-content-center text-center g-gs'>
                        <Col lg='10' md='7'>
                            <HeaderCaption>
                                <HeaderTitle>CAREER</HeaderTitle>
                                <p>
                                    Join our dynamic team and unlock endless possibilities for your career! We're looking for talented individuals who
                                    are passionate about innovation and growth. Explore exciting opportunities with us and take the next step towards
                                    a rewarding career.{' '}
                                </p>
                                <PreviewCard>
                                    <img src={career} />
                                </PreviewCard>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
        </Header>
    );
};

export default BannerCareer;