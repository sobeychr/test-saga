import React, { useState, useEffect } from 'react';

import Navigation from 'Component/navigation';
import 'Scss/component/header';

const Header = ({page}) => {
    return (
        <header>
            <h1>{page}</h1>
            <Navigation />
        </header>
    );
};

export default Header;
