import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexOne from './pages/IndexOne';
import IndexTwo from './pages/IndexTwo';
import IndexThree from './pages/IndexThree';
import IndexFour from './pages/IndexFour';
import IndexFive from './pages/IndexFive';
import IndexSix from './pages/IndexSix';
import Error404Classic from './pages/error/404-classic';
import Error404Modern from './pages/error/404-modern';
import Error504Classic from './pages/error/504-classic';
import Error504Modern from './pages/error/504-modern';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Success from './pages/auth/Success';
import DataCenter from './section/data-center/data-center';
import Platform from './section/platform/platform';
import Solution from './section/solution/solution';
import ItService from './section/it-service/it-service';
import OrganizationChard from './section/organization-chard/OrganizationChard';
import History from './section/history/History';
import AboutCompany from './section/about-company/about-company';
import IndexNews from './pages/IndexNews';
import IndexCareer from './pages/IndexCareer';
import IndexNewsDetail from './pages/IndexNewsDetail';

function App() {
    useEffect(() => {
        document.body.className = 'nk-body bg-white npc-landing no-touch nk-nio-theme';
    }, []);

    return (
        <Suspense fallback={<div />}>
            <div className='nk-app-root'>
                <Routes>
                    <Route path={'/'}>
                        <Route path={`indextwo`} element={<IndexTwo />} />
                        <Route path={`indexthree`} element={<IndexThree />} />
                        <Route path={`indexfour`} element={<IndexFour />} />
                        <Route path={`indexfive`} element={<IndexFive />} />
                        <Route path={`indexsix`} element={<IndexSix />} />
                        <Route index element={<IndexFour />} />
                        <Route path='landing/news/detail/:id' element={<IndexNewsDetail />} />
                        <Route path='news' element={<IndexNews />}></Route>
                        <Route path='career' element={<IndexCareer />}></Route>
                    </Route>
                    <Route path={`${process.env.PUBLIC_URL}/pages`}>
                        <Route path='auths'>
                            <Route path='auth-success' element={<Success />}></Route>
                            <Route path='auth-reset' element={<ForgotPassword />}></Route>
                            <Route path='auth-register' element={<Register />}></Route>
                            <Route path='auth-login' element={<Login />}></Route>
                        </Route>
                        <Route path='errors'>
                            <Route path='404-modern' element={<Error404Modern />}></Route>
                            <Route path='404-classic' element={<Error404Classic />}></Route>
                            <Route path='504-modern' element={<Error504Modern />}></Route>
                            <Route path='504-classic' element={<Error504Classic />}></Route>
                        </Route>
                    </Route>
                    <Route path={`${process.env.PUBLIC_URL}/about`}>
                        <Route path='about-company' element={<AboutCompany />}></Route>
                        <Route path='history' element={<History />}></Route>
                        <Route path='' element={<OrganizationChard />}></Route>
                    </Route>
                    <Route path={`${process.env.PUBLIC_URL}/service-solution`}>
                        <Route path='it-service' element={<ItService />}></Route>
                        <Route path='solution' element={<Solution />}></Route>
                        <Route path='platform' element={<Platform />}></Route>
                        <Route path='data-center' element={<DataCenter />}></Route>
                    </Route>
                    <Route path={`${process.env.PUBLIC_URL}/admin`}>
                        <Route path='' element={<ItService />}></Route>
                    </Route>
                    <Route path='*' element={<Error404Modern />}></Route>
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;
