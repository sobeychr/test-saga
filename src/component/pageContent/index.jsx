import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';

import { fetch, getData } from 'Store/action/page';
import 'Scss/component/pageContent';

const md = new Remarkable();

const PageContent = ({page}) => {
    const data = useSelector( getData(page) );
    const dispatch = useDispatch();

    if(!data) {
        dispatch( fetch(page) );
    }

    const Content = md.render(data);

    return (
        <>
            {Content ? ReactHtmlParser(Content) : null}
        </>
    );
};

export default PageContent;
