import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Section, SectionHead } from '../../layout/section/Section';
import demo1 from '../../images/product/front-rack.jpg';
import demo2 from '../../images/product/thermo.jpg';
import demo3 from '../../images/product/ups.jpg';
import demo4 from '../../images/product/fire.jpg';
import demo5 from '../../images/product/fms.jpg';
import demo6 from '../../images/product/cctv.jpg';

const DataCenter = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col lg='12' md='232'>
                        <SectionHead>
                            <h2 className='title fw-medium justify'>Data Center</h2>
                            <br></br>
                            <br></br>
                            <h4>Overview</h4>
                            <p style={{ textAlign: 'justify' }}>
                                In June 2013, we successfully completed the establishment of a 229.4㎡ facility, which can accommodate up to 24 racks
                                and is divided into various areas, including a 62.6㎡ Server Room, 49.6㎡ UPS Room, 99.5㎡ Office, and 17.5㎡
                                Warehouse. This facility was designed to ensure the stability and reliability of the computer systems for a total of
                                five companies, including the Department Store, Capital, Duty Free, Lotteria, Sinarmas Hana Finance, with the option
                                for additional accommodations. Located on the 8th floor of Jakarta Lotte Shopping Avenue, the operation runs 365 days
                                a year in two shifts per day from 8:00 am to 10:00 pm. Our team comprises 1 Korean general manager and 12 Indonesian
                                staff members.
                            </p>
                            <br></br>
                            <h4>Key Features</h4>
                            <p style={{ textAlign: 'justify' }}>
                                We prioritize stable facility management and efficient operation through continuous monitoring, regular inspections,
                                and swift response, ensuring perfect recovery in case of failure. Our system boasts a redundant configuration,
                                including an emergency generator for the building, uninterruptible power supply (UPS), line and equipment redundancy,
                                and meticulous database backup management. Security and management are maintained at the domestic level, featuring
                                access control, CCTV operation, 24-hour control (FMS), and comprehensive information protection management.
                                Additionally, we have established and maintain safety facilities, such as thermo-hygrostats, water leak detectors, and
                                firefighting equipment (halon gas). To further enhance safety and information protection, our headquarters regularly
                                dispatches expert teams for annual diagnostics and assessments.
                            </p>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className='text-center g-gs justify-center'>
                    <Col lg='4' sm='6' xs='9'>
                        <a href='https://react.dashlite.net/demo1/' target='_blank' rel='noreferrer' className='card card-shadow product product-s2'>
                            <div className='card-inner product-img bg-gray'>
                                <img src={demo1} alt='' />
                            </div>
                            <div className='card-inner product-info'>
                                <h6 className='title'>Front Rack</h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg='4' sm='6' xs='9'>
                        <a href='https://react.dashlite.net/demo2/' target='_blank' rel='noreferrer' className='card card-shadow product product-s2'>
                            <div className='card-inner product-img bg-gray'>
                                <img src={demo2} alt='' />
                            </div>
                            <div className='card-inner product-info'>
                                <h6 className='title'>Thermo-hygrostat</h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg='4' sm='6' xs='9'>
                        <a href='https://react.dashlite.net/demo3/' target='_blank' rel='noreferrer' className='card card-shadow product product-s2'>
                            <div className='card-inner product-img bg-gray'>
                                <img src={demo3} alt='' />
                            </div>
                            <div className='card-inner product-info'>
                                <h6 className='title'>UPS</h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg='4' sm='6' xs='9'>
                        <a href='https://react.dashlite.net/demo4/' target='_blank' rel='noreferrer' className='card card-shadow product product-s2'>
                            <div className='card-inner product-img bg-gray'>
                                <img src={demo4} alt='' />
                            </div>
                            <div className='card-inner product-info'>
                                <h6 className='title'>Fire Fighting Equipment</h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg='4' sm='6' xs='9'>
                        <a href='https://react.dashlite.net/demo5/' target='_blank' rel='noreferrer' className='card card-shadow product product-s2'>
                            <div className='card-inner product-img bg-gray'>
                                <img src={demo5} alt='' />
                            </div>
                            <div className='card-inner product-info'>
                                <h6 className='title'>FMS Real-time Control</h6>
                            </div>
                        </a>
                    </Col>
                    <Col lg='4' sm='6' xs='9'>
                        <a href='https://react.dashlite.net/demo6/' target='_blank' rel='noreferrer' className='card card-shadow product product-s2'>
                            <div className='card-inner product-img bg-gray'>
                                <img src={demo6} alt='' />
                            </div>
                            <div className='card-inner product-info'>
                                <h6 className='title'>CCTV Real-time Surveillance</h6>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
        </Section>
    );
};

export default DataCenter;
