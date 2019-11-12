import React from 'react';

import chess from 'Data/chess';
import 'Scss/component/chessBoard';

import Row from './Row';

const ChessBoard = () => {
    const rows = chess.rows.map((number, key) => <Row key={key} number={number}/>);
    return (
        <div className='board'>
            {rows}
        </div>
    );
};

export default ChessBoard;
