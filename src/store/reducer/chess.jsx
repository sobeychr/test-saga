import { CHESS_INIT } from 'Store/type';

const initialState = {
    test: [],
};

const chess = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === CHESS_INIT) {
        return {
            ...state,
        };
    }
    if (type === false) {
        return {
            ...state,
            loadMessage: false,
            message: payload,
        };
    }

    return state;
};

export default chess;
