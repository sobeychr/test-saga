import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as BaseLink } from 'react-router-dom';

import { navigate } from 'Store/action/page';

const Link = ({ page, link }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(navigate(page));

    return (
        <BaseLink to={link} onClick={onClick}>
            {page}
        </BaseLink>
    );
};

export default Link;
