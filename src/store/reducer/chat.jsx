import {
    CHAT_MESSAGE_END,
    CHAT_MESSAGE_START,
    CHAT_SEND,
    CHAT_TYPING_END,
    CHAT_TYPING_START,
    CHAT_USER_END,
    CHAT_USER_START,
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
    
    if(type === CHAT_MESSAGE_END) {
        return {
            ...state,
            loadMessage: false,
            message: payload,
        };
    }
    else if(type === CHAT_MESSAGE_START) {
        return {
            ...state,
            loadMessage: true,
        };
    }
    else if(type === CHAT_SEND) {
        return {
            ...state,
            message: state.message.push(payload),
        };
    }
    else if(type === CHAT_TYPING_END) {
        return {
            ...state,
            typing: [],
        };
    }
    else if(type === CHAT_TYPING_START) {
        return {
            ...state,
            typing: state.typing.push(payload),
        };
    }
    else if(type === CHAT_USER_END) {
        return {
            ...state,
            loadUser: false,
            user: payload,
        };
    }
    else if(type === CHAT_USER_START) {
        return {
            ...state,
            loadUser: true,
        };
    }

    return state;
};

export default chat;
