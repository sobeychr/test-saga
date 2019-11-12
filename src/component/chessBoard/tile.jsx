import React from 'react';

const Tile = ({letter, number}) => {
    const classes = [
        'tile',
        `tile_${letter}`,
    ];
    return (
        <div className={classes.join(' ')}>
        </div>
    );
};

export default Tile;
