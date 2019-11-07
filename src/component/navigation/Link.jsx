import React from 'react';
import { useDispatch } from 'react-redux';
import { Link as BaseLink } from 'react-router-dom';

import { setPage } from 'Store/action/navigation';

const Link = ({page, link}) => {
    const dispatch = useDispatch();

    return (
        <BaseLink to={link} onClick={() => dispatch(setPage(page))}>
            {page}
        </BaseLink>
    );
};

export default Link;
