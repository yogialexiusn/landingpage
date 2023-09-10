import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock'
import { Section, SectionHead } from '../../layout/section/Section'

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
        {/* <Container>
            <Row className="justify-content-center text-tenter">
                <Col xl="7" lg="9">
                    <SectionHead className="text-center mb-1">
                        <h2 className="title text-dark mb-0">History</h2>
                        <p>History</p>
                    </SectionHead>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xl="10">
                    <Row className="align-items-center g-0">
                        <Col md="7">
                            <Card className="card-shadow round-xl bg-dark is-dark pb-4 pb-md-0">
                                <div className="card-inner card-inner-xl">
                                    <TextBlock>
                                        <TitleH3 className="mb-3">Advanced Pack</TitleH3>
                                        <ul className="list list-nostyle fs-15px mb-1">
                                            <li>Meta Descri ption Optimizatio</li>
                                            <li>Baseline Ranking Report</li>
                                            <li>Increase traffic 100%</li>
                                            <li>Online 24/7 support</li>
                                            <li>10 Keyword Optimization</li>
                                            <li>Free Simple Website</li> 
                                            <li className="note text-warning fs-14px">+ All future update releases for Free</li>
                                        </ul>
                                        <ul className="btns-inline pt-4">
                                            <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-round btn-xl btn-primary fs-16px">Purchase Now for $50</Link></li>
                                        </ul>
                                    </TextBlock>
                                </div>
                            </Card>
                        </Col>
                        <Col md="5">
                            <Card className="card-shadow card-bd-right-3px round-xl ms-lg-n7 ms-md-n5 mx-4 me-md-0 mt-md-0 mt-n4">
                                <div className="card-inner card-inner-lg">
                                    <div className="text-block is-compact pe-3">
                                        <h4 className="title text-azure">Starter Pack</h4>
                                        <ul className="list list-nostyle fs-15px">
                                            <li>Meta Descri ption Optimizatio</li>
                                            <li>Baseline Ranking Report</li>
                                            <li>Increase traffic 100%</li>
                                            <li>Online 24/7 support</li>
                                        </ul>
                                        <ul className="btns-inline pt-2">
                                            <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn btn-lg btn-round btn-secondary"> <span>Purchase Now for $28</span><em className="icon ni ni-arrow-long-right"></em></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container> */}
        {/* <Container> */}
        <div className="w-full">
      
      <h1 className="py-5 text-2xl text-gray-700 font-bold text-center pt-20">
        History
      </h1>
      <div className="card card-shadow round-xl">
        <div className="card-inner card-inner-lg">
        {moments.map((moment) => (
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="card card-shadow round-xl">
                <h2 className="text-lg text-primary font-medium mb-2">
                  {moment.date}
                </h2>
                <p className="text-gray-400 justify-normal">
                  {moment.description}
                </p>
              </div>
            </div>
          )
        )
        }
        </div>

        {/* <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Regularly updated to add new features. Developer has been responsive when contacted, not that I have needed to except to make suggestions.</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                            <ReviewBrand src={BrandImg1}/>
                        </Review> */}
      </div>
      <div className="py-20">
    
      </div>
    </div>
        {/* </Container> */}
    </Section>
  )
}

export default History
