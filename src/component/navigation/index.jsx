import React from 'react';

import styles from 'Scss/component/navigation';
import pages from 'Data/pages';

import Link from './Link';

const Navigation = () => (
    <nav>
        {pages.map(entry => <Link {...entry}/>)}
    </nav>
);

export default Navigation;
