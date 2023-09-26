import React, { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../../../config/AxiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import { Header, HeaderContent, HeaderMain, HeaderWrap } from '../../../layout/header/Header';
import LogoDrak2x from '../../../images/logo-dark2x.png';
import LogoLight2x from '../../../images/logo2x.png';
import Menu from '../../../layout/menu/Menu';
import MobileMenu from '../../../layout/menu/MobileMenu';
import { Logo } from '../../../components/logo/Logo';
import { Card, Col, Container, Row } from 'reactstrap';
import { HeaderCaption, HeaderTitle } from '../../../components/headerCaption/HeaderCaption';
import { BannerFourAdd } from '../../../section/banner/BannerData';
import news_img from '../../../images/ldci_news.png';
import ReactPaginate from 'react-paginate';
import { Button } from 'reactstrap';

const NewsDetail = (props) => {
    const [newsDetail, setNewsDetail] = useState([]);
    const [newsDetailId, setNewsDetailId] = useState(useParams().id);
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
    useEffect(() => {
        loadNewsDetail(newsDetailId);
    }, []);

    const loadNewsDetail = useCallback(
        async (newsDetailId) => {
            let requestBody = {
                param: newsDetailId,
                statusCodes: [1],
                sortField: 'title',
                sortOrder: 'asc',
                page: 0,
                size: 1,
            };
            let response = await axiosInstance().post('/api/v1/trc_news/byparams', requestBody);
            console.log('cekYogi = ', JSON.stringify(response));

            if (response.data.status === 200) {
                setNewsDetail(response.data.data[0]);
            } else {
            }
        },
        [newsDetail],
    );

    const routeChange = () =>{ 
        let path = '/landing/pages/auths/auth-login'; 
        navigate(path);
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
                                    <Button className='btn-primary btn-lg' onClick={routeChange}>
                                        Login
                                    </Button>
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
                        23 Oktober 2023
                        <img src={news_img} width='500' height='500' />
                        <Col lg='12' md='5'>
                            <HeaderCaption className='center'>
                                <HeaderTitle className='text-danger'>{newsDetail.title}</HeaderTitle>
                                <br></br>
                            </HeaderCaption>
                        </Col>
                    </Row>
                    <p>{newsDetail.content}</p>
                </Container>
            </HeaderContent>
        </Header>
    );
};

export default NewsDetail;
