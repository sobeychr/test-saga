import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Navigation from 'Component/navigation';
import { getNavigation } from 'Store/action/page';
import 'Scss/component/header';

const Header = ({page}) => {
    const title = useSelector(getNavigation);

    return (
        <header>
            <h1>{title}</h1>
            <Navigation />
        </header>
    );
};

export default Header;
