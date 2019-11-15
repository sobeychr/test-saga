import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
    Chat,
    ChatGen,
    Chess,
    Home,
    List,
    NotFound,
} from 'Page';
import Header from 'Component/header';
import pages from 'Data/pages';

const Router = () => (
    <BrowserRouter>
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/chat' component={Chat} />
                <Route exact path='/chatgen' component={ChatGen} />
                <Route exact path='/chess' component={Chess} />
                <Route exact path='/list' component={List} />
                <Route component={NotFound} />
            </Switch>
        </>
    </BrowserRouter>
);

export default Router;
