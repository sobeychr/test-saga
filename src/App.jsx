import React from 'react';
import { render } from 'react-dom';

import Router from './Router';

import styles from 'Scss/app.scss';

render(
    <Router />,
    document.getElementById('app')
);
