import React from 'react';
import { useSelector } from 'react-redux';

import Button from 'Component/button';
import ChessBoard from 'Component/chessBoard';
import { isNew } from 'Store/action/chess';
import 'Scss/page/chess';

const Chess = () => {
    const isNewGame = useSelector(isNew);

    return (
        <main className='chess'>
            <ChessBoard />
            <div className='command'>
                <Button className='reset' label='reset game' disabled={isNewGame} />
            </div>
        </main>
    );
};

export default Chess;
