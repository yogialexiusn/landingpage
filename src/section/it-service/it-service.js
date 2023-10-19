import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Section, SectionContant, SectionHead } from '../../layout/section/Section';
import { Service, ServiceIcon, ServiceText } from '../../components/service/Service';
import { Grid, Shield, Pie, Tools, Paint, Sharing, Paper, HelpDesk, Idea } from '../../components/svg/Icon';
// import Image123 from '../../images/building/ldci-company-info05.jpg'
import { motion } from 'framer-motion';

const ImageLevel1 = [
    require('../../images/itproduct/itproduct01.jpg'),
    require('../../images/itproduct/itproduct02.jpg'),
    require('../../images/itproduct/itproduct03.jpg'),
];

const ImageLevel2 = [
    require('../../images/itproduct/itproduct04.jpg'),
    require('../../images/itproduct/itproduct05.jpg'),
    require('../../images/itproduct/itproduct06.jpg'),
];

const ImageLevel3 = [
    require('../../images/itproduct/itproduct07.jpg'),
    require('../../images/itproduct/itproduct08.jpg'),
    require('../../images/itproduct/itproduct09.jpg'),
];

const ItService = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredLevel1, setHoveredLevel1] = useState(null);
    const [hoveredLevel2, setHoveredLevel2] = useState(null);
    const [hoveredLevel3, setHoveredLevel3] = useState(null);

    const contentLevel1 = [
        {
            service: 'Security',
            description: 'CCTV, Access Control, Dedicated Lines, etc',
            icon: 'ni ni-security',
        },
        {
            service: 'System',
            description: 'Groupware, HR, Accounting, e-Invoice.',
            icon: 'ni ni-server',
        },
        {
            service: 'Finance',
            description: 'Insurance, Money.',
            icon: 'ni ni-sign-mxn',
        },
    ];

    const contentLevel2 = [
        {
            service: 'Manufacturing',
            description: 'MES, FMS, Smart Factory, Inventory Management',
            icon: 'ni ni-building',
        },
        {
            service: ' Retail/Logistics',
            description: 'WMS, TMS, POS, e-Commerce',
            icon: 'ni ni-truck',
        },
        {
            service: ' Others',
            description: 'Call Centers, Financial Solutions, etc.',
            icon: 'ni ni-headphone-fill',
        },
    ];

    const contentLevel3 = [
        {
            service: 'ERP',
            description: 'SAP (B1, R3) Operation & Construction, Linked Development',
            icon: 'ni ni-browser',
        },
        {
            service: 'EIS',
            description: 'Business Performance Analysis',
            icon: 'ni ni-activity',
        },
        {
            service: 'SI',
            description: 'System Integration Linkage',
            icon: 'ni ni-tranx-fill',
        },
    ];

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
            const triggerOffset = 4300;
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
                    <Col sm='10' lg='12'>
                        <SectionHead>
                            <motion.h1
                                style={{ fontFamily: 'fantasy' }}
                                className='base container center mb-5'
                                variants={containerVariants}
                                initial='hidden'
                                // animate="visible"
                                animate={isVisible ? 'visible' : 'hidden'}>
                                IT SERVICE
                            </motion.h1>
                            <h3 style={{ fontFamily: 'tahoma', color: 'black' }}>
                                Provide stable service by securing proven equipment, solutions, and partners Rapid response through various experts
                                and partner networks
                            </h3>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <h4 className='title justify-content-center text-center bg-gray' style={{ fontFamily: 'Arial Black' }}>
                        Level 1 - Common Service
                    </h4>
                    <br></br>
                    <Row className='justify-content-center text-center g-gs'>
                        {contentLevel1.map((item, index) => (
                            <Col sm='8' md='6' lg='4'>
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            type: 'spring',
                                            delay: 0.5,
                                        },
                                    }}
                                    onHoverStart={() => setHoveredLevel1(index)}
                                    onHoverEnd={() => setHoveredLevel1(null)}>
                                    {hoveredLevel1 === index ? (
                                        <img src={ImageLevel1[index]} alt={`Image ${index + 1}`} />
                                    ) : (
                                        <Service>
                                            <ServiceIcon className='styled-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <em className={`icon ${item.icon}`} style={{ fontSize: 25 }}></em>
                                            </ServiceIcon>
                                            <ServiceText>
                                                <h4 className='title'>{item.service}</h4>
                                                <p>{item.description}</p>
                                            </ServiceText>
                                        </Service>
                                    )}
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4 className='title justify-content-center text-center bg-gray' style={{ fontFamily: 'Arial Black' }}>
                        Level 2 - Specialized Service
                    </h4>
                    <br></br>
                    <Row className='justify-content-center text-center g-gs'>
                        {contentLevel2.map((item, index) => (
                            <Col sm='8' md='6' lg='4'>
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            type: 'spring',
                                            delay: 0.5,
                                        },
                                    }}
                                    onHoverStart={() => setHoveredLevel2(index)}
                                    onHoverEnd={() => setHoveredLevel2(null)}>
                                    {hoveredLevel2 === index ? (
                                        <img src={ImageLevel2[index]} alt={`Image ${index + 1}`} />
                                    ) : (
                                        <Service>
                                            <ServiceIcon className='styled-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <em className={`icon ${item.icon}`} style={{ fontSize: 25 }}></em>
                                            </ServiceIcon>
                                            <ServiceText>
                                                <h4 className='title'>{item.service}</h4>
                                                <p>{item.description}</p>
                                            </ServiceText>
                                        </Service>
                                    )}
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h4 className='title justify-content-center text-center bg-gray' style={{ fontFamily: 'Arial Black' }}>
                        Level 3 - Integrated Service
                    </h4>
                    <br></br>
                    <Row className='justify-content-center text-center g-gs'>
                        {contentLevel3.map((item, index) => (
                            <Col sm='8' md='6' lg='4'>
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            type: 'spring',
                                            delay: 0.5,
                                        },
                                    }}
                                    onHoverStart={() => setHoveredLevel3(index)}
                                    onHoverEnd={() => setHoveredLevel3(null)}>
                                    {hoveredLevel3 === index ? (
                                        <img src={ImageLevel3[index]} alt={`Image ${index + 1}`} />
                                    ) : (
                                        <Service>
                                            <ServiceIcon className='styled-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <em className={`icon ${item.icon}`} style={{ fontSize: 25 }}></em>
                                            </ServiceIcon>
                                            <ServiceText>
                                                <h4 className='title'>{item.service}</h4>
                                                <p>{item.description}</p>
                                            </ServiceText>
                                        </Service>
                                    )}
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    );
};

export default ItService;
