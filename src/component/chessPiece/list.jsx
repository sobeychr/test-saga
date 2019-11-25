import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPieces } from 'Store/action/chess';
import 'Scss/component/chessPieceList';
import ChessPiece from './piece';

const ChessPieceList = ({color}) => {
    const pieceList = useSelector(getPieces(color));
    const pieces = pieceList.map((entry, key) => <ChessPiece key={key} color={color} {...entry} />);

    return (
        <div className={`chessPieceList chessPieceList_${color}`}>
            {pieces}
        </div>
    );
};

export default ChessPieceList;
