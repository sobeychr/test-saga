import { CHESS_CLICK, CHESS_START } from 'Store/type';

import { start as startingPieces } from 'Data/chess';

const initialState = {
    clicked: {},
    running: 0,
    turn: [],
    pieces: startingPieces,
};

const chess = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === CHESS_START) {
        return {
            ...state,
            running: 1,
            turn: [],
        };
    } else if (type === CHESS_CLICK) {
        const turn = state.turn;
        turn.push(payload);
        return {
            ...state,
            turn,
        };
    }

    return state;
};

export default chess;
