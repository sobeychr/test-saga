import React from 'react';

const getPieceId = type => {
    let id;
    if (type === 'pawn') {
        id = '';
    } else if (type === 'knight') {
        id = 'N';
    } else {
        id = type.toUpperCase().substring(0, 1);
    }
    return id;
};

const Row = ({ color, type, letter, number }) => {
    return <div>{`${color} > ${getPieceId(type)}${letter}${number}`}</div>;
};

export default Row;
