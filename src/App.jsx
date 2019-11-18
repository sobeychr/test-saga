import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'Scss/app';
import store from 'Store';

import Router from './Router';

store.dispatch({
    type: 'INIT_APP',
});

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app'),
);
