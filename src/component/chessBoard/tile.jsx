import React from 'react';
import { first, last } from 'lodash';

const Tile = ({ letter, number }) => (
    <div className={`chessTile chessTile_${letter}`}>
        <span className='chessLabel chessLabel_number'>{number}</span>
        <span className='chessLabel chessLabel_letter'>{letter}</span>
    </div>
);

export default Tile;
