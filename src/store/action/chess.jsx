import { CHESS_INIT } from 'Store/type';

const init = { type: CHESS_INIT };

const isNew = state => state.chess.status === 0;
const isOver = state => state.chess.status === 1;
const isBlack = state => state.chess.status === 2;
const isWhite = state => state.chess.status === 3;

const getPieces = color => state => state.chess[color];

export { getPieces };
