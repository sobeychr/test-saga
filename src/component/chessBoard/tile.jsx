import React from 'react';

const Tile = ({letter, number}) => (
    <div className={`tile tile_${letter}`} />
);

export default Tile;
