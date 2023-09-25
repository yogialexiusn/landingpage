import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Link } from '../../components/button/Button';
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock';
import { Section, SectionHead } from '../../layout/section/Section';
import { Tree, TreeNode } from 'react-organizational-chart';
import { BgImage } from '../../layout/ovm/Ovm';

const OrganizationChard = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center text-tenter'>
                    <Col lg='10' md='5'>
                        <SectionHead className='text-center mb-1'>
                            <h2 className='title text-white mb-0'>Organization Chard</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Tree
                        lineWidth={'4px'}
                        lineColor={'grey'}
                        lineBorderRadius={'10px'}
                        label={
                            <div className='inline-block p-0'>
                                <Card>
                                    <div className='flex flex-col items-center'>
                                        {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                        <h5 className='title text-black'>Cho Chunghwan</h5>
                                        <span className='text-black'>CEO</span>
                                    </div>
                                </Card>
                            </div>
                        }>
                        <TreeNode
                            label={
                                <div className='inline-block p-0'>
                                    <Card>
                                        <div className='flex flex-col items-center'>
                                            {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                            <h5 className='title text-black'>Kim Chang Min</h5>
                                            <span className='text-black'>Manager Business Support</span>
                                        </div>
                                    </Card>
                                </div>
                            }>
                            <TreeNode
                                label={
                                    <div className='inline-block p-0'>
                                        <Card>
                                            <div className='flex flex-col items-start'>
                                                {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                                <h5 className='title text-black'>Management Support Team</h5>
                                                <span className='text-black'>HR-GAF</span>
                                                <span className='text-black'>Fin-Accounting</span>
                                                <span className='text-black'>Tax</span>
                                                <h5 className='title text-black'>Management Planning Team</h5>
                                                <span className='text-black'>Business Plan</span>
                                                <span className='text-black'>Business Performance</span>
                                                <span className='text-black'>Business Research</span>
                                            </div>
                                        </Card>
                                    </div>
                                }></TreeNode>
                        </TreeNode>
                        <TreeNode
                            label={
                                <div className='inline-block p-0'>
                                    <Card>
                                        <div className='flex flex-col items-center'>
                                            {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                            <h5 className='title text-black'>Noh Gyu-Tae</h5>
                                            <span className='text-black'>Director IT-Sales</span>
                                        </div>
                                    </Card>
                                </div>
                            }>
                            <TreeNode
                                label={
                                    <div className='inline-block p-0'>
                                        <Card>
                                            <div className='flex flex-col items-start'>
                                                {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                                <h5 className='title text-black'>Marketing Team</h5>
                                                <span className='text-black'>Sales Orders</span>
                                                <h5 className='title text-black'>New Business Team</h5>
                                                <span className='text-black'>EV Charger</span>
                                                <span className='text-black'>Security Solution</span>
                                                <h5 className='title text-black'>Purchasing Team 1</h5>
                                                <span className='text-black'>(internal)</span>
                                                <h5 className='title text-black'>Purchasing Team 2</h5>
                                                <span className='text-black'>(exsternal)</span>
                                            </div>
                                        </Card>
                                    </div>
                                }></TreeNode>
                        </TreeNode>
                        <TreeNode
                            label={
                                <div className='inline-block p-0'>
                                    <Card>
                                        <div className='flex flex-col items-center'>
                                            {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                            <h5 className='title text-black'>Park Seongsu</h5>
                                            <span className='text-black'>Team Head IT-Infra</span>
                                        </div>
                                    </Card>
                                </div>
                            }>
                            <TreeNode
                                label={
                                    <div className='inline-block p-0'>
                                        <Card>
                                            <div className='flex flex-col items-start'>
                                                {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                                <h5 className='title text-black'>SI Team</h5>
                                                <span className='text-black'>System Diagnostic</span>
                                                <span className='text-black'>Design, Implementation</span>
                                                <h5 className='title text-black'>SM Team</h5>
                                                <span className='text-black'>System Management</span>
                                                <span className='text-black'>Maintenance, etc</span>
                                                <h5 className='title text-black'>Infra Team</h5>
                                                <h5 className='title text-black'>POS & EDC Team</h5>
                                            </div>
                                        </Card>
                                    </div>
                                }></TreeNode>
                        </TreeNode>
                        <TreeNode
                            label={
                                <div className='inline-block p-0'>
                                    <Card>
                                        <div className='flex flex-col items-center'>
                                            {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                            <h5 className='title text-black'>Kim Seungkon</h5>
                                            <span className='text-black'>Team Head System Mgmt</span>
                                        </div>
                                    </Card>
                                </div>
                            }>
                            <TreeNode
                                label={
                                    <div className='inline-block p-0'>
                                        <Card>
                                            <div className='flex flex-col items-start'>
                                                {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                                <h5 className='title text-black'>Mart SM Team</h5>
                                                <span className='text-black'>50 stores in Indonesia</span>
                                                <span className='text-black whitespace-pre-line'>
                                                    Mart System Operation, Development, Remuneration, etc.
                                                </span>
                                            </div>
                                        </Card>
                                    </div>
                                }></TreeNode>
                        </TreeNode>
                        <TreeNode
                            label={
                                <div className='inline-block p-0'>
                                    <Card>
                                        <div className='flex flex-col items-center'>
                                            {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                            <h5 className='title text-black'>Han Yoon Gyo</h5>
                                            <span className='text-black'>Team Head Development</span>
                                        </div>
                                    </Card>
                                </div>
                            }>
                            <TreeNode
                                label={
                                    <div className='inline-block p-0'>
                                        <Card>
                                            <div className='flex flex-col items-start'>
                                                {/* <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="image"
                          /> */}
                                                <h5 className='title text-black'>Offshore</h5>
                                                <h5 className='title text-black'>Solution Development</h5>
                                            </div>
                                        </Card>
                                    </div>
                                }></TreeNode>
                        </TreeNode>
                    </Tree>
                </Row>
            </Container>
            <BgImage className='bg-image bg-overlay after-bg-dark after-opacity-90 overlay-fall bg-image-loaded bg-image-cta-a' />
        </Section>

        // <Section className={props.className && props.className} id={props.id && props.id}>
        //     <Container className='card-shadow round-xl bg-dark is-dark pb-4 pb-md-10'>

        //     </Container>
        // </Section>
    );
};

export default OrganizationChard;
