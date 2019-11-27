import React, { useCallback } from 'react';
import { upperFirst } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import {
    FaChessBishop,
    FaChessKing,
    FaChessKnight,
    FaChessPawn,
    FaChessQueen,
    FaChessRook,
} from 'react-icons/fa';

import { click, isTurn } from 'Store/action/chess';

const getIcon = type => {
    if (type === 'bishop') return <FaChessBishop />;
    else if (type === 'king') return <FaChessKing />;
    else if (type === 'knight') return <FaChessKnight />;
    else if (type === 'pawn') return <FaChessPawn />;
    else if (type === 'queen') return <FaChessQueen />;
    else if (type === 'rook') return <FaChessRook />;
};

const Piece = ({ color, type, letter, number }) => {
    const dispatch = useDispatch();
    const onClick = useCallback(
        () => dispatch(click({ type, letter, number })),
        [dispatch, type, letter, number],
    );

    const isTurnPiece = useSelector(isTurn(color));

    return (
        <div
            className={`chessPiece type_${type} color_${color} ${
                isTurnPiece ? 'active' : 'inactive'
            }`}
            onClick={onClick}
        >
            {getIcon(type)}
        </div>
    );
};

export default Piece;
