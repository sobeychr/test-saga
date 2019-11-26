import React from 'react';

import { rows } from 'Data/chess';
import 'Scss/component/chessBoard';
import ChessPieceList from 'Component/chessPiece/list';

import Popup from './popup';
import Row from './row';

const ChessBoard = () => {
    const rowTiles = rows.map((entry, key) => <Row key={key} number={entry} />);

    return (
        <div className='chessBoard'>
            {rowTiles}
            <ChessPieceList color='black' />
            <ChessPieceList color='white' />
            <Popup />
        </div>
    );
};

export default ChessBoard;
