import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Navigation from 'Component/navigation';
import { getPage } from 'Store/action/navigation';
import 'Scss/component/header';

const Header = () => {
    const page = useSelector(getPage);

    return (
        <header>
            <h1>{page}</h1>
            <Navigation />
        </header>
    );
};

export default Header;
