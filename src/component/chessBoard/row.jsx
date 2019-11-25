import React from 'react';

import { columns } from 'Data/chess';
import Tile from './tile';

const Row = ({ number }) => {
    const colTiles = columns.map((entry, key) => <Tile key={key} letter={entry} number={number} />);

    return (
        <div className={`chessRow chessRow_${number}`}>
            {colTiles}
        </div>
    );
};

export default Row;
