import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Chat, Options, Home, List, NotFound } from 'Page';
import Header from 'Component/header';
import Loading from 'Component/loading';

const Router = () => (
    <BrowserRouter>
        <>
            <Header />
            <Loading />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/chat' component={Chat} />
                <Route exact path='/list' component={List} />
                <Route exact path='/options' component={Options} />
                <Route component={NotFound} />
            </Switch>
        </>
    </BrowserRouter>
);

export default Router;
