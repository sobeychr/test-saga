import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'Component/button';
import ChessBoard from 'Component/chessBoard';
import ChessTurn from 'Component/chessTurn';
import { isNew, reset } from 'Store/action/chess';
import 'Scss/page/chess';

const Chess = () => {
    const isNewGame = useSelector(isNew);

    const dispatch = useDispatch();
    const onClick = useCallback(() => {
        dispatch(reset);
    }, [dispatch]);

    return (
        <main className='chess'>
            <ChessBoard />
            <div className='command'>
                <Button
                    className='reset'
                    label='reset game'
                    disabled={isNewGame}
                    onClick={onClick}
                />
            </div>
            <ChessTurn />
        </main>
    );
};

export default Chess;
