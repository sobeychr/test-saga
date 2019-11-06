import React from 'react';

import 'Scss/component/navigation';
import pages from 'Data/pages';

import Link from './Link';

const Navigation = () => (
    <nav>
        {pages.map((entry, key) => <Link key={key} {...entry}/>)}
    </nav>
);

export default Navigation;
