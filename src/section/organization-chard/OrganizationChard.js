import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import { Link } from '../../components/button/Button';
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock';
import { Section, SectionHead } from '../../layout/section/Section';
import { Tree, TreeNode } from 'react-organizational-chart';

const OrganizationChard = (props) => {
    return (
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container className='card-shadow round-xl bg-dark is-dark pb-4 pb-md-10'>
                <Row className='justify-content-center text-tenter'>
                    <Col xl='7' lg='9'>
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
                                        <h5 className='title text-azure'>Cho Chunghwan</h5>
                                        <span className='text-xs text-gray-500 dark:text-gray-400'>CEO</span>
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
                                            <h5 className='title text-azure'>Kim Chang Min</h5>
                                            <span className='text-xs text-gray-500 dark:text-gray-400'>Manager Business Support</span>
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
                                                <h5 className='title text-azure'>Management Support Team</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>HR-GAF</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Fin-Accounting</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Tax</span>
                                                <h5 className='title text-azure'>Management Planning Team</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Business Plan</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Business Performance</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Business Research</span>
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
                                            <h5 className='title text-azure'>Noh Gyu-Tae</h5>
                                            <span className='text-xs text-gray-500 dark:text-gray-400'>Director IT-Sales</span>
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
                                                <h5 className='title text-azure'>Marketing Team</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Sales Orders</span>
                                                <h5 className='title text-azure'>New Business Team</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>EV Charger</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Security Solution</span>
                                                <h5 className='title text-azure'>Purchasing Team 1</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>(internal)</span>
                                                <h5 className='title text-azure'>Purchasing Team 2</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>(exsternal)</span>
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
                                            <h5 className='title text-azure'>Park Seongsu</h5>
                                            <span className='text-xs text-gray-500 dark:text-gray-400'>Team Head IT-Infra</span>
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
                                                <h5 className='title text-azure'>SI Team</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>System Diagnostic</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Design, Implementation</span>
                                                <h5 className='title text-azure'>SM Team</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>System Management</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>Maintenance, etc</span>
                                                <h5 className='title text-azure'>Infra Team</h5>
                                                <h5 className='title text-azure'>POS & EDC Team</h5>
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
                                            <h5 className='title text-azure'>Kim Seungkon</h5>
                                            <span className='text-xs text-gray-500 dark:text-gray-400'>Team Head System Mgmt</span>
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
                                                <h5 className='title text-azure'>Mart SM Team</h5>
                                                <span className='text-xs text-gray-500 dark:text-gray-400'>50 stores in Indonesia</span>
                                                <span className='text-xs text-gray-500 dark:text-gray-400 whitespace-pre-line'>
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
                                            <h5 className='title text-azure'>Han Yoon Gyo</h5>
                                            <span className='text-xs text-gray-500 dark:text-gray-400'>Team Head Development</span>
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
                                                <h5 className='title text-azure'>Offshore</h5>
                                                <h5 className='title text-azure'>Solution Development</h5>
                                            </div>
                                        </Card>
                                    </div>
                                }></TreeNode>
                        </TreeNode>
                    </Tree>
                </Row>
            </Container>
        </Section>
    );
};

export default OrganizationChard;
