import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Section, SectionContant, SectionHead } from '../../layout/section/Section';
import { ServiceText } from '../../components/service/Service';
import { StyledIcon } from '../../components/icon/Icon';
import { Levels, CodeDisplay, Shield, Play, Headphone, Dashboard, Cloud } from '../../components/svg/Icon';

const Solution = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container className='card-shadow round-xl bg-dark is-dark pb-4 pb-md-10'>
                <br></br>
                <Row className='justify-content-center text-center'>
                    <Col lg='8' md='10'>
                        <SectionHead>
                            <h2 className='title fw-medium'>Distribution and Security Solution</h2>
                            <p>
                                As Integrated distribution solution tailored to each country/regionDomestic and foreign reference-based retail H/W,
                                solution service and as a security SolutionProvides a stable business environment through optimized convergence
                                security services of information security expert in Lotte groups
                            </p>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <Row className='justify-content-center'>
                        <Col xl='8' lg='10'>
                            <Row className='text-center g-gs'>
                                <Col md='3' xs='6'>
                                    <Card className='card-shadow service is-compact'>
                                        <div className='card-inner'>
                                            <StyledIcon className='service-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <Dashboard />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className='title text-dark fs-14px'>LOTTE POS and Peripherals</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md='3' xs='2'>
                                    <Card className='card-shadow service is-compact'>
                                        <div className='card-inner'>
                                            <StyledIcon className='service-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <Play />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h1 className='title text-dark fs-14px'>Retail Management Solution</h1>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md='3' xs='6'>
                                    <Card className='card-shadow service is-compact'>
                                        <div className='card-inner'>
                                            <StyledIcon className='service-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <CodeDisplay />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className='title text-dark fs-14px'>Electronic Shelf Label</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md='3' xs='6'>
                                    <Card className='card-shadow service is-compact'>
                                        <div className='card-inner'>
                                            <StyledIcon className='service-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <Cloud />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className='title text-dark fs-14px'>Whitelist Security Solution</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Row className='text-center g-gs justify-content-center'>
                                <Col md='4' xs='6'>
                                    <Card className='card-shadow service is-compact'>
                                        <div className='card-inner '>
                                            <StyledIcon className='service-icon styled-icon-s4 styled-icon-6x circle text-primary center'>
                                                <Headphone />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className='title text-dark fs-14px'>Visitor Management System</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md='3' xs='6'>
                                    <Card className='card-shadow service is-compact'>
                                        <div className='card-inner'>
                                            <StyledIcon className='service-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <Levels />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className='title text-dark fs-14px'>VDI Service</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md='3' xs='6'>
                                    <Card className='card-shadow service is-compact'>
                                        <div className='card-inner'>
                                            <StyledIcon className='service-icon styled-icon-s4 styled-icon-6x circle text-primary'>
                                                <Shield />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className='title text-dark fs-14px'>Anti-Ransomware</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    );
};

export default Solution;
