import React from 'react';

import { rows } from 'Data/chess';
import 'Scss/component/chessBoard';
import Row from './row';
import ChessPieceList from './../chessPiece/list';

const ChessBoard = () => {
    const rowTiles = rows.map((entry, key) => <Row key={key} number={entry} />);

    return (
        <div className='chessBoard'>
            {rowTiles}
            <ChessPieceList color='black' />
            <ChessPieceList color='white' />
        </div>
    );
};

export default ChessBoard;
