import React from 'react';
import { render } from 'react-dom';

import styles from 'Scss/app';

import Router from './Router';

render(
    <Router />,
    document.getElementById('app')
);
