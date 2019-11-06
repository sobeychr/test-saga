import React from 'react';
import { render } from 'react-dom';

const App = () => (<header>
        <h1>test saga</h1>
        <h2>ttt</h2>
    </header>
);

render(
    <App/>,
    document.getElementById('app')
);

/*
const ttt = (t) => console.log(t);

ttt('test');
*/
