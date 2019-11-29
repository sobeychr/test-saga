import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { first, last } from 'lodash';

import { columns, rows } from 'Data/chess';
import { click, getPiece, isTurn } from 'Store/action/chess';
import Piece from './piece';

const firstLetter = first(columns);
const lastNumber = last(rows);
const isFirstLetter = number => number === firstLetter;
const isLastRow = letter => letter === lastNumber;

const Tile = ({ letter, number }) => {
    const piece = useSelector(getPiece(letter, number));
    const hasPiece = !!piece;

    const dispatch = useDispatch();
    const onClick = useCallback(
        () => {
            // if(hasPiece && isTurn) {
                dispatch(click({ letter, number }));
            // }
        },
        [dispatch, letter, number, piece],
    );

    return (
        <div onClick={onClick}
             className={
                `chessTile chessTile_${letter}
                ${hasPiece ? 'chessTile--contain' : ''}`
            }
            >
            {isFirstLetter(letter) && (
                <span className='chessLabel chessLabel_number inactive'>
                    {number}
                </span>
            )}
            {isLastRow(number) && (
                <span className='chessLabel chessLabel_letter inactive'>
                    {letter}
                </span>
            )}
            {hasPiece && <Piece {...piece} />}
        </div>
    );
};

export default Tile;
