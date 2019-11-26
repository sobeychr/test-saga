import { CHESS_CLICK, CHESS_INIT } from 'Store/type';

const click = piece => ({
    type: CHESS_CLICK,
    payload: piece,
});
const init = { type: CHESS_INIT };

const isNew = state => state.chess.status === 0;
const isOver = state => state.chess.status === 1;
const isRunning = state => state.chess.status === 2;

const isTurnBlack = state =>
    isRunning(state) && state.chess.turn.length % 2 !== 0;
const isTurnWhite = state =>
    isRunning(state) && state.chess.turn.length % 2 === 0;

const getPieces = color => state => state.chess[color];

export { click, init, isNew, isTurnBlack, isTurnWhite, getPieces };
