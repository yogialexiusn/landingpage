import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { TextBlock, TitleH2 } from '../../components/textBlock/TextBlock'
import { Section, SectionHead } from '../../layout/section/Section'
import LdciKorea from "../../images/building/ldci-korea.jpg";
import { ImageBlock } from "../../components/images/Images"

const AboutCompany = (props) => {
    return (
        <Section className = {props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="g-gs justify-content-between align-items-center">
                    <Col lg="6"> 
                        <ImageBlock>
                            <img src={LdciKorea} alt="thumb-img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="5">
                        <TextBlock>
                            <TitleH2 className="mb-32" style="text-align:center !important"><b>LOTTE DATA COMMUNICATION</b></TitleH2>
                            <ul className="list list-lg list-purple list-checked-circle gy-4">
                                <li className="ps-5"><strong>CEO</strong> : Rho,  Jun-Hyung</li>
                                <li className="ps-5"><strong>Established</strong> :  December 28, 1996</li>
                                <li className="ps-5"><strong>HQ</strong> :  Gasan-dong, Gumcheon-gu, Seoul</li>
                                <li className="ps-5"><strong>Overseas Corp.</strong> :  Vietnam, Indonesia, India</li>
                                <li className="ps-5"><strong>IPO</strong> :  Listed Company (KRX 286940)</li>
                                <li className="ps-5"><strong>Annual Sales</strong> :  1 trillion 47.7 billion (as of 2022.12)</li>
                                <li className="ps-5"><strong>Employees</strong> :  2,940 (2022.12)</li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
            
            <br></br>

            <Container>
            <Row className="g-gs flex-row-reverse justify-content-between align-items-center">
                    <Col lg="6"> 
                        <ImageBlock>
                            <img src={LdciKorea} alt="thumb-img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="5">
                        <TextBlock>
                            <TitleH2 className="mb-32" style="text-align:center !important"><b>LOTTE DATA COMMUNICATION</b></TitleH2>
                            <ul className="list list-lg list-purple list-checked-circle gy-4">
                                <li className="ps-5"><strong>CEO</strong> : Rho,  Jun-Hyung</li>
                                <li className="ps-5"><strong>Established</strong> :  December 28, 1996</li>
                                <li className="ps-5"><strong>HQ</strong> :  Gasan-dong, Gumcheon-gu, Seoul</li>
                                <li className="ps-5"><strong>Overseas Corp.</strong> :  Vietnam, Indonesia, India</li>
                                <li className="ps-5"><strong>IPO</strong> :  Listed Company (KRX 286940)</li>
                                <li className="ps-5"><strong>Annual Sales</strong> :  1 trillion 47.7 billion (as of 2022.12)</li>
                                <li className="ps-5"><strong>Employees</strong> :  2,940 (2022.12)</li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>

        
    )
}

export default AboutCompany
