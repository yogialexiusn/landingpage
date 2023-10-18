import React, { useState, useEffect, useCallback } from 'react';
import LogoDrak2x from '../../images/logo-dark2x.png';
// import LogoLight2x from '../../images/logo2x.png';
import LogoLight2x from '../../images/logo-putih2x.png';
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
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { axiosInstance } from '../../config/AxiosInstance';
// import { axiosInstanceApply } from '../../config/AxiosInstance';

export default function Career(props) {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const [pageCount, setpageCount] = useState(0);
    const [modalForm, setModalForm] = useState(false);
    const [apply, setApply] = useState([]);

    const [items, setItems] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState('5');
    const [filter, setFilter] = useState('');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currentCompany, setCurrentCompany] = useState('cacad');
    const [linkedInUrl, setLinkedinUrl] = useState('');
    const [gitHubUrl, setGithubUrl] = useState('');
    const [curriculumVitae, setCuriculumVitae] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        console.log('cek = ', e.target.files[0]);
        setCuriculumVitae(e.target.files[0]);
    };

    // const [input, setInput] = useState({
    //     fullName: '',
    //     email: '',
    //     phone: '',
    //     currentCompany: '',
    //     linkedInUrl: '',
    //     gitHubUrl: '',
    //     curriculumVitae: '',
    // });

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

    const routeChange = () => {
        let path = '/landing/pages/auths/auth-login';
        navigate(path);
    };

    const toggleForm = () => setModalForm(!modalForm);

    const handlePageClick = async (data) => {
        // setPage(data.selected);
        // console.log('page click12', data.selected);
        getJob(data.selected);
    };

    const handleFilter = async (param) => {
        console.log('handleFilter param: ', param);
        setFilter(param);
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

    const applyNow = useCallback(
        async (e) => {
            setModalForm(false);
            e.preventDefault();
            const createApplyDTO = new FormData();
            console.log('fullName = ', fullName);
            createApplyDTO.append('fullName', fullName);
            createApplyDTO.append('email', email);
            createApplyDTO.append('phone', phone);
            createApplyDTO.append('currentCompany', currentCompany);
            createApplyDTO.append('linkedInUrl', linkedInUrl);
            createApplyDTO.append('gitHubUrl', gitHubUrl);
            createApplyDTO.append('curriculumVitae', curriculumVitae);

            let response = await axiosInstance().post('/api/v1/trc_news/byparams1', createApplyDTO);

            if (response.data.status === 200) {
                // setTotalData(response.data.totalData);
                // setTotalPages(response.data.totalPages);
                const total = JSON.stringify(response.data.totalPages);
                setpageCount(total);
                setApply(response.data.data);
            } else {
                // setRequestChanges([]);
                // setMessage(response.data.message);
            }
            // setShouldFetchData(false);
        },
        [apply, fullName, email, phone, currentCompany, linkedInUrl, gitHubUrl, curriculumVitae],
    );

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

    const viewChange = () => {
        if (window.innerWidth < 992) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    };

    useEffect(() => {
        // let newNews = dummyNews;
        // setNews(newNews);
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
        // window.scrollTo(0, 0);
        viewChange();
        window.addEventListener('resize', viewChange);
        return () => {
            window.removeEventListener('resize', viewChange);
        };
    });
    const selectCareer = (item) => {
        setSelectedCareer(item);
    };

    return (
        <Header className={props.className && props.className} id={props.id && props.id}>
            <HeaderMain className={`header-main header-main-s1 y on-dark is-transparent ${offset > 0 ? 'has-fixed' : ''}`}>
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
                                    <a href='http://localhost:3001/demo2/auth-login' class='btn btn-primary'>
                                        Login
                                    </a>
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
                                <div>
                                    <div className='bg-primary'>
                                        <div class='mt-2 d-flex flex-row bg-lighter'>
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

                            <div class='d-flex justify-content-around card  mt-5 center '>
                                {items.map((item, index) => {
                                    return (
                                        <Col lg='12' md='5'>
                                            <div class='card card-bordered mt-5'>
                                                <div class='card-header border-bottom'>
                                                    <h3 className='center'>{item.name}</h3>
                                                </div>
                                                <div class='card-body'>
                                                    <h5 class='card-title center'>
                                                        {item.workPlaceType}, {item.location} - {item.country}{' '}
                                                    </h5>
                                                    <p class='card-text'>
                                                        {item.description} With supporting text below as a natural lead-in to additional content. With
                                                        supporting text below as a natural lead-in to additional content. With supporting text below
                                                        as a natural lead-in to additional content. With supporting text below as a natural lead-in to
                                                        additional content. With supporting text below as a natural lead-in to additional content .
                                                        With supporting text below as a natural lead-in to additional content
                                                    </p>
                                                </div>
                                                <Button
                                                    className='center'
                                                    // color='primary'
                                                    onClick={() => {
                                                        toggleForm();
                                                        selectCareer(item);
                                                    }}>
                                                    Apply
                                                </Button>
                                                <div class='card-footer border text-muted reverse d-flex flex-row-reverse'>2 days ago</div>
                                            </div>
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
                                        <h4>Applicant for {selectedCareer.name}</h4>
                                    </ModalHeader>
                                    <ModalBody>
                                        <form>
                                            <div className='form-group md-1 '>
                                                <label className='form-label' htmlFor='full-name'>
                                                    Full Name
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='full-name'
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='email'>
                                                    Email
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='email'
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='phone'>
                                                    Phone
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input
                                                        type='number'
                                                        className='form-control'
                                                        id='phone'
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='current-company'>
                                                    Current Company
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='current-company'
                                                        onChange={(e) => setCurrentCompany(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='linkedin'>
                                                    Linkedin Url
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='linkedin'
                                                        onChange={(e) => setLinkedinUrl(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='github'>
                                                    Github Url
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        id='github'
                                                        onChange={(e) => setGithubUrl(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <label className='form-label' htmlFor='phone-no'>
                                                    Upload File
                                                </label>
                                                <div className='form-control-wrap'>
                                                    <input id='file_input' type='file' accept='.pdf' onChange={handleFileChange} />
                                                    <p>Only file or document with *.pdf will be accepted</p>
                                                </div>
                                            </div>
                                            <div className='form-group center'>
                                                <Button color='primary' onClick={applyNow} size='lg'>
                                                    Apply Now
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
