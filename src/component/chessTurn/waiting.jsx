import React from 'react';
import { useSelector } from 'react-redux';

import { isRunning, isTurn } from 'Store/action/chess';
import 'Scss/component/chessTurn';

const Waiting = () => {
    const isRunningGame = useSelector(isRunning);
    const isWhite = useSelector(isTurn('white'));

    if (!isRunningGame) {
        return null;
    }

    const color = isWhite ? 'white' : 'black';

    return <p className='chessTurn__waiting'>waiting on {color}</p>;
};

export default Waiting;
