import React, { useState, useEffect, useCallback } from 'react';
import LogoDrak2x from '../../images/logo-dark2x.png';
import LogoLight2x from '../../images/logo2x.png';
import Menu from '../../layout/menu/Menu';
import MobileMenu from '../../layout/menu/MobileMenu';
import { Logo } from '../../components/logo/Logo';
import { Card, Col, Container, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Header, HeaderContent, HeaderMain, HeaderWrap } from '../../layout/header/Header';
import { Link } from '../../components/button/Button';
import { HeaderCaption, HeaderTitle } from '../../components/headerCaption/HeaderCaption';
import { BannerFourAdd } from '../../section/banner/BannerData';
import news_img from '../../images/ldci_news.png';
import ReactPaginate from 'react-paginate';
import { Button } from 'reactstrap';

const News = (props) => {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const [pageCount, setpageCount] = useState(0);
    const [items, setItems] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState('5');
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getJob(page);
    }, []);

    const dummyNews = [
        {
            id: 1,
            date: '2023, 10 Januari',
            newsType: 'BUSINESS',
            newsContentPlain:
                'Lorem Ipsum Weend Going to Lotte Mrart Going toLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem IpsumLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra WihtoutLorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Weend Going to Lotte Mrart Going to Zebra Wihtout End ',
            newsTitle: 'JUDUL BERITANYA',
        },
        {
            id: 2,
            date: '2023, 10 Januari',
            newsType: 'NETRAL',
            newsContentPlain:
                'Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout Lorem Ipsum Weend Going to Lotte Mrart Going to Zebra Wihtout v',
            newsTitle: 'JUDUL BERITANYA TEST',
        },
    ];

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

    const handlePageClick = async (data) => {
        setPage(data.selected);
        console.log('page click12', data.selected);
        getJob(data.selected);
    };

    const selectCareer = (item) => {
        setSelectedCareer(item);
    };

    const handleNewsDetail = async (event, item) => {
        event.preventDefault();
        let id = item.newsId;
        try {
            navigate(`/news/detail/${id}`);
        } catch (error) {
            navigate('/error', {
                state: { message: 'Failed to show news detail page...' },
            });
        }
    };

    let divElements;
    // console.log("yogi", divElements);
    // console.log("yogi2", news);
    if (dummyNews != null) {
        divElements = dummyNews.map((item, index) => {
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
                                        // toggleForm();
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
        });
    }

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
                        <Col lg='12' md='1'>
                            <HeaderCaption>
                                <HeaderTitle className='mt-4 center'>NEWS</HeaderTitle>
                                <div>
                                    <img src={news_img} />
                                    <div>
                                        <div class='mt-2 d-flex flex-row bg-lighter'>
                                            <input type='text' class='form-control' id='default-01' placeholder='Search' />

                                            <a href='#' class='btn ms-3 btn-round btn-primary'>
                                                <em class='icon ni ni-search'></em>
                                                <span>Search News</span>
                                                {''}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </HeaderCaption>
                            {divElements}
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
