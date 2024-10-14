import axios from 'axios';
import Cookies from 'js-cookies/src/cookies';

export const axiosInstance = (additionalConfig = {}) => {
    const value = Cookies.getItem('jwtCookie');
    const value1 = localStorage.getItem('jwtCookie');
    console.log('hasil = ' + value1);
    return axios.create({
        // baseURL: 'http://localhost:8080/', //LOCAL
        // baseURL: 'http://ip_address:port/ldcidev', //DEV
        baseURL: "landingpage-ebaz.vercel.app", //PRD
        headers: {
            authorization: value1 ? `Bearer ${value1}` : null,
            'Content-Type': 'application/json',
        },
        ...additionalConfig,
    });
};
export const axiosInstanceApply = (additionalConfig = {}) => {
    // const value = cookies.getItem("token");
    return axios.create({
        // baseURL: 'http://localhost:8080/', //LOCAL
        // baseURL: 'http://ip_address:port/ldcidev', //DEV
        baseURL: "landingpage-ebaz.vercel.app", //PRD
        headers: {
            // authorization: value?`Bearer ${value}`:null,
            authorization: null,
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            // 'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        ...additionalConfig,
    });
};

// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8080/',
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${localStorage.getItem('access_token')}`,
//   },
// });

// export default axiosInstance;
