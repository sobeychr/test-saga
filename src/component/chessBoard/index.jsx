import React from 'react';

import { rows } from 'Data/chess';
import 'Scss/component/chessBoard';

import Popup from './popup';
import Row from './row';

const ChessBoard = () => {
    const rowTiles = rows.map((entry, key) => <Row key={key} number={entry} />);

    return (
        <div className='chessBoard'>
            {rowTiles}
            <Popup />
        </div>
    );
};

export default ChessBoard;
