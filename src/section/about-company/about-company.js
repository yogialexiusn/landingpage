import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { Section, SectionHead } from '../../layout/section/Section'
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";
import CaptionsCarousel from "../../components/partials/carousel/Captions";
// import Map from './Map';


const AboutCompany = (props) => {
  return (
    <Section className={ props.className && props.className } id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-tenter">
                <Col xl="7" lg="9">
                    <SectionHead className="text-center mb-1">
                        <h2 className="title text-dark mb-0">About Company</h2>
                        <p>PT LOTTE DATA COMMUNICATION INDONESIA</p>
                    </SectionHead>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xl="10">
                    <Row className="align-items-center g-0">
                    <Block size="lg">
                        <BlockHead>
                            <BlockHeadContent>
                            <BlockTitle tag="h5">With Captions</BlockTitle>
                            <p>
                                Add captions to your slides easily with the <code>.carousel-caption</code> element within any{" "}
                                <code>.carousel-item</code>. They can be easily hidden on smaller viewports, as shown below, with
                                optional <a href="ut">display utilities</a>. We hide them initially with <code>.d-none</code> and bring
                                them back on medium-sized devices with <code>.d-md-block</code>.
                            </p>
                            </BlockHeadContent>
                        </BlockHead>
                    <PreviewCard>
                        <CaptionsCarousel />
                    </PreviewCard>

                    <CodeBlock language="jsx">
                        {`const items = [
                            {
                                src: SlideA,
                                altText: 'Slide 1',
                                captionHead: '',
                                captionText: ''
                            },
                            {
                                src: SlideB,
                                altText: 'Slide 2',
                                captionHead: '',
                                captionText: ''
                            },
                            {
                                src: SlideC,
                                altText: 'Slide 3',
                                captionHead: '',
                                captionText: ''
                            }
                            ];

                            const BasicCarousel = (props) => {
                            const [activeIndex, setActiveIndex] = useState(0);
                            const [animating, setAnimating] = useState(false);

                            const next = () => {
                                if (animating) return;
                                const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
                                setActiveIndex(nextIndex);
                            }

                            const previous = () => {
                                if (animating) return;
                                const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
                                setActiveIndex(nextIndex);
                            }

                            const goToIndex = (newIndex) => {
                                if (animating) return;
                                setActiveIndex(newIndex);
                            }

                            const slides = items.map((item) => {
                                return (
                                <CarouselItem
                                    className="text-white"
                                    onExiting={() => setAnimating(true)}
                                    onExited={() => setAnimating(false)}
                                    key={item.src}
                                >
                                    <img src={item.src} alt={item.altText} />
                                    <CarouselCaption captionText={item.captionText} captionHeader={item.captionHead} />
                                </CarouselItem>
                                );
                            });

                            return (
                                <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                                >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                                </Carousel>
                            );
                            }`}
                    </CodeBlock>
                </Block>


                    </Row>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default AboutCompany
