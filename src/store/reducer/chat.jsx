import {
    CHAT_END_MESSAGE,
    CHAT_END_TYPING,
    CHAT_END_USER,
    CHAT_INIT,
    CHAT_FETCH_MESSAGE,
    CHAT_FETCH_USER,
    CHAT_START_TYPING,
} from 'Store/type';

const initialState = {
    loadMessage: true,
    loadUser: true,
    user: [],
    message: [],
    typing: [],
};

const chat = (state=initialState, action) => {
    const { payload, type } = action;
    
    if(type === CHAT_END_MESSAGE) {
        return {
            ...state,
            loadMessage: false,
            message: payload,
        };
    }
    else if(type === CHAT_END_TYPING) {
        return {
            ...state,
            typing: state.typing.splice(index, 1),
        };
    }
    else if(type === CHAT_END_USER) {
        return {
            ...state,
            loadUser: false,
            user: payload,
        };
    }
    else if(type === CHAT_FETCH_MESSAGE) {
        return {
            ...state,
            loadMessage: true,
            loading: true,
        };
    }
    else if(type === CHAT_FETCH_USER) {
        return {
            ...state,
            loadUser: true,
        };
    }
    else if(type === CHAT_START_TYPING) {
        return {
            ...state,
            typing: state.typing.concat(payload),
        };
    }

    return state;
};

export default chat;
