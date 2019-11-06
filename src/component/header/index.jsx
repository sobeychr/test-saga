import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Navigation from 'Component/navigation';
import 'Scss/component/header';

/*
const Header = () => (
    <header>
        <h1>Header component</h1>
        <Navigation />
    </header>
);
*/

const Header = () => {
    const name = useSelector(state => state.navigation.page);

    return (
        <header>
            <h1>Header component</h1>
            <Navigation />

            <p>Count: {name}</p>
        </header>
    );
};

export default Header;
