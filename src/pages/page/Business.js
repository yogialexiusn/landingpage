import React, { useState, useEffect } from 'react'
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import {Logo} from "../../components/logo/Logo"
import { Col, Container, Row } from "reactstrap"
import {Header, HeaderContent, HeaderMain, HeaderWrap} from "../../layout/header/Header"
import {Link} from "../../components/button/Button"
import { HeaderCaption, HeaderTitle } from '../../components/headerCaption/HeaderCaption'
import {BannerFourData} from '../../section/banner/BannerData';


const Business = (props) =>{
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
        window.scrollTo(0,0);
        viewChange();
        window.addEventListener("resize", viewChange);
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
    
    
    return(
        <Header className={props.className && props.className} id={props.id && props.id} >
            <HeaderMain className={` ${offset > 0 ? "has-fixed" : ""}`}>
                <Container className='header-container'>
                    <HeaderWrap>
                        <div className="header-logo">
                            <Logo to="/IndexFour"
                            dark ={LogoDrak2x}
                            light ={LogoLight2x}
                            />
                        </div>
                        <div className="header-toggle" onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? "active" : ""}`}> 
                                <em className="menu-on icon ni ni-menu"></em>
                                <em className="menu-off icon ni ni-cross"></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}> 
                            {!mobileView ? <Menu className="ms-lg-auto" data={BannerFourData} /> : <MobileMenu data={BannerFourData}/>}
                            <ul className="menu-btns">
                                <li>
                                    <Link to="/landing/pages/auths/auth-login" target="_blank" rel="noreferrer" className="btn-primary btn-lg">Login</Link>
                                </li>
                            </ul>
                        </nav>
                        {toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>
            </HeaderMain>
            <HeaderContent className="py-6 is-dark mt-lg-n1 mt-n3">

            
                                
                <Container>
                    <Row className='row justify-content-center text-center g-gs'>
                        <Col lg="6" md="7">
                            
                            <HeaderCaption>
                                <HeaderTitle>Digital Platform Leader for Intelligent Enterprise</HeaderTitle>
                                We build greater futures through innovation and collective knowledge.
                        BUSINESS
                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.

                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                                v1We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                                We build greater futures through innovation and collective knowledge.
                        
                        We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.

                        We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.
                        v1We build greater futures through innovation and collective knowledge.
                        We build greater futures through innovation and collective knowledge.
                        v1
                  
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
        </Header>
    )
}

export default Business
