import React, { useCallback } from 'react';
import { upperFirst } from 'lodash';
import { useDispatch } from 'react-redux';

import {
    FaChessBishop,
    FaChessKing,
    FaChessKnight,
    FaChessPawn,
    FaChessQueen,
    FaChessRook,
} from 'react-icons/fa';

import { click } from 'Store/action/chess';
import 'Scss/component/chessPiece';

const getIcon = type => {
    if (type === 'bishop') return <FaChessBishop />;
    else if (type === 'king') return <FaChessKing />;
    else if (type === 'knight') return <FaChessKnight />;
    else if (type === 'pawn') return <FaChessPawn />;
    else if (type === 'queen') return <FaChessQueen />;
    else if (type === 'rook') return <FaChessRook />;
};

const ChessPiece = ({ color, type, letter, number }) => {
    const dispatch = useDispatch();
    const onClick = useCallback(
        () => dispatch(click({ type, letter, number })),
        [dispatch],
    );

    return (
        <div
            className={`chessPiece type_${type} letter_${letter} number_${number}`}
            onClick={onClick}
        >
            {getIcon(type)}
        </div>
    );
};

export default ChessPiece;
