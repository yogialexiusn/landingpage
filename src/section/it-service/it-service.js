import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Section, SectionContant, SectionHead } from '../../layout/section/Section'
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Grid, Shield, Pie, Tools, Paint, Sharing, Paper, HelpDesk, Idea } from '../../components/svg/Icon'

const ItService = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-center">
                <Col sm="8" lg="6">
                    <SectionHead>
                        <h2 className="title">IT Service</h2>
                        <p>Provide stable service by securing proven equipment, solutions, and partners Rapid response through various experts and partner networks</p>
                    </SectionHead>
                </Col>
            </Row>
            <SectionContant>
                <h4 className="title justify-content-center text-center">Level 1 - Common Service</h4>
                <br></br>
                <Row className="justify-content-center text-center g-gs">
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Grid />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">IT Infrastructure</h4>
                                <p>Network, IP PBX, OA, Server, etc.</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Shield />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">Security</h4>
                                <p>CCTV, Access Control, Dedicated Lines, etc.</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Pie />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">System</h4>
                                <p>Groupware, HR, Accounting, e-Invoice</p>
                            </ServiceText>
                        </Service>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4 className="title justify-content-center text-center">Level 2 - Specialized Service</h4>
                <br></br>
                <Row className="justify-content-center text-center g-gs">
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Tools />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">Manufacturing:</h4>
                                <p>MES, FMS, Smart Factory, Inventory Management</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Paint />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">Retail/Logistics</h4>
                                <p>WMS, TMS, POS, e-Commerce</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Sharing />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">Others</h4>
                                <p>Call Centers, Financial Solutions, etc.</p>
                            </ServiceText>
                        </Service>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h4 className="title justify-content-center text-center">Level 3 - Integrated Service</h4>
                <br></br>
                <Row className="justify-content-center text-center g-gs">
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Paper />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">ERP</h4>
                                <p>SAP (B1, R3) Operation & Construction, Linked Development</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <HelpDesk />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">EIS</h4>
                                <p>Business Performance Analysis</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Idea />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">SI</h4>
                                <p>System Integration Linkage</p>
                            </ServiceText>
                        </Service>
                    </Col>
                </Row>
            </SectionContant>
        </Container>
    </Section>
  )
}

export default ItService
