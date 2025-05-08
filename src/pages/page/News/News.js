import React, { useState, useEffect, useCallback } from 'react';
import LogoDrak2x from '../../../images/logo-dark2x.png';
import LogoLight2x from '../../../images/logo-putih2x.png';
import Menu from '../../../layout/menu/Menu';
import MobileMenu from '../../../layout/menu/MobileMenu';
import { Logo } from '../../../components/logo/Logo';
import { Card, Col, Container, Row, Button } from 'reactstrap';
import { Header, HeaderContent, HeaderMain, HeaderWrap } from '../../../layout/header/Header';
import { Link } from 'react-router-dom';
import { HeaderCaption } from '../../../components/headerCaption/HeaderCaption';
import { BannerFourAdd } from '../../../section/banner/BannerData';
import { axiosInstance } from '../../../config/AxiosInstance';
import { H2H, LAST_MATCH, STATISTIK_COUNT,RERATA } from '../../../config/Constants';

const News = (props) => {
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);
    const [data, setData] = useState(null);
    const [h2h, setH2h] = useState(null);
    const [dataCetakBobol, setDataCetakBobol] = useState(null);
    const [dataMenangKalah, setDataMenangKalah] = useState(null);
    const [lastMatch, setLastMatch] = useState(null);
    const [nameTeam1, setNameTeam1] = useState(null);
    const [nameTeam2, setNameTeam2] = useState(null);
    const [rerata, setRerata] = useState(null);



    const [countStatisticString, setCountStatisticString] = useState('');
    const [countH2HString, setCountH2HString] = useState('');
    const [countLastMatchString, setCountLastMatchString] = useState('');


    const getNews = useCallback(async () => {
        const requestBody = { countStatisticString: countStatisticString };

        try {
            const response = await axiosInstance().post(STATISTIK_COUNT, requestBody);
            setNameTeam1(response.data.statisticTeam1.name);
            setNameTeam2(response.data.statisticTeam2.name);

            if (response.data) {
                setData(response.data);
                setDataCetakBobol(response.data.probability.statistikCetakBobol);
                setDataMenangKalah(response.data.probability.statistikWinDrawLose);
            } else {
                setData(null);
            }
        } catch (err) {
            console.error('Failed to fetch news data:', err);
            setData(null);
        }
    }, [countStatisticString]);

    const getH2H = useCallback(async () => {
        const requestBody = {
            countH2HString: countH2HString,
            nameTeam1: nameTeam1,
            nameTeam2: nameTeam2
        };
        try {
            const response = await axiosInstance().post(H2H, requestBody);
            if (response.data) {
                setH2h(response.data.probability.h2h);
            } else {
                setH2h(null);
            }
        } catch (err) {
            console.error('Failed to fetch news data:', err);
            setH2h(null);
        }
    }, [countH2HString]);

    const getLastMatch = useCallback(async () => {
        const requestBody = {
            countLastMatchString: countLastMatchString,
            nameTeam1: nameTeam1,
            nameTeam2: nameTeam2
        };
        try {
            const response = await axiosInstance().post(LAST_MATCH, requestBody);
            if (response.data) {
                setLastMatch(response.data.probability.beberapaMatchTerakhir);
            } else {
                setLastMatch(null);
            }
        } catch (err) {
            console.error('Failed to fetch news data:', err);
            setLastMatch(null);
        }
    }, [countLastMatchString]);

    const getRerata = useCallback(async () => {
        const requestBody = {
            statistikWinDrawLose: dataMenangKalah,
            statistikCetakBobol: dataCetakBobol,
            lastMatchRequest: lastMatch,
            h2hRequest: h2h,
            nameTeam1: nameTeam1,
            nameTeam2: nameTeam2
        };
        try {
            const response = await axiosInstance().post(RERATA, requestBody);
            if (response.data) {
                setRerata(response.data);
            } else {
                setRerata(null);
            }
        } catch (err) {
            console.error('Failed to fetch news data:', err);
            setLastMatch(null);
        }
    }, [data, h2h, lastMatch]);

    useEffect(() => {
        window.onscroll = () => setOffset(window.pageYOffset);
        const viewChange = () => {
            setMobileView(window.innerWidth < 992);
        };
        viewChange();
        window.addEventListener('resize', viewChange);
        return () => window.removeEventListener('resize', viewChange);
    }, []);

    useEffect(() => {
        getNews();
    }, [getNews]);

    const handleParamsChange = (e) => setCountStatisticString(e.target.value);
    const handleH2HChange = (e) => setCountH2HString(e.target.value);
    const handleLastMatchChange = (e) => setCountLastMatchString(e.target.value);


    const handleSearchNews = () => getNews();
    const handleH2H = () => getH2H();
    const handleLastMatch = () => getLastMatch();
    const handleRerata = () => getRerata();

    const renderStats = (title, stats) => (
        <Card className='shadow border rounded my-4 p-4'>
            <h5>{title}</h5>
            {Object.entries(stats).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}</strong>: {typeof value === 'object' ? JSON.stringify(value) : value}
                </div>
            ))}
        </Card>
    );

    return (
        <Header className={props.className} id={props.id}>
            <HeaderMain className={`header-main header-main-s1 y on-dark is-transparent ${offset > 0 ? 'has-fixed' : ''}`}>
                <Container className='header-container'>
                    <HeaderWrap>
                        <div className='header-logo'>
                            <Logo to='/IndexFour' dark={LogoDrak2x} light={LogoLight2x} />
                        </div>
                        <div className='header-toggle' onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle ? 'active' : ''}`}>
                                <em className='menu-on icon ni ni-menu'></em>
                                <em className='menu-off icon ni ni-cross'></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle ? 'active' : ''} ${mobileView ? 'mobile-menu' : ''}`}>
                            {!mobileView ? (
                                <Menu className='ms-lg-auto' data={BannerFourAdd} />
                            ) : (
                                <MobileMenu data={BannerFourAdd} />
                            )}
                            <ul className='menu-btns'>
                                <li>
                                    <a href='http://localhost:3001/admin/auth-login' className='btn btn-primary'>
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {toggle && mobileView && (
                            <div className='header-overlay' onClick={() => setToggle(!toggle)}></div>
                        )}
                    </HeaderWrap>
                </Container>
            </HeaderMain>

            <HeaderContent className='py-6 is-black mt-lg-n1 mt-n3'>
                <Container>
                    <Row className='row justify-content-center g-gs'>
                        <Col lg='12' md='5'>
                            <HeaderCaption>
                                <div className='mt-2 d-flex flex-row bg-lighter'>
                                <div className="input-group"
                                onChange={handleParamsChange}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">With Statistic</span>
                                    </div>
                                    <textarea className="form-control"></textarea>
                                </div>
                              
                                    <Button
                                        color='btn ms-3 btn-round btn-primary'
                                        onClick={handleSearchNews}
                                    >
                                        <em className='icon ni ni-search'></em>
                                        <span>Search Statistic</span>
                                    </Button>
                                </div>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>

            <div class="card card-bordered">    
                <div class="card-header border-bottom">Statistic Compare</div>    
                <Container className='my-5'>
                    {data ? (
                        <>
                            {renderStats('Statistic Team 1', data.statisticTeam1)}
                            {renderStats('Statistic Team 2', data.statisticTeam2)}
                            {renderStats('Probability', data.probability)}
                        </>
                    ) : (
                        <Card className='shadow border rounded my-4 p-4'>
                            <p>No statistics found. Please try searching with different parameters.</p>
                        </Card>
                    )}
                </Container>
                <div class="card-footer border-top text-muted">
                    1 days ago
                </div>
            </div>


            <HeaderContent className='py-6 is-black mt-lg-n1 mt-n3'>
                <Container>
                    <Row className='row justify-content-center g-gs'>
                        <Col lg='12' md='5'>
                            <HeaderCaption>
                                <div className='mt-2 d-flex flex-row bg-lighter'>
                                <div className="input-group"
                                onChange={handleH2HChange}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">With H2H</span>
                                    </div>
                                    <textarea className="form-control"></textarea>
                                </div>
                                    <Button
                                        color='btn ms-3 btn-round btn-primary'
                                        onClick={handleH2H}
                                    >
                                        <em className='icon ni ni-search'></em>
                                        <span>H2H </span>
                                    </Button>
                                </div>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>

            <div class="card card-bordered">    
                <div class="card-header border-bottom">H2H Compare</div>    
                <Container className='my-5'>
                    {h2h ? (
                        <>
                            {/* {renderStats('Statistic Team 1', h2h.statisticTeam1)}
                            {renderStats('Statistic Team 2', h2h.statisticTeam2)} */}
                            {renderStats('Probability', h2h)}
                        </>
                    ) : (
                        <Card className='shadow border rounded my-4 p-4'>
                            <p>No H2H found. Please try searching with different parameters.</p>
                        </Card>
                    )}
                </Container>
                <div class="card-footer border-top text-muted">
                    2 days ago
                </div>
            </div>


            <HeaderContent className='py-6 is-black mt-lg-n1 mt-n3'>
                <Container>
                    <Row className='row justify-content-center g-gs'>
                        <Col lg='12' md='5'>
                            <HeaderCaption>
                                <div className='mt-2 d-flex flex-row bg-lighter'>
                                <div className="input-group"
                                onChange={handleLastMatchChange}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">With Last Match</span>
                                    </div>
                                    <textarea className="form-control"></textarea>
                                </div>
                              
                                    <Button
                                        color='btn ms-3 btn-round btn-primary'
                                        onClick={handleLastMatch}
                                    >
                                        <em className='icon ni ni-search'></em>
                                        <span>Search Last Match</span>
                                    </Button>
                                </div>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>

            <div class="card card-bordered">    
                <div class="card-header border-bottom">Last Match Compare</div>    
                <Container className='my-5'>
                    {lastMatch ? (
                        <>
                            {/* {renderStats('Statistic Team 1', lastMatch.statisticTeam1)}
                            {renderStats('Statistic Team 2', lastMatch.statisticTeam2)} */}
                            {renderStats('Probability', lastMatch)}
                        </>
                    ) : (
                        <Card className='shadow border rounded my-4 p-4'>
                            <p>No Last Match found. Please try searching with different parameters.</p>
                        </Card>
                    )}
                </Container>
                <div class="card-footer border-top text-muted">
                    3 days ago
                </div>
            </div>

            <HeaderContent className='py-6 is-black mt-lg-n1 mt-n3'>
                <Container>
                    <Row className='row justify-content-center g-gs'>
                        <Col lg='12' md='5'>
                            <HeaderCaption>
                                <div>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">With Rerata Match</span>
                                    </div>
                                    <Button
                                        color='btn ms-3 btn-round btn-primary'
                                        onClick={handleRerata}
                                    >
                                        <em className='icon ni ni-search'></em>
                                        <span>Search Rerata</span>
                                    </Button>
                                </div>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>

            <div class="card card-bordered">    
                <div class="card-header border-bottom">Rerata Compare</div>    
                <Container className='my-5'>
                    {rerata ? (
                        <>
                            {/* {renderStats('Statistic Team 1', lastMatch.statisticTeam1)}
                            {renderStats('Statistic Team 2', lastMatch.statisticTeam2)} */}
                            {renderStats('Probability', rerata.probability)}
                        </>
                    ) : (
                        <Card className='shadow border rounded my-4 p-4'>
                            <p>No Rerata Match found. Please try searching with different parameters.</p>
                        </Card>
                    )}
                </Container>
                <div class="card-footer border-top text-muted">
                    4 days ago
                </div>
            </div>
        </Header>
    );
};

export default News;