import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, List, NotFound } from 'Page';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/list' component={List} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
