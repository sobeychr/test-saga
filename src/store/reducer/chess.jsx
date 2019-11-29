import { CHESS_PUT, CHESS_RESET, CHESS_SELECT, CHESS_START } from 'Store/type';

import { start as startingPieces } from 'Data/chess';

const initialState = {
    clicked: {},
    running: 0,
    turn: [],
    pieces: startingPieces,
};

const findPiece = (state, { letter, number }) => {
    const index = state.pieces.findIndex(
        entry => entry.letter === letter && entry.number === number,
    );
    return [state.pieces[index], index];
};

const chess = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === CHESS_START) {
        return {
            ...state,
            running: 1,
            turn: [],
        };
    } else if (type === CHESS_RESET) {
        return {
            clicked: {},
            running: 0,
            turn: [],
            pieces: startingPieces,
        };
    } else if (type === CHESS_SELECT) {
        return {
            ...state,
            clicked: payload,
        };
    } else if (type === CHESS_PUT) {
        const [prev, index] = findPiece(state, state.clicked);
        const pieces = state.pieces;
        prev.letter = payload.letter;
        prev.number = payload.number;
        pieces[index] = prev;

        return {
            ...state,
            clicked: {},
            pieces,
        };
    }

    return state;
};

export default chess;
