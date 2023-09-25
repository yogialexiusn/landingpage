import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Link } from '../../components/button/Button';
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock';
import { Section, SectionHead } from '../../layout/section/Section';
import { Block } from '../../components/block/Block';
import { SlickArrowLeft, SlickArrowRight } from '../../components/slick/SlickComponents';
import { Review, ReviewContent, ReviewRating, ReviewText } from '../../components/review/Review';
import { PreviewCard } from '../../components/preview/Preview';
import Rating from '../../components/rating/Rating';
import { ReviewTwoIcon } from '../../section/review/ReviewData';
import AuthorImg2 from '../../images/client/sq-c.jpg';
import Slider from 'react-slick';
import B1 from '../../images/history-slide/B1.jpg';
import B2 from '../../images/history-slide/B2.jpg';
import B3 from '../../images/history-slide/B3.jpg';
import B4 from '../../images/history-slide/B4.jpg';
import B5 from '../../images/history-slide/B5.jpg';
import B6 from '../../images/history-slide/B6.jpg';
import B7 from '../../images/history-slide/B7.jpg';
import B8 from '../../images/history-slide/B8.jpg';
import B9 from '../../images/history-slide/B9.jpg';
import B10 from '../../images/history-slide/B10.jpg';
import B11 from '../../images/history-slide/B11.jpg';
import B12 from '../../images/history-slide/B12.jpg';
import B13 from '../../images/history-slide/B13.jpg';

const propTypes = {};

const defaultProps = {};

const settings = {
    className: 'slider-init',
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
        { breakpoint: 1539, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    arrows: true,
    dots: true,
    slide: 'li',
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
};

const moments = [
    {
        title: '',
        date: '2010',
        image: B1,
        description: 'Established a corporation in Indonesia (PT. LOTTE DATA COMMUNICATION IND) Establishment of Lotte Mart retail store IT system',
    },
    {
        title: 'Moment 2',
        date: '2011',
        image: B2,
        description: 'Establishment of Lotte Logistic IT system Lotte Mart Wholesale store system rebuild',
    },
    {
        title: 'Moment 3',
        date: '2012',
        image: B3,
        description:
            'Establishment of ITB security education center (KOICA) Lotte Duty Free Airport Store IT System Implementation Lotte Packaging SAP System Implementation POSCO factory NW construction, IT equipment delivery',
    },
    {
        title: 'Moment 4',
        date: '2013',
        image: B4,
        description:
            'Opened integrated data center (8th floor of Avenue) - Dept. Store, Duty Free, Members, Ria, Capital Lotte Department Store Avenue IT system construction Lotte Duty Free downtown store IT system construction Lotte Members IT system construction Lotteria System Migration',
    },
    {
        title: 'Moment 5',
        date: '2014',
        image: B5,
        description:
            'Lotte Logistic warehouse system establishment (Cibitung) Lotte Super IT system establishment IT administrative capacity enhancement (KOICA) Participated in building crime management system for the Indonesian National Police Agency',
    },
    {
        title: 'Moment 6',
        date: '2015',
        image: B6,
        description:
            'Lotte Mart  IT system installation for 3 new stores Lotte Logistics Center Migration (Marunda) Participated in PKI accredited certification and infringement response center construction project (KOICA)',
    },
    {
        title: 'Moment 7',
        date: '2016',
        image: B7,
        description:
            'Started developing ILM E-Commerce platform Lotte Capital IT system construction Lotte Mart  IT system installation for 5 new stores',
    },
    {
        title: 'Moment 8',
        date: '2017',
        image: B8,
        description:
            'KT&G NW equipment delivery & construction (SBY) ILM (Indo Lotte Makmur: Salim Group) E-Commerce platform establishment project RS Ananda HMS development and IT infrastructure equipment delivery Installation of Lotte Chemical Security System',
    },
    {
        title: 'Moment 9',
        date: '2018',
        image: B9,
        description:
            'Installation of  IT system for Lotte Mart 2 new stores Sinarmas Hana Finance rack and device maintenance PT. ZINUS NW delivery equipment and installation',
    },
    {
        title: 'Moment 10',
        date: '2019',
        image: B10,
        description:
            'Hwaseung Indonesia network diagnosis consulting PT. Testera equipment delivery and DB migration work PT. OKP2P delivery and installation of NW equipment Lotte Chemical (JKT office) IT system construction Lotte Mart  IT system installation for 4 new stores',
    },
    {
        title: 'Moment 11',
        date: '2020',
        image: B11,
        description:
            'NEXT TI IT equipment delivery & installation Sinarmas Hana Finance KMK Group IT equipment delivery and construction Lotte Mart ISP project Lotte Mart SD-WAN Project (50 stores) Lotte Mart  IT system installation for 1 new store',
    },
    {
        title: 'Moment 12',
        date: '2021',
        image: B12,
        description:
            'Equipment delivery, construction for MES server in Hyundai Motor Indonesia Equipment delivery, construction for MES server in Hyundai Glovis Indonesia Equipment delivery, construction for MES in Hyundai Transys Indonesia Established Lotte Chemical Engineering Plastic IT system Established Lotte Capital mobile installment payment system',
    },
    {
        title: 'Moment 13',
        date: '2022',
        image: B13,
        description:
            'System delivery and construction KEB HANA Bank LOS Server system delivery and construction KEB HANA Bank Server, storage, NW device maintenance LG Electronics IDN (3 factories) wireless NW system delivery and construction Cosmax Indonesia factory network system delivery replacement Supply and construction of ESL (Electronic Shelf Label) to Sociolla 15 stores Hyundai Motor&Glovis MES Server, storage system maintenance Establishment of temporary building network system for Lotte Chemical Line Project Lotte Chemical Line Smart Warehouse Project in progress (~Dec. 2024) Lotte Mart next-generation system construction in progress (~Sep. 23)',
    },
];

const History = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container className='justify-content-center text-center'>
                <SectionHead>
                    <h2 className='title'>HISTORY</h2>
                    <p>
                        Lotte Data Communication Indonesia's story is a captivating journey through time, filled with milestones, challenges, and
                        remarkable achievements.
                    </p>
                </SectionHead>
                <Block>
                    <PreviewCard bodyClass='card-inner-x2'>
                        <Slider {...settings}>
                            {moments.map((item) => (
                                <Col key={item.id} className='px-1'>
                                    <Card>
                                        <PreviewCard>
                                            <img height='10%' src={item.image} className='card-img-top' alt='' />
                                        </PreviewCard>
                                        <div className='card-inner'>
                                            <h5 className='card-title'>
                                                <b>{item.date}</b>
                                            </h5>
                                            <p className='card-text'>{item.description}</p>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Slider>
                    </PreviewCard>
                </Block>
            </Container>
        </Section>
    );
};

export default History;
