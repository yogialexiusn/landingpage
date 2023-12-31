import React, { useState, useEffect, useCallback } from 'react';
import LogoDrak2x from '../../../images/logo-dark2x.png';
// import LogoLight2x from '../../images/logo2x.png';
import LogoLight2x from '../../../images/logo-putih2x.png';
import Menu from '../../../layout/menu/Menu';
import MobileMenu from '../../../layout/menu/MobileMenu';
import { Logo } from '../../../components/logo/Logo';
import { Card, Col, Container, Row } from 'reactstrap';
import { Header, HeaderContent, HeaderMain, HeaderWrap } from '../../../layout/header/Header';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderCaption, HeaderTitle } from '../../../components/headerCaption/HeaderCaption';
import { BannerFourAdd } from '../../../section/banner/BannerData';
import news_img from '../../../images/ldci_news.png';
import ReactPaginate from 'react-paginate';
import { Button } from 'reactstrap';
import { axiosInstance } from '../../../config/AxiosInstance';
import { NEWS_TRCNEWS_BYPARAMS } from '../../../config/Constants';

const News = (props) => {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const [pageCount, setpageCount] = useState(0);
    const [items, setItems] = useState([]);
    const [params, setParams] = useState('');
    const [selectedCareer, setSelectedCareer] = useState([]);
    const [page, setPage] = useState(2);
    const [size, setSize] = useState('5');
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();
    const [sortField, setSortField] = useState('insert_date');
    const [sortOrder, setSortOrder] = useState('desc');
    const [dataNotFound, setDataNotFound] = useState(false);

    useEffect(() => {
        handleSearchNews();
    }, []);

    const getNews = useCallback(
        async (halaman) => {
            let requestBody = {
                param: params,
                statusCodes: [1],
                sortField: 'title',
                sortOrder: 'asc',
                page: halaman,
                size: 4,
            };

            try {
                let response = await axiosInstance().post(NEWS_TRCNEWS_BYPARAMS, requestBody);
                console.log('kesini' + JSON.stringify(response));

                if (response.data.status === 200) {
                    // setTotalData(response.data.totalData);
                    // setTotalPages(response.data.totalPages);
                    const total = JSON.stringify(response.data.totalPages);
                    setpageCount(total);
                    setItems(response.data.data);
                    setDataNotFound(false);
                }
            } catch (err) {
                setDataNotFound(true);
                console.log('kesini 3');
                if (err.response) {
                    if (err.response.status === 401) {
                    } else {
                    }
                } else {
                }
            }
        },
        [items, params],
    );

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

    // function to change the design view under 1200 px
    const viewChange = () => {
        if (window.innerWidth < 992) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    };

    const handleParamsChange = (event) => {
        const params = event.target.value;
        setParams(params);
    };

    const routeChange = () => {
        let path = '/landing/pages/auths/auth-login';
        navigate(path);
    };

    const handlePageClick = async (data) => {
        // console.log('page click12', data.selected);
        setPage(data.selected);

        getNews(data.selected);
    };

    const handleSearchNews = async () => {
        getNews(0);
    };

    const selectCareer = (item) => {
        setSelectedCareer(item);
    };

    const handleNewsDetail = async (event, item) => {
        event.preventDefault();
        let id = item.id;
        try {
            navigate(`/landing/news/detail/${id}`);
        } catch (error) {
            navigate('/error', {
                state: { message: 'Failed to show news detail page...' },
            });
        }
    };

    let divElements;
    if (items != null) {
        divElements = items.map((item, index) => {
            return (
                <Col lg='12' md='5'>
                    <Card className='shadow border rounded my-5'>
                        <Link to='#' onClick={(e) => handleNewsDetail(e, item)} className='text-left d-flex flex-row mt-5'>
                            <div className='ms-5 d-block w-100' style={{ textAlign: 'left' }}>
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
                                <div className='card-header bg-danger text-white rounded'>
                                    <h3>[BUSINESS] {item.title}</h3>
                                </div>
                                <div className='card-inner product-img center'>
                                    <img src={news_img} alt='' />
                                </div>

                                <div className='card-body'>
                                    <p className='text-base'>{item.content.substring(0, 500) + '...'}</p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                </Col>
            );
        });
    }

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
                        <Col lg='12' md='5'>
                            <HeaderCaption>
                                <div>
                                    <div>
                                        <div class='mt-2 d-flex flex-row bg-lighter'>
                                            <input
                                                type='text'
                                                class='form-control'
                                                id='default-01'
                                                placeholder='Search News'
                                                value={params}
                                                onChange={(e) => handleParamsChange(e)}
                                            />

                                            <Button
                                                color='btn ms-3 btn-round btn-primary'
                                                onClick={() => {
                                                    handleSearchNews();
                                                }}>
                                                <em class='icon ni ni-search'></em>
                                                <span>Search News</span>
                                                {''}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </HeaderCaption>
                            {dataNotFound ? <div className='p-2 center shadow border my-5'>There are no records found</div> : <>{divElements}</>}

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
};

export default News;
