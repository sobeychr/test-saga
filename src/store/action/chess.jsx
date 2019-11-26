import { CHESS_INIT } from 'Store/type';

const init = { type: CHESS_INIT };

const isNew = state => state.chess.status === 0;
const isOver = state => state.chess.status === 1;

const getPieces = color => state => state.chess[color];

export { isNew, getPieces };
