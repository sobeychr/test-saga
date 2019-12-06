import isEqual from 'lodash/fp/isEqual';
import { CHESS_PUT, CHESS_RESET, CHESS_SELECT, CHESS_START } from 'Store/type';

// Game status
const start = { type: CHESS_START };
const reset = { type: CHESS_RESET };

const isNew = state => state.chess.running === 0;
const isRunning = state => state.chess.running === 1;
const isOver = state => state.chess.running === 2;

// Selecting a piece, moving tile
const isSelected = state => !isEqual({}, state.chess.clicked);
const put = tile => ({
    type: CHESS_PUT,
    payload: tile,
});
const select = tile => ({
    type: CHESS_SELECT,
    payload: tile,
});

// Selecting turns
const getTurns = state => state.chess.turn;
const isTurn = color => state =>
    isRunning(state) &&
    ((color === 'black' && state.chess.turn.length % 2 !== 0) ||
        (color === 'white' && state.chess.turn.length % 2 === 0));

const getPiece = (letter, number) => state =>
    state.chess.pieces.find(
        entry => entry.letter === letter && entry.number === number,
    );

export {
    getPiece,
    getTurns,
    isNew,
    isRunning,
    isSelected,
    isTurn,
    put,
    reset,
    select,
    start,
};
