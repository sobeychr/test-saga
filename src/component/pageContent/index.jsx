import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetch, getData } from 'Store/action/page';
import 'Scss/component/pageContent';

const PageContent = ({page}) => {
    const data = useSelector( getData(page) );
    const dispatch = useDispatch();

    if(!data) {
        dispatch( fetch(page) );
    }

    return (
        <div>
            <p>loading page: {page}</p>
            <pre>{data}</pre>
        </div>
    );
};

export default PageContent;
