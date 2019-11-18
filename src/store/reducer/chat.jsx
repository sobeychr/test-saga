import {
    CHAT_INIT,
    CHAT_MESSAGE_END,
    CHAT_MESSAGE_START,
    CHAT_SEND,
    CHAT_TYPING_END,
    CHAT_TYPING_START,
    CHAT_USER_END,
    CHAT_USER_START,
} from 'Store/type';

import { addOnce, removeEntry } from 'Util/array';

const initialState = {
    loaded: false,
    loadMessage: false,
    loadUser: false,
    user: [],
    message: [],
    typing: [],
};

const chat = (state = initialState, action) => {
    const { payload, type } = action;

    if (type === CHAT_INIT) {
        return {
            ...state,
            loaded: true,
        };
    }
    if (type === CHAT_MESSAGE_END) {
        return {
            ...state,
            loadMessage: false,
            message: payload,
        };
    } else if (type === CHAT_MESSAGE_START) {
        return {
            ...state,
            loadMessage: true,
        };
    } else if (type === CHAT_SEND) {
        payload.id = state.message.length + 1;
        return {
            ...state,
            message: state.message.concat(payload),
        };
    } else if (type === CHAT_TYPING_END) {
        const typing = removeEntry(state.typing, payload);
        return {
            ...state,
            typing,
        };
    } else if (type === CHAT_TYPING_START) {
        const typing = addOnce(state.typing, payload);
        return {
            ...state,
            typing,
        };
    } else if (type === CHAT_USER_END) {
        return {
            ...state,
            loadUser: false,
            user: payload,
        };
    } else if (type === CHAT_USER_START) {
        return {
            ...state,
            loadUser: true,
        };
    }

    return state;
};

export default chat;
