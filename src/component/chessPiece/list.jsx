import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isTurnBlack, isTurnWhite, getPieces } from 'Store/action/chess';
import { compileCondition } from 'Util/array';
import 'Scss/component/chessPieceList';
import ChessPiece from './piece';

const isBlack = color => color === 'black';

const ChessPieceList = ({ color }) => {
    const isTurn = isBlack(color)
        ? useSelector(isTurnBlack)
        : useSelector(isTurnWhite);
    const pieceList = useSelector(getPieces(color));

    const pieces = pieceList.map((entry, key) => (
        <ChessPiece key={key} color={color} {...entry} />
    ));

    const classes = compileCondition([
        ['chessPieceList', true],
        [`chessPieceList_${color}`, true],
        ['chessPieceList--active', isTurn],
    ]);

    return <div className={classes.join(' ')}>{pieces}</div>;
};

export default ChessPieceList;
