import React, { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../../config/AxiosInstance';
import { useParams } from 'react-router-dom';

const NewsDetail = (props) => {
    const [newsDetail, setNewsDetail] = useState([]);
    const [newsDetailId, setNewsDetailId] = useState(useParams().id);

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
                setNewsDetail(response.data.data);
            } else {
            }
        },
        [newsDetail],
    );

    return <>cek</>;
};

export default NewsDetail;
