import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock'
import { Section, SectionHead } from '../../layout/section/Section'
import { Review, ReviewContent, ReviewRating, ReviewText } from '../../components/review/Review'
import Rating from '../../components/rating/Rating'
import {ReviewTwoIcon} from '../../section/review/ReviewData'
import AuthorImg2 from '../../images/client/sq-c.jpg'

const propTypes = {};

const defaultProps = {};

const moments = [
  {
    title: "",
    date: "2010",
    description:
      "Established a corporation in Indonesia (PT. LOTTE DATA COMMUNICATION IND) Establishment of Lotte Mart retail store IT system",
  },
  {
    title: "Moment 2",
    date: "2011",
    description:
      "Establishment of Lotte Logistic IT system Lotte Mart Wholesale store system rebuild",
  },
  {
    title: "Moment 3",
    date: "2012",
    description:
      "Establishment of ITB security education center (KOICA) Lotte Duty Free Airport Store IT System Implementation Lotte Packaging SAP System Implementation POSCO factory NW construction, IT equipment delivery",
  },
  {
    title: "Moment 4",
    date: "2013",
    description:
      "Opened integrated data center (8th floor of Avenue) - Dept. Store, Duty Free, Members, Ria, Capital Lotte Department Store Avenue IT system construction Lotte Duty Free downtown store IT system construction Lotte Members IT system construction Lotteria System Migration",
  },
  {
    title: "Moment 5",
    date: "2014",
    description:
      "Lotte Logistic warehouse system establishment (Cibitung) Lotte Super IT system establishment IT administrative capacity enhancement (KOICA) Participated in building crime management system for the Indonesian National Police Agency",
  },
  {
    title: "Moment 6",
    date: "2015",
    description:
      "Lotte Mart  IT system installation for 3 new stores Lotte Logistics Center Migration (Marunda) Participated in PKI accredited certification and infringement response center construction project (KOICA)",
  },
  {
    title: "Moment 7",
    date: "2016",
    description:
      "Started developing ILM E-Commerce platform Lotte Capital IT system construction Lotte Mart  IT system installation for 5 new stores",
  },
  {
    title: "Moment 8",
    date: "2017",
    description:
      "KT&G NW equipment delivery & construction (SBY) ILM (Indo Lotte Makmur: Salim Group) E-Commerce platform establishment project RS Ananda HMS development and IT infrastructure equipment delivery Installation of Lotte Chemical Security System",
  },
  {
    title: "Moment 9",
    date: "2018",
    description:
      "Installation of  IT system for Lotte Mart 2 new stores Sinarmas Hana Finance rack and device maintenance PT. ZINUS NW delivery equipment and installation",
  },
  {
    title: "Moment 10",
    date: "2019",
    description:
      "Hwaseung Indonesia network diagnosis sonsulting PT. Testera equipment delivery and DB migration work PT. OKP2P delivery and installation of NW equipment Lotte Chemical (JKT office) IT system construction Lotte Mart  IT system installation for 4 new stores",
  },
  {
    title: "Moment 11",
    date: "2020",
    description:
      "NEXT TI IT equipment delivery & installation Sinarmas Hana Finance KMK Group IT equipment delivery and construction Lotte Mart ISP project Lotte Mart SD-WAN Project (50 stores) Lotte Mart  IT system installation for 1 new store",
  },
  {
    title: "Moment 12",
    date: "2021",
    description:
      "Equipment delivery, construction for MES server in Hyundai Motor Indonesia Equipment delivery, construction for MES server in Hyundai Glovis Indonesia Equipment delivery, construction for MES in Hyundai Transys Indonesia Established Lotte Chemical Engineering Plastic IT system Established Lotte Capital mobile installment payment system",
  },
  {
    title: "Moment 13",
    date: "2022",
    description:
      "system delivery and construction KEB HANA Bank LOS Server system delivery and construction KEB HANA Bank Server, storage, NW device maintenance LG Electronics IDN (3 factories) wireless NW system delivery and construction Cosmax Indonesia factory network system delivery replacement Supply and construction of ESL (Electronic Shelf Label) to Sociolla 15 stores Hyundai Motor&Glovis MES Server, storage system maintenance Establishment of temporary building network system for Lotte Chemical Line Project Lotte Chemical Line Smart Warehouse Project in progress (~Dec. 2024) Lotte Mart next-generation system construction in progress (~Sep. 23)",
  },
];


const History = (props) => {
  return (
      <Section className={ props.className && props.className } id={props.id && props.id}>
          <Container>
              <Row className="justify-content-center text-center">
                  <Col xl="7" md="8" xs="10">
                    <SectionHead>
                        <h2 className="title">HISTORY</h2>
                    </SectionHead>
                </Col>
              </Row>
              <Row className="g-gs justify-content-center">
                {moments.map((moment) => (
                  <Col lg="6">
                      <Card className="card-shadow round-xl">
                          <div className="card-inner card-inner-lg">
                              <Review className="review-s2">
                                  <ReviewContent>
                                      <ReviewText>
                                          <p>{moment.description}</p>
                                          <h6 className="review-name text-dark">{moment.date}</h6>
                                      </ReviewText>
                                  </ReviewContent>
                              </Review>
                          </div>
                      </Card>
                  </Col>
                  ))}
              </Row>
          </Container>
      </Section>
  )
}

export default History
