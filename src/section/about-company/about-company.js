import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Link } from '../../components/button/Button';
import { TextBlock, TitleH2 } from '../../components/textBlock/TextBlock';
import { Section, SectionHead } from '../../layout/section/Section';
import LdciKorea from '../../images/building/ldci-korea.jpg';
import { ImageBlock } from '../../components/images/Images';
import NioIcon from '../../components/icon/Icons';
import teamImg1 from '../../images/team/a.jpg';
import teamImg2 from '../../images/team/b.jpg';
import teamImg3 from '../../images/team/c.jpg';
import teamImg4 from '../../images/team/d.jpg';
import { RatingText, Review, ReviewBrand, ReviewContent, ReviewRating, ReviewText } from '../../components/review/Review';

const AboutCompany = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='g-gs justify-content-between align-items-center'>
                    <Col lg='6'>
                        <ImageBlock>
                            <img src={LdciKorea} alt='thumb-img' />
                        </ImageBlock>
                    </Col>
                    <Col lg='5'>
                        <TextBlock>
                            <h3 className='mb-30' style={{ textAlign: 'center' }}>
                                LOTTE DATA COMMUNICATION
                            </h3>
                            <br></br>
                            <ul className='list list-lg list-purple list-checked-circle gy-1'>
                                <li className='ps-5'>
                                    <strong>CEO</strong> : Rho, Jun-Hyung
                                </li>
                                <li className='ps-5'>
                                    <strong>Established</strong> : December 28, 1996
                                </li>
                                <li className='ps-5'>
                                    <strong>HQ</strong> : Gasan-dong, Gumcheon-gu, Seoul
                                </li>
                                <li className='ps-5'>
                                    <strong>Overseas Corp.</strong> : Vietnam, Indonesia, India
                                </li>
                                <li className='ps-5'>
                                    <strong>IPO</strong> : Listed Company (KRX 286940)
                                </li>
                                <li className='ps-5'>
                                    <strong>Annual Sales</strong> : 1 trillion 47.7 billion (as of 2022.12)
                                </li>
                                <li className='ps-5'>
                                    <strong>Employees</strong> : 2,940 (2022.12)
                                </li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Container>
                <Row className='g-gs flex-row-reverse justify-content-between align-items-center'>
                    <Col lg='6'>
                        <ImageBlock>
                            <img src={LdciKorea} alt='thumb-img' />
                        </ImageBlock>
                    </Col>
                    <Col lg='5'>
                        <TextBlock>
                            <h3 className='mb-30' style={{ textAlign: 'center' }}>
                                LOTTE DATA COMMUNICATION INDONESIA
                            </h3>
                            <br></br>
                            <ul className='list list-lg list-purple list-checked-circle gy-1'>
                                <li className='ps-5'>
                                    <strong>CEO</strong> : Cho, Chung-Hwan
                                </li>
                                <li className='ps-5'>
                                    <strong>Established</strong> : October 18, 2010
                                </li>
                                <li className='ps-5'>
                                    <strong>Capital</strong> : US$ 500,000 (PMA)
                                </li>
                                <li className='ps-5'>
                                    <strong>HO</strong> : Pasar Rebo Jakarta Timur
                                </li>
                                <li className='ps-5'>
                                    <strong>Data Center</strong> : Lotte Avenue 8th Floor Jakarta Selatan
                                </li>
                                <li className='ps-5'>
                                    <strong>Biz Area</strong> : SI, SM, HW, SW, Solution, Infrastructure
                                </li>
                                <li className='ps-5'>
                                    <strong>Employees</strong> : 72 (2022.12, Full-time Employees)
                                </li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default AboutCompany;
