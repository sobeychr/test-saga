import React from 'react';
import { useSelector } from 'react-redux';

import Row from './row';
import Waiting from './waiting';
import { getTurns } from 'Store/action/chess';
import 'Scss/component/chessTurn';

const ChessTurn = () => {
    const turns = useSelector(getTurns);

    return (
        <div className='chessTurn'>
            <Waiting />
            <div className='rows'>
                {turns.map((entry, key) => (
                    <Row key={key} {...entry} />
                ))}
            </div>
        </div>
    );
};

export default ChessTurn;
