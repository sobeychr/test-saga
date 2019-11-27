import { CHESS_CLICK, CHESS_START } from 'Store/type';

const click = tile => ({
    type: CHESS_CLICK,
    payload: tile,
});

const start = { type: CHESS_START };

const isNew = state => state.chess.running === 0;
const isRunning = state => state.chess.running === 1;
const isOver = state => state.chess.running === 2;

const isTurn = color => state =>
    isRunning(state) &&
    ((color === 'black' && state.chess.turn.length % 2 !== 0) ||
        (color === 'white' && state.chess.turn.length % 2 === 0));

const getPiece = (letter, number) => state =>
    state.chess.pieces.find(
        entry => entry.letter === letter && entry.number === number,
    );

export {
    click,
    isNew,
    isTurn,
    getPiece,
    start,
};
