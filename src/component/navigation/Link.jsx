import React from 'react';
import { Link as BaseLink } from 'react-router-dom';

const Link = ({page, link}) => (
    <BaseLink to={link}>
        {page}
    </BaseLink>
);

export default Link;
