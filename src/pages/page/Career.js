import React, { useState, useEffect, useCallback } from 'react';
import LogoDrak2x from '../../images/logo-dark2x.png';
import LogoLight2x from '../../images/logo2x.png';
import Menu from '../../layout/menu/Menu';
import MobileMenu from '../../layout/menu/MobileMenu';
import { Logo } from '../../components/logo/Logo';
import { useDropzone } from 'react-dropzone';
import NioIcon from '../../components/icon/Icons';
import { Card, Col, Container, Row } from 'reactstrap';
import { Header, HeaderContent, HeaderMain, HeaderWrap } from '../../layout/header/Header';
import { Link } from '../../components/button/Button';
import { HeaderCaption, HeaderTitle } from '../../components/headerCaption/HeaderCaption';
import { BannerFourAdd } from '../../section/banner/BannerData';
import career from '../../images/career.jpg';
import ReactPaginate from 'react-paginate';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { axiosInstance } from '../../config/AxiosInasdstance';
// import { axiosInstanceApply } from '../../config/AxiosInstance';

export default function Career(props) {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const [pageCount, setpageCount] = useState(0);
    const [modalForm, setModalForm] = useState(false);

    const [items, setItems] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState('5');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getJob(page);
    }, []);

    const getJob = useCallback(
        async (page) => {
            console.log('click page ', page);
            const res = await fetch('http://localhost:8080/api/v1/jobs?page=' + page + '&size=' + size);
            const data = await res.json();
            const total = JSON.stringify(data.data.totalPages);
            setpageCount(total);
            setItems(data.data.content);
        },
        [items],
    );

    const toggleForm = () => setModalForm(!modalForm);

    const handlePageClick = async (data) => {
        // setPage(data.selected);
        // console.log('page click12', data.selected);
        getJob(data.selected);
    };

    const handleFilter = async (param) => {
        console.log('handleFilter param: ', param);
        setFilter(param);
        let requestBody = {
            param: filter,
        };
    };

    const handleSearchCareer = async () => {
        getJob(page);
    };

    const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
        accept: {
            'document/pdf': ['.pdf'],
        },
    });

    const acceptedFileItems = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map((e) => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
        viewChange();
        window.addEventListener('resize', viewChange);
        return () => {
            window.removeEventListener('resize', viewChange);
        };
    });

    const viewChange = () => {
        if (window.innerWidth < 992) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    };

    const selectCareer = (item) => {
        setSelectedCareer(item);
    };

    return (
        <Header className={props.className && props.className} id={props.id && props.id}>
            <HeaderMain className={` ${offset > 0 ? 'has-fixed' : ''}`}>
                <Container className='header-container'>
                    <HeaderWrap>
                        <div className='header-logo'>
                            <Logo to='/IndexFour' dark={LogoDrak2x} light={LogoLight2x} />
                        </div>
                        <div className='header-toggle' onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? 'active' : ''}`}>
                                <em className='menu-on icon ni ni-menu'></em>
                                <em className='menu-off icon ni ni-cross'></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? 'active' : ''} ${mobileView ? 'mobile-menu' : ''}`}>
                            {!mobileView ? <Menu className='ms-lg-auto' data={BannerFourAdd} /> : <MobileMenu data={BannerFourAdd} />}
                            <ul className='menu-btns'>
                                <li>
                                    <Link to='/landing/pages/auths/auth-login' target='_blank' rel='noreferrer' className='btn-primary btn-lg'>
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {toggle && window.innerWidth < 992 && <div className='header-overlay' onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>
            </HeaderMain>
            <HeaderContent className='py-6 is-black mt-lg-n1 mt-n3'>
                <Container>
                    <Row className='row justify-content-center g-gs'>
                        <Col lg='10' md='5 '>
                            <HeaderCaption>
                                <HeaderTitle className='mt-4 center'>CAREER</HeaderTitle>
                                <div>
                                    <img src={career} />
                                    <div className='bg-primary'>
                                        <div class='mt-2 d-flex flex-row '>
                                            <input
                                                type='text'
                                                class='form-control'
                                                id='default-01'
                                                placeholder='Search'
                                                onChange={(e) => handleFilter(e.target.value)}
                                            />

                                            <Button
                                                color='btn ms-3 btn-round btn-primary'
                                                onClick={() => {
                                                    handleSearchCareer();
                                                }}>
                                                <em class='icon ni ni-search'></em>
                                                <span>Search Career</span>
                                                {''}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </HeaderCaption>

                            <div class='d-flex justify-content-around card shadow border mt-5 center bg-primary'>
                                {items.map((item, index) => {
                                    return (
                                        <Col lg='5' md='5'>
                                            <div class='card shadow border mt-5 center bg-primary'>
                                                {' '}
                                                <div class='card-header bg-primary'>
                                                    <h4> {item.title}</h4>
                                                </div>{' '}
                                                <ul class='list-group list-group-flush '>
                                                    {' '}
                                                    <li class='list-group-item center'>
                                                        <p>
                                                            {item.department} - {item.team}
                                                        </p>
                                                    </li>{' '}
                                                    <li class='list-group-item center'>
                                                        <p>
                                                            {item.location} - {item.country}
                                                        </p>
                                                    </li>{' '}
                                                    <li class='list-group-item center'>{item.descriptionPlain}</li>{' '}
                                                    <li class='list-group-item center'>
                                                        <Button
                                                            color='primary'
                                                            onClick={() => {
                                                                toggleForm();
                                                                selectCareer(item);
                                                            }}>
                                                            Apply
                                                        </Button>
                                                    </li>{' '}
                                                </ul>
                                            </div>
                                            {/* </div> */}
                                        </Col>
                                    );
                                })}
                            </div>

                            <div>
                                <Modal isOpen={modalForm} toggle={toggleForm}>
                                    <ModalHeader
                                        toggle={toggleForm}
                                        close={
                                            <button className='close' onClick={toggleForm}>
                                                <NioIcon name='cross' />
                                            </button>
                                        }>
                                        <h4>Biodata {selectedCareer.department}</h4>
                                    </ModalHeader>
                                    <ModalBody>
                                        <form>
                                            <div className='form-group md-1 '>
                                                <label className='form-label' htmlFor='full-name'>
                                                    Full Name
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input type='text' className='form-control' id='full-name' />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='full-name'>
                                                    Email
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input type='text' className='form-control' id='full-name' />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='email'>
                                                    Phone
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input type='text' className='form-control' id='email' />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='phone-no'>
                                                    Current Company
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input type='number' className='form-control' id='phone-no' defaultValue='' />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='phone-no'>
                                                    Linkedin Url
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input type='number' className='form-control' id='phone-no' defaultValue='0880' />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='phone-no'>
                                                    Github Url
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input type='number' className='form-control' id='phone-no' defaultValue='0880' />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='phone-no'>
                                                    Upload File
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <section className='container'>
                                                        <div {...getRootProps({ className: 'dropzone' })}>
                                                            <input {...getInputProps()} />
                                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                                            <em>(Only file or document with *.pdf will be accepted)</em>
                                                        </div>
                                                        <aside>
                                                            <b>
                                                                <ul className='center mt-1'>{acceptedFileItems}</ul>
                                                            </b>
                                                        </aside>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className='form-group center'>
                                                <Button color='primary' type='submit' onClick={(ev) => ev.preventDefault()} size='lg'>
                                                    Apply
                                                </Button>
                                            </div>
                                        </form>
                                    </ModalBody>
                                    <ModalFooter className='bg-light'>
                                        <span className='sub-text'>PT Lotte Data Communication Indonesia</span>
                                    </ModalFooter>
                                </Modal>
                            </div>

                            <div className='center mt-5'>
                                <ReactPaginate
                                    previousLabel={'<<'}
                                    nextLabel={'>>'}
                                    breakLabel={'...'}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={2}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
        </Header>
    );
}
