import React from 'react';
import { useSelector } from 'react-redux';

import {
    FaChessBishop,
    FaChessKing,
    FaChessKnight,
    FaChessPawn,
    FaChessQueen,
    FaChessRook,
} from 'react-icons/fa';

import { isTurn } from 'Store/action/chess';

const getIcon = type => {
    if (type === 'bishop') return <FaChessBishop />;
    else if (type === 'king') return <FaChessKing />;
    else if (type === 'knight') return <FaChessKnight />;
    else if (type === 'pawn') return <FaChessPawn />;
    else if (type === 'queen') return <FaChessQueen />;
    else if (type === 'rook') return <FaChessRook />;
};

const Piece = ({ color, type, letter, number }) => {
    return (
        <div className={`chessPiece type_${type} color_${color}`}>
            {getIcon(type)}
        </div>
    );
};

export default Piece;
