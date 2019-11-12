import React from 'react';

import chess from 'Data/chess';
import Tile from './Tile';

const Row = ({number}) => {
    const tiles = chess.columns.map((letter, key) => <Tile key={key} letter={letter} number={number}/>);

    const classes = [
        'row',
        `row_${number}`,
    ];
    return (
        <div className={classes.join(' ')}>
            {tiles}
        </div>
    );
};

export default Row;
