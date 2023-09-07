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
import {BannerFourData} from './BannerData'
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";
import CaptionsCarousel from "../../components/partials/carousel/Captions";


const BannerFour = (props) =>{
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
            <HeaderMain className={`header-main header-main-s1 is-sticky is-transparent on-dark ${offset > 0 ? "has-fixed" : ""}`}>
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
                                <p>We build greater futures through innovation and collective knowledge.</p>
                                {/* <ul className="header-action btns-inline py-3">
                                    <li>
                                        <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg"><span>Get Started</span></Link>
                                    </li>
                                    <li>
                                        <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-danger btn-lg"><span>View Demo</span></Link>
                                    </li>
                                </ul>
                                <ul className="header-icon list-inline pt-1">
                                    <li><img className="h-20px" src={JS} alt="icon" /></li>
                                    <li><img className="h-20px" src={SASS} alt="icon" /></li>
                                    <li><img className="h-20px" src={GULP} alt="icon" /></li>
                                    <li><img className="h-20px" src={BS} alt="icon" /></li>
                                    <li><img className="h-20px" src={HTML} alt="icon" /></li>
                                    <li><img className="h-20px" src={CSS} alt="icon" /></li>
                                </ul> */}

<PreviewCard>
                        <CaptionsCarousel />
                    </PreviewCard>

                    <CodeBlock language="jsx">
                        {`const items = [
                            {
                                src: SlideA,
                                altText: 'Slide 1',
                                captionHead: '',
                                captionText: ''
                            },
                            {
                                src: SlideB,
                                altText: 'Slide 2',
                                captionHead: '',
                                captionText: ''
                            },
                            {
                                src: SlideC,
                                altText: 'Slide 3',
                                captionHead: '',
                                captionText: ''
                            }
                            ];

                            const BasicCarousel = (props) => {
                            const [activeIndex, setActiveIndex] = useState(0);
                            const [animating, setAnimating] = useState(false);

                            const next = () => {
                                if (animating) return;
                                const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
                                setActiveIndex(nextIndex);
                            }

                            const previous = () => {
                                if (animating) return;
                                const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                                setActiveIndex(nextIndex);
                            }

                            const goToIndex = (newIndex) => {
                                if (animating) return;
                                setActiveIndex(newIndex);
                            }

                            const slides = items.map((item) => {
                                return (
                                <CarouselItem
                                    className="text-white"
                                    onExiting={() => setAnimating(true)}
                                    onExited={() => setAnimating(false)}
                                    key={item.src}
                                >
                                    <img src={item.src} alt={item.altText} />
                                    <CarouselCaption captionText={item.captionText} captionHeader={item.captionHead} />
                                </CarouselItem>
                                );
                            });

                            return (
                                <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                                >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                                </Carousel>
                            );
                            }`}
                    </CodeBlock>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
        </Header>
    )
}

export default BannerFour
