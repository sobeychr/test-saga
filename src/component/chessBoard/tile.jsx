import React from 'react';

const Tile = ({ letter, number }) => (
    <div className={`tile tile_${letter}`}>
        <span className='label'>{letter}{number}</span>
    </div>
);

export default Tile;
