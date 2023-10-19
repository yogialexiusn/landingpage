import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, Col, Container, Row } from 'reactstrap';
import { Portrait } from '../../components/images/Images';
import { Review, ReviewPortrait } from '../../components/review/Review';
import { Section, SectionHead } from '../../layout/section/Section';
import A1 from '../../images/partner/1.jpg';
import A2 from '../../images/partner/2.jpg';
import A3 from '../../images/partner/3.jpg';
import A4 from '../../images/partner/4.jpg';
import A5 from '../../images/partner/5.jpg';
import A6 from '../../images/partner/6.jpg';
import A7 from '../../images/partner/7.jpg';
import A8 from '../../images/partner/8.jpg';
import A9 from '../../images/partner/9.jpg';
import A10 from '../../images/partner/10.jpg';
import A11 from '../../images/partner/11.jpg';
import A12 from '../../images/partner/12.jpg';
import A13 from '../../images/partner/13.jpg';
import A14 from '../../images/partner/14.jpg';
import A15 from '../../images/partner/15.jpg';
import A16 from '../../images/partner/16.jpg';
import A17 from '../../images/partner/17.jpg';
import A18 from '../../images/partner/18.jpg';
import A19 from '../../images/partner/19.jpg';
import A20 from '../../images/partner/20.jpg';
import A21 from '../../images/partner/21.jpg';
import A22 from '../../images/partner/22.jpg';
import A23 from '../../images/partner/23.jpg';
import A24 from '../../images/partner/24.jpg';
import A25 from '../../images/partner/25.jpg';
import A26 from '../../images/partner/26.jpg';
import A27 from '../../images/partner/27.jpg';
import A28 from '../../images/partner/28.jpg';
import A29 from '../../images/partner/29.jpg';
import A30 from '../../images/partner/30.jpg';
import A31 from '../../images/partner/31.jpg';
import A32 from '../../images/partner/32.jpg';
import A33 from '../../images/partner/33.jpg';
import A34 from '../../images/partner/34.jpg';
import A35 from '../../images/partner/35.jpg';
import A36 from '../../images/partner/36.jpg';
import A37 from '../../images/partner/37.jpg';
import A38 from '../../images/partner/38.jpg';
import A39 from '../../images/partner/39.jpg';
import A40 from '../../images/partner/40.jpg';
import A41 from '../../images/partner/41.jpg';
import A42 from '../../images/partner/42.jpg';
import A43 from '../../images/partner/43.jpg';
import A44 from '../../images/partner/44.jpg';
import Marquee from 'react-fast-marquee';

const Partner = (props) => {
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
            const triggerOffset = 8900;
            setIsVisible(yOffset > triggerOffset);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col xl='12' md='8' xs='10'>
                        <SectionHead>
                            <motion.h1
                                style={{ fontFamily: 'fantasy' }}
                                className='base container center mb-5'
                                variants={containerVariants}
                                initial='hidden'
                                // animate="visible"
                                animate={isVisible ? 'visible' : 'hidden'}>
                                Partner
                            </motion.h1>
                            <h3 className='mb-5'>We provide the best service through collaboration with various partners.</h3>
                        </SectionHead>
                    </Col>
                </Row>
                <Marquee speed={60} gradient={false} pauseOnHover>
                    <Row>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A1} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A2} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A3} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A4} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A5} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A6} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A7} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A8} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A9} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A10} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A11} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A12} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A13} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A14} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                    </Row>
                </Marquee>
                <br></br>

                <Marquee speed={60} gradient={false} pauseOnHover>
                    <Row>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A15} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A16} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A17} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A18} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A19} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A20} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A21} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A22} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A23} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A24} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A25} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A26} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A41} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A42} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                    </Row>
                </Marquee>

                <br></br>
                <Marquee speed={60} gradient={false} pauseOnHover>
                    <Row>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A29} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A30} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A31} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A32} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A33} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A34} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A35} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A36} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A37} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A38} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A39} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A40} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A41} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A42} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A43} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                        <ReviewPortrait className='review-portrait-s1'>
                            <Portrait className='portrait-s1'>
                                <img src={A44} alt='img' />
                            </Portrait>
                        </ReviewPortrait>
                    </Row>
                </Marquee>
            </Container>
            <br></br>
            <br></br>
            <br></br>
        </Section>
    );
};

export default Partner;
