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
import { CAREER_TRCCAREERHEADER_LIST, NEWS_BYPARAMS } from '../../config/Constants';

// import { axiosInstanceApply } from '../../config/AxiosInstance';

export default function Career(props) {
    const [toggle, setToggle] = useState(false);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [modalForm, setModalForm] = useState(false);
    const [apply, setApply] = useState([]);

    const [items, setItems] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState([]);
    const [filter, setFilter] = useState('');

    const [params, setParams] = useState('');
    const [size, setSize] = useState('10');
    const [statusCode, setStatusCode] = useState([1]);
    const [page, setPage] = useState(0);
    const [sortField, setSortField] = useState('update_date');
    const [sortOrder, setSortOrder] = useState('asc');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [currentCompany, setCurrentCompany] = useState('cacad');
    const [linkedInUrl, setLinkedinUrl] = useState('');
    const [gitHubUrl, setGithubUrl] = useState('');
    const [curriculumVitae, setCuriculumVitae] = useState('');

    const [responseData, setResponseData] = useState([]);
    const [totalData, setTotalData] = useState(0);
    const [editedInput, setEditedInput] = useState([]);

    const toggleForm = () => setModalForm(!modalForm);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        console.log('cek = ', e.target.files[0]);
        setCuriculumVitae(e.target.files[0]);
    };

    const handlePageClick = async (data) => {
        setPage(data.selected, () => {
            handleFilterButton();
        });
    };

    //Zz const [input, setInput] = useState({
    //     fullName: '',
    //     email: '',
    //     phone: '',
    //     currentCompany: '',
    //     linkedInUrl: '',
    //     gitHubUrl: '',
    //     curriculumVitae: '',
    // });

    useEffect(() => {
        handleFilterButton();
    }, []);

    const routeChange = () => {
        let path = '/landing/pages/auths/auth-login';
        navigate(path);
    };

    const handleFilter = async (param) => {
        console.log('handleFilter param: ', param);
        setFilter(param);
    };

    const handleFilterButton = useCallback(async () => {
        let requestBody = {
            params: params,
            size: size,
            statusCodes: statusCode,
            page: page,
            sortField: sortField,
            sortOrder: sortOrder,
        };

        try {
            let response = await axiosInstance().post(CAREER_TRCCAREERHEADER_LIST, requestBody);
            if (response.status === 200) {
                const totalPages = response.data.totalPages;
                setTotalPages(totalPages);
                setTotalData(response.data.totalData);
                setResponseData(response.data.data);
                setEditedInput(response.data.data);
                setDataNotFound(false);
                setItems(response.data.data)
            }
        } catch (err) {
            setDataNotFound(true);
            setTotalData(0);
            if (err.response) {
                if (err.response.status === 401) {
                } else {
                }
            } else {
            }
        }
    }, [responseData, params, size, statusCode, page, sortField, sortOrder]);

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
                setTotalPages(total);
                setApply(response.data.data);
                setDataNotFound(false);
            } else {
                setDataNotFound(true);
            }
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
                                    <a href='http://localhost:3001/admin/auth-login' class='btn btn-primary'>
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
                                                    handleFilterButton();
                                                }}>
                                                <em class='icon ni ni-search'></em>
                                                <span>Search Career</span>
                                                {''}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </HeaderCaption>

                            {dataNotFound ? (
                                <div className='p-2 center shadow border my-5'>There are no records found</div>
                            ) : (
                                <div class='d-flex justify-content-around card  mt-5 center '>
                                    {items.map((item, index) => {
                                        return (
                                            <Col lg='12' md='5'>
                                                <div class='card card-bordered mt-5'>
                                                    <div class='card-header border-bottom'>
                                                        <h3 className='center'>{item.specializations}</h3>
                                                    </div>
                                                    <div class='card-body'>
                                                        <h5 class='card-title center'>
                                                            {item.workPlace}, {item.district} - {item.region}{' '}
                                                        </h5>
                                                        <p class='card-text'>
                                                            {item.jobDescription} With supporting text below as a natural lead-in to additional content.
                                                            With supporting text below as a natural lead-in to additional content. With supporting
                                                            text below as a natural lead-in to additional content. With supporting text below as a
                                                            natural lead-in to additional content. With supporting text below as a natural lead-in to
                                                            additional content . With supporting text below as a natural lead-in to additional content
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
                                                    <div class='card-footer border text-muted reverse d-flex flex-row-reverse'>
                                                        <p style={{ color: 'black', fontFamily: 'Arial' }} className='text-left'>
                                                            <b>
                                                                {new Date(item.insertDate).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: 'numeric',
                                                                    second: 'numeric',
                                                                })}
                                                            </b>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </div>
                            )}

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
                                    pageCount={totalPages}
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
