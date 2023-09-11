import React from 'react'
import { Col, Container, Row } from "reactstrap"
import { ImageBlock } from '../../components/images/Images'
import { Section } from '../../layout/section/Section'
import ThumbImg1 from '../../images/gfx/a.png'
import ThumbImg2 from '../../images/gfx/b.png'
import { Paragraph, TextBlock, TitleH3 } from '../../components/textBlock/TextBlock'
import { Link } from '../../components/button/Button'
import { OutlinedChecked } from '../../components/styledList/StyledList'
import {FeatureOneList, FeatureThereeList} from './FeatureData'


const FeatureOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col lg="5">
                        <ImageBlock className="img-block-s1 left">
                            <img src={ThumbImg1} alt="Dashlite" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock className="pe-xl-5">
                            <TitleH3>LOTTE DATA COMMUNICATION</TitleH3>
                            <Paragraph>LOTTE is expanding its social welfare infrastructure to make the world a better place, and implementing various aid and support programs to help the socially vulnerable.</Paragraph>
                            <OutlinedChecked className="list-lg list-success list-checked-circle outlined" data={FeatureOneList} />
                            <ul className="btns-inline">
                                <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-lg btn-primary">Get The App</Link></li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

const FeatureOneAlt = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='flex-row-reverse justify-content-between align-items-center'>
                    <Col lg="5">
                        <ImageBlock className="img-block-s1 right">
                            <img src={ThumbImg2} alt="Dashlite" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock>
                            <TitleH3>LOTTE DATA COMMUNICATION INDONESIA</TitleH3>
                            {/* <Paragraph>LOTTE DATA COMMUNICATION INDONESIA is an IT Service Provider who leads knowledge informatization in every sector (e.g. retail, hospitality, manufacturing, financial service, etc.).</Paragraph> */}
                            <Paragraph>Since the establishment in Indonesia in 2010, LOTTE DATA COMMUNICATION INDONESIA is making a new leap forward.</Paragraph>
                            <OutlinedChecked className="list-lg list-success list-checked-circle outlined" data={FeatureThereeList} />
                            <ul className="btns-inline">
                                <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-lg btn-primary">Get The App</Link></li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export {FeatureOne, FeatureOneAlt}
