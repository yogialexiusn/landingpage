import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { ImageBlock } from '../../components/images/Images';
import { Section } from '../../layout/section/Section';
import ThumbImg1 from '../../images/building/ldci-korea.jpg';
import ThumbImg01 from '../../images/building/ldci.jpg';
import ThumbImg3 from '../../images/building/company_info01.jpg';
import ThumbImg4 from '../../images/building/company_info02.png';
import ThumbImg5 from '../../images/building/company_info03.jpg';
import ThumbImg6 from '../../images/building/company_info04.jpg';
import ThumbImg7 from '../../images/building/company_info05.jpg';
import ThumbImgs1 from '../../images/building/ldci-company-info01.jpg';
import ThumbImgs2 from '../../images/building/ldci-company-info02.jpg';
import ThumbImgs3 from '../../images/building/ldci-company-info03.jpg';
import ThumbImgs4 from '../../images/building/ldci-company-info04.jpg';
import ThumbImgs5 from '../../images/building/ldci-company-info05.jpg';
import ThumbImg2 from '../../images/gfx/b.png';
import { Paragraph, TextBlock, TitleH1 } from '../../components/textBlock/TextBlock';
import { Link } from '../../components/button/Button';
import { OutlinedChecked } from '../../components/styledList/StyledList';
import { FeatureOneList, FeatureThereeList } from './FeatureData';
import { PreviewCard, CodeBlock } from '../../components/preview/Preview';
import { motion } from 'framer-motion';
// import Timeless from 'react-timeless';

const FeatureOne = (props) => {
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
            const triggerOffset = 400;
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
                <motion.h1
                    style={{ fontFamily: 'fantasy' }}
                    className='base container center mb-5'
                    variants={containerVariants}
                    initial='hidden'
                    // animate="visible"
                    animate={isVisible ? 'visible' : 'hidden'}>
                    LOTTE DATA COMMUNICATION
                </motion.h1>
                <div className='dropdown'>
                    <div className='nk-block-between row align-items-center bg-gray mb-5'>
                        <div className='col-14 col-md-4 my-3'>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImg1}
                                alt='Dashlite'
                            />
                        </div>
                        <div className='col-12 col-md-8'>
                            <h3 className='mb-5'>
                                Expanding its social welfare infrastructure to make the world a better place, and implementing various aid and support
                                programs to help the socially vulnerable.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='dropdown'>
                    <div className='nk-block-between row align-items-center bg-secondary mb-5'>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImg3}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImg7}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImg4}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImg5}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImg6}
                                alt='Dashlite'
                            />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

const FeatureOneAlt = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerVariants2 = {
        hidden: {
            opacity: 0,
            x: '-100vw', // Move in the opposite direction
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring', // Use spring animation
                stiffness: 150, // Set the stiffness of the spring
                damping: 15, // Set the damping of the spring
                delay: 0.5, // Delay the animation by 0.5 seconds
            },
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.scrollY;
           
            // Adjust this value based on when you want the animation to trigger
            const triggerOffset = 1500;
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
                <motion.h1
                    style={{ fontFamily: 'fantasy' }}
                    className='base container center mb-5'
                    variants={containerVariants2}
                    initial='hidden'
                    // animate="visible"
                    animate={isVisible ? 'visible' : 'hidden'}>
                    LOTTE DATA COMMUNICATION INDONESIA
                </motion.h1>
                <div className='dropdown'>
                    <div className='nk-block-between row align-items-center bg-danger mb-5'>
                        <div className='col-14 col-md-4 my-3'>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImg01}
                                alt='Dashlite'
                            />
                        </div>
                        <div className='col-12 col-md-8'>
                            <h3 className='mb-5' style={{ color: 'white' }}>
                                Since the establishment in Indonesia in 2010, LOTTE DATA COMMUNICATION INDONESIA is making a new leap forward.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='dropdown'>
                    <div className='nk-block-between row align-items-center bg-warning mb-5'>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImgs1}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImgs2}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImgs3}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImgs4}
                                alt='Dashlite'
                            />
                        </motion.div>
                        <motion.div className='col-14 col-md-4 my-3' whileHover={{ scale: 1.1 }}>
                            <img
                                className='img-responsive' // Add this class to make the image responsive
                                style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '50%' }}
                                src={ThumbImgs5}
                                alt='Dashlite'
                            />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export { FeatureOne, FeatureOneAlt };
