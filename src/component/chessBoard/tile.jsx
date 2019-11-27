import React from 'react';
import { useSelector } from 'react-redux';
import { first, last } from 'lodash';

import { columns, rows } from 'Data/chess';
import { getPiece } from 'Store/action/chess';
import Piece from './piece';

const firstLetter = first(columns);
const lastNumber = last(rows);
const isFirstLetter = number => number === firstLetter;
const isLastRow = letter => letter === lastNumber;

const Tile = ({ letter, number }) => {
    const piece = useSelector(getPiece(letter, number));

    return (
        <div className={`chessTile chessTile_${letter}`}>
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
            {piece && <Piece {...piece} />}
        </div>
    );
};

export default Tile;
