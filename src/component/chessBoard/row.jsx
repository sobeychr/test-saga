import React from 'react';

import chess from 'Data/chess';
import Tile from './Tile';

const Row = ({ number }) => {
    const tiles = chess.columns.map((letter, key) => (
        <Tile key={key} letter={letter} number={number} />
    ));

    return <div className={`row row_${number}`}>{tiles}</div>;
};

export default Row;
