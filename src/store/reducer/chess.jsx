import { CHESS_CLICK, CHESS_INIT } from 'Store/type';

import { pieces } from 'Data/chess';

const initialState = {
    status: 0,
    turn: [],
    black: pieces.black,
    white: pieces.white,
};

const chess = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === CHESS_INIT) {
        return {
            ...state,
            status: 2,
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
