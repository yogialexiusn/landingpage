import React, { useState, useCallback, useEffect } from 'react';
import Logo from '../../images/logo.png';
import LogoDark from '../../images/logo-dark.png';
import Head from '../../layout/head/Head';
import AuthFooter from './AuthFooter';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/AxiosInstance';
import { Form, Spinner, Alert } from 'reactstrap';
import { set, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { LoginAuth } from "../../api/AuthApi";
import Cookies from 'js-cookies/src/cookies';
// import User from "../../layout/header/dropdown/user/User";

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);
    const [passState, setPassState] = useState(false);
    const [errorVal, setError] = useState('');
    const navigate = useNavigate();
    const [jwtCookie, setJwtCookie] = useState();
    const [passwordWeb, setPasswordWeb] = useState();
    const [usernameWeb, setUsernameWeb] = useState('');

    let products = [
        { id: 1, product_name: 'Product A', product_price: 200 },
        { id: 2, product_name: 'Product B', product_price: 300 },
        { id: 3, product_name: 'Product C', product_price: 400 },
    ];

    //   const passingData = async (resp) => {
    //     return <User name="Chris" />;
    //   };

    const login = useCallback(
        async (e) => {
            e.preventDefault();
            let requestBody = {
                username: usernameWeb,
                password: passwordWeb,
            };

            try {
                let response = await axiosInstance().post('/api/v1/auth/signin', requestBody);
                if (response.status === 200) {
                    setResp(response);

                    const total = JSON.stringify(response.data.totalPages);
                    setPassState(true);
                    Cookies.setItem('jwtCookie', response.data.data.jwtCookie.value);
                    localStorage.setItem('jwtCookie', response.data.data.jwtCookie.value);
                    localStorage.setItem('user', JSON.stringify(response.data));
                    navigate('/admin/masternews');
                    //   passingData(response);
                }
            } catch (err) {
                // setLoading=true;
                if (err.response) {
                    if (err.response.status === 401) {
                        setError('Gagal masuk karena password salah.');
                    } else {
                        setError('Terjadi kesalahan saat masuk.');
                    }
                } else {
                    setError('Terjadi kesalahan jaringan atau server tidak tersedia.');
                }
            }

            // setShouldFetchData(false);
        },
        [usernameWeb, passwordWeb, resp],
    );

    const routeChange = () => {
        let path = '/admin';
        navigate(path);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <Head title='Login' />
            <div className='nk-block-middle nk-auth-body  wide-xs'>
                <div className='brand-logo pb-4 text-center'>
                    <Link to={'http://localhost:3000/landing'} className='logo-link'>
                        <img className='logo-light logo-img logo-img-lg' src={Logo} alt='logo' />
                        <img className='logo-dark logo-img logo-img-lg' src={LogoDark} alt='logo-dark' />
                    </Link>
                </div>

                <div className='card-bordered' bodyClass='card-inner-lg'>
                    <div>
                        <div>
                            <div tag='h4'>Sign-In</div>
                            <div>{/* <p>Access Administator </p> */}</div>
                        </div>
                    </div>
                    {errorVal && <div className='mb-3'></div>}
                    {/* <Form className="is-alter" onSubmit={login}> */}
                    <Form className='is-alter'>
                        <div className='form-group'>
                            <div className='form-label-group'>
                                <label className='form-label' htmlFor='username' value='Username'>
                                    Email or Username
                                </label>
                            </div>
                            <div className='form-control-wrap'>
                                <input
                                    type='text'
                                    id='username'
                                    placeholder='Enter your email address or username'
                                    className='form-control-lg form-control'
                                    required
                                    onChange={(event) => setUsernameWeb(event.target.value)}
                                />
                                {errors.name && <span className='invalid'>{errors.name.message}</span>}
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='form-label-group'>
                                <label className='form-label' htmlFor='password' value='Password'>
                                    Password
                                </label>
                                <Link className='link link-primary link-sm' to={`${process.env.PUBLIC_URL}/auth-reset`}>
                                    Forgot Code?
                                </Link>
                            </div>
                            <div className='form-control-wrap'>
                                <a
                                    href='#password'
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        setPassState(!passState);
                                    }}
                                    className={`form-icon lg form-icon-right passcode-switch ${passState ? 'is-hidden' : 'is-shown'}`}></a>
                                <input
                                    type={passState ? 'text' : 'password'}
                                    id='password'
                                    // {...register("passcode", { required: "This field is required" })}
                                    placeholder='Enter your passcode'
                                    className={`form-control-lg form-control ${passState ? 'is-hidden' : 'is-shown'}`}
                                    required
                                    defaultValue='12345678'
                                    onChange={(event) => setPasswordWeb(event.target.value)}
                                />
                                {errors.passcode && <span className='invalid'>{errors.passcode.message}</span>}
                            </div>
                        </div>
                        <div className='form-group'>
                            <button
                                size='lg'
                                // className="btn-block"
                                color='primary'
                                onClick={login}>
                                {loading ? <Spinner size='sm' color='light' /> : 'Sign in'}
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            <AuthFooter />
        </>
    );
};
export default Login;
